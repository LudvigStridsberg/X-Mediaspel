<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/Mappstruktur/css/index.css">
    </head>
    <body>
        <div id="lp_wrapper">
            <h1 class="temp_logo">X-media logo</h1>
            <div id="login_wrapper">
                <img class="logo">
                <form id="loginForm" action="/Mappstruktur/php/functional_php/admin/login.php" method="POST">
                <h1>Logga in</h1>
                    <input type="text" name="loginUsername" placeholder="Användarnamn">
                    <input type="password" name="loginPassword" placeholder="Lösenord">
                    <button type="submit">Logga in</button>
                </form>
            </div>
            <div id="reg_wrapper">
                <form id="registerform" action="/Mappstruktur/php/functional_php/admin/register.php" method="POST">
                <h1>Registrera dig</h1>
                    <input type="text" name="registerUsername" placeholder="Användarnamn">
                    <input type="text" name="registerPassword" placeholder="Lösenord">
                    <button type="submit">Registrera</button>
                </form>
            <div>
        </div>
    </body>
</html>