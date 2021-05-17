

const phases = {
    0: {
        game: false, // Ev bildspelet???
        backgroundImage: "GT-portal.png",
        targetLocation: { // Utblick/insikt-statyn vid posthusplatsen
            latitude: 55.609612,
            longitude: 12.997689
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du tittar på den stora kolossen med ett hål i mitten. Nu då? Du tog dig hit men det verkar inte vara någon här.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Precis när du funderar på att gå så ser du en mörk skepnad ta form ett par meter framför dig.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Jag visste att du skulle klara det, " + getUsername() + ".",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Hur gjorde du det där, vem är du och HUR vet du mitt namn!?",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Du lyckades vara på rätt plats vid rätt tillfälle. Sen har du visat dig värdig genom att lösa min gåta. Därför har haft ett öga på dig.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Jag är portmästaren av den undre världen, men de flesta brukar kalla mig Portmästarn. Nu behöver jag din hjälp.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Min hjälp? Med vad?",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Det jag kommer berätta för dig är det ingen levande människa som vet. Så lyssna noga.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Du föddes som en människa i den övre världen. Ni har en teknologi, industri och.. mänsklighet.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Det ni inte har någon aning om är att det finns en parallell värld som lever i samspel med er egen. Detta är den undre världen, och den har sin kärna i Malmu.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Malmu?",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Malm under. Malm-ö betyder egentligen Malm över. Ni människor tycker det är lika roligt varje gång.",
                },
                {
                    name: "Portmästarn",

                    image: "portmastaren.png",
                    script: "Den undre världen drivs av magi, fantasi och kreativitet från den övre världen, och ju mer ni ger, desto mer får ni tillbaka...",
                },
                {
                    name: "Portmästarn",
                    image: "empty.png",
                    script: "..om världarna är i balans så att säga.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Och om de inte är i balans?",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Obalans kan få stora konsekvenser. Det är därför du är här.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Balansen är inte bara beroende av flödet av fantasi mellan världarna, utan det finns en till, stor kraft som påverkar våra dimensioner.",
                } // Här kommer bildspel med förklaring/text/info
            ],
            outro: [
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Och de här konsekvenserna är?",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Ingen konst, inga fantastiska historier, ingen musik, inga skratt. Bara en dyster, själskrossande levnad.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Det hugger till av ren och skär igenkänning.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Jag har redan samlat de fem första stenarna som finns i den undre världen, men jag kan inte samla dem i den övre.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "De är för den sakens skull du behövs. Du har visat dig värdig så du behöver inte vara orolig.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Men jag..",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Inga men. Vi måste skynda oss. Jag har mina misstankar om var vi hittar vissa stenar, men vi kan behöva fråga runt bland andra väsen.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Möt mig vid fontänen på stortorget. Och var försiktig med vem du pratar med.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[false, false, false, false, false]
                    }

                } // I spelarens inventory kan hen nu se kartan (en svg-bild) och första platsen är markerad. Klickar spelaren på platsen så står det en snabb recap om vad som hänt och behöver göras
            ]
        }
    },
    1: {
        game: false,
        backgroundImage: "djurpojk.png",
        targetLocation: { // Stortorget, fontänen
            latitude: 55.606443,
            longitude: 13.000660
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du står på torget och ser dig omkring för att se om du får syn på Portmästarn. Torget myllrar av fantasiväsen.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "En pojke sitter på huk vid fontänen med ett stort leende på sina läppar. Han matar varje duva en och en",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "När han vänder sig om ser du att han har en apa på sin axel. Den klättrar ner längs hans arm och hjälper till med att ge frön till en fågel.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ur ena ärmen på tröjan kryper en ödla fram. Det är tydligt att killen har ett intresse för djur.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Pojken lyfter huvudet mot din riktning och du inser att du har stirrat ganska länge nu. Du tittar snabbt bort och hoppas att han inte såg.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "För sent.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Med samma entusiasm som han matade duvorna med skuttar han fram till dig. Den lilla ödlan får hålla sig fast för glatta livet för att inte skakas av.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Nu står han rakt framför dig med samma stora leende. Ödlan kryper snabbt upp på pojkens hand.",
                },
                {
                    name: "Pojkens ödla",
                    image: "djurpojken_odla.png",
                    script: "Som kaninen i hatten dök du upp! Vi skulle behöva din hjälp!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Pojken gestikulerar till ödlan som agerar översättare.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Så du har funnit Djurpojken.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du hoppar till av att Portmästarn står bakom dig. När kom han hit!?",
                },
                {
                    name: "Ödlan",
                    image: "djurpojken_odla.png",
                    script: "Det är så här att jag är mitt uppe i en fin middag med mina kära vänner.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du kastar ett öga mot duvorna.",
                },
                {
                    name: "Ödlan",
                    image: "djurpojken_odla.png",
                    script: "Och som en virrig höna glömde jag helt och hållet bort att jag hade ett viktigt ärende till min andre käre vän Hipp.",
                },
                {
                    name: "Ödlan",
                    image: "djurpojken_odla.png",
                    script: "Skulle du kunna lämna detta brev till honom?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Innan du ens hinner tacka ja (eller nej för den delen) har du ett brev i dina händer.",
                    items:{
                        mapItem: true,
                        letterItem: true,
                        photo: false,
                        oldLetterItem: false,
                        gems:[false, false, false, false, false]
                    }
                },
            ],
            // Här lyser inventory upp och då finns gåtan där att läsa
            outro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du ser Portmästarn försvinna i vimlet av fantasiväsen bakom pojken.",
                },
                {
                    name: "Ödlan",
                    image: "djurpojken_odla.png",
                    script: "Var försiktig med vem du litar på.. Väsen kan vara listiga och sluga, precis som räven, eller ormen.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Ja, Happ ja. Jag ska vara försiktig.",
                },
                {
                    name: "Ödlan",
                    image: "djurpojken_odla.png",
                    script: "Nej, inte Happ. Eller jo, Happ också, men jag hade en annan person i åtanke…",
                },
                {
                    name: "Ödlan",
                    image: "djurpojken_odla.png",
                    // Här kommer gåtan igen i dialogrutan
                    script: "Kom ihåg: Hipp är rena rama teater apan du vet säkert vart du kan hitta honom, han borde inte vara så långt härifrån.",
                },
            ]
        }
    },
    2: {
        game: false,
        backgroundImage: "apor.png",
        targetLocation: { // Stadsteaterns ingång, vita bågar med apor
            latitude: 55.605760,
            longitude: 13.003052
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du ser två apor som sitter i porten till stadsteatern. Detta måste vara Hipp och Happ.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "De tjafsar med varandra, och du inser att du inte kommer få en syl i vädret om du väntar snällt.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag har ett brev från pojken på torget!",
                },
                {
                    name: "Hipp och Happ",
                    image: "hipp_happ.png",
                    script: "DET ÄR TILL MIG! NEJ TILL MIG!",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Det är adresserat till Hipp.",
                },
                {
                    name: "Hipp och Happ",
                    image: "hipp_happ.png",
                    script: "DET ÄR JAG! NEJ, JAG ÄR HIPP!",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Kom igen, jag har inte hela dagen på mig. Vem av er ska ha brevet?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du håller ut brevet och båda aporna hugger mot din hand. Apan till vänster lyckats roffa åt sig brevet.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[false, false, false, false, false]
                    }
                },
                // Brevet lämnar inventory
                {
                    name: "Happ",
                    image: "happ_arg.png",
                    script: "Rackarns!",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "Du ska alltid ställa till med problem Happ.. Tack för brevet, det är JAG som är Hipp.",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "Jag har väntat på det här från Djurpojken. Det var väldigt viktigt för mig.",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "I det här kuvertet finns nämligen mitt antagningsbesked från teaterhögskolan.",
                },
                {
                    name: "Happ",
                    image: "happ.png",
                    script: "Öppna det nu, öppna det nu!",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "Lugn, lugn..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Hipp sprätter upp brevet med en lång apnagel. En sådan vill man inte ha i ögat.",
                },
                {
                    name: "Happ",
                    image: "happ.png",
                    script: "Vad står det!?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Hipps ögon lyser upp och han sträcker upp båda armarna i luften.",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "JAG ÄR ANTAGEN! Allt mitt slit har inte varit förgäves!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Hipps genuina lycka smittar av sig på dig. Det är nästan så att han lyser.. Nej vänta..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Han lyser faktiskt på riktigt!",
                },
                // Hipps rosa skugga blir synlig
                {
                    name: "BSK",
                    image: "farg_hipp.png",
                    script: "Strålar i ljusrosa nyans bryter sig ut i formen av Hipps siluett. Är det ingen annan som ser det här!?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: " Ljuset dansar runt i bara några sekunder innan det lägger sig igen.",

                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Såg ni precis det där?",
                },
                

            ],
            outro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du märker att din hand är knuten runt något hårt. Du öppnar upp dina fingrar och ser i handflatan en ädelsten - rosenkvarts.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[true, false, false, false, false]
                    }
                }, // Här ska inventory lysa till och stenen ska läggas till
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Är detta ädelstenarna Portmästarn pratade om?",
                }, // Här ska inventory lysa till och stenen ska läggas till
                {
                    name: "Happ",
                    image: "happ.png",
                    script: "Såg vadå? Jag har inte sett någonting. Men jag hör ett riktigt oväsen. Är det den där orkestern som är igång igen?",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "De har spelat förskräckligt på senaste tiden.",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "Du, vad du nu heter..",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "jag heter " + getUsername() + ".",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: getUsername() + ", du verkar ju ha en talang för att hjälpa folk. Gå dit och se om du inte kan göra något åt deras katzenjammer.",
                },
                {
                    name: "Hipp",
                    image: "hipp.png",
                    script: "Om du går genom passagen typ nu så border du fånga dem i rättan tid.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du tittar först på Hipp och sedan på stenen i din hand. Hjälpa folk.. Är det nyckeln till att samla in de här stenarna?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du bestämmer dig för att ge det ett försök. Mot passagen!",
                }
            ]
        }
    },
    3: {
        game: "piano",
        backgroundImage: "orkester.png",
        targetLocation: { // Orkestern, Stortorget
            latitude: 55.605512,
            longitude: 13.001284
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "När du väl når orkestern så har musiken stannat. Bandet hade väl till sist också tröttnat på sin musik. Låtarna hade lite “döende katt”-känsla över dem.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Frustrerade och uppgivna står de i en klump mitt på gatan, och du kan se bandledaren stå för sig själv en bit bort med ryggen mot sina medlemmar.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Tuff stämning. Du väljer att gå fram till ledaren.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Ursäkta om jag stör, men vad händer med orkestern?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Bandledaren drar en djup suck.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Nej nej, du stör inte. Faktum är att jag behöver något annat att tänka på. En gång var vi den ståtliga optimistorkestern, men nu..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Bandledaren snyftar till.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Numera är vi den värdelösa pessimistorkestern. En av våra medlemmar hoppade av, vilket gjorde att allas humör blev i moll...",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "... och nu kan vi inte rycka upp oss till dur igen.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Jag har en idé om hur vi skulle kunna må lite bättre, men det innebär att spela musik.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Som du kanske både sett och hört så är ingen av oss tillräckligt pigg för att göra det.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag kanske kan hjälpa er?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du hoppas innerligt på att dina kunskaper från musiklektionerna i skolan magiskt ska göra ett framträdande i din frontallob.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Det hade varit jättesnällt!",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Du kanske redan vet detta, men det finns en låtsnutt som är så överanvänd.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "En sådan kliché..",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: ".. så att de flesta musiker som känner till den brister ut i skratt när de hör den.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Om du skulle spela den snutten tror jag att vi skulle kunna känna tillräcklig glädje för att kunna rycka upp oss och komma vidare.",
                }, // Nedanstående är ledtråd till spelet
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Det var det våran tidigare medlem brukade göra när vi körde fast förr.",
                }, // Nedanstående är ledtråd till spelet
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Jag vet inte exakt hur den spelas, men första noten är ett 'D'. Namnet är på engelska och betyder ‘Slicket’. Se om du inte kan ta och spela den för bandet!",
                }, // Spelet blir nu tillgängligt - knappen lyser upp - dialogen fortsätter först när spelet är klarat
            ],
            outro: [
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "En av bandmedlemmarna suckar ljudligt, en annan skakar på huvudet med ett snett leende, och de andra två brister ut i skratt.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Bandledarens axlar sänks en nivå av lättnad när hon ser sina vänner börja komma till liv igen.",
                },
                {
                    name: "Bandmedlemmar",
                    image: "orkestern.png",
                    script: "Åh neeeej! Inte den!   Seriöst!?   Var det du som bad människan att spela THE LICK?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Bandledaren skrattar hon också. Hon vänder sig till sina medlemmar.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ja, förlåt mina vänner, men det var väl ett välbehövligt skratt?",
                },
                {
                    name: "BSK",
                    image: "farg_orkestern.png",
                    script: "Bandmedlemmarna nickar i unison. I samma stund kan du ana strålar som börjar spricka fram bakom bandmedlemmarna, precis som dem du såg hos Hipp och Happ.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "De lyser starkt orange i bara några sekunder, och efter de slocknat tittar du i din hand igen.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Stenen som ligger på handflatan ser nästan ut att ha målats med en pensel i olika orangea och röda färger. Stråken av de olika nyanserna gör den väldigt vacker.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[true, true, false, false, false]
                    }
                }, // Stenen läggs till - inventory lyser till
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Tack ska du ha för hjälpen. Jag tror att vi ska kunna rycka upp oss igen. Vår gamle medlem, han som lämnade, brukade spela den snutten varje gång vi tappade humöret.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Men en dag hade han helt plötsligt bara tappat det, och han ville varken spela eller umgås med oss. Nu vägrar han till och med att prata.",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Jag skulle bara vilja ge honom en gåva som adjö, så att han aldrig glömmer sin orkester. Tror du att du skulle kunna hitta honom och ge den?",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Det kan jag göra. Var hittar jag honom?",
                },
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Åhh tusen tack! Här är avskedsgåvan.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: true,
                        oldLetterItem: false,
                        gems:[true, true, false, false, false]
                    }
                }, // illustration läggs till - inventory lyser till
                {
                    name: "Bandledaren",
                    image: "bandledaren.png",
                    script: "Senast jag såg honom hade han vandrat längs södra promenaden, vid kanalen. Där ställde han sig sedan och grät och grät och grät.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Bandledaren tackar igen och återgår till sina medlemmar. I samma stund kan du återigen se Portmästarn.   Han verkar se dig med och rusar fram.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Var har du varit!?",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag har hjälpt några väsen med deras problem. Jag tror det är nyckeln till att samla ihop stenarna, jag har två stycken!",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Det kan vara farligt att vara en ensam människa i den undre världen. Det må ha gått väl, men nästa gång kanske du inte har sådan tur...",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Det var naivt av mig att lämna dig. Från och med nu reser vi tillsammans.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Jag har ett väsen jag vill besöka, men först behöver jag samla in mer information om var väsendet är. Det flyttar sig konstant.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag har lovat orkestern att lämna en gåva till ett väsen. Vi kan fråga honom om han vet något?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästarn tittar ut över havet av väsen på gatan och svarar inte.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag har också min misstanke om att en av stenarna finns där.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästarn sneglar mot dig.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Nåväl. Vi kan gå dit.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du tänker tillbaka till bandledarens ord:",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "\"Senast jag såg honom hade han vandrat längs södra promenaden, vid kanalen. Där ställde han sig sedan och grät och grät och grät.\"",
                },
            ]
        }
    },
    4: {
        game: "matcher", // Mini game med stjärntecken
        backgroundImage: "ledsna.png",
        targetLocation: { // Vid kanalen, ledsna gubben statyn
            latitude: 55.603130,
            longitude: 13.007152
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Med tanke på bandledarens beskrivning bekräftar ljudet av snyftande att ni kommit rätt.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Han är förvånansvärt lik Gösta Ekman. Undrar om någon sagt det till honom?",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "*Snyft* “Vil-vilka är ni?",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag heter " + getUsername() + ", det här är Portmästarn..",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Han vet vem jag är.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: ".. och jag har kommit för att ge en present till dig. Jag hoppas den kan muntra upp dig.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du räcker fram fotografiet, med motivet föreställande Ledsna Gubben ihop med orkestern riktat mot marken, för att säkerställa att han tar emot det.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ledsna Gubben tar bilden och tittar på den. Om hans läpp darrade innan är det ingenting jämfört med hur den skakar nu.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Bandledaren ville att du skulle ha den här som ett minne.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[true, true, false, false, false]
                    }
                }, // Bilden lämnar inventory
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "Åhh! Mina fina vänner! Hur kunde jag vara så dum och lämna orkestern!?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Gubben brister ut i storgråt. Portmästarns kroppsspråk skriker av obekvämlighet.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Han vänder sig och tittar ut över kanalen. Du får lösa det här på egen hand.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Självklart kommer de förlåta dig! De sade till mig att de saknar dig!",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_2.png",
                    script: "*Snyft* “Är det så?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Även om gubbens tårar fortsätter att rinna så kommer hulkningarna alltmer sällan. Han verkar samla sig en smula.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_2.png",
                    script: "Det var så länge sedan jag spelade. De kanske inte ens vill ha med mig i orkestern.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Det kan knappast bli värre än vad det nyss var. De behöver nog dig mer än du tror.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Gubben torkar sina tårar.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "Du kanske har rätt…",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "Jag måste tillbaka och prata med dem! Tack för fotografiet. Finns det något jag kan ger er i gengäld?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästarn vänder sig återigen mot gubben. Den plötsliga rörelsen får gubben att ta ett halv kliv tillbaka. Han ser nästan rädd ut. Varför så stark reaktion?",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Jag söker Zodiaken. Han har bytt position igen.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Gubben samlar sig och harklar till.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "Medan jag vilset vandrat i området så mötte jag Zodiaken, och den intresserade mig genast.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_2.png",
                    script: "Den lyssnade på mina problem och gav mig de här stjärntecknena. De ligger dock helt huller om buller…",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Åh nej, han börjar bli upprörd igen. Gubben tar fram ett bräde där små brickor med stjärntecken på ligger i oordning.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "... och jag vet inte hur jag ska få rätt på dem. Åhh den litade ju på mig! Jag måste sortera dem rätt! Kan ni förstå er på det här!?",
                },
                {
                    name: "BSK",
                    image: "ledsna_spel.png",
                    script: "Gubben räcker fram brädet med brickorna. Kan vi lösa det här?",
                }, // Knappen för spel lyser till
            ], // När spelet klaras blir nästa del tillgänglig
            outro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Gubben tittar upp på dig. Tårarna fortsätter att rinna, men denna gången verkar det vara av glädje.",
                }, // Ledtråd till nästa location kommer i dialogen nedan
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "Tack så mycket, det var verkligen snällt av dig. Nu känner jag hur lugnet sprider sig i kroppen.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "När jag tänker på att en Förening av '15' stjärntecken är gjorda är jag säker på att du hittar Gatan som du letar efter.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "ledsna_1.png",
                    script: "Nu får ni ursäkta mig! Jag ska öva på mitt instrument innan jag går tillbaka till mina vänner i orkestern!",
                },
                {
                    name: "BSK",
                    image: "farg_ledsna.png",
                    script: "Återigen ser du samma ljusstrålar dansa, denna gång i en grön färg. Stenen känns len i din hand, och du tittar på den.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Stenens mitt är så mörkt grön att det nästan ser svar ut, medan de spräckliga kanterna är i en ljusare nyans. Detta måste vara en jadeit.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[true, true, true, false, false]
                    }
                }, // Stenen läggs till i inventory - lyser till på iconen
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du utbyter en förstående blick med Portmästarn. Han upprepar gubbens ord långsamt.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "\"Nu känner jag hur lugnet sprider sig i kroppen. När jag tänker på att en Förening av '15' stjärntecken är gjorda är jag säker på att du hittar Gatan som du letar efter.\"",
                },
            ]
        }
    },
    5: {
        game: false,
        backgroundImage: "zodiak.png",
        targetLocation: { // Föreningsgatan 15, zodiac-statyn
            latitude: 55.597149,
            longitude: 13.003764
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "När du och Portmästarn kommer fram till er destination kan ni känna en enorm presens.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Desto närmare ni går, ju mer påtagliga blir de lågfrekventa ljudvågorna som får hela atmosfären att pulsera.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Det råder ingen tvekan om vem som är källan till den bultande luften. Det ni ser är den så kallade Zodiaken.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Ah, herr Portmästare. Så trevligt att se er igen, jag har väntat er och ert sällskap.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Håren reser sig i nacken när Zodiaken talar.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Det är som att orden tar en genväg och landar rakt in i huvudet, utan att passera öronen först. Lite som att du nu delar med av ditt medvetna till Zodiaken.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Försök tänka rena tankar.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Jag förväntar mig inget mindre av er, ers allvetande. Som ni kanske redan förutspått så har jag två frågor.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Det är som ni säger, och jag kan redan nu svara på er första fråga; jag förblir neutral.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Jag må se genom vävnaden av tiden, men inte ens jag besitter trotsighet nog att bekämpa ödet.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Jag vet vad som kommer hända med er, herr Portmästare.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Om ni kommer lyckas eller ej, faller sig ödet berätta för er när det är dags. Återigen, mer än så tillåts jag inte säga.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästarn verkar irriterad men samtidigt återhållsam, som att han vet att det inte finns något mer han kan göra",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "För er andra fråga bör ni söka er mot älvornas slott.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Ers allvetande, med all respekt, där finns inget mer än ruiner nu för tiden. Slottet har varit borta sedan tusentals år tillbaka.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Javisst vet jag det.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Men så länge ruinerna står där, har slottet endast dött sin första död. Minnena från förr lever kvar, och ser ni inte dem, bör ni leta ännu noggrannare.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästarn ser fundersam ut.",
                }
            ],
            outro: [
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: getUsername() + ", att ni har tagit er an detta uppdraget är mycket nobelt av er. Er tillit till herr Portmästare är beundransvärd.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Oroa er inte, herr Portmästare kan inte höra oss.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Jag ser att ni samlat på er tre stenar. Imponerande. De bär på en mycket större makt än ni tror.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "När stenarna glider ifrån varandra, dras de till misär. Ni har löst problem för att åkalla dem, inte sant?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du vet inte ens om du behöver svara på den frågan.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Som ni vet kan stenarnas orsaka katastrofer i båda våra världar när de glider ifrån varandra.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Misären som orsakas av stenarna spär sedan på deras separation allt mer och skapar en ond cykel",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Situationen blir alltså bara värre ju längre den tillåts att fortlöpa.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Stenarna behöver placeras på sina rätta platser i både den övre och undre världen. Först då kommer världarna sakta att helas igen.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Jag kan se genom tid och rum. Det förflutna, nutiden och framtiden. Jag kan inte berätta om vad som kommer hända. Men jag kan ge er ett råd.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Lika viktigt som att lyssna på andra, är att lyssna på den egna magkänslan.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Vad säger ni till " + getUsername() + ", ers allvetande?",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Inget av vikt för er, herr Portmästare. Jag ska hjälpa er på er resa.",
                }, // Nedan kommer en ledtråd till nästa location
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Det ni söker finner ni på platsen där alla goda ting är tre.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Följ solnedgångens riktning, där pelarna ståtligt minner om en tid nu svunnen.",
                },
                {
                    name: "Zodiaken",
                    image: "zodiaken.png",
                    script: "Där finns den älva vars två syskon fortsatt utan henne, Ty hon är fast mellan fyra hörn.",
                },
            ]
        }
    },
    6: {
        game: false,
        backgroundImage: "triangel.png",
        targetLocation: { // Konstmuseet, pelarna
            latitude: 55.595002,
            longitude: 12.998266
        },
        dialogue: {
            intro: [
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Det här var en gång ett ståtligt slott där älvorna bodde. Det enda som finns kvar nu är ruiner, och älvorna har sedan dess spridit ut sig.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "De går att hitta på lite alla möjliga ställen förutom just här.",
                },
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Men Zodiaken har aldrig fel, så det måste finnas en älva kvar här någonstans. Vi får leta runt på området efter en \"älva fast mellan fyra hörn.\"",
                }
            ],
            outro: [ // Spelaren letar o hittar qr // Inget outro i denna?
                {
                    name: "Portmästarn",
                    image: "portmastaren.png",
                    script: "Den kanske kan berätta vart vi bör gå.",
                }
            ]
        }
    },
    7: {
        game: "fairyQuest", // Gåtan med antal bussar
        backgroundImage: "kyrkG.png",
        targetLocation: { // Kyrkogården, GA-torg
            latitude: 55.602268,
            longitude: 12.997046
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "I den stora cirkeln där kyrkogårdens gångar möts ser ni älvorna flyga omkring - bingo.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Dokumentet ni läste tidigare hade några år på nacken, men älvorna verkar ha bosatt sig här.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Märkligt ställe kan man tycka, men det är också en väldigt vacker plats.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "De två älvorna bollar något mellan sig som blänker till i ljuset. Det ser nästan ut som.. En näsa i brons?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Deras fnitter är så intensivt att det nästan låter aggressivt. Portmästaren drar en tung suck.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Älvor, har ni något problem vi kan hjälpa er med?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Älvorna stannar upp samma sekund som du ställt färdigt din fråga och vänder sina huvuden blixtsnabbt åt ditt håll. De tittar på varandra, och tillbaka på dig.",
                },
                {
                    name: "Älvan Marky",
                    image: "alvan.png",
                    script: "Hjälp? Du kan hjälpa oss förstå vad du gör med DEN DÄR!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Marky pekar mot Portmästaren och de båda älvorna börjar skratta hysteriskt. Portmästarn verkar oberörd. Han verkar inte vara så värst omtyckt",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag vet vad ni gjorde mot ert syskon.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Återigen tystnar älvorna abrupt. Älvan Marky tittar på dig med dödligt allvar i sin blick. Den flyger närmre ditt ansikte.",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Jaså det vet du? Då har jag ett problem du kan få lösa åt oss.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du börjar verkligen bli bra på det här.",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Åh ack och ve! Att bråka över en sådan petitess! Nu är vår lillasyster försvunnen, puts väck!",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Vad bråkade ni om?",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Vi skäms så mycket.. Borde vi verkligen berätta?",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Du är en främling! Hur ska vi kunna lita på främlingar?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Båda älvorna verkar ha svårt att hålla sig för skratt.",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Jag har en idé! Vad sägs om en liten gåta?",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Om ni löser gåtan kan vi lita på er och kan då berätta vad vi bråkade om. Då kanske vi kan lösa vårt problem. Jag saknar henne så!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Den andra älvan tryckte undan ett skratt. Portmästaren står med armarna i kors och tittar bort. Han verkar inte vara särskilt intresserad av konversationen.",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "\"De tar inte bara en men flera personer till inte bara ett men flera ställen..",
                }, // Knappen för gåtor lyser upp - spelaren ska skriva in rätt siffra (6)
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: ".. men frågan är hur många av dem tar personer till ställen..",
                }, // Knappen för gåtor lyser upp - spelaren ska skriva in rätt siffra (6)
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: ".. från stället som döptes efter kungen, eller kungen som döptes efter stället?\"",
                }, // Knappen för gåtor lyser upp - spelaren ska skriva in rätt siffra (6)
            ],
            outro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Älvorna är tysta. De tittar på dig. De tittar på varandra.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Sedan brister de ut i ett skratt så högt att det hade kunnat väcka de döda, vilket skapar oro med tanke på platsen ni befinner er.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Mellan några häftiga andetag lyckas en av dem klämma fram några meningar.",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Gick du verkligen på den lätta!? Varför skulle vi vilja veta några sådana DUMHETER!?",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Är det svårt att ta sig runt i världen när man är så KORKAD?",
                },
                {
                    name: "BSK",
                    image: "farg_alvan.png",
                    script: "Det är aldrig roligt att bli gjort till åtlöje. Just som du börjar tappa ditt tålamod ljusnar ett gult sken från älvorna.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Även om skrattet skedde på din bekostnad; kan det vara så att de behövde det?"  
                }, // Inventoy lyser upp - ny sten // Ny bild med bakgrundsfärg på älvan
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Det känns som ett konstigt problem, men innan du hinner analysera händelsen färdigt ligger den ljusgula stenen i din hand.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[true, true, true, true, false]
                    }
                }, // Inventoy lyser upp - ny sten // Ny bild med bakgrundsfärg på älvan
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Efter en stund lugnar älvorna ned sig, torkar sina tårar och hämtar andan",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Nåväl, vi kan berätta vad vi bråkade om.",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Vår syster ville inte bo på kyrkogården, icke sa nicke! Hon ville stanna där vi redan var. Nu har vi inte sett henne på snart 77 år.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Med lite snabb huvudräkning landar du på året 1944. Du kan inte låta bli att undra om de vet vad som faktiskt hänt med henne. Eller om de ens bryr sig.",
                },
                {
                    name: "Marky",
                    image: "alvan.png",
                    script: "Allt hon gjorde var att gnälla. Wää, wää, wää, blaa, blaa, blaa.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Älvorna skrattar åt sin imitation av deras syster. Vilka svin. Hon var ju bara orolig för er. Portmästaren vänder sig mot dig.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Om du inte har något emot det så slösar jag personligen inte mer tid här. Låt oss ta oss vidare.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Jag har en vän som kan ha lokaliserat den sista stenen åt oss. Hon kommer inte åt den eftersom vi behöver en människa från den övre världen.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Allt du behöver göra är att locka fram den.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Jag vet att vi skulle resa tillsammans, men hon och jag behöver tala i enrum, så jag går i förväg. Jag finns där för att möta dig när vi väl kommer fram.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Ta dig till min väns grotta i Kungsparken. Du hittar henne längs kommendantstigen.",
                },
            ]
        }
    },
    8: {
        game: "snakeQuest", // Ormens gåta
        backgroundImage: "empty.png",
        targetLocation: { // Ormgrottan i Kungsparken
            latitude: 55.603584,
            longitude: 12.992652
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "portmastaren_ormen.png",
                    script: "Portmästarn är så uppslukad i sin konversation att han inte märker dig. Han tittar upp mot ormen vars huvud hänger från taket på grottan",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren_ormen.png", // Bild på ryggen
                    script: "Så länge allt går enligt plan så kommer din frihet. Du har varit en stor hjälp i arbetet och för det ska du belönas.",
                },
                {
                    name: "BSK",
                    image: "portmastaren_ormen.png",
                    script: "Ormen drar mungiporna till ett leende samtidigt som hon nöjt skjuter ut sin tunga. Leendet blir dock inte långvarigt då hon får syn på dig bakom Portmästaren.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Vi har vissst får ssällsskap.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästarn vänder sig hastigt och tittar på dig. Hans kroppsspråk påminner om en femåring som blev tagen på bar gärning med handen i kakburken.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Hur länge har du varit här?",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Jag kom nyss hit.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Hur mycket har du hört?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Zodiaken sa åt dig att lita på din magkänsla. Den säger just nu åt dig att dra en vit lögn.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Ingenting.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ingenting viktigt i alla fall.. Kanske..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Tystnaden från Portmästarn hintar om att han inte riktigt tror på dig. Ormen sänker sitt huvud ytterligare för att komma närmare ditt ansikte.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Hennes gula ögon är nästan självlysande och de svarta vertikala pupillerna gör att blicken känns vass.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Eftersom du har sett flertalet videoklipp på ormar som hugger tag i byten så vet du att det är bäst att vara på sin vakt. Hennes reflexer är vida överlägsna dina.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Sså, du är människan ssom ssamlar in sstenarna?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Hennes röst kunde inte vara en större motsats till hennes utseende. Den är lugn och djup och hennes ton är mjuk och len.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Vi ssamarbetar, du och jag. Jag är en god vän till Portmästaren.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Jag har ssökt upp den ssissta sstenen för att hjälpa er på ert sstora uppdrag. Det är det minssta jag kan göra.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Portmästarn och jag försstår varandra på ett ssätt som ingen annan gör. Vi vet båda hur det är att inte passsa in och lämnass vid ssidlinjen.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Vi är bara misssförsstådda - vi vill bara väl.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Hennes röst är nästintill förtrollande. Du kan inte dra din uppmärksamhet från hennes ord.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Portmästaren ssade att du framkallar sstenarna genom att lösssa problem",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "För att du ska få tag i sstenen jag lokalisserat sså sska jag ge dig ett problem.",
                }, // Gåtan kommer
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Jag vill att du sska försstå min ssitss...",
                }, // Knappen för gåtor lyser - spelaren svarar på gåtan
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Berätta för mig vilket djur ssom är längsst ned, tyngd av de andra, omgedd av godtrogna rådjur ssom sspringer, ovetandess av vilken frihet de har givitss.",
                }, // Knappen för gåtor lyser - spelaren svarar på gåtan
            ],
            outro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ormen i grottan ler ännu större än vad hon gjort tidigare.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Jag vissste att du sskulle försstå; sse ssaker ur mitt persspektiv. Ingen vill lita på en sslug och lisstig orm.",
                },
                {
                    name: "Ormen",
                    image: "ormen.png",
                    script: "Alla andra vässsen gör allt i ssin makt för att trycka ned osss. Men de sska får sse. När jag fått min frihet sså sska jag vissa dem mitt ssanna jag. Allt tack vare Portmästarn!",
                },
                {
                    name: "BSK",
                    image: "farg_ormen.png",
                    script: "Ormen börjar omringas av samma sken du sett tidigare. De röda strålarna lyser som strålkastare."
                },
                {
                    name: "BSK",
                    image: "farg_ormen.png",
                    script: "När de slocknat igen ser du efter i din hand och finner en klarröd rubin.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[true, true, true, true, true]
                    }
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Transparensen får stenen att påminna om godis. Även om du aldrig skulle få för dig att faktiskt göra det blir du lite sugen på att stoppa den i munnen.",
                }, // Inventory lyser upp - ny sten
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästaren springer fram till där du står och frågar dig ängsligt.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Har du fått tag på den sista stenen?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du visar den godisliknande stenen för Portmästaren. Plötsligt sker något konstigt. Rubinen i din hand beter sig som att ha fått sitt eget liv.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Trots att du står still tumlar den runt i din handflata. Portmästaren växlar mellan att titta på dig och stenen",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Jag har aldrig sett något liknande. Detta kan inte vara ett bra tecken. Beter sig alla stenarna så här?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du tar fram de andra stenarna från din samling, och mycket riktigt. Även de har börjat rulla omkring, som att de söker efter något men konstant byter riktning igen.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Till sist lägger sig stenarna i en formation och börjar lysa i unison. Stenarna har varsin skarp stråle och de pekar alla på en och samma plats på din karta.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Vi måste gå dit stenarna pekar, och det är fort.",
                }
            ]
        }
    },
    9: {
        game: false,
        backgroundimage: "empty.png",
        targetLocation: { // Paddlaren utan ansikte, Tekniska museet
            latitude: 55.604184,
            longitude: 12.982823
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ni är på platsen dit stenarna pekade er.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Detta är inte platsen där stenarna ska vara, så varför ledde dem oss hit?",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Han hinner knappt avsluta sin mening innan ett kvävt rop stjäler er uppmärksamhet. Portmästarn tar ett steg tillbaka av chock.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Framför er ser ni ett väsen, sittandes i en kanot, utan ansikte. Panikslaget letar han med händerna över det tomma anletet.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Desperationen smittar av sig för varje nytt dovt skrik ni hör. Håren reser sig i nacken av obehag.",
                } 
            ],
            outro: [
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "När negativa energier når en viss grad av styrka börjar världarna falla isär. Det var det här jag varnade dig om från första början.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Ingen konst, inga fantastiska historier, ingen musik, inga skratt.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Bara en dyster, själskrossande levnad. Så lyder profetian. Och det du ser här är början på uppfyllelsen av den.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Det stackars väsendet kryper upp med knäna till där dess panna borde sitta och vaggar fram och tillbaka..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: ".. som att den desperat hoppas på att det bara än en dålig dröm.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Det här måste vara en varning. Vår tid håller på att rinna ut och om vi inte tar oss till platsen..",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: ".. dit stenarna kan återförenas korrekt kommer alla, både väsen och människor, bli till tomma skal. Förvandlingen har redan börjat.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Så var är den här platsen där stenarna kan återförenas korrekt?",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Vi måste följa turbinkanalen tills vi når de två små broarna som knyter an till hamnen, dock ska vi ej gå över någon av dem.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Strax bortom den östra bron står två människoformade portaler.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Där är kärnan till balansen och harmonin mellan den övre och undre världen.",
                }
            ]
        }
    },
    10: {
        game: false, // Ev placera stenar, eller behålla endast dialog?
        backgroundImage: "kockums.png",
        targetLocation: { // Kockums
            latitude: 55.609295,
            longitude: 12.977192
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ni är äntligen framme vid vad som ska vara den sista destinationen.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "I ditt huvud hade du föreställt dig något mer grandiost för knutpunkten för de två världarna. Men här står ni, bredvid en parkering.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Som att han kan läsa dina tankar talar Portmästaren till dig",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Detta var kanske inte riktigt det du förväntade dig, men det är en genialisk plats. Den viktigaste punkten ligger helt öppet för alla att se, anonym för världen.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Lyssna på mig " + getUsername() + ". Detta är slutet. Det är nu eller aldrig. Du har varit en utmärkt kompanjon och följt alla mina instruktioner.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Jag har bara ett sista ste ",//! ska det vara STE???
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "PORTMÄSTARE. " + getUsername().toUpperCase() + ". NI HAR TILLSAMMANS SAMLAT IHOP ÄDELSTENARNA OCH FÖR DET ÄR VI EVIGT TACKSAMMA.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "ENDAST VI, DEN SANNA ÄDELN ÖVER MALM-U OCH MALM-Ö, KAN HANTERA MAKTEN HOS STENARNA.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "PORTMÄSTARE. NI SKALL GE ÖVER STENARNA FÖR DEN UNDRE VÄRLDEN.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: getUsername().toUpperCase() + ". NI SKALL GE ÖVER STENARNA FÖR DEN ÖVRE VÄRLDEN.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "FÖRST DÅ ÄR STENARNA PÅ SINA RÄTTA PLATSER OCH VÅRA VÄRLDAR KAN ÅTERIGEN HELAS.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Precis som hos Zodiaken hörs deras dånande röster som tankar i ditt huvud och känslan av allestädesnärvaro är oundviklig.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästaren, som annars alltid haft ett visst lugn, ser onekligen stressad ut.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren.png",
                    script: "Du måste ge mig dina stenar.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Va? Men de sa ju..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästaren börjar höja rösten och hans gestalt ser nästan ut att växa i samband med volymen. Han böjer sig över dig.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren_arg.png",
                    script: "Jag måste ha dina stenar. Du borde ge dem till mig.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren_arg.png",
                    script: "Du har litat på mig hela denna vägen, inte sant? Du har aldrig träffat dessa väsen innan. Så för allas bästa..",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren_arg.png",
                    script: "GE MIG DINA STENAR!!!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästaren är ursinnig. Du minns Zodiakens ord. Lita på din magkänsla.",
                    items:{
                        mapItem: true,
                        letterItem: false,
                        photo: false,
                        oldLetterItem: false,
                        gems:[true, true, true, true, true]
                    }
                }, // Spelaren gör slutvalet // Annorlunda outros på denna
            ],
            outroA: [ // Ger stenarna till Portis //!Kontrollera att alla stenar är false
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Portmästarn är ju faktiskt den som varit vid din sida genom hela er resa. Han måste vara upprörd av en anledning.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Okej. Du får dem. Jag litar på dig mer än dem.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du hinner knappt räcka fram alla stenarna innan han har roffat åt sig dem ur dina händer. Portmästaren skratt som börjar blygsamt blir snabbt maniskt.",
                },
                {
                    name: "Portmastaren",
                    image: "portmastaren_arg.png",
                    script: "Äntligen!! Äntligen är alla stenarna mina! Aldrig igen kommer jag behöva tjäna någon.",
                },
                {
                    name: "Portmastaren",
                    image: "portmastaren_arg.png",
                    script: "Inga fler löjliga väsen som hela tiden ska springa omkring och förstöra mina portar. Aldrig igen behöva se en till korkad människa!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Din magkänsla börjar vända. I ditt huvud hör du Ädelns ord eka.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "VAD HAR DU GJORT, NAIVA MÄNNISKA? MED STENARNA I SIN ÄGO KAN PORTMÄSTAREN FÅ OBEGRÄNSAD MAKT.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren_arg.png",
                    script: "Och det finns ingen som kommer kunna stoppa mig! FRÅN OCH MED NU SKA NI ALLA TJÄNA MIG!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Alla tio stenar, fem från den övre världen och fem från den undre världen svävar nu mellan Portmästarens händer.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Än en gång börjar de lysa i samma färger du såg när du samlade in dem, innan de förenas i en starkt lysande orb.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Sekunder senare håller Portmästarn i en stor krona, prydd av alla tio ädelstenar, som han sätter på sitt huvud. Allting blir svart.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "…",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "…..",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "NAIVA MÄNNISKA. STENARNAS MAKT ÄR INGET ATT LEKA MED. DU HAR BLIVIT MANIPULERAD AV ETT MONSTER. HAN VILL INGET ÄN ATT HA MAKTEN FÖR SIG SJÄLV.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "TILLSAMMANS MED ALLSEENDE ZODIAKEN HAR VI SAMLAT VÅRA SISTA KRAFTER FÖR ATT FÖRVRÄNGA TIDSLINJER..",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: ".. FLÄTA OM TIDENS VÄVNAD OCH ÅTERSTÄLLA VÄRLDEN TILL DET DEN VAR FÖRE ER RESA.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "ERA MINNEN KOMMER I DENNA NYA VERKLIGHET VARA FALSKA, TY INGENTING AV DET SOM VAR HAR ÄNNU HÄNT.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "VÄRLDENS ÖDE LIGGER NU ÅTER PÅ DINA AXLAR. VÄLJ RÄTT DENNA GÅNG. PORTMÄSTAREN FINNS DÄR NI TRÄFFADES FÖRST.",
                }
            ],
            outroB: [ // Ger stenarna till ädeln //! kontroll ifall stenarna är true
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du tar ett kliv tillbaka från den vansinniga Portmästaren. Det här var det alla hade varnat dig för.",
                },
                {
                    name: "Jag",
                    image: "empty.png",
                    script: "Nej. Stenarna ska till den plats där de hör hemma, och det är inte hos dig.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Du ger över alla fem ädelstenar till Ädeln som i sina spegelliknande kroppar förvarar dem.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Karneol vid huvudet, citrin vid halsen, jadeit vid axeln, rosenkvarts vid hjärtat och rubinen vid magen.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Medan du placerade dina stenar hade Portmästaren gjort ett desperat försök att stjäla dem..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: ".. men Ädeln kunde med enkelhet schasa iväg honom med en stark, osynlig kraft som får honom att falla omkull.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: getUsername().toUpperCase() + ". DU HAR HJÄLPT OSS ÅTERFÅ VÅRA KRAFTER.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "ÄVEN OM PORTMÄSTAREN VÄGRAR LÄMNA ÖVER DEN UNDRE VÄRLDENS STENAR, GER DEN ÖVRE VÄRLDEN STENAR OSS KRAFTEN ATT SJÄLVA ÅKALLA DEM.",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Ur den omtöcknade Portmästarens ficka flyger den undre världens stenar fram..",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: ".. och han hinner inte fånga dem i luften innan de placeras i den andra spegelfiguren.",
                },
                {
                    name: "Portmästaren",
                    image: "portmastaren_arg.png",
                    script: "Nej, NEJ! Mina stenar! Jag har slitit så hårt för att vinna min makt! Det får inte sluta så här!! INTE MINA STENAR!!",
                },
                {
                    name: "BSK",
                    image: "empty.png",
                    script: "Desperat försöker Portmästaren springa till Ädeln som återigen knuffar bak honom, denna gången med ännu mer kraft.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "TACK VARE DIG, " + getUsername().toUpperCase() + " KOMMER VÄRLDEN NU KUNNA BÖRJA HELA OCH ÅTERGÅ TILL DET NORMALA.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "ATT STENARNA SEPARERAS ÄR OUNDVIKLIGT. DE MÅ SKAPA MISÄR, MEN UTAN SORG FINNS INGEN LYCKA.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "UTAN MÖRKER FINNS INGET LJUS. VARE SIG DET GÄLLER ETT DYGN ELLER EN HEL LIVSTID SÅ KOMMER DET ALLTID FINNAS HINDER PÅ VÄGEN",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "DU HAR TAGIT DIG ÖVER DESSA HINDER OCH HAR DÄRMED BEVISAT ATT DET FINNS NÅGOT BÄTTRE PÅ ANDRA SIDAN.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: getUsername().toUpperCase() + ". PORTMÄSTAREN KOMMER FÖRSÖKA MED SINA PLANER IGEN. HÖR DU OM NÅGON SOM FÖRSÖKER HJÄLPA HONOM, RÅD DEM ATT LITA PÅ SIN MAGKÄNSLA.",
                },
                {
                    name: "Ädeln",
                    image: "adeln.png",
                    script: "Å HELA UNDRE VÄRLDENS VÄGAR TACKAR VI DIG FÖR DITT MOD, DIN KLOKHET OCH DIN IHÄRDIGHET.",
                }
            ]
        }
    },
}