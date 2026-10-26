---
title: "NotenDurchschnitt"
source_pageid: 71
source_revision: 6995
---

# NotenDurchschnitt

## Beschreibung

```pascal
procedure NotenDurchschnitt(const aSchuelerId, aJahr, aAbschnitt: Integer;
       var Beste, Schlechteste: Integer; var Schnitt: String);
```

## Parameter

| Parameter     | Bedeutung                                                      |
|---------------|----------------------------------------------------------------|
| `aSchuelerId` | Id-Nummer des Schülers                                         |
| `aJahr`       | Schuljahr und                                                  |
| `aAbschnitt`  | Abschnitt des Schuljahres, für das der Schnitt berechnet wird. |

## Rückgabewert

Beste - Beste Note des Abschnitte Schlechteste - Schlechteste Note des Abschnittes Schnitt - Formatierte Schnitt (zwei Nachkommastellen)

## Beispiel

```pascal
procedure DetailBeforePrint;
var
  Beste: Integer;
  Schlechteste : Integer;
  Schnitt : String;
begin
  NotenDurchschnitt(Schueler['ID'],Schueler['AktSchuljahr'],Schueler['AktAbschnitt'],
     Beste,Schlechteste,Schnitt);
  Label1.Caption:=IntToStr(Beste);
  Label2.Caption:=IntToStr(Schlechteste);
  Label3.Caption:=Schnitt;
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=NotenDurchschnitt) · Quellrevision 6995.
