---
title: "FilterFachUebersichtAufKlasse"
source_pageid: 40
source_revision: 333
---

# FilterFachUebersichtAufKlasse

## Beschreibung

```pascal
Procedure FilterFachUebersichtAufKlasse( const klasse: string );
```

Beschränkt eine Fachübersicht auf die Fächer der gerade ausgegebenen Klasse. Der Report muss dafür nach **Klasse** gruppiert sein. Rufen Sie die Prozedur beim Gruppenwechsel auf, typischerweise im Ereignis `BeforeGroupBreak`, und übergeben Sie die Klasse als Parameter. So können mehrere Klassen oder die ganze Schule in einem Durchlauf ausgegeben werden, während jede Klasse nur ihre eigenen Fächer sieht.

## Parameter

| Parameter | Bedeutung                                         |
|-----------|---------------------------------------------------|
| `String`  | Klasse, für die die Übersicht erzeugt werden soll |

## Rückgabewert

Erzeugt einen neuen FachUebersichtsHeader, sobald die Gruppe wechselt.

## Beispiel

```pascal
FilterFachUebersichtAufKlasse(Schueler['Klasse']);
```

::: warning Wichtig

Der Aufruf sollte nur in Verbindung mit der Datenquelle "Fachuebersicht" erfolgen. Ein Aufruf von "FaecherVorbelegen" ist nicht notwendig (wird intern von "FilterFachUebersichtAufKlasse" gemacht) und wäre auch kontraproduktiv (erhöhter Zeitaufwand wegen doppeltem Aufruf).

:::

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FilterFachUebersichtAufKlasse) · Quellrevision 333.
