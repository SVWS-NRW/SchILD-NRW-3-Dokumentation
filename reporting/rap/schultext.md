---
title: "SchulText"
source_pageid: 94
source_revision: 534
---

# SchulText

## Beschreibung

```pascal
function SchulText(const Kuerzel: String): String;
```

## Parameter

| Parameter | Bedeutung              |
|-----------|------------------------|
| `Kuerzel` | Kurzzeichen des Textes |

## Rückgabewert

der dem Kürzel zugeordnete Text

## Beispiel

```pascal
procedure Label4711OnGetText(var Text: String);
begin
  Text:='Schulleiter: ' + SchulText('Direktor');
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SchulText) · Quellrevision 534.
