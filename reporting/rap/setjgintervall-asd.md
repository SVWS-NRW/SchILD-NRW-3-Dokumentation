---
title: "SetJgIntervall ASD"
source_pageid: 110
source_revision: 550
---

# SetJgIntervall ASD

## Beschreibung

```pascal
function SetJgIntervall_ASD(Const aJahrgangsliste: String): Boolean;
```

## Parameter

| Parameter         | Bedeutung                                                       |
|-------------------|-----------------------------------------------------------------|
| `aJahrgangsliste` | Liste der Jahrgänge, für die eine Übersicht erzeugt werden soll |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   If SetJgIntervall_ASD('EF,Q1,Q2') then
     ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetJgIntervall_ASD) · Quellrevision 550.
