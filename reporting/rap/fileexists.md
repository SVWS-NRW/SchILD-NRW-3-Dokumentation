---
title: "FileExists"
source_pageid: 34
source_revision: 327
---

# FileExists

## Beschreibung

```pascal
function FileExists(const aFilename: String): Boolean;
```

Prüft, ob eine Datei existiert

## Parameter

| Parameter   | Bedeutung            |
|-------------|----------------------|
| `aFilename` | Dateiname incl. Pfad |

## Rückgabewert

True, falls die Datei existiert, sonst False

## Beispiel

```pascal
If FileExists('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') then...;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FileExists) · Quellrevision 327.
