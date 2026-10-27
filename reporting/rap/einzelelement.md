---
title: "EinzelElement"
---

# EinzelElement

## Beschreibung

```pascal
function EinzelElement( const text, trennzeichen: string; const position: integer ): string;
```

Liefert das Einzelelement an Position "position" aus dem durch das Trennzeichen getrennten Text "text"

## Parameter

| Parameter      | Bedeutung                                                  |
|----------------|------------------------------------------------------------|
| `text`         | der zu analysierende Text                                  |
| `trennzeichen` | Das Trennzeichen                                           |
| `position`     | Die Position des Einzelelementes im Text (beginnend bei 1) |

## Beispiel

```pascal
txt := '1,2,3,4':
if einzelelement( txt, ',', 2 ) = '2' then
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=EinzelElement)
