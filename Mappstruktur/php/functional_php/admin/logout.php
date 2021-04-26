<?php
    session_start();
    unset($_SESSION["isLoggedIn"]);
    session_destroy();
    header("Location: ../../../index.php");
    exit();
?>