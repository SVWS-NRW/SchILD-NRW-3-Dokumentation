---
title: "IstLeer"
---

# IstLeer

## Beschreibung

```pascal
function IstLeer(aDataPipeline: TppDataPipeline; const aFieldname: String): Boolean;
```

## Parameter

| Parameter       | Bedeutung                       |
|-----------------|---------------------------------|
| `aDataPipeline` | Zu prüfende Datenquelle         |
| `aFieldname`    | Name des zu überprüfenden Felde |

## Rückgabewert

True, falls das Datenfeld leer ist

## Beispiel

```pascal
Procedure DBText1OnGetText(var Text: String);
begin
  If IstLeer(Schueler,'Geburtsdatum') then
    Text:='Geburtsdatum fehlt';
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=IstLeer)
