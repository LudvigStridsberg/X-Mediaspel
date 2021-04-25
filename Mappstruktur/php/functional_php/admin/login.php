<?php
    session_start();

    if (isset($_POST['loginUsername']) && isset($_POST['loginPassword'])) {
        loginHandler($_POST['loginUsername'], $_POST['loginPassword']);
    }

    function loginHandler($username, $password) {

        // Send them back if they haven't put some text in both fields
        if ($username == '' || $password == '') {
            $feedback = 'Vänligen fyll i båda fält.';
            header("Location: ../../../index.php?loginError=$feedback");
            exit();
        }

        $result = validateUser($username, $password);

        // If the entered text didn't match with any of the registred users
        if (!$result) {
            $feedback = 'Vänligen kontollera att du fyllt i rätt information.';
            header("Location: ../../../index.php?loginError=$feedback");
            exit();
        } else {
            $_SESSION["user_ID"] = $result["id"];
            header('Location: ../../page_php/main.php#dialogue');
        }
    }

    function validateUser($username, $password) {
        $databaseFile = '../database.json';
        $database = json_decode(file_get_contents($databaseFile), true);

        foreach ($database['users'] as $user) {
            if ($user['username'] == $username && $user['password'] == $password) {
                return $user;
            }
        }
        return false;
    }
?>