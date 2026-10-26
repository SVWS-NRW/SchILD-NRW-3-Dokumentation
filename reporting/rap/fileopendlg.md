---
title: "FileOpenDlg"
source_pageid: 35
source_revision: 328
---

# FileOpenDlg

## Beschreibung

```pascal
function FileOpenDlg(const aFilename, aInitialDir,
                              aFilter: String): String;
```

## Parameter

| Parameter     | Bedeutung                                                       |
|---------------|-----------------------------------------------------------------|
| `aFilename`   | Name der zu öffnenden Datei, evtl. mit Platzhaltern             |
| `aInitialDir` | Startverzeichnis, Leerer String öffnet im aktuellen Verzeichnis |
| `aFilter`     | Dateinamenfilter                                                |

## Rückgabewert

Pfad plus Name der zu öffnenden Datei, leerer String, wenn der Dialog ab

## Beispiel

```pascal
Fn:=FileOpenDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FileOpenDlg) · Quellrevision 328.
