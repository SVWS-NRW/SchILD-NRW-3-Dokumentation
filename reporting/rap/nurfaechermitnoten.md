---
title: "NurFaecherMitNoten"
source_pageid: 74
source_revision: 502
---

# NurFaecherMitNoten

## Beschreibung

```pascal
procedure NurFaecherMitNoten(const Value: Boolean);
```

## Parameter

| Parameter | Bedeutung                                                                  |
|-----------|----------------------------------------------------------------------------|
| `Value`   | True, wenn nur Leistungsdaten mit eingetragenen Noten geholt werden sollen |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   NurFaecherMitNoten(True)
 end;
```

z.B. in einem Zeugnis: Fächer ohne Noten erscheinen nicht auf dem Zeugnis. Damit Übersichten etc. funktionieren, sollte diese Option in ReportAfterPrint wieder zurückgesetzt werden

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=NurFaecherMitNoten) · Quellrevision 502.
