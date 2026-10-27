---
title: "FileSaveDlg"
---

# FileSaveDlg

## Beschreibung

```pascal
function FileSaveDlg(const aFilename, aInitialDir,
                        aFilter: String): String;
```

## Parameter

| Parameter     | Bedeutung                                                       |
|---------------|-----------------------------------------------------------------|
| `aFilename`   | Name der zu speichernden Datei, evtl. mit Platzhaltern          |
| `aInitialDir` | Startverzeichnis, Leerer String öffnet im aktuellen Verzeichnis |
| `aFilter`     | Dateinamenfilter                                                |

## Rückgabewert

Pfad plus Name der zu speichernden Datei, leerer String, wenn der Dialog abgebrochen wird

## Beispiel

```pascal
Fn:=FileSaveDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FileSaveDlg)
