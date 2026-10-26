---
title: "SetKursSchuelerFaecherListe"
source_pageid: 111
source_revision: 551
---

# SetKursSchuelerFaecherListe

## Beschreibung

```pascal
procedure SetKursSchuelerFaecherListe(Const aListe: String);
```

## Parameter

| Parameter | Bedeutung                                    |
|-----------|----------------------------------------------|
| `Liste`   | Kommaseparierte Liste der gewünschten Fächer |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetKursSchuelerFaecherListe('D,M,PH,CH');
 end;
```

In einer KursListe können in einem Subreport die Leistungsdaten in diesen Fächern ausgegeben werden.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetKursSchuelerFaecherListe) · Quellrevision 551.
