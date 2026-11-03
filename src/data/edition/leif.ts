import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const leifArticles = makeMagazineArticles('leif-klover', 45, [
  {
    "slug": "framtida-arbete-borjar-tidigt",
    "format": "analys",
    "title": "Ett kommande personalbehov börjar långt före anställningen",
    "summary": "WeLove visar hur framförhållning kan förändra relationen mellan nya medarbetare och färdiga verksamheter.",
    "image": "/images/welove-headquarters.webp",
    "scene": "När en ny arbetsplats står färdig uppstår frågan vem som ska utföra uppgifterna där. Den frågan är betydligt lättare att lösa om den ställs tidigt.",
    "context": "WeLove arbetar med långsiktig personalförsörjning och samverkar med andra bolag som behöver specialiserade invånare i sin verksamhet.",
    "tension": "Det finns förstås individuella behov att ta hänsyn till. Men utan en övergripande plan blir varje kommande förändring en ny och ibland onödigt brådskande situation.",
    "ending": "Jag ser framförhållning som ett sätt att skapa större trygghet för alla inblandade. Nästa steg är lättare när det redan har en tydlig plats i organisationen."
  },
  {
    "slug": "haapalainen-och-rutinerna",
    "format": "intervju",
    "title": "Tre arbetsfrågor till WeLoves driftfunktion",
    "summary": "Långsiktig planering kräver både dagliga rutiner och ett tydligt svar på vem som ansvarar för driften.",
    "image": "/images/welove-breeder.webp",
    "scene": "Jag började med frågan om hur en verksamhet förbereder sig för ett behov som ännu inte uppstått. Det enkla svaret är att planeringen måste ske innan behovet blir akut.",
    "context": "Haapalainen är driftansvarig för WeLove. I det uppdraget ingår att skapa kontinuitet så att verksamhetens rutiner går att följa över tid.",
    "tension": "En följdfråga gäller hur olika bolags önskemål vägs samman. Det blir viktigt när handelsverksamhet och boendemiljöer behöver utvecklas i olika takt.",
    "ending": "Det viktiga är att ansvar och nästa steg förblir tydliga. Personalförsörjning fungerar bäst när den inte behöver improviseras varje gång en verksamhet växer."
  },
  {
    "slug": "en-arbetsplats-utan-overraskningar",
    "format": "kronika",
    "title": "Den bästa första arbetsdagen är väl förberedd",
    "summary": "Den som redan känner till sin funktion kan ägna mindre energi åt osäkerhet och mer åt det som faktiskt ska göras.",
    "image": "/images/wetrade-hall.webp",
    "scene": "En första arbetsdag innehåller alltid nya intryck. Det blir genast lättare om plats, uppgifter och kontaktvägar inte behöver uppfinnas på nytt under morgonen.",
    "context": "WeTrade behöver specialiserade handlare, och WeLove arbetar med förutsättningarna för framtida personal. När de två funktionerna möts kan mycket förberedas i god tid.",
    "tension": "Det är rimligt att människor har egna frågor om hur vardagen ska fungera. Just därför är en tydlig organisation till hjälp när frågorna ska få ett begripligt svar.",
    "ending": "En väl planerad arbetsstart behöver knappast kännas storslagen. Det viktiga är att arbetet kan börja utan att någon står och väntar på att grundläggande saker ska bestämmas."
  },
  {
    "slug": "boende-och-arbete-i-samma-plan",
    "format": "analys",
    "title": "Boende och arbete kan inte planeras var för sig",
    "summary": "När bostadsområden och verksamheter utvecklas samtidigt minskar risken att nya behov hamnar mellan två ansvariga.",
    "image": "/images/welivelaughlove-compound.webp",
    "scene": "En ny arbetsplats påverkar mer än den som arbetar där. Resväg, boende och vardagliga rutiner påverkas av var verksamheten ligger och hur den används.",
    "context": "WeLove och WeLiveLaughLove har olika uppgifter, men båda behöver förstå hur människor och funktioner kommer att fördelas över tid.",
    "tension": "Om boende planeras utan hänsyn till arbete kan nästa förändring kräva onödiga transporter. Om arbete planeras utan boende blir följden lika besvärlig.",
    "ending": "Jag föredrar en gemensam plan som kan justeras i god tid. Det är en lösning som sällan får applåder, men som märks varje vanlig arbetsdag."
  },
  {
    "slug": "vardagens-ordning-i-sektion-tre",
    "format": "lokalt",
    "title": "En tydlig vardag är också en boendefråga",
    "summary": "WeLiveLaughLoves arbete med gemensamma rutiner påverkar både de boende och verksamheterna i närheten.",
    "image": "/images/welivelaughlove-section-3-resident.webp",
    "alt": "Invånare vid trähusen i Sektion 3 under kvällstid",
    "scene": "I ett nytt bostadsområde är det de små vardagliga frågorna som brukar komma först. Var går man, vart vänder man sig och vem ansvarar för nästa åtgärd?",
    "context": "WeLiveLaughLove arbetar med strukturen i Sektion 3 och andra miljöer. Gemensamma kontaktvägar gör det lättare att ta hand om sådant som annars kan fastna mellan grannar.",
    "tension": "Det är förståeligt att alla inte vill ha samma lösning. Men om varje önskemål kräver en helt ny ordning blir vardagen snart svårare även för den som bad om förändringen.",
    "ending": "Jag tror därför på rutiner som går att förklara utan långa förhandlingar. När de fungerar kan människor ägna sin tid åt sådant som är viktigare än själva rutinen."
  }
] satisfies StorySeed[]);
