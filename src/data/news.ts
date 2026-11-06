import { arenaPhotos } from './arena.ts';
import { martaEkPressRelease } from './press-marta-ek.ts';
import { weRuleMandatePressReleases } from './press-werule-mandate.ts';
import { wedgsProposalPressRelease } from './press-wedgs-proposal.ts';

/**
 * Fiktiva pressmeddelanden från WeAB:s Minecraft-rollspel.
 * Datumen avser publiceringsdatum inom den fiktiva koncernens nyhetsarkiv.
 */
export interface NewsItem {
  slug: string;
  publishedAt: string;
  type: string;
  title: string;
  summary: string;
  body: string[];
  image: string;
  alt: string;
}

/** Endast centrala, i koncernhistorien dokumenterade händelser. */
export const news: NewsItem[] = [
  wedgsProposalPressRelease,
  ...weRuleMandatePressReleases,
  martaEkPressRelease,
  {
    "publishedAt": "2051-10-23",
    "slug": "huvudstadens-arena",
    "type": "HUVUDSTADEN",
    "title": "Huvudstadens arena används för Hungerspelen",
    "summary": "Två bybor från varje by kämpar till döden i Huvudstadens arena. WeAB får inkomster från Hungerspelen, inte från något skattesystem.",
    "image": arenaPhotos[0].src,
    "alt": arenaPhotos[0].alt,
    "body": [
      "Huvudstadens stora blåvita arena har ett mycket tydligt ändamål. Här hålls Hungerspelen, där två bybor från varje by möter deltagarna från de övriga byarna i strider till döden. Den tidigare allmänna beskrivningen av arenan som en plats för distriktskamp och ära har därför varit ofullständig. Det är ingen vanlig idrottstävling, inget vänskapligt möte och ingen scen där deltagarna kan räkna med att återvända till sina hem när matchen är över. WeAB väljer trots detta att behandla verksamheten som ett organiserat publikt arrangemang.",
      "Byarna förser Hungerspelen med två deltagare var. Den ordningen är densamma oavsett hur stor en by är eller hur dess invånare ser på att bli representerade. WeAB ansvarar för arenan och dess användning. För koncernen innebär formatet att varje by får en tydligt definierad roll i arrangemanget. För deltagarna innebär det att deras liv är den faktiska insatsen. Det sistnämnda har tidigare fått för lite utrymme i koncernens offentliga beskrivningar, som gärna har uppehållit sig vid arkitektur och gemensamma symboler.",
      "Arenans läktare, portar och passager har byggts för att människor ska kunna följa vad som händer på stridsytan. De blåvita byggnadsdelarna markerar anläggningens plats i Huvudstaden. Publiken och deltagarna befinner sig på olika sidor av samma arrangemang. Besökarna kan betrakta kampen från läktarna, medan byborna som skickats till Hungerspelen möter motståndare som också slåss med livet som insats. Det är en fördelning av utrymme som gör publikens upplevelse enkel att planera och deltagarnas situation svårare att beskriva som enbart underhållning.",
      "Hungerspelen utgör dessutom en av WeAB:s nuvarande inkomstkällor. Koncernen får inkomster från arrangemanget, men publicerar i den här redogörelsen inga belopp och inga uppgifter om hur intäkterna fördelas mellan olika aktiviteter kring arenan. Det finns inte heller anledning att hitta på vinnarnamn, datum eller resultat för enskilda spel. Vad som är fastslaget är verksamhetens art: två bybor från varje by kämpar till döden, och ekonomiskt värde från arrangemanget går till den koncern som står bakom arenan.",
      "Den ekonomiska bakgrunden behöver beskrivas korrekt. WeAB har i dagsläget inget skattesystem. Koncernens inkomster kommer från exploateringen av byborna inom WeLiveLaughLove, från WeGambles spelverksamhet och från Hungerspelen. Skatter är alltså inte den ordning som i nuläget försörjer koncernen. Det gör inte modellen mindre sammanhållen, sett ur ägarens perspektiv: koncernen får redan inkomster från flera delar av invånarnas vardag utan att behöva begära in en enda officiellt beslutad skatt.",
      "Inom WeLiveLaughLove omsätts kontrollen över bybornas boende och tillvaro i ekonomiskt värde för ägaren. I WeGamble bidrar spelverksamheten med inkomster. Den planerade kasinoön WeGamble Island är däremot fortfarande under uppbyggnad och får inte beskrivas som om dess framtida lokaler redan öppnat. Huvudstadens arena fyller en annan funktion genom Hungerspelen. Dessa verksamheter har olika fasader och olika uppdrag, men de visar alla hur WeAB har ordnat så att invånarnas liv och aktiviteter även kan tjäna koncernens intressen.",
      "I koncernens berättelse om Huvudstaden har arenan tidigare gärna framställts som ett monument över byarnas gemenskap. Det är en formulering som kräver förtydligande. Gemenskapen består här i att varje by lämnar två deltagare till samma dödliga tävling. Deras hemorter kan följas från läktarna och nämnas i koncernens information, men själva striderna är inte symboliska. WeAB har anledning att vara noggrant med den skillnaden när en besökare vill veta vad den stora anläggningen faktiskt är byggd för.",
      "Frågan om beskattning har aktualiserats genom ett separat förslag från ezzo13337 om DGS, Diamant- och gruvskatteverket. Store-W och koncernledningen vill se namnet WeDGS om förslaget skulle införlivas i WeAB. Inget sådant beslut har fattats, och inget skatteuttag har införts. Arenans inkomster ska därför inte förklaras med någon framtida avgift eller myndighet. Hungerspelen ingår redan i koncernens ekonomiska verklighet, medan DGS fortfarande är ett underlag för ledningens prövning.",
      "WeAB ser det som ett förvaltningsansvar att skilja befintlig verksamhet från sådant som bara diskuteras. Huvudstadens arena finns och används för Hungerspelen. Två bybor från varje by kämpar där till döden. Koncernen har inkomster från arrangemanget. Däremot har inga särskilda framtida omgångar, resultat, publikpriser eller exakta inkomstsummor fastställts i det material som offentliggörs här. Beskrivningens tydlighet är inte avsedd som en inbjudan till insyn i varje ekonomisk detalj.",
      "Den som besöker arenan möter en påkostad byggnad med läktare och tydlig avgränsning mellan publik och deltagare. Den som läser WeAB:s ekonomiska översikt möter ett annat slags avgränsning: inkomsterna hör till koncernen, medan följderna av de dödliga striderna främst drabbar de byar som skickar sina invånare. WeAB anser att det är viktigt att båda dessa förhållanden kan beskrivas korrekt. Att beskriva dem korrekt är dock inte detsamma som att låta byarna besluta om en annan ordning."
    ]
  },
];
