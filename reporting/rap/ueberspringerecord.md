---
title: "UeberspringeRecord"
source_pageid: 129
source_revision: 523
---

# UeberspringeRecord

## Beschreibung

```pascal
procedure UeberspringeRecord(aPipeline: TppDatapipeline);
```

Überspringt einen Datensatz der Datenquelle

## Parameter

| Parameter   | Bedeutung              |
|-------------|------------------------|
| `aPipeline` | Name der Datenpipeline |

## Beispiel

```pascal
If Copy(Schueler['Name'],1,1) = 'D' then UeberspringeRecord(Schueler);
```

oder

```pascal
While Copy(Schueler['Name'],1,1) = 'D' Do
Begin
  UeberspringeRecord(Schueler);
End;
```

Bitte beachten Sie, dass die Funktion beim letzten Datensatz nicht weiterspringen kann, dies muss u.U. berücksichtigt werden!

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=UeberspringeRecord) · Quellrevision 523.
