---
title: "SetJgIntervall"
source_pageid: 109
source_revision: 549
---

# SetJgIntervall

## Beschreibung

```pascal
function SetJgIntervall(aStartJg, aEndJg: Integer): Boolean;
```

Diese Funktion ist veraltet. Statt dessen sollte SetJgIntervall_ASD benutzt werden.

## Parameter

| Parameter  | Bedeutung                                                                 |
|------------|---------------------------------------------------------------------------|
| `aStartJg` | Beginn des Jahrgangsintervalles, für das Übersichten erzeugt werden solle |
| `aEndJg`   | Ende des Jahrgangsintervalles, für das Übersichten erzeugt werden sollen  |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   If SetJgIntervall(12,13) then
     ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetJgIntervall) · Quellrevision 549.
