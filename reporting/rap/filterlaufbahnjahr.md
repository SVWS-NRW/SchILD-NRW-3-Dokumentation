---
title: "FilterLaufbahnJahr"
source_pageid: 41
source_revision: 334
---

# FilterLaufbahnJahr

## Beschreibung

```pascal
procedure FilterLaufbahnJahr(const VonJahr, BisJahr: Integer);
```

Filtert die Laufbahndaten der Schüler für das angegebene Intervall; vonJahr = 0 filtert vom Anfing bis BisJahr bisJahr = 0 filtert von vonJahr bis zum Ende VonJahr = 0 und BisJahr = 0 setzt die Abfrage zurück

## Parameter

| Parameter | Bedeutung             |
|-----------|-----------------------|
| `VonJahr` | Beginn des Zeitraumes |
| `BisJahr` | Ende des Zeitraumes   |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  SetUebersicht(True);
  FilterLaufbahnJahr(2000,2009);
end;
```

```pascal
procedure ReportAfterPrint;
begin
  SetUebersicht(false);
  FilterLaufbahnJahr(0,0);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FilterLaufbahnJahr) · Quellrevision 334.
