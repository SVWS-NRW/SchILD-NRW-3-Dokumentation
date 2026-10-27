---
title: "GetSqlText"
---

# GetSqlText

## Beschreibung

```pascal
function GetSqlText(aPipeline: TppDatapipeline): String;
```

Liefert den Text der SQL-Abfrage, die der als Parameter übergebenen Datenquelle zugrunde liegt.

## Parameter

| Parameter   | Bedeutung              |
|-------------|------------------------|
| `aPipeline` | Name der Datenpipeline |

## Rückgabewert

SqlText, falls die Pipeline eine DB-Pipeline ist, sonst ein leerer String

## Beispiel

```pascal
ShowMessage('Abfragetext: ' + GetSqlText(Schueler))
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=GetSqlText)
