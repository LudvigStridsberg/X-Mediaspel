<?php
    session_start();

    if(isset($_POST(loginUsername)) && isset($_POST(loginPassword))) {
        $username = $_POST(loginUsername);
        $password = $_POST(loginPassword);
        
    }