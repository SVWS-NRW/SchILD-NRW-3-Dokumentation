---
title: "IncFontSize"
---

# IncFontSize

## Beschreibung

```pascal
procedure IncFontSize(aReport: TppReport; const aIncrement: Integer);
```

Vergößert oder verkleinert die Zeichensatz größe

## Parameter

| Parameter    | Bedeutung                                                                                      |
|--------------|------------------------------------------------------------------------------------------------|
| `aReport`    | der Report, dessen Komponenten bearbeitet werden sollen                                        |
| `aIncrement` | Wert, um den der Zeichensatz vergrößert (oder bei negativem Increment) verkleinert werden soll |

## Beispiel

```pascal
...procedure ReportOnStartFirstPass;
begin
  IncFontSize(Report,1);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=IncFontSize)
