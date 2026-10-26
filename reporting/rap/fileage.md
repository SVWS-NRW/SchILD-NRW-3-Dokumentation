---
title: "FileAge"
source_pageid: 33
source_revision: 326
---

# FileAge

## Beschreibung

```pascal
function FileAge(const aFilename: String): DateTime;
```

Bestimmt das Dateidatum

## Parameter

| Parameter   | Bedeutung            |
|-------------|----------------------|
| `aFilename` | Dateiname incl. Pfad |

## Rückgabewert

Dateidatum

## Beispiel

```pascal
If FileAge('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') < StrToDate('01.01.2009') then...;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FileAge) · Quellrevision 326.
