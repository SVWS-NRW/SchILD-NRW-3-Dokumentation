---
title: "WaehleDatumStr"
source_pageid: 131
source_revision: 525
---

# WaehleDatumStr

## Beschreibung

```pascal
function WaehleDatumStr(const Hinweis: String; const LangFormat: Boolean): String;
```

## Parameter

Hinweis - Hinweistext LangFormat - True: Formatierung des Ergebnisses wie „Langes Datumsformat“ in den Ländereinstellungen von Windows, sonst Kurzformat

## Rückgabewert

Zeichenkette mit formatiertem Datum

## Beispiel

```pascal
lDatum:=WaehleDatumStr('Geburtsdatum:',True);
```

Liefert (z.B.) 'Sonntag, 26. Mai 1996'

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=WaehleDatumStr) · Quellrevision 525.
