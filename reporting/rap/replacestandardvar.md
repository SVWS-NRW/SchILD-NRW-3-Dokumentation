---
title: "ReplaceStandardVar"
---

# ReplaceStandardVar

## Beschreibung

```pascal
function ReplaceStandardVar(aText, aStandardVar: String): String;
```

## Parameter

| Parameter      | Bedeutung                                                             |
|----------------|-----------------------------------------------------------------------|
| `aText`        | Text, in dem die oder der Standard-Platzhalter ersetzt werden sollen. |
| `aStandardVar` | Standardvariable, die ersetzt werden soll                             |

## Beispiel

```pascal
Procedure DetailBeforePrint;
 begin
   ...
   RichText1.Richtext:=ReplaceStandardVar(RichText1.Richtext,'$_NAME$');
   ...
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ReplaceStandardVar)
