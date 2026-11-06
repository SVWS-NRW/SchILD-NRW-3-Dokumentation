---
title: "LocateRecord"
---

# LocateRecord

## Beschreibung

```pascal
function LocateRecord(Pipeline: TppDbPipeline; const Feld, Wert: String): Boolean;
```

Sucht in einer Datenquelle den ersten Datensatz, bei dem das angegebene Feld den gesuchten Wert hat, und stellt den Datensatzzeiger auf diesen Datensatz.

Danach liefert z.B. Pipeline['Feldname'] die Werte des gefundenen Datensatzes.

Dabei ist folgendes zu beachten:
- Die Datenquelle muss geöffnet sein. Datenquellen, die keine Komponente im Report 
verwendet, werden vorher mit `PipelineOeffnen` geöffnet.
- Der Wert wird als Text übergeben. Zahlen werden vorher umgewandelt, z.B. mit IntToStr.
- Die Funktion eignet sich für Datenquellen, die nicht an den Report gekoppelt sind, z.B. Kataloge wie Jahrgaenge oder eigene SQL-Abfragen im Report.
- Liefert die Funktion `False`, gibt es keinen passenden Datensatz. Die Felder der Datenquelle sollten dann nicht ausgewertet werden.

## Parameter

| Parameter      | Bedeutung                                    |
|----------------|----------------------------------------------|
|`Pipeline`      | Die Datenquelle, in der gesucht wird         |
|`Feld`          | Der Name des Feldes, in dem gesucht wird     |
|`Wert`          | Der gesuchte Wert als Text                   |

## Rückgabewert

`True`, wenn ein passender Datensatz gefunden wurde, sonst `False`

## Beispiel

```pascal
Procedure ReportBeforePrint;
begin
  PipelineOeffnen(Jahrgaenge);
end;

Procedure lblJahrgangOnGetText(var Text: String);
begin
  Text := '';
  If LocateRecord(Jahrgaenge, 'ID', IntToStr(Schuelerlaufbahn['Jahrgang_ID'])) Then
    Text := Jahrgaenge['InternKrz'] + ' (' + Jahrgaenge['ASDJahrgang'] + ')';
end;
```

 Die Datenquelle Jahrgaenge enthält alle sichtbaren Jahrgänge der Schule. Für jede 
 Zeile der Schülerlaufbahn sucht LocateRecord den Jahrgang dieses Lernabschnitts 
 und gibt das interne und das ASD-Kürzel aus, z.B. "07 (07)" oder "EF (EF)".
 Ist der Jahrgang nicht sichtbar geschaltet, bleibt das Feld leer.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---