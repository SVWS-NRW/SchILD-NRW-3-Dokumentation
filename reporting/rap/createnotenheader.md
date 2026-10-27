---
title: "CreateNotenHeader"
---

# CreateNotenHeader

## Beschreibung

```pascal
procedure CreateNotenHeader(aFaecherListe: String);
```

Im tatsächlich erzeugten Header stehen die Fächer in der unter „Unterrichtsfächer“ festgelegten Sortierreihenfolge.

Verwenden Sie die Prozedur für eine gemeinsame tabellarische Übersicht über die ausgewählten Schülerinnen und Schüler und ihre Leistungsdaten. Der Aufruf liest dazu die Leistungsdaten der gesamten Auswahl und stellt die vorkommenden Fächer in einer internen Tabelle zusammen. Für andere Ausgaben ist dieser zusätzliche Aufruf nicht nötig.

**Nach der Darstellung der Tabelle muss unbedingt die Prozedur `ResetFaechervorbelegung` aufgerufen werden!**

## Parameter

| Parameter       | Bedeutung                                                                         |
|-----------------|-----------------------------------------------------------------------------------|
| `aFaecherListe` | Kommaseparierte Liste der Fachkürzel, für die eine Übersicht erzeugt werden soll. |

## Beispiel

```pascal
CreateNotenHeader('D,E,M,F,L');
```

Bei den Konferenz-Übersichten (d.h. Vorlagen, die die Datenquellen `FachUebersichtHeader` und `FachUebersicht` verwenden) stehen im Befehl `CreateNotenHeader` weitere Optionen zum Filtern auf Fächer zur Verfügung:

Es können die Platzhalter `*` oder `%` gleichbedeutend verwendet werden. Beispiel:

```pascal
CreateNotenHeader( 'D,M,E*' );
```

Dieser Aufruf würde nur die Fächer D, M und solche, die mit E anfangen, berücksichtigen (also z.B. E5, EK).

Der Platzhalter `#` kann speziell für Fremdsprachen mit Jahrgangsangabe verwendet werden. Beispiel:

```pascal
CreateNotenHeader( 'D,M,E#' );
```

Dieser Aufruf würde nur die Fächer D, M und alle Englisch-Fächer berücksichtigen (aber nicht EK).

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=CreateNotenHeader)
