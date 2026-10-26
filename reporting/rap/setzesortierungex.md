---
title: "SetzeSortierungEx"
source_pageid: 120
source_revision: 7172
---

# SetzeSortierungEx

## Beschreibung

```pascal
procedure SetzeSortierungEx(Pipeline: TppDbPipeline; const Sortierfelder: String);
```

## Parameter

| Parameter       | Bedeutung                                                                                                                                                           |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Pipeline`      | Hauptdatenquelle, deren Abfrage neu sortiert werden soll                                                                                                            |
| `Sortierfelder` | Mit Komma separierte Liste Sortierfeldern. Im Unterschied zu „SetzeSortierung“ können hier auch spezielle Felder, wie z.B. MONTH(Geburtsatum) etc verwendet werden. |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
  (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)
  OriginalSortierung:=SortierungVon(Report.Datapipeline);
  SetzeSortierungEx(Report.Datapipeline,'Klasse,MONTH(Geburtsdatum)');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetzeSortierungEx) · Quellrevision 7172.
