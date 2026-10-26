---
title: "JahrgangsListe"
source_pageid: 54
source_revision: 482
---

# JahrgangsListe

## Beschreibung

```pascal
function JahrgangsListe(Const aEndJg: String; const aDiff: Integer): String;
```

## Parameter

| Parameter | Bedeutung                       |
|-----------|---------------------------------|
| `aEndJg`  | Letzter Jahrgang des Intervalls |
| `aDiff`   | Abstand zum Startjahrgang       |

## Rückgabewert

Kommaseparierte Liste der Jahrgänge

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lJahrgaenge : String;
 begin
   lJahrgaenge:=JahrgangsListe('Q2',3); //Ergebnis: '08,09,EF,Q1'
   SetJgIntervall_ASD(lJahrgaenge);
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=JahrgangsListe) · Quellrevision 482.
