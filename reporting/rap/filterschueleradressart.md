---
title: "FilterSchuelerAdressArt"
source_pageid: 44
source_revision: 337
---

# FilterSchuelerAdressArt

## Beschreibung

```pascal
procedure FilterSchuelerAdressArt(aAdressArt: String);
```

## Parameter

| Parameter    | Bedeutung                                |
|--------------|------------------------------------------|
| `aAdressArt` | Adressart, auf die gefiltert werden soll |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lAdressArt : String;
 begin
   lAdressArt:=SelectAdressArt;
   FilterSchuelerAdressArt(lAdressArt);
 end;
 (*Zu jedem Schüler werden die durch „lAdressArt“ gefilterten Einträge aus den „Allgemeinen
  Adressen“ angezeigt. Auf das Ergebnis kann über die Datenquelle „SchuelerAdressen“
  zugegriffen werden*)
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FilterSchuelerAdressArt) · Quellrevision 337.
