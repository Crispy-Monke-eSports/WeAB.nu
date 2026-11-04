# Dokumentmallar för WeAB och dotterbolagen

Detta bibliotek innehåller **endast de tio generella LibreOffice Writer-mallarna från WeAB:s leverans v2.3**. Varje bolag har sin egen färgprofil och identitet, medan dokumentens huvudinnehåll kan anpassas efter ändamål.

## Användning

1. Hämta rätt `.ott`-fil under [generella mallar](../public/dokumentmallar/generella/).
2. Öppna den i LibreOffice Writer och skapa ett nytt dokument från mallen.
3. Fyll i titel, datum och de metadata som är relevanta för dokumentet.
4. Spara det färdiga dokumentet som `.odt` eller exportera till PDF.

En `.ott`-fil är en **mall**, inte ett ifyllt verksamhetsdokument. Ändra inte originalet för varje nytt dokument.

## Generella mallar

| Bolag | Writer-mall |
| --- | --- |
| WeAB | [WeAB](../public/dokumentmallar/generella/01_WeAB_Generell_v2.3.ott) |
| WeRule | [WeRule](../public/dokumentmallar/generella/02_WeRule_Generell_v2.3.ott) |
| WeTravel | [WeTravel](../public/dokumentmallar/generella/03_WeTravel_Generell_v2.3.ott) |
| WeTrade | [WeTrade](../public/dokumentmallar/generella/04_WeTrade_Generell_v2.3.ott) |
| WeLove | [WeLove](../public/dokumentmallar/generella/05_WeLove_Generell_v2.3.ott) |
| WeKill | [WeKill](../public/dokumentmallar/generella/06_WeKill_Generell_v2.3.ott) |
| WeSort | [WeSort](../public/dokumentmallar/generella/07_WeSort_Generell_v2.3.ott) |
| WeGamble | [WeGamble](../public/dokumentmallar/generella/08_WeGamble_Generell_v2.3.ott) |
| WeBox | [WeBox](../public/dokumentmallar/generella/09_WeBox_Generell_v2.3.ott) |
| WeLiveLaughLove | [WeLiveLaughLove](../public/dokumentmallar/generella/10_WeLiveLaughLove_Generell_v2.3.ott) |

## Struktur för framtida utökning

```text
public/dokumentmallar/
  generella/                    # En neutral grundmall per bolag (denna PR)
  gemensamma/                   # Framtida bolagsöverskridande dokumenttyper
    protokoll/                  # Exempel: ett protokoll per bolagsprofil
    rapporter/
  bolagsspecifika/              # Framtida verksamhetsanpassade dokumenttyper
    weab/
    werule/
    wetravel/
    wetrade/
    welove/
    wekill/
    wesort/
    wegamble/
    webox/
    welivelaughlove/
```

Dessa framtida mappar skapas först när faktiska mallar tillkommer. Git spårar inte tomma kataloger.

**Bolagsöverskridande** betyder att dokumenttypen kan användas av flera bolag; varje färdig variant ska ändå behålla **respektive bolags egen grafiska profil**. Exempel: protokoll kan få en WeAB-, WeRule- och WeKill-variant i samma gemensamma kategori.

**Bolagsspecifika** mallar används när dokumenttypen hör till ett särskilt bolags arbete, exempelvis en bygglovshandling för WeRule eller en materialbeställning för WeSort.

## Avgränsning

Denna första import omfattar bara de tio generella `.ott`-filerna från v2.3. Specialmallar, moduler, fiktiva exempel, PDF-förhandsvisningar och övrigt innehåll i leveransarkivet tas **inte** med. Mallfilerna importeras oförändrade.

Webbplatsens innehåll eller navigering ändras inte i denna PR. Filer under `public/` kan hämtas direkt via URL efter publicering; en separat katalogsida kan utvecklas senare.
