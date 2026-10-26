---
title: "Selectfont"
source_pageid: 98
source_revision: 538
---

# Selectfont

## Beschreibung

```pascal
function Selectfont(const Default: String): String;
```

Dialog, um aus der Liste der im System registrierten Zeichensätze einen bestimmten Zeichensatz auszuwählen

## Parameter

| Parameter | Bedeutung                        |
|-----------|----------------------------------|
| `Default` | Standardwert für den Zeichensatz |

## Rückgabewert

Gewählter Zeichensatz

## Beispiel

```pascal
procedure ReportOnStartFirstPass;
var
  NewFont : String;
begin
  NewFont:=Selectfont('Tahoma');
  Setfont(Report,NewFont);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Selectfont) · Quellrevision 538.
