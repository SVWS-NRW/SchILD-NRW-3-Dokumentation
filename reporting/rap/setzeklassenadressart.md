---
title: "SetzeKlassenAdressArt"
---

# SetzeKlassenAdressArt

## Beschreibung

```pascal
Procedure SetzeKlassenAdressArt(const AdressArt: String);
```

Diese Prozedur kann benutzt werden, wenn die Datenquelle AllgAdresseZurKlasse verwendet werden soll. Voreingestellt ist die Adressart 'Betrieb'. Diese Datenquelle ist eine Detaildatenquelle zur Hauptdatenquelle 'Klassen'.

## Parameter

| Parameter   | Bedeutung                              |
|-------------|----------------------------------------|
| `AdressArt` | zu berücksichtigende Adressenkategorie |

## Beispiel

```pascal
Procedure ReportBeforeOpenDatapipelines;
 begin
   SetzeKlassenAdressArt('Kammern');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetzeKlassenAdressArt)
