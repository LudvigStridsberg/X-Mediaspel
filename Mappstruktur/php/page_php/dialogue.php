<link rel="stylesheet" href="../../css/dialogue.css">

<a class="viewLink logoutBtn" href="../functional_php/admin/logout.php">Avbryt signal</a>
<div id="mainBtnNav">
    <a class="viewLink iconBtn" href="#map">
        <img class="icon" src="../../media/illustrations/icons/map.png" alt="Karta">
    </a>
    <a class="viewLink iconBtn" id="inventoryBtn" href="#inventory">
        <img class="icon" src="../../media/illustrations/icons/bag.png" alt="Samling">
    </a>
    <a class="viewLink iconBtn histBtn">
        <img class="icon" src="../../media/illustrations/icons/historik.png" alt="Historik">
    </a>
    <a class="viewLink iconBtn" id="interactiveBtn" href="#interactive">
        <img class="icon" src="../../media/illustrations/icons/key.png" alt="Lösning">
    </a>
</div>

<div id="overlayStandby" class="">
    <img src="../../media/illustrations/malmu_icon.png" alt="Malmu">
    <img src="../../media/illustrations/searching.gif" alt="Letar efter kontakt..">
    <div class="textlayer">
        <h2>Söker Uppkoppling...</h2>
        <p>Ta dig till en anslutningsplats</p>
    </div>
</div>

<div id="loadingScreen" class="">
    <img src="../../media/illustrations/malmu_logo.svg" alt="Malmu">
    <div class="loadingText">
        <h2>Återupprättar kontakt med Malmu</h2>
        <p>Vänligen vänta...</p>
    </div>
</div>

<div id="overlayHistorik" class="none">
    <a class="closeBtn">
        <img id ="closeImg" src="../../media/illustrations/icons/closeBtn.png" alt="Stäng">
    </a>
    <div class="histTextfield">
        <!-- <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur obcaecati rem aliquam dolorum, repudiandae
                dolores atque maiores iste fuga consectetur, minus amet.
            </p> -->
    </div>
</div>

<div class="flexer">
    <div class="none" id="dialogueWrapper">
        <img src="" id="characterImg">
        <div id="dialogueBox">
            <div id="characterName"></div>
            <p></p>
            <div class="none" id="indicator"></div>
        </div>
    </div>
</div>