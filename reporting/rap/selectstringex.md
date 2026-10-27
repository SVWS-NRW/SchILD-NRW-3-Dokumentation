---
title: "SelectStringEx"
---

# SelectStringEx

## Beschreibung

```pascal
function SelectStringEx(Prompt, Optionsliste: String; Trennzeichen: Char): String;
```

## Parameter

| Parameter      | Bedeutung                                                                                 |
|----------------|-------------------------------------------------------------------------------------------|
| `Prompt`       | Hinweistext                                                                               |
| `Optionsliste` | Mit Trennzeichen separierte Liste von Daten, die in einem Auswahldialog angezeigt werden. |
| `Trennzeichen` | Beliebig wählbar, darf nur nicht in den zu trennenden Datensätzen vorkommen               |

## Rückgabewert

Gewählte Option.

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lSchulform : String;
 begin
   lSchulform:=SelectStringEx('Bitte Schulform wählen',
  'Gymnasium|Realschule|Hauptschule','|');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SelectStringEx)
