---
title: "SetAbitur"
source_pageid: 105
source_revision: 545
---

# SetAbitur

## Beschreibung

```pascal
procedure SetAbitur(IsAbitur: Boolean);
```

## Parameter

| Parameter  | Bedeutung                                                                                                                                                                 |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `IsAbitur` | Boolescher Wert, bei 'True' werden die für das Abitur relevanten Datenquellen (Abifaecher, FHRFaecher, Sprachenfolge etc. aktiviert und beim Schülerwechsel aktualisiert. |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetAbitur(True);
 end;
```

```pascal
Procedure ReportAfterPrint;
begin
  SetAbitur(False);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetAbitur) · Quellrevision 545.
