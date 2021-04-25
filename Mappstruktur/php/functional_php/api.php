<?php
    session_start();
    $userId = $_SESSION["user_ID"];

    $method = $_SERVER["REQUEST_METHOD"];
    if (!in_array($method, ["GET", "PATCH", "DELETE"])) {
        abort(405, "Only get, patch and delete allowed");
    }

    if($method != "GET") {
        copy("database.json", "dbBackup.json");
    }

    $databaseFile = "database.json";
    $database = json_decode(file_get_contents($databaseFile), true);

    switch($method) {
        case "GET":
            $found = false;
            foreach ($database["users"] as $user) {
                if ($user["id"] == $userId) {
                    $found = true;
                    send($user);
                    break;
                }
            }

            if (!$found) {
                abort(404, "User not found");
                break;
            }

        case "PATCH":
            $json = file_get_contents("php://input");
            $data = json_decode($json, true);
            $found = false;

            foreach($database["users"] as $user) {
                if($user["id"] == $userId) {
                    $user = $data;
                    $found = true;
                }
            }

            if ($found) {
                $json = json_encode($database, JSON_PRETTY_PRINT);
                file_put_contents("database.json", $json);
            } else {
                abort(404, "User not found");
            }
    }

    function send($data, $code = 200) {
        http_response_code($code);
        header("Content-Type: application/json");
        echo json_encode(["user" => $data]);
        exit();
    }

    function abort($code = 404, $error = "Content not found") {
        http_response_code($code);
        header("Content-Type: application/json");
        echo json_encode(["error" => $error]);
        exit();
    }