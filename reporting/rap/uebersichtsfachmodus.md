---
title: "UebersichtsfachModus"
---

# UebersichtsfachModus

## Beschreibung

```pascal
Procedure UebersichtsfachModus(Const Modus : String);
```

Durch den Parameter dieser Prozedur wird die Einsortierung der Leistungsdaten in die Leistungsübersichten gesteuert. Möglich sind die drei Modi:

- `NurFach`: Alle Leistungsdaten mit dem gleichen Fach landen in einer Spalte.
- `KursArt`: Fächer mit gleichem Fachkürzel, aber unterschiedlichen Kursarten werden in verschiedene Spalten einsortiert.
- `KursBezeichnung`: Fächer mit gleichem Fachkürzel, aber unterschiedlichen Kursbezeichnungen werden in verschiedene Spalten einsortiert.

Der Aufruf von `UebersichtsfachModus('NurFach')` entspricht dem Aufruf der Funktion `KursbezIgnorieren(True)`.

## Parameter

| Parameter | Bedeutung                                                         |
|-----------|-------------------------------------------------------------------|
| `Modus`   | String, zulässig sind 'NurFach', 'KursArt' oder 'KursBezeichnung' |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersicht(True);
   UebersichtsfachModus('KursArt');
 end;
```

```pascal
Procedure ReportAfterPrint;
begin
  SetUebersicht(false);
  UebersichtsfachModus('KursBezeichnung');
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=UebersichtsfachModus)
