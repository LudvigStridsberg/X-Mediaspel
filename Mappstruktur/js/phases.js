const userName // här ska username hämtas från STATE? Används i dialogen

const phases = {
    one: {
        gamePhp: false, // Ev bildspelet???
        backgroundImage: "",
        targetLocation: { // Utblick/insikt-statyn vid posthusplatsen
            latitude: 0,
            longitude: 0
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "",
                    script: "Du tittar på den stora kolossen med ett hål i mitten. Nu då? Du tog dig hit men det verkar inte vara någon här.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Precis när du funderar på att gå så ser du en mörk skepnad ta form ett par meter framför dig.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Jag visste att du skulle klara det, " + userName + ".",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Hur gjorde du det där, vem är du och HUR vet du mitt namn!?",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Du lyckades vara på rätt plats vid rätt tillfälle. Sen har du visat dig värdig genom att lösa min gåta. Därför har haft ett öga på dig.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Jag är portmästaren av den undre världen, men de flesta brukar kalla mig Gatekeepern. Nu behöver jag din hjälp.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Min hjälp? Med vad?",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Det jag kommer berätta för dig är det ingen levande människa som vet. Så lyssna noga.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Du föddes som en människa i den övre världen. Ni har en teknologi, industri och.. mänsklighet.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Det ni inte har någon aning om är att det finns en parallell värld som lever i samspel med er egen. Detta är den undre världen, och den har sin kärna i Malmu.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Malmu?",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Malm under. Malm-ö betyder egentligen Malm över. Ni människor tycker det är lika roligt varje gång.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Den undre världen drivs av magi, fantasi och kreativitet från den övre världen, och ju mer ni ger, desto mer får ni tillbaka. Om världarna är i balans så att säga.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Och om de inte är i balans?",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Obalans kan få stora konsekvenser. Det är därför du är här.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Balansen är inte bara beroende av flödet av fantasi mellan världarna, utan det finns en till, stor kraft som påverkar våra dimensioner.",
                } // Här kommer bildspel med förklaring/text/info
            ],
            outro: [
                {
                    name: "Jag",
                    image: "",
                    script: "Och de här konsekvenserna är?",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Ingen konst, inga fantastiska historier, ingen musik, inga skratt. Bara en dyster, själskrossande levnad.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Det hugger till av ren och skär igenkänning.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Jag har redan samlat de fem första stenarna som finns i den undre världen, men jag kan inte samla dem i den övre.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "De är för den sakens skull du behövs. Du har visat dig värdig så du behöver inte vara orolig.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Men jag..",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Inga men. Vi måste skynda oss. Jag har mina misstankar om var vi hittar vissa stenar, men vi kan behöva fråga runt bland andra väsen.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Möt mig vid fontänen på stortorget. Och var försiktig med vem du pratar med.",
                } // I spelarens inventory kan hen nu se kartan (en svg-bild) och första platsen är markerad. Klickar spelaren på platsen så står det en snabb recap om vad som hänt och behöver göras
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
                    script: "Du står på torget och ser dig omkring för att se om du får syn på Portmästarn. Torget myllrar av fantasiväsen.",
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
                    name: "Portmästarn",
                    image: "",
                    script: "Så du har funnit Djurpojken.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du hoppar till av att Portmästarn står bakom dig. När kom han hit!?",
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
                    script: "Du ser Portmästarn försvinna i vimlet av fantasiväsen bakom pojken.",
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
    three: {
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
                    script: "Du märker att din hand är knuten runt något hårt. Du öppnar upp dina fingrar och ser i handflatan en ädelsten - rosenkvarts. <br> Är detta ädelstenarna Portmästarn pratade om?",
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
                    script: "Du, vad du nu heter..",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "jag heter" + userName + ".",
                },
                {
                    name: "Hipp",
                    image: "",
                    script: userName + ", du verkar ju ha en talang för att hjälpa folk. Gå dit och se om du inte kan göra något åt deras katzenjammer.",
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
        targetLocation: { // Orkestern, Stortorget
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
                    script: "Frustrerade och uppgivna står de i en klump mitt på gatan, och du kan se bandledaren stå för sig själv en bit bort med ryggen mot sina medlemmar.",
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
                    script: "En av bandmedlemmarna suckar ljudligt, en annan skakar på huvudet med ett snett leende, och de andra två brister ut i skratt.",
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
                    script: "Bandledaren tackar igen och återgår till sina medlemmar. I samma stund kan du återigen se Portmästarn. <br> Han verkar se dig med och rusar fram.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Var har du varit!?",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag har hjälpt några väsen med deras problem. Jag tror det är nyckeln till att samla ihop stenarna, jag har två stycken!",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Det kan vara farligt att vara en ensam människa i den undre världen. Det må ha gått väl, men nästa gång kanske du inte har sådan tur...",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Det var naivt av mig att lämna dig. Från och med nu reser vi tillsammans.",
                },
                {
                    name: "Portmästarn",
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
                    script: "Portmästarn tittar ut över havet av väsen på gatan och svarar inte.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag har också min misstanke om att en av stenarna finns där.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Portmästarn sneglar mot dig.",
                },
                {
                    name: "Portmästarn",
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
    five: {
        gamePhp: "", // Mini game med stjärntecken
        backgroundImage: "",
        targetLocation: { // Vid kanalen, ledsna gubben statyn
            latitude: 0,
            longitude: 0
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "",
                    script: "Med tanke på bandledarens beskrivning bekräftar ljudet av snyftande att ni kommit rätt. Han är förvånansvärt lik Gösta Ekman. Undrar om någon sagt det till honom?",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "*Snyft* “Vil-vilka är ni?",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Jag heter" + userName + ", det här är Portmästarn..",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Han vet vem jag är.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "..och jag har kommit för att ge en present till dig. Jag hoppas den kan muntra upp dig",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du räcker fram fotografiet, med motivet föreställande Ledsna Gubben ihop med orkestern riktat mot marken, för att säkerställa att han tar emot det.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Ledsna Gubben tar bilden och tittar på den. Om hans läpp darrade innan är det ingenting jämfört med hur den skakar nu",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Bandledaren ville att du skulle ha den här som ett minne.",
                }, // Bilden lämnar inventory
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "Åhh! Mina fina vänner! Hur kunde jag vara så dum och lämna orkestern!?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Gubben brister ut i storgråt. <br> Portmästarn, vars kroppsspråk skriker “OBEKVÄM”, vänder sig och tittar ut över kanalen. Du får lösa det här på egen hand.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Självklart kommer de förlåta dig! De sade till mig att de saknar dig!",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "*Snyft* “Är det så?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Även om gubbens tårar fortsätter att rinna så kommer hulkningarna alltmer sällan. Han verkar samla sig en smula.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "Det var så länge sedan jag spelade. De kanske inte ens vill ha med mig i orkestern.",
                },
                {
                    name: "Jag",
                    image: "",
                    script: "Det kan knappast bli värre än vad det nyss var. De behöver nog dig mer än du tror.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Gubben torkar sina tårar.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "Du kanske har rätt… Jag måste tillbaka och prata med dem! Tack för fotografiet. Finns det något jag kan ger er i gengäld?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Portmästarn vänder sig återigen mot gubben. Den plötsliga rörelsen får gubben att ta ett halv kliv tillbaka. Han ser nästan rädd ut. Varför så stark reaktion?",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Jag söker Zodiaken. Han har bytt position igen.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Gubben samlar sig och harklar till.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "Medan jag vilset vandrat i området så mötte jag Zodiaken, och den intresserade mig genast.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "Den lyssnade på mina problem och gav mig de här stjärntecknena. De ligger dock helt huller om buller…",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Åh nej, han börjar bli upprörd igen. Gubben tar fram ett bräde där små brickor med stjärntecken på ligger i oordning.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "... och jag vet inte hur jag ska få rätt på dem. Åhh den litade ju på mig! Jag måste sortera dem rätt! Kan ni förstå er på det här!?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Gubben räcker fram brädet med brickorna. Kan vi lösa det här?",
                }, // Knappen för spel lyser till
            ], // När spelet klaras blir nästa del tillgänglig
            outro: [
                {
                    name: "BSK",
                    image: "",
                    script: "Gubben tittar upp på dig. Tårarna fortsätter att rinna, men denna gången verkar det vara av glädje.",
                }, // Ledtråd till nästa location kommer i dialogen nedan
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "Tack så mycket, det var verkligen snällt av dig. Nu känner jag hur <b>lugnet</b> sprider sig i kroppen. När jag tänker på att en <b>förening</b> av <b>15</b> stjärntecken är gjorda är jag säker på att du hittar <b>gatan</b> som du letar efter.",
                },
                {
                    name: "Ledsna Gubben",
                    image: "",
                    script: "Nu får ni ursäkta mig! Jag ska öva på mitt instrument innan jag går tillbaka till mina vänner i orkestern!",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Återigen ser du samma ljusstrålar dansa, denna gång i en grön färg. Stenen känns len i din hand, och du tittar på den.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Stenens mitt är så mörkt grön att det nästan ser svar ut, medan de spräckliga kanterna är i en ljusare nyans. Detta måste vara en jadeit.",
                }, // Stenen läggs till i inventory - lyser till på iconen
                {
                    name: "BSK",
                    image: "",
                    script: "Du utbyter en förstående blick med Portmästarn. Han upprepar gubbens ord långsamt.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Nu känner jag hur <b>lugnet</b> sprider sig i kroppen. När jag tänker på att en <b>förening</b> av <b>15</b> stjärntecken är gjorda är jag säker på att du hittar <b>gatan</b> som du letar efter.",
                },
            ]
        }
    },
    six: {
        gamePhp: false,
        backgroundImage: "",
        targetLocation: { // Föreningsgatan 15, zodiac-statyn
            latitude: 0,
            longitude: 0
        },
        dialogue: {
            intro: [
                {
                    name: "BSK",
                    image: "",
                    script: "När du och Portmästarn kommer fram till er destination kan ni känna en enorm presens. Ju närmare ni går, desto mer påtagliga blir de lågfrekventa ljudvågorna som får hela atmosfären att pulsera.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Det råder ingen tvekan om vem som är källan till den bultande luften. Det ni ser är den så kallade Zodiaken.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Ah, herr Portmästare. Så trevligt att se er igen, jag har väntat er och ert sällskap.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Håren reser sig i nacken när Zodiaken talar. Det är som att orden tar en genväg och landar rakt in i huvudet, utan att passera öronen först. Lite som att du nu delar med av ditt medvetna till Zodiaken. Försök tänka rena tankar.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Jag förväntar mig inget mindre av er, ers allvetande. Som ni kanske redan förutspått så har jag två frågor.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Det är som ni säger, och jag kan redan nu svara på er första fråga; jag förblir neutral.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Jag må se genom vävnaden av tiden, men inte ens jag besitter trotsighet nog att bekämpa ödet.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Jag vet vad som kommer hända med er, herr Portmästare. Om ni kommer lyckas eller ej, faller sig ödet berätta för er när det är dags. Återigen, mer än så tillåts jag inte säga.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Portmästarn verkar irriterad men samtidigt återhållsam, som att han vet att det inte finns något mer han kan göra",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "För er andra fråga bör ni söka er mot älvornas slott.",
                },
                {
                    name: "Portmästarn",
                    image: "",
                    script: "Ers allvetande, med all respekt, där finns inget mer än ruiner nu för tiden. Slottet har varit borta sedan tusentals år tillbaka.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Javisst vet jag det. Men så länge ruinerna står där, har slottet endast dött sin första död. Minnena från förr lever kvar, och ser ni inte dem, bör ni leta ännu noggrannare.",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Portmästarn ser fundersam ut.",
                }
            ],
            outro: [
                {
                    name: "Zodiaken",
                    image: "",
                    script: userName + ", att ni har tagit er an detta uppdraget är mycket nobelt av er. Er tillit till herr Portmästare är beundransvärd.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Oroa er inte, herr Portmästare kan inte höra oss.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Jag ser att ni samlat på er tre stenar. Imponerande. De bär på en mycket större makt än ni tror.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "När stenarna glider ifrån varandra, dras de till misär. Ni har löst problem för att åkalla dem, inte sant?",
                },
                {
                    name: "BSK",
                    image: "",
                    script: "Du vet inte ens om du behöver svara på den frågan.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Som ni vet kan stenarnas orsaka katastrofer i båda våra världar när de glider ifrån varandra. Misären som orsakas av stenarna spär sedan på deras separation allt mer och skapar en ond cykel",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Situationen blir alltså bara värre ju längre den tillåts att fortlöpa.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Stenarna behöver placeras på sina rätta platser i både den övre och undre världen. Först då kommer världarna sakta att helas igen.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Jag kan se genom tid och rum. Det förflutna, nutiden och framtiden. Jag kan inte berätta om vad som kommer hända. Men jag kan ge er ett råd.",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Lika viktigt som att lyssna på andra, är att lyssna på den egna magkänslan.",
                },
                {
                    name: "Portmästaren",
                    image: "",
                    script: "Vad säger ni till" + userName + ", ers allvetande?",
                },
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Inget av vikt för er, herr Portmästare. Jag ska hjälpa er på er resa.",
                }, // Nedan kommer en ledtråd till nästa location
                {
                    name: "Zodiaken",
                    image: "",
                    script: "Det ni söker finner ni på platsen där alla goda ting är tre. <br> Följ solnedgångens riktning, där pelarna ståtligt minner om en tid nu svunnen. <br> Där finns den älva vars två syskon fortsatt utan henne, <br> Ty hon är fast mellan fyra hörn.",
                },
            ]
        }
    },
}