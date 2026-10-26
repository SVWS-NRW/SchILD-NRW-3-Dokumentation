---
title: "PickDatum"
source_pageid: 76
source_revision: 504
---

# PickDatum

## Beschreibung

```pascal
function PickDatum(aCaption, aDate: String): String;
```

## Parameter

| Parameter  | Bedeutung                |
|------------|--------------------------|
| `aCaption` | Überschrift des Dialoges |
| `aDate`    | Datumsvorgabe            |

## Rückgabewert

Datum als Zeichenkette, z.B. '31.12.2010'

## Beispiel

```pascal
Var
KDate : String;
Begin
 Pickdatum('Datum Konferenz',KDate);
End;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=PickDatum) · Quellrevision 504.
