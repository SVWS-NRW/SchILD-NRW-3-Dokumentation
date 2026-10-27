---
title: "PipelineOeffnen"
---

# PipelineOeffnen

## Beschreibung

```pascal
procedure PipelineOeffnen(aPipeline: TppDBpipeline);
```

## Parameter

| Parameter    | Bedeutung                                     |
|--------------|-----------------------------------------------|
| `DBpipeline` | Die zu öffnende Datenquelle als Zeichenkette. |

## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
   PipelineOeffnen( Erzieher );
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=PipelineOeffnen)
