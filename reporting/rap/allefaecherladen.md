---
title: "AlleFaecherLaden"
---

# AlleFaecherLaden

## Beschreibung

```pascal
procedure AlleFaecherLaden(const Value: Boolean);
```

Stellt die Grundeinstellung "Auch Leistungsdaten ohne Noten laden" für einen Report um.

## Parameter

| Parameter | Bedeutung       |
|-----------|-----------------|
| `Value`   | Boolescher Wert |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  AlleFaecherLaden(True);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=AlleFaecherLaden)
