---
title: "SetUebersichtEx"
---

# SetUebersichtEx

## Beschreibung

```pascal
procedure SetUebersichtEx(IsUebersicht: Boolean;  const aJahrgangsliste: String);
```

## Parameter

| Parameter         | Bedeutung                                                                                                                                                                                                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `IsUebersicht`    | Boolescher Wert, bei 'True' werden die Leistungsdaten eines Schülers im über aJahrgangsliste definierten Zeitintervall in eine Tabellenstruktur eingefügt. Da dieser Vorgang recht zeitaufwendig ist, kann und sollte er durch diese Funktion nur bei Bedarf zugeschaltet werden |
| `aJahrgangsliste` | Kommaseparierte Liste der zu berücksichtigen (ASD-)Jahrgänge                                                                                                                                                                                                                     |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersichtEx(True, 'Q1,Q2');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetUebersichtEx)
