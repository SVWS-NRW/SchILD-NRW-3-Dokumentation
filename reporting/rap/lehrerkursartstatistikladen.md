---
title: "LehrerKursartStatistikLaden"
source_pageid: 58
source_revision: 486
---

# LehrerKursartStatistikLaden

## Beschreibung

```pascal
Procedure LehrerKursartStatistikLaden;
```

Durch den Aufruf dieser Prozedur wird die Datenquelle 'LehrerUnterrichtsStatistik' mit Daten gefüllt. Diese Datenquelle sollte nur als Datenquelle für eine Kreuztabelle eingesetzt werden, die dann statistische Aussagen über den Unterricht des Lehrers (Anzahl der Schüler mit Kursart xyz...) liefert. Auch diese Datenquelle ist Detaildatenquelle der Datenquelle 'Lehrer'.

## Beispiel

```pascal
Procedure DetailBeforeGenerate;
 begin
   LehrerUnterrichtLaden;
   LehrerKursartStatistikLaden;
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LehrerKursartStatistikLaden) · Quellrevision 486.
