---
title: "SchuljahrToStr"
source_pageid: 92
source_revision: 532
---

# SchuljahrToStr

## Beschreibung

```pascal
function SchuljahrToStr(aJahr, aAbschnitt: integer): String;
```

## Parameter

| Parameter    | Bedeutung                                                                              |
|--------------|----------------------------------------------------------------------------------------|
| `aJahr`      | Jahr, in dem das Schuljahr anfing                                                      |
| `aAbschnitt` | Schuljahresabschnitt. Falls aAbschnitt = 0 ist, wird der String ohne Abschnitt erzeugt |

## Rückgabewert

Schuljahr in der Form 'JJJJ/JJ.A'

## Beispiel

```pascal
SchuljahrStr:=SchuljahrToStr(Schueler['AktSchuljahr'],Schueler['AktAbschnitt'])
```

Ergebnis (z.B.): lSchuljahrStr = '2005/06.2'

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SchuljahrToStr) · Quellrevision 532.
