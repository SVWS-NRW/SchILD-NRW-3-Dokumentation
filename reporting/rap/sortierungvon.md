---
title: "SortierungVon"
---

# SortierungVon

## Beschreibung

```pascal
function SortierungVon(Pipeline: TppDbPipeline): String;
```

## Parameter

| Parameter  | Bedeutung                                           |
|------------|-----------------------------------------------------|
| `Pipeline` | Datenquelle; Sortierung, die angewendet werden soll |

## Rückgabewert

Liste der Sortierfelder

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   //Originalsortierung ist eine String-Variable, die global vereinbart werden muss
   OriginalSortierung:=SortierungVon(Report.Datapipeline);
   SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');
 end;
```

```pascal
Procedure ReportAfterPrint;
begin
  SetzeSortierung(Report.Datapipeline,OriginalSortierung);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SortierungVon)
