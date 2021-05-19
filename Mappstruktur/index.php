<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/index.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div id="lp_wrapper">
            <div id="login_wrapper">
                <div class="logoWrapper">
                <img src="../../media/illustrations/malmu_logo.svg" alt="Malmu logo">
                </div>
                <form id="loginForm" action="php/functional_php/admin/login.php" method="POST">
                <p class="feedback">
                    <?php 
                        if (isset($_GET['loginError'])) {
                            echo $_GET['loginError'];
                        } 
                    ?>
                </p>
                <h1>ANSLUT TILL PORTAL</h1>
                    <input type="text" name="loginUsername" placeholder="Användarnamn">
                    <input type="password" name="loginPassword" placeholder="Lösenord">
                    <button type="submit">Logga in</button>
                </form>
            </div>
        </div>
            <!-- <div id="reg_wrapper">
                <form id="registerform" action="php/functional_php/admin/register.php" method="POST">
                <p class="feedback">
                    <?php 
                       // if (isset($_GET['registerError'])) {
                       //     echo $_GET['registerError'];
                     //   } 
                    ?>
                </p>
                <p class="complete">
                    <?php 
                        //if (isset($_GET['registerComplete'])) {
                       //     echo $_GET['registerComplete'];
                     //   } 
                   ?>
                </p>
                <h1>Registrera dig</h1>
                    <input type="text" name="registerUsername" placeholder="Användarnamn">
                    <input type="text" name="registerPassword" placeholder="Lösenord">
                    <button type="submit">Registrera</button>
                </form>
            </div> -->
    </body>
</html>