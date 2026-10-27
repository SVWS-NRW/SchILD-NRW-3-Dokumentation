---
title: "LoadFromFile"
---

# LoadFromFile

## Beschreibung

```pascal
function LoadFromFile(aFilename: String): String;
```

## Parameter

| Parameter   | Bedeutung                                  |
|-------------|--------------------------------------------|
| `aFilename` | Pfad + Dateiname der zu ladenden Textdatei |

## Rückgabewert

Inhalt der Textdatei

## Beispiel

```pascal
lFilename:=FileOpenDlg('*.rtf','c:\Texte','Richtexte|*.rtf|Alle Dateien|*.*');
RichText1.RichText:=LoadFromFile(lFilename')
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LoadFromFile)
