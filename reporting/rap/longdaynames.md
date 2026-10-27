---
title: "LongDayNames"
---

# LongDayNames

## Beschreibung

```pascal
function LongDayNames(aTag: Integer): String;
```

## Parameter

| Parameter | Bedeutung                                      |
|-----------|------------------------------------------------|
| `aTag`    | Nr. des Wochentages (1=Sonntag,..., 7=Samstag) |

## Rückgabewert

Langname des Wochentages

## Beispiel

```pascal
Label27.Caption:=LongDayNames(1); //(*Sonntag*)
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LongDayNames)
