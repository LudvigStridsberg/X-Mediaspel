<?php
    session_start();

    if(isset($_POST['registerUsername'])) {
        handleRegister($_POST['registerUsername']);
    }

    function handleRegister($username) {
        $result = validateName($username);

        // Send them back if someone already has that username
        if (!$result) {
            $feedback = 'Vänligen var mer kreativ.';
            header("Location: ../../../index.php?registerError=$feedback#registerform");
        } else {
            createUser($username);
        }
    }

    // Check if someone already has the wanted username
    function validateName($newName) {
        $databaseFile = '../database.json';
        $database = json_decode(file_get_contents($databaseFile), true);

        foreach ($database['users'] as $user) {
            if ($user['username'] == $newName) {
                return false;
            }
        }
        return true;
    }

    function createUser($username) {
        $databaseFile = '../database.json';
        $database = json_decode(file_get_contents($databaseFile), true);

        $id = 0;

        foreach ($database['users'] as $user) {
            if($user['id'] > $id) {
                $id = $user['id'];
            }
        }

        // Create a new user object and update it with data
        $newUser = [
            'username' => $username,
            'password'=> passwordGenerator(),
            'id'=> $id + 1,
            'pronoun'=> '',
            'storyPhase'=> 0,
            'inventory'=> [],
            'hasPlayed'=> 'false'
        ];

        // Add the new user object to the users array in $database
        $database['users'][] = $newUser;
        $json = json_encode($database, JSON_PRETTY_PRINT);

        // Overwrite the old database file with the recently updated database
        file_put_contents($databaseFile, $json);

        $feedback = "Konto skapat, nu kan du logga in! Löseordet är: {$newUser['password']}";
        header("Location: ../../../index.php?registerComplete=$feedback#registerform");
    }

    function passwordGenerator() {
        $password = '';

        // Lägg in ett random nummer mellan 0 och 9 i $password fyra gånger
        for($i = 0; $i < 4; $i++) {
            $number = random_int(0, 9);
            $password = substr_replace($password, $number, 0, 0);
        }

        return $password;
    }
?>