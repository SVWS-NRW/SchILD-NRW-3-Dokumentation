---
title: "QuotedStr"
source_pageid: 80
source_revision: 508
---

# QuotedStr

## Beschreibung

```pascal
function QuotedStr(const Value: String): String;
```

Schließt den String Value in Delphi-Hochkommata ein

## Parameter

| Parameter | Bedeutung                              |
|-----------|----------------------------------------|
| `Value`   | String, der eingeschlossen werden soll |

## Rückgabewert

In Hochkommata eingeschlossener String

## Beispiel

```pascal
Setzefilter(Klassenlehrer_mit_Noten,'Fachkrz=' + QuotedStr('M'));
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=QuotedStr) · Quellrevision 508.
