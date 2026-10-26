---
title: "LehrerAuswaehlen"
source_pageid: 56
source_revision: 484
---

# LehrerAuswaehlen

## Beschreibung

```pascal
procedure LehrerAuswaehlen(const Auswahlzeigen: Boolean)
```

Bisher wurde vor dem Druck eines Berichtes mit der Datenquelle 'Lehrer' grundsätzlich der Lehrerauswahldialog auf gerufen. Dieser Dialog wird jetzt nur noch aufgerufen, wenn in einem geeigneten Ereignis (hier bietet sich BeforeOpenDataPipelines an) die Procedur LehrerAuswaehlen(True) aufgerufen wird. Sinnvollerweise sollte die Auswahl nach dem Druck wieder zurückgesetzt werden.

## Parameter

| Parameter       | Bedeutung |
|-----------------|-----------|
| `Auswahlzeigen` | Boolea    |

## Beispiel

```pascal
Procedure ReportBeforeOpenDataPipelines;
begin
  LehrerAuswaehlen(True);
end;
```

```pascal
Procedure ReportAfterPrint;
begin
  LehrerAuswaehlen(false);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LehrerAuswaehlen) · Quellrevision 484.
