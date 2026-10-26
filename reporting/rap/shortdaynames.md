---
title: "ShortDayNames"
source_pageid: 121
source_revision: 561
---

# ShortDayNames

## Beschreibung

```pascal
function ShortDayNames(aTag: Integer): String;
```

## Parameter

| Parameter | Bedeutung                                      |
|-----------|------------------------------------------------|
| `aTag`    | Nr. des Wochentages (1=Sonntag,..., 7=Samstag) |

## Rückgabewert

Kurzname des Wochentages

## Beispiel

```pascal
Label27.Caption:=ShortDayNames(1); (*Son*)
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ShortDayNames) · Quellrevision 561.
