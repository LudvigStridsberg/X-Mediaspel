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
                    send(200, $user);
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

            for($i = 0; $i<count($database["users"]); $i++){
                if($database["users"][$i]["id"] == $userId) {
                    $found = true;
                    
                    if($data["introDialogue"] == true && $data["outroDialogue"] == true && $data["completedGame"] == true) {
                        $data["introDialogue"] = false;
                        $data["outroDialogue"] = false;
                        $data["completedGame"] = false;
                        $data["storyPhase"] = $data["storyPhase"] +1;
                    };
                    $database["users"][$i] = $data;
                }
            }

            if ($found) {
                $json = json_encode($database, JSON_PRETTY_PRINT);
                file_put_contents("database.json", $json);
                send(200, "User patched!");
            } else {
                abort(404, "User not found");
            }
    }

    function send($code = 200, $data) {
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
?>