---
title: "Setzefilter"
---

# Setzefilter

## Beschreibung

```pascal
procedure SetzeFilter(Pipeline: TppDbPipeline; const Filter: String)
```

Schränkt die Datensätze durch die übergebene Filterbedingung ein.

## Parameter

| Parameter  | Bedeutung                                                                |
|------------|--------------------------------------------------------------------------|
| `Pipeline` | Datenquelle, die gefiltert werden soll                                   |
| `Filter`   | der neue Filter. Ist der Filterstring leer, wird die Filterung entfernt. |

## Beispiel

Definieren Sie die Filterbedingungen im Report wie folgt:

```pascal
Setzefilter(Klassenlehrer_mit_Faechern,'Fachkrz=M;D' );
```

d.h. wenn mehrere Optionen in Frage kommen (OR-Bedingung), brauchen die nur durch Semikolon getrennt angegeben zu werden.

```pascal
SetzeFilter(Klassen, 'KlassenlehrerKrz <>""');
```

d.h. bei Abfragen "ungleich Leerstring" können die "doppelten Hochkommas" (über der 2 auf der Tastatur) verwendet werden. 

Filterbedingungen der Art `Klasse=05*` oder `Klasse=*A` bewirken eine Filterung mit allen für den \* vorkommenden Zeichen. (Wildcard) 

Im übrigen können auch mehrere Aufrufe von SetzeFilter (z.B. für verschiedene Datenquellen) genutzt werden. 

Noch ein Hinweis: Manchmal funktioniert die Filterung in der Vorschau des Designers nicht, im "Druckbetrieb" wird dann aber korrekt gefiltert.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Setzefilter)
