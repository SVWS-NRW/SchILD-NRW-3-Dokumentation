---
title: "FilterErzieherfunktion"
source_pageid: 39
source_revision: 332
---

# FilterErzieherfunktion

## Beschreibung

```pascal
procedure FilterErzieherfunktion(const aFunktion: String);
```

## Parameter

| Parameter   | Bedeutung                                                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------------------------------------|
| `aFunktion` | Schulinterne Funktion, auf die gefiltert werden soll. Aus den Erziehern werden die Einträge mit der gewählten Funktion ausgewählt. |

## Beispiel

```pascal
Procedure ReportBeforePrint;
var
  lFunktion : String;
begin
  lFunktion:=SelectErzFunktion;
  FilterErzieherfunktion(lFunktion);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FilterErzieherfunktion) · Quellrevision 332.
