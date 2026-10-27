---
title: "ResetFaechervorbelegung"
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

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ResetFaechervorbelegung)
