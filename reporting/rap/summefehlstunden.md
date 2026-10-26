---
title: "SummeFehlstunden"
source_pageid: 125
source_revision: 565
---

# SummeFehlstunden

## Beschreibung

```pascal
procedure SummeFehlstunden(aSchuelerId: integer; var FehlStd, uFehlStd: Integer);
```

## Parameter

| Parameter     | Bedeutung                   |
|---------------|-----------------------------|
| `aSchuelerId` | Id des gewünschten Schülers |

## Rückgabewert

FehlStd - Fehlstunden des Schülers im aktuellen Schuljahr, d.h. es wird über die letzten zwei Abschnitte bzw. die letzten vier Quartale summiert. uFehlStd - Unentschuldigte Fehlstunden des Schülers

## Beispiel

```pascal
Var
  lFehl, lUFehl
 begin
   SummeFehlstunden(Schueler['ID'],lFehl,lUFehl);
   Label1.Caption:='FehlStunden: ' + IntoStr(lFehl);
   Label2.Caption:='davon unentschuldigt: ' + IntToStr(lUFehl
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SummeFehlstunden) · Quellrevision 565.
