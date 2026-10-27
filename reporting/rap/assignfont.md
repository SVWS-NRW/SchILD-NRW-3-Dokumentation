---
title: "AssignFont"
---

# AssignFont

## Beschreibung

```pascal
procedure AssignFont(aText: TppCustomRichText; aFont: TFont);
```

Ändert den Zeichensatz eines Richtextes. Die Größe bleibt unverändert

## Parameter

| Parameter | Bedeutung                   |
|-----------|-----------------------------|
| `aText`   | der zu verändernde Richtext |
| `aFont`   | der neue Zeichensatz        |

## Rückgabewert

Der veränderte Richtext

## Beispiel

```pascal
AssignFont(Richtext1,Label1.Font);
(*Dem Richtext wird der Zeichensatz eines Labels zugewiesen*)
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=AssignFont)
