---
title: "SetUebersicht"
source_pageid: 114
source_revision: 554
---

# SetUebersicht

## Beschreibung

```pascal
procedure SetUebersicht(IsUebersicht: Boolean);
```

## Parameter

| Parameter      | Bedeutung                                                                                                                                                                                                                                                                       |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `IsUebersicht` | Boolescher Wert, bei 'True' werden die Leistungsdaten eines Schülers im über SetJgIntervall definierten Zeitintervall in eine Tabellenstruktur eingefügt. Da dieser Vorgang recht zeitaufwendig ist, kann und sollte er durch diese Funktion nur bei Bedarf zugeschaltet werden |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetJgIntervall(12,13);
   SetUebersicht(True);
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetUebersicht) · Quellrevision 554.
