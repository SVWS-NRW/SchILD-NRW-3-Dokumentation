---
title: "SetFont"
---

# SetFont

## Beschreibung

```pascal
procedure SetFont(aReport: TppReport; const aFontname: String)
```

Setzt den Zeichensatz für alle Komponenten des Reports

## Parameter

| Parameter   | Bedeutung                        |
|-------------|----------------------------------|
| `aReport`   | der zu bearbeitende Report       |
| `aFontname` | Der Name des neuen Zeichensatzes |

## Beispiel

```pascal
procedure ReportOnStartFirstPass;
begin
  Setfont(Report,'Tahoma');
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetFont)
