---
title: "DateinameFuerDVAuswaehlen"
---

# DateinameFuerDVAuswaehlen

## Beschreibung

```pascal
procedure DateinameFuerDVAuswaehlen;
```

Vor dem Speichern einer PDF-Ausgabe in der Dokumentenverwaltung können Sie mit dieser Prozedur einen eigenen Dateinamen abfragen. Der eingegebene Name ersetzt den Namen der Reportvorlage im schülerspezifischen Dateinamen. Der Aufruf erfolgt typischerweise im Ereignis `ReportBeforePrint`. Das ist zum Beispiel für Serienbriefe hilfreich, deren Text erst beim Start aus einer RTF-Datei geladen wird.

## Rückgabewert

Beispiel: Zur Vorlage `RTFBrief.rtm` würde normalerweise eine Datei wie `RTFBrief_2013_05_24.pdf` abgelegt. Der Zweck des Briefes ist daraus nicht erkennbar. Mit `DateinameFuerDVAuswaehlen` kann stattdessen **Hausaufgabenmahnbrief** eingegeben werden. Die abgelegte Datei heißt dann `Hausaufgabenmahnbrief_2013_05_24.pdf`. Das Datum dient hier nur als Beispiel.

## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
  DateinameFuerDVAuswaehlen;
 end;
```

Hinweis: Wenn der RTF-Text aus einer externen Datei geladen wird, so wird deren Dateiname verwendet, eine manuelle Eingabe erfolgt dann nicht.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=DateinameFuerDVAuswaehlen)
