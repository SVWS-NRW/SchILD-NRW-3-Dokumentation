---
title: "SchuljahrToStrEx"
source_pageid: 93
source_revision: 533
---

# SchuljahrToStrEx

## Beschreibung

```pascal
function SchuljahrToStrEx(aJahr, aAbschnitt: integer; Format: String; AbschnittVorn: Boolean): String;
```

## Parameter

| Parameter       | Bedeutung                                                                                                                                                                                                                                  |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `aJahr`         | Jahr, in dem das Schuljahr anfing                                                                                                                                                                                                          |
| `aAbschnitt`    | Schuljahresabschnitt. Falls aAbschnitt = 0 ist, wird der String ohne Abschnitt erzeugt                                                                                                                                                     |
| `Format`        | Formatanweisung. Text mit Platzhaltern für numerische Variablen. An der gewünschten Position ist ein %\[w\]d einzufügen. Der optionale Parameter w enthält die gewünschte Breite, falls notwendig, wird linksbündig mit Nullen aufgefüllt. |
| `AbschnittVorn` | Wenn AbschnittVorn wahr ist, werden die Parameter in der Reihenfolge Abschnitt, Jahr, Jahr + 1 aufgefüllt, sonst in der Reihenfolge Jahr, Jahr + 1, Abschnitt                                                                              |

## Rückgabewert

Schuljahr in der durch Format vorgegebenen Form

## Beispiel

```pascal
SchuljahrStr:=SchuljahrToStrEx(2005,3,'%d. Quartal %d/%2d',True);
```

Ergebnis: lSchuljahrStr = '3. Quartal 2005/06'

```pascal
SchuljahrStr:=SchuljahrToStrEx(2005,2,'Schuljahr %d/%2d, %d. Halbjahr',False);
```

Ergebnis: lSchuljahrStr = 'Schuljahr 2005/06, 2. Halbjahr'

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SchuljahrToStrEx) · Quellrevision 533.
