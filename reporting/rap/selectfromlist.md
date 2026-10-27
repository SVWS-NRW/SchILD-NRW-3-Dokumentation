---
title: "SelectFromList"
---

# SelectFromList

## Beschreibung

```pascal
function SelectFromList(Caption, Optionlist, Default: String): String;
```

Ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste

## Parameter

| Parameter     | Bedeutung                      |
|---------------|--------------------------------|
| `Caption`     | Titel des Dialoges             |
| `Optionslist` | Liste der verfügbaren Optionen |
| `Default`     | voreingestellter Rückgabewert  |

## Rückgabewert

Die gewählte Option

## Beispiel

```pascal
Procedure ReportBeforePrint;
var
  lSchulform : String;
begin
  lSchulform:=SelectFromlist('Bitte Schulform wählen',
  'Gymnasium,Realschule,Hauptschule','Realschule);
  ...
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SelectFromList)
