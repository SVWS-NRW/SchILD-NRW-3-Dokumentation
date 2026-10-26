---
title: "Anrede"
source_pageid: 17
source_revision: 308
---

# Anrede

## Beschreibung

```pascal
function Anrede(aAnrede1,aTitel1,aName1,aAnrede2,aTitel2,aName2: String): String;
```

Berechnet aus den übergebenen Werten die korrekte (Erzieher-)Anrede

## Parameter

| Parameter  | Bedeutung                 |
|------------|---------------------------|
| `aAnrede1` | Anrede der ersten Person  |
| `aTitel1`  | Titel der ersten Person   |
| `aName1`   | Name der ersten Person    |
| `aAnrede2` | Anrede der zweiten Person |
| `aTitel2`  | Titel der zweiten Person  |
| `aName2`   | Name der zweiten Person   |

## Rückgabewert

Korrekte Anrede

## Beispiel

```pascal
lAnrede:=Anrede('Herr','','Meier','Frau','Dr.','Müller-Lüdenscheid')
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Anrede) · Quellrevision 308.
