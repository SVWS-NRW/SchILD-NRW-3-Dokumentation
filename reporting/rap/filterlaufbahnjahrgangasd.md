---
title: "FilterLaufbahnJahrgangASD"
---

# FilterLaufbahnJahrgangASD

## Beschreibung

```pascal
procedure FilterLaufbahnJahrgandASD(const Jahrgangsliste: String);
```

Filtert die Laufbahndaten der Schüler für die angegebenen Jahrgänge; `Jahrgangsliste = ''` setzt die Abfrage zurück

## Parameter

| Parameter        | Bedeutung                           |
|------------------|-------------------------------------|
| `Jahrgangsliste` | kommaseparierte Liste der Jahrgänge |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  SetUebersicht(True);
  FilterLaufbahnJahrgangASD('EF,Q1,Q2');
end;
```

```pascal
procedure ReportAfterPrint;
begin
  SetUebersicht(false);
  FilterLaufbahnJahrgangASD('');
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FilterLaufbahnJahrgangASD)
