---
title: "FilterLaufbahnStufen"
source_pageid: 43
source_revision: 336
---

# FilterLaufbahnStufen

## Beschreibung

```pascal
procedure FilterLaufbahnStufen(const Stufenliste: String);
```

Filtert für Leistungsübersichten auf bestimmte Jahrgangsstufen. Damit ist es möglich, z.B. Formulare für die gymn. Oberstufe schulformunabhängig zu entwickeln

## Parameter

Parameter: Stufenliste: Die zu betrachtenden Jahrgangsstufen, getrennt durch Komma

## Beispiel

```pascal
procedure ReportBeforePrint;
var
 vers: string;
begin
{Filter auf Q1 und Q2 bzw. 12 und 13 bzw. 5 und 6 (bei WBK)}
 FilterLaufbahnStufen('SII-2,SII-3');
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FilterLaufbahnStufen) · Quellrevision 336.
