---
title: "SelectAdressName"
source_pageid: 96
source_revision: 536
---

# SelectAdressName

## Beschreibung

```pascal
function SelectAdressName: String;
```

Diese Funktion bietet alle im Feld „Name“ der „Allgemeinen Adressen“ gefundenen Einträge zur Auswahl an.

## Rückgabewert

Adressbestandteil „Name“

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
  lAdresse : String;
 begin
  lAdresse:=SelectAdressName;
  FilterAdresse(lAdresse);
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SelectAdressName) · Quellrevision 536.
