---
title: "LernfelderZuFachklasse"
---

# LernfelderZuFachklasse

## Beschreibung

```pascal
function LernfelderZuFachklasse( fachklasse_id: integer): string;
```

Gibt die Lernfelder einer Fachklasse aus

## Parameter

| Parameter       | Bedeutung                                                                |
|-----------------|--------------------------------------------------------------------------|
| `fachklasse_id` | Die Fachklasse_ID des Schülers (aus Stammdaten oder Lernabschnittsdaten) |

## Rückgabewert

Lernfelder im Richtext.

## Beispiel

```pascal
procedure DetailBeforePrint;
 begin
  RichText_LF.RichText := LernfelderZuFachklasse( Schueler[ 'Fachklasse_ID'] );
End;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LernfelderZuFachklasse)
