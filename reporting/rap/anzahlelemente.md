---
title: "AnzahlElemente"
source_pageid: 18
source_revision: 309
---

# AnzahlElemente

## Beschreibung

```pascal
function AnzahlElemente( const text, trennzeichen: string ): integer;
```

Liefert die Anzahl der durch das Trennzeichen getrennten Einzelelemente in "text"

## Parameter

| Parameter      | Bedeutung                 |
|----------------|---------------------------|
| `text`         | der zu analysierende Text |
| `trennzeichen` | Das Trennzeichen          |

## Rückgabewert

Integerwert der Elementanzahl.

## Beispiel

```pascal
txt := '1,2,3,4':
if AnzahlElemente( txt, ',' ) > 2 then
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=AnzahlElemente) · Quellrevision 309.
