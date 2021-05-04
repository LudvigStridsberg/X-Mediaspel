<?php
    session_start();
    if(!($_SESSION["isLoggedIn"])) {
        header("Location: ../../index.php?loginError=Du måste logga in först!");
        exit();
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Barriecito&family=Special+Elite&display=swap" rel="stylesheet">
    <link rel="icon" href="../../media/illustrations/malmu_icon.png">
    <title>Malmu</title>
</head>
<body>
    <div id="wrapper">
        <div id="slider">
            <div id="map">
                <?php include "map.php"; ?>
            </div>
            <div id="dialogue">
                <?php include "dialogue.php"; ?>
            </div>
            <div id="interactive">
                <?php include "interactive.php"; ?>
            </div>
            <div id="inventory">
                <?php include "inventory.php"; ?>
            </div>
        </div>
    </div>
    
</body>

<script>

    let currentUser = <?php echo $_SESSION["user_ID"]?>;

    function setState() {
    const getReq = new Request("../functional_php/api.php");
    fetch(getReq)
    .then(getResp => {
        if(!getResp.ok) {
            throw Error(getResp.status);
        }
        return getResp.json();
    })
    .then(getResource => {
        // let STATE = {currentUser, currentPhase, coordinatesTarget};
        // STATE.key = value;
        // STATE.otherKey = othervalue;
        let user = getResource.user;
        console.table(user);
        // let thisUser = getResource.user.find(user => user.id === currentUser);
        STATE.currentUser = user;
        STATE.currentPhase = user.storyPhase;
        STATE.coordinatesTarget = phases[STATE.currentPhase].targetLocation;
        
    });
}

</script>
<script src="../../js/functions.js"></script>
<script src="../../js/phases.js"></script>
<script src="../../js/main.js"></script>

</html>