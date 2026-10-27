---
title: "GeschlechtToString"
---

# GeschlechtToString

## Beschreibung

```pascal
function GeschlechtToString(aGeschlecht: integer; aMaennl_Form, aWeibl_Form: String): String;
```

## Parameter

| Parameter      | Bedeutung            |
|----------------|----------------------|
| `aGeschlecht`  | Geschlecht, m=3, w=4 |
| `aMaennl_Form` | männliche Form       |
| `aWeibl_Form`  | weibliche Form       |

## Rückgabewert

Vorgabe, je nach Geschlecht

## Beispiel

```pascal
lAnrede:=GeschlechtToStr(Schueler['Geschlecht'],'Schüler','Schülerin')
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=GeschlechtToString)
