---
title: "DatenZeigerBewegen"
---

# DatenZeigerBewegen

## Beschreibung

```pascal
procedure DatensatzZeigerBewegen (aPipeline: TppDatapipeline; aSchritte: integer)
```

Bewegt den Datensatzzeiger der als Parameter angegebenen Datenquelle

## Parameter

| Parameter   | Bedeutung                                                                                                             |
|-------------|-----------------------------------------------------------------------------------------------------------------------|
| `aPipeline` | Die betreffende Datenquelle                                                                                           |
| `aSchritte` | Bewegungsschritte (-1000: Erster Datensatz, 1000: Letzter Datensatz, -1: vorheriger Datensatz, 1: Nächster Datensatz) |

## Beispiel

```pascal
DatensatzZeigerBewegen( Lernabschnitte, -1 );
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=DatenZeigerBewegen)
