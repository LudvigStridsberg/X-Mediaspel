const userName // här ska username hämtas från STATE? Används i dialogen

const phases = {
    one: {
        gamePhp: "../game_php/piano.php",
        backgroundImage: "",
        targetLocation: {
            latitude: 0,
            longitude: 0
        },
        dialogue: {
            intro: [
                {
                    name: "",
                    image: "",
                    script: "",
                }
            ],
            outro: [
                {
                    name: "",
                    image: "",
                    script: "",
                }
            ]
        }
    },
    two: {
        gamePhp: false,
        backgroundImage: "",
        targetLocation: { // Stortorget, fontänen
            latitude: 0,
            longitude: 0
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "",
                    script: "Du står på torget och ser dig omkring för att se om du får syn på Gatekeepern. Torget myllrar av fantasiväsen.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "En pojke sitter på huk vid fontänen med ett stort leende på sina läppar. Han matar varje duva en och en",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "När han vänder sig om ser du att han har en apa på sin axel. Den klättrar ner längs hans arm och hjälper till med att ge frön till en fågel.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Ur ena ärmen på tröjan kryper en ödla fram. Det är tydligt att killen har ett intresse för djur. Pojken lyfter huvudet mot din riktning och du inser att du har stirrat ganska länge nu. Du tittar snabbt bort och hoppas att han inte såg.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "För sent.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Med samma entusiasm som han matade duvorna med skuttar han fram till dig. Den lilla ödlan får hålla sig fast för glatta livet för att inte skakas av.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Nu står han rakt framför dig med samma stora leende. Ödlan kryper snabbt upp på pojkens axel.",
                },
                {
                    name: "Pojkens ödla",
                    image: "",
                    script: "Som kaninen i hatten dök du upp! Vi skulle behöva din hjälp!",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Pojken gestikulerar till ödlan som agerar översättare.",
                },
                {
                    name: "Gatekeepern",
                    image: "",
                    script: "Så du har funnit Djurpojken.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du hoppar till av att Gatekeepern står bakom dig. När kom han hit!?",
                },
                {
                    name: "Ödlan",
                    image: "",
                    script: "Det är så här att jag är mitt uppe i en fin middag med mina kära vänner.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du kastar ett öga mot duvorna.",
                },
                {
                    name: "Ödlan",
                    image: "",
                    script: "Och som en virrig höna glömde jag helt och hållet bort att jag hade ett viktigt ärende till min andre käre vän Hipp.",
                },
                {
                    name: "Ödlan",
                    image: "",
                    script: "Skulle du kunna lämna detta brev till honom?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Innan du ens hinner tacka ja (eller nej för den delen) har du ett brev i dina händer.",
                },
            ],
            // Här lyser inventory upp och då finns gåtan där att läsa
            outro: [
                {
                    name: "BSK",
                    image: "",
                    script: "Du ser Gatekeepern försvinna i vimlet av fantasiväsen bakom pojken.",
                },
                {
                    name: "Ödlan",
                    image: "",
                    script: "Var försiktig med vem du litar på.. Väsen kan vara listiga och sluga, precis som räven, eller ormen.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Ja, Happ ja. Jag ska vara försiktig.",
                },
                {
                    name: "Ödlan",
                    image: "",
                    script: "Nej, inte Happ. Eller jo, Happ också, men jag hade en annan person i åtanke…",
                },
                {
                    name: "Ödlan",
                    image: "",
                    // Här kommer gåtan igen i dialogrutan
                    script: "Kom ihåg: <b>Hipp</b> är rena rama <b>teater</b>apan du vet säkert vart du kan hitta honom, han borde <b>inte vara så långt härifrån.</b>",
                },
            ]
        }
    },
    tree: {
        gamePhp: false,
        backgroundImage: "",
        targetLocation: { // Stadsteaterns ingång, vita bågar med apor
            latitude: 0,
            longitude: 0
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "",
                    script: "Du ser två apor som sitter i porten till stadsteatern. Detta måste vara Hipp och Happ. De tjafsar med varandra, och du inser att du inte kommer få en syl i vädret om du väntar snällt.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag har ett brev från pojken på torget!",
                },
                {
                    name: "Hipp och Happ",
                    image: "",
                    script: "DET ÄR TILL MIG! NEJ TILL MIG!",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Det är adresserat till Hipp.",
                },
                {
                    name: "Hipp och Happ",
                    image: "",
                    script: "DET ÄR JAG! NEJ, JAG ÄR HIPP!",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Kom igen, jag har inte hela dagen på mig. Vem av er ska ha brevet?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du håller ut brevet och båda aporna hugger mot din hand. Apan till vänster lyckats roffa åt sig brevet.",
                },
                // Brevet lämnar inventory
                {
                    name: "Happ",
                    image: "",
                    script: "Rackarns!",
                },
                {
                    name: "Hipp",
                    image: "",
                    script: "Du ska alltid ställa till med problem Happ.. Tack för brevet, det är JAG som är Hipp.",
                },
                {
                    name: "Hipp",
                    image: "",
                    script: "Jag har väntat på det här från Djurpojken. Det var väldigt viktigt för mig. I det här kuvertet finns nämligen mitt antagningsbesked från teaterhögskolan.",
                },
                {
                    name: "Happ",
                    image: "",
                    script: "Öppna det nu, öppna det nu!",
                },
                {
                    name: "Hipp",
                    image: "",
                    script: "Lugn, lugn..",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Hipp sprätter upp brevet med en lång apnagel. En sådan vill man inte ha i ögat.",
                },
                {
                    name: "Happ",
                    image: "",
                    script: "Vad står det!?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Hipps ögon lyser upp och han sträcker upp båda armarna i luften.",
                },
                {
                    name: "Hipp",
                    image: "",
                    script: "JAG ÄR ANTAGEN! Allt mitt slit har inte varit förgäves!",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Hipps genuina lycka smittar av sig på dig. Det är nästan så att han lyser.. Nej vänta..",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Han lyser faktiskt på riktigt!",
                },
                // Hipps rosa skugga blir synlig
                {
                    name: "BSK",
                    image: "",
                    script: "Strålar i ljusrosa nyans bryter sig ut i formen av Hipps siluett. Är det ingen annan som ser det här!? Ljuset dansar runt i bara några sekunder innan det lägger sig igen.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Såg ni precis det där?",
                },
                

            ],
            outro: [
                {
                    name: "BSK",
                    image: "",
                    script: "Du märker att din hand är knuten runt något hårt. Du öppnar upp dina fingrar och ser i handflatan en ädelsten - rosenkvarts. <br> Är detta ädelstenarna Gatekeepern pratade om?",
                }, // Här ska inventory lysa till och stenen ska läggas till
                {
                    name: "Happ",
                    image: "",
                    script: "Såg vadå? Jag har inte sett någonting. Men jag hör ett riktigt oväsen. Är det den där orkestern som är igång igen?",
                },
                {
                    name: "Hipp",
                    image: "",
                    script: "De har spelat förskräckligt på senaste tiden.",
                },
                {
                    name: "Hipp",
                    image: "",
                    script: "Du, vad du nu heter",
                },
                {
                    name: "Jag",
                    image: "",
                    script: `jag heter ${userName}`,
                },
                {
                    name: "Hipp",
                    image: "",
                    script: `${userName}` + ", du verkar ju ha en talang för att hjälpa folk. Gå dit och se om du inte kan göra något åt deras katzenjammer.",
                },
                {
                    name: "",
                    image: "",
                    script: "Om du går genom passagen typ nu så border du fånga dem i rättan tid.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du tittar först på Hipp och sedan på stenen i din hand. Hjälpa folk.. Är det nyckeln till att samla in de här stenarna? Du bestämmer dig för att ge det ett försök. Mot passagen!",
                }
            ]
        }
    },
    four: {
        gamePhp: "../game_php/piano.php",
        backgroundImage: "",
        targetLocation: {
            latitude: 0,
            longitude: 0
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "",
                    script: "När du väl når orkestern så har musiken stannat. Bandet hade väl till sist också tröttnat på sin musik. Låtarna hade lite “döende katt”-känsla över dem.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Frustrerade och uppgivna står de i en klump mitt på gatan, och du kan se bandledaren stå för sig själv en bit bort med ryggen mot sina medlemmar",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Tuff stämning. <br> Du väljer att gå fram till ledaren.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Ursäkta om jag stör, men vad händer med orkestern?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Bandledaren drar en djup suck.",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Nej nej, du stör inte. Faktum är att jag behöver något annat att tänka på. En gång var vi den ståtliga optimistorkestern, men nu..",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Bandledaren snyftar till.",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Numera är vi den värdelösa pessimistorkestern. En av våra medlemmar hoppade av, vilket gjorde att allas humör blev i moll och nu kan vi inte rycka upp oss till dur igen.",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Jag har en idé om hur vi skulle kunna må lite bättre, men det innebär att spela musik. Som du kanske både sett och hört så är ingen av oss tillräckligt pigg för att göra det.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag kanske kan hjälpa er?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du hoppas innerligt på att dina kunskaper från musiklektionerna i skolan magiskt ska göra ett framträdande i din frontallob.",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Det hade varit jättesnällt! Du kanske redan vet detta, men det finns en låtsnutt som är så överanvänd, en sådan kliché, så att de flesta musiker som känner till den brister ut i skratt när de hör den.",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Om du skulle spela den snutten tror jag att vi skulle kunna känna tillräcklig glädje för att kunna rycka upp oss och komma vidare. Det var det vår före detta medlem brukade göra när vi körde fast förr.",
                }, // Nedanstående är ledtråd till spelet
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Jag vet inte exakt hur den spelas, men jag vet att <b>första noten är ett D</b>. Namnet är på engelska och betyder <b>‘Slicket’</b>. Se om du inte kan ta och spela den för bandet!",
                }, // Spelet blir nu tillgängligt - knappen lyser upp - dialogen fortsätter först när spelet är klarat
            ],
            outro: [
                {
                    name: "Bandledaren",
                    image: "",
                    script: "En av bandmedlemmarna suckar ljudligt, en annan skakar på huvudet med ett snett leende, och de andra två brister ut i skratt",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Bandledarens axlar sänks en nivå av lättnad när hon ser sina vänner börja komma till liv igen.",
                },
                {
                    name: "Bandmedlemmar",
                    image: "",
                    script: "Åh neeeej! Inte den! <br> Seriöst!? <br> Var det du som bad människan att spela THE LICK?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Bandledaren skrattar hon också. Hon vänder sig till sina medlemmar.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Ja, förlåt mina vänner, men det var väl ett välbehövligt skratt?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Bandmedlemmarna nickar i unison. I samma stund kan du ana strålar som börjar spricka fram bakom bandmedlemmarna, precis som dem du såg hos Hipp och Happ.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "De lyser starkt orange i bara några sekunder, och efter de slocknat tittar du i din hand igen.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Stenen som ligger på handflatan ser nästan ut att ha målats med en pensel i olika orangea och röda färger. Stråken av de olika nyanserna gör den väldigt vacker.",
                }, // Stenen läggs till - inventory lyser till
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Tack ska du ha för hjälpen. Jag tror att vi ska kunna rycka upp oss igen. Vår gamle medlem, han som lämnade, brukade spela den snutten varje gång vi tappade humöret.",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Men en dag hade han helt plötsligt bara tappat det, och han ville varken spela eller umgås med oss. Nu vägrar han till och med att prata.",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Jag skulle bara vilja ge honom en gåva som adjö, så att han aldrig glömmer sin orkester. Tror du att du skulle kunna hitta honom och ge den?",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Det kan jag göra. Var hittar jag honom?",
                },
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Åhh tusen tack! Här är avskedsgåvan.",
                }, // illustration läggs till - inventory lyser till
                {
                    name: "Bandledaren",
                    image: "",
                    script: "Senast jag såg honom hade han vandrat längs södra promenaden, vid kanalen. Där ställde han sig sedan och grät och grät och grät.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Bandledaren tackar igen och återgår till sina medlemmar. I samma stund kan du återigen se Gatekeepern. <br> Han verkar se dig med och rusar fram.",
                },
                {
                    name: "Gatekeepern",
                    image: "",
                    script: "Var har du varit!?",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag har hjälpt några väsen med deras problem. Jag tror det är nyckeln till att samla ihop stenarna, jag har två stycken!",
                },
                {
                    name: "Gatekeepern",
                    image: "",
                    script: "Det kan vara farligt att vara en ensam människa i den undre världen. Det må ha gått väl, men nästa gång kanske du inte har sådan tur...",
                },
                {
                    name: "Gatekeepern",
                    image: "",
                    script: "Det var naivt av mig att lämna dig. Från och med nu reser vi tillsammans.",
                },
                {
                    name: "Gatekeepern",
                    image: "",
                    script: "Jag har ett väsen jag vill besöka, men först behöver jag samla in mer information om var väsendet är. Det flyttar sig konstant.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag har lovat orkestern att lämna en gåva till ett väsen. Vi kan fråga honom om han vet något?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Gatekeepern tittar ut över havet av väsen på gatan och svarar inte.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag har också min misstanke om att en av stenarna finns där.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Gatekeepern sneglar mot dig.",
                },
                {
                    name: "Gatekeepern",
                    image: "",
                    script: "Nåväl. Vi kan gå dit.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du tänker tillbaka till bandledarens ord. <br> <i>Senast jag såg honom hade han vandrat längs södra promenaden, vid kanalen. Där ställde han sig sedan och grät och grät och grät.</i>",
                },
            ]
        }
    },
}