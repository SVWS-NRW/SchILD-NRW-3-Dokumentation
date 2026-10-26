---
title: "ZeugnisParameter"
source_pageid: 137
source_revision: 531
---

# ZeugnisParameter

## Beschreibung

```pascal
procedure ZeugnisParameter(var aBeginn, aSprechtag1, aSprechtag2: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aBeginn` | Wiederbeginn des Unterrichts |
| `aSprechtag1` | Erster Sprechtag mit Anfangs- und Endzeiten |
| `aSprechtag2` | Zweiter Sprechtag mit Anfangs- und Endzeiten |

## Rückgabewert

Die Prozedur gibt die abgefragten Angaben über die `var`-Parameter zurück.

## Beispiel

Im Dialog werden der Wiederbeginn des Unterrichts und zwei Sprechtage abgefragt, die jeweils vor- und nachmittags stattfinden können. Wenn ein Tag vollständig deaktiviert wird, ist der entsprechende Ergebnisstring leer.

```pascal
Procedure ReportBeforePrint;
begin
  ZeugnisParameter(Wiederbeginn, Sprechtag1, Sprechtag2);
end;

Procedure Label1OnGetText(var Text: String);
begin
  Text:=Wiederbeginn;
end;

Procedure Label2onGetText(var Text: String);
begin
  Text:='am '+ Sprechtag1;
  If Sprechtag2 <> '' then Text:=Text + ' und am ' + Sprechtag2;
end;

```

Gedruckt wird:

```text
Elternsprechtag: am 10. Februar 2006 von 8:00 bis 12:00 und von 14:00Uhr
bis 18:00 Uhr und am 17. Februar 2006 von 8:00 bis 12:00 und von 14:00Uhr
bis 18:00 Uhr
Wiederbeginn des Unterrichts am 10. Februar 2006 um 8:00 Uhr.
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ZeugnisParameter) · Quellrevision 531.
