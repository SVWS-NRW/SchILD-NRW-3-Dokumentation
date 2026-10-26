---
title: "SelectFromListEx"
source_pageid: 100
source_revision: 540
---

# SelectFromListEx

## Beschreibung

```pascal
function SelectFromListEx(Caption, Optionlist, Default: String; Trennzeichen: Char): String;
```

Ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste, deren Elemente durch ein beliebiges Zeichen getrennt sind.

## Parameter

| Parameter      | Bedeutung                      |
|----------------|--------------------------------|
| `Caption`      | Titel des Dialoges             |
| `Optionslist`  | Liste der verfügbaren Optionen |
| `Default`      | voreingestellter Rückgabewert  |
| `Trennzeichen` | Trennzeichen der Optionsliste  |

## Rückgabewert

Die gewählte Option

## Beispiel

```pascal
Procedure ReportBeforePrint;
var
  lSchulform : String;
begin
  lSchulform:=SelectFromlistEx('Bitte Schulform wählen',
  'Gymnasium|Realschule|Hauptschule','Realschule,'|');
  ...
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SelectFromListEx) · Quellrevision 540.
