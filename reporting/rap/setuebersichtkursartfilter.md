---
title: "SetUebersichtKursartFilter"
---

# SetUebersichtKursartFilter

## Beschreibung

```pascal
procedure SetUebersichtKursartFilter(Const aKursartListe: String);
```

Mit dieser Funktion können jetzt alle "Leistungsdatenquellen" (nicht nur in den Übersichten) auf Kursarten gefiltert werden. Dabei ist folgendes zu beachten:

- Verwenden Sie die **schülerbezogenen Kursarten**. Für Leistungskurse lautet der Aufruf zum Beispiel `SetUebersichtKursartFilter( 'LK1,LK2')`. Die allgemeine Kursart `LK` funktioniert hier nicht: `SetUebersichtKursartFilter( 'LK')` ist daher ungeeignet.
- Wenn ein "-" der Liste vorangestellt wird, funktioniert der Filter ausschließend (d.h. SetUebersichtKursartFilter( '-WPII,AGGT') berücksichtigt nur Leistungsdaten, die nicht die Kursart WPII oder AGGT haben)

## Parameter

| Parameter | Bedeutung                                       |
|-----------|-------------------------------------------------|
| `aListe`  | Kommaseparierte Liste der gewünschten Kursarten |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersichtKursartFilter('AGGT,ZUV');
 end;
```

Damit werden in der Leistungsübersicht nur Fächer mit den Kursarten AGGT und ZUV nach Kursbezeichnung unterschieden.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetUebersichtKursartFilter)
