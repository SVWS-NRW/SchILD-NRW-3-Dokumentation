---
title: "LoadVermerkeVonBis"
source_pageid: 65
source_revision: 493
---

# LoadVermerkeVonBis

## Beschreibung

```pascal
function LoadVermerkeVonBis(Const aVermerkart, aDelimiter, aStart, aEnde: String; mitDatum: Boolean): String;
```

## Parameter

| Parameter     | Bedeutung                                                                                                                                                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `aVermerkart` | Gewünschte Vermerkart, wie im Katalog „Vermerkarten definiert.                                                                                                                                           |
| `aDelimiter`  | Trenner für die Vermerke. Hier ist eine beliebige Zeichenkette zulässig. Besondere Bedeutung haben '\t ' bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n' bzw. '\N' (fügt einen Zeilenvorschub ein). |
| `aStart`      | Beginn des Suchzeitraumes                                                                                                                                                                                |
| `aEnde`       | Ende des Suchzeitraumes                                                                                                                                                                                  |
| `mitDatum`    | Falls true, wird jedem Vermerk das Vermerkdatum vorangestellt                                                                                                                                            |

## Rückgabewert

Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.

## Beispiel

```pascal
 Procedure DetailBeforePrint;
 begin
   Memo1.Text:=LoadVermerkeVonBis('Betreuung','\n','01.08.2011','31.01.2012',True);
 end;
(*Ergebnis: Alle Betreuungs-Vermerke, die im ersten Halbjahr 2011/12
  eingetragen wurden, werden untereinander in einem Memofeld
  dargestellt.*)
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LoadVermerkeVonBis) · Quellrevision 493.
