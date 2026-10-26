---
title: "SetTextAttributes"
source_pageid: 113
source_revision: 553
---

# SetTextAttributes

## Beschreibung

```pascal
procedure SetTextAttributes(aText: TppCustomRichText);
```

## Parameter

| Parameter | Bedeutung       |
|-----------|-----------------|
| `aText`   | Richtextelement |

## Beispiel

```pascal
Richtext1.Font.Name:=='Tahoma';
Richtext1.Font.Size:=16;
Richtext1.Font.Bold:=True;
Richtext1.Font.Italic:=True;
SetTextattributes(Richtext1);
```

Formatiert den gesamten Text des Richtextelementes in dem gewünschten Zeichensatz.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetTextAttributes) · Quellrevision 553.
