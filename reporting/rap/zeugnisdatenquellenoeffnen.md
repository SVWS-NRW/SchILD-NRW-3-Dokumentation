---
title: "ZeugnisDatenquellenOeffnen"
source_pageid: 136
source_revision: 530
---

# ZeugnisDatenquellenOeffnen

## Beschreibung

```pascal
procedure ZeugnisDatenquellenOeffnen;
```

Öffnet alle für Zeugnisse benötigten Datenquellen. Das ist besonders bei Zeugnissen mit dynamisch nachgeladenen Subreports wichtig. Solche Teilberichte werden erst nach der automatischen Analyse geladen; ihre Datenquellen werden dabei nicht rechtzeitig erkannt. Ein einmaliger Aufruf dieser Prozedur ersetzt dann einzelne Aufrufe von `PipelineOeffnen` für jede benötigte Datenquelle.

## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
  ZeugnisDatenquellenOeffnen;
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ZeugnisDatenquellenOeffnen) · Quellrevision 530.
