---
title: "SelectAdressArt"
source_pageid: 95
source_revision: 535
---

# SelectAdressArt

## Beschreibung

```pascal
function SelectAdressArt: String;
```

Diese Funktion bietet alle im Feld „AdressArt“ des Kataloges „Adressarten“ gefundenen Einträge zur Auswahl an.

## Rückgabewert

Adressart.

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lAdressArt : String;
 begin
   lAdressArt:=SelectAdressArt;
   FilterAdressArt(lAdressArt);
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SelectAdressArt) · Quellrevision 535.
