---
title: "MitLernabschnitten"
---

# MitLernabschnitten

## Beschreibung

```pascal
procedure MitLernabschnitten(const Value: Boolean);
```

Erzwingt die Aktualisierung der Datenquelle Lernabschnitte beim Wechsel eines Schülerdatensatzes.

## Parameter

| Parameter | Bedeutung       |
|-----------|-----------------|
| `Value`   | Boolescher Wert |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  MitLerabschnitten(True);
end;
```

```pascal
procedure ReportAfterPrint;
begin
  MitLernabschnitten(false);
end
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=MitLernabschnitten)
