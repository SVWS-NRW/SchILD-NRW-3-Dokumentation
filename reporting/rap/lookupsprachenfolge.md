---
title: "LookupSprachenfolge"
---

# LookupSprachenfolge

## Beschreibung

```pascal
Function LookupSprachenfolge(aStatistikKrz: String):Boolean;
```

## Parameter

| Parameter       | Bedeutung                            |
|-----------------|--------------------------------------|
| `aStatistikKrz` | Statistikkürzel des gesuchten Faches |

## Rückgabewert

Wahr, wenn das Fach existiert, sonst Falsch

## Beispiel

Hinweis: Damit diese Funktion genutzt werden kann, muss vor dem Druck (sinnvollerweise im Ereignis ReportBeforePrint) die Funktion SetAbitur mit dem Parameter „True“ und nach dem Druck (in ReportAfterPrint) mit dem Parameter „False“ aufgerufen werden.

```pascal
Procedure DetailBeforePrint;
   begin
     Checkbox1.Checked:=LookupSprachenfolge('L7')
   end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LookupSprachenfolge)
