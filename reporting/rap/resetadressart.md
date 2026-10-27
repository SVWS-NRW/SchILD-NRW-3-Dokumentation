---
title: "ResetAdressArt"
---

# ResetAdressArt

## Beschreibung

```pascal
procedure ResetAdressArt(aZiel: String);
```

## Parameter

| Parameter | Bedeutung                                                                                                        |
|-----------|------------------------------------------------------------------------------------------------------------------|
| `aZiel`   | ALLEADRESSEN' setzt den Filter für die Datenquelle „AllgAdresseUndSchueler“ zurück, 'KLASSENADRESSEN' den Filter |
| `auf`     | die Datenquelle „AllgAdresseZurLKlasse“ zurück                                                                   |

## Beispiel

```pascal
Procedure ReportAfterPrint;
 begin
   ResetAdressArt('ALLEADRESSEN');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ResetAdressArt)
