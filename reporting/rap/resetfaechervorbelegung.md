---
title: "ResetFaechervorbelegung"
source_pageid: 88
source_revision: 516
---

# ResetFaechervorbelegung

## Beschreibung

```pascal
procedure ResetFaechervorbelegung;
```

Setzt interne Abfragen zurück, muss immer nach Verwendung von Faechervorbelegen oder CreateNotenHeader aufgerufen werden.

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   Faechervorbelegen;
 end;
```

```pascal
Procedure ReportAfterPrint;
begin
  ResetFaechervorbelegung;
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ResetFaechervorbelegung) · Quellrevision 516.
