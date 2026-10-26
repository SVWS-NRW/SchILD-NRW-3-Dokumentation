---
title: "KursBezIgnorieren"
source_pageid: 55
source_revision: 483
---

# KursBezIgnorieren

## Beschreibung

```pascal
Procedure KursBezIgnorieren(Const Ignore : Boolean);
```

Durch den Aufruf dieser Prozedur wird bei der Einsortierung der Leistungsdaten in die Leistungsübersichten die Kursbezeichnung ignoriert. Diese Prozedur ist nur im Zusammenhang mit SetUebersicht notwendig und sinnvoll. Standardmäßig wird die Kursbezeichnung berücksichtigt.

## Parameter

| Parameter | Bedeutung                    |
|-----------|------------------------------|
| `ignore`  | wahr-\> Kursarten ignorieren |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersicht(True);
   KursBezIgnorieren(True);
 end;
```

```pascal
Procedure ReportAfterPrint;
begin
  SetUebersicht(false);
  KursBezIgnorieren(False);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=KursBezIgnorieren) · Quellrevision 483.
