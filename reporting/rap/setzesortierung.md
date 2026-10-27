---
title: "SetzeSortierung"
---

# SetzeSortierung

## Beschreibung

```pascal
procedure SetzeSortierung(Pipeline: TppDbPipeline; const Sortierfelder: String);
```

`SetzeSortierung` wird nur berücksichtigt, wenn der Aufruf die Hauptdatenquelle des Reports betrifft. Aufrufe für untergeordnete Datenquellen werden nicht berücksichtigt.

## Parameter

| Parameter       | Bedeutung                                                                                                                                                                                                  |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Pipeline`      | Hauptdatenquelle, deren Abfrage neu sortiert werden soll                                                                                                                                                   |
| `Sortierfelder` | Mit Komma separierte Liste Sortierfeldern. Es können keine Lookup- oder berechnete Felder verwendet werden, Informationen über die Felder erhält man im Dialog „Info über Datenquellen“ im Reportdesigner. |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)
   OriginalSortierung:=SortierungVon(Report.Datapipeline);
   SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');
 end
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetzeSortierung)
