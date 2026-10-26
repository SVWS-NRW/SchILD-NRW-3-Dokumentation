---
title: "WaehleDatumUndZeit"
source_pageid: 132
source_revision: 526
---

# WaehleDatumUndZeit

## Beschreibung

```pascal
function WaehleDatumUndZeit(Hinweis: String; Var Datum, Uhrzeit: Datetime): Boolean;
```

## Parameter

Hinweis - Hinweistext Datum - Platzhalter für die zu wählenden Daten Uhrzeit - Platzhalter für die zu wählenden Daten

## Rückgabewert

TRUE, falls der Dialog mit Ok beendet wurde, sonst FALSE

## Beispiel

```pascal
If WaehleDatum('Bitte Beginn der Veranstaltung
                eingeben',lDatum,lUhrzeit) then...
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=WaehleDatumUndZeit) · Quellrevision 526.
