/**
 * Interna källhänvisningar för faktakontroll av WeKills farmer.
 * Den här filen importeras inte av webbplatsen: varken videolänkar eller
 * kommentarer om spelet ska förekomma i WeAB:s publika berättelse.
 * Videornas kapacitetssiffror beskriver konstruktionerna, inte uppmätt drift
 * i WeAB:s egna anläggningar.
 */
export const farmSources = {
  'wekill-enderman-farm': {
    url: 'https://www.youtube.com/watch?v=e_Pb2kW6ZE0',
    title: 'NEW MINECRAFT 26.3 EASY ENDERMAN XP FARM TUTORIAL | 1 Hit Farm - Super Fast XP (Java & Bedrock)',
    notes: 'BrianCraft anger nivå 0 till 33+ på cirka en minut för konstruktionen. Detta är erfarenhetsnivåer under användning, inte 33 föremål/minut eller en fast XP-poäng/timme. Ingen mätning från WeAB:s anläggning har lämnats. Försök att hämta automatiska undertexter gav HTTP 429; videobeskrivningen är källan.'
  },
  'wekill-hoglin-farm': {
    url: 'https://www.youtube.com/watch?v=LNF3qCX-S9Y',
    title: 'Ending the Minecraft World Hunger by Making a Huge Food Farm in Survival',
    notes: 'Shulkercraft anger över 125 000 föremål/timme för sin fullstora hoglinfarm. Användaren uppger att WeAB:s anläggning är hälften så stor. En linjär halvering ger cirka 62 500 föremål/timme som teoretiskt riktvärde, inte uppmätt resultat; spawnbegränsningar och driftförhållanden kan göra skalningen icke-linjär.'
  },
  'wekill-witch-farm': {
    url: 'https://www.youtube.com/watch?v=sofyZ44Rw_E',
    title: 'Minecraft Witch Farm - Easy and Efficient Build - 1.20+',
    notes: 'Shulkercraft anger över 2 000 föremål/timme; design av FastJaz. Användarens bild av videominiatyren anger per timme: 239 krut, 224 redstone dust, 210 glasflaskor, 229 spindelögon, 224 socker och 225 glowstone dust. Dessa sex poster summerar till 1 351; totalsiffran omfattar också andra drops. Ingen uppmätt takt för WeAB har lämnats.'
  },
  'wekill-sugarcane-farm': {
    url: 'https://www.youtube.com/watch?v=CL_Ue8F2Bw0',
    title: 'Minecraft Sugar Cane Farm - 1300 Per Hour - 1.20+',
    notes: 'Shulkercraft anger 1 300 sockerrör/timme för konstruktionen. Materiallistan omfattar bland annat räls, trattvagnar, pistons och sensorer. WeAB:s egen takt är inte uppmätt. Videon saknar tillgängliga undertexter.'
  },
  'wekill-mobgrinder': {
    url: 'https://www.youtube.com/watch?v=WHPhrNxn5zE',
    title: 'Minecraft 1.21+ Easy All MOB Farm - 7000 items/h',
    notes: 'Shulkercraft anger över 7 000 föremål/timme med tio spawnplan. Exempel på produkter i beskrivningen: krut, benmjöl och tråd. Ingen uppmätt takt för WeAB:s anläggning har lämnats. Videon saknar tillgängliga undertexter.'
  },
  'wekill-shulker-farm': {
    url: 'https://www.youtube.com/watch?v=4KzL5aw4MiE',
    title: 'Minecraft Elegance: Instant Shulker Farm ("Methuselah", Java 1.17+)',
    notes: 'Upphovspersonen anger cirka 236 shulkerskal/timme. Uppskattad livslängd omkring 100 000 skal i genomsnitt, med stor variation. Farmen producerar skal, inte färdiga boxar.'
  },
  'wekill-gold-farm': {
    url: 'https://www.youtube.com/watch?v=P6TanacO3cA',
    title: "ilmango's Gold/XP Farm Tutorial, presenterad av Voomsley",
    notes: 'Videobeskrivningen anger över 1 200 ”Gold”/timme utan enhet och 115 000 XP-poäng/timme. Guldsiffran används som guldtackor i webbtexten. XP fungerar inte i WeAB:s anläggning; videon varnar särskilt för utebliven XP i 1.21.5+ utan rättelse.'
  }
} as const;
