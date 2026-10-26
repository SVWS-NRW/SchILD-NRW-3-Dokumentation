---
title: "StringInput"
source_pageid: 124
source_revision: 564
---

# StringInput

## Beschreibung

```pascal
function StringInput(aPrompt, Default: String): string;
```

## Parameter

| Parameter | Bedeutung                   |
|-----------|-----------------------------|
| `aPrompt` | Hinweistext                 |
| `Default` | Textvorgabe, kann leer sein |

## Rückgabewert

Eingegebener Text

## Beispiel

```pascal
Label1.Caption:=StringInput('Bitte geben Sie das KFZ-Kennzeichen ein','NRW-4711');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=StringInput) · Quellrevision 564.
