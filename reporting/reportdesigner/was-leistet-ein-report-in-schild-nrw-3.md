---
title: "Wie ein Report Daten zu einer Ausgabe zusammenführt"
source_pageid: 1564
source_revision: 6678
---

# Wie ein Report Daten zu einer Ausgabe zusammenführt

Ein Report verbindet feste Gestaltung mit Datenbankfeldern. An einer Klassenliste und einem Zeugnis sehen Sie, wie aus der Vorlage die Ausgabe für die ausgewählten Schülerinnen und Schüler entsteht.

## Was leistet ein Report in SchILD-NRW 3?

Ein **Report** in **SchILD-NRW 3** ist eine Vorlage, die beschreibt, wie Daten aus der Datenbank zu einem Dokument zusammengesetzt und ausgegeben werden sollen.

Ein Report enthält daher sowohl

- **Datenfelder** (z. B. Vorname, Nachname, Geburtsdatum)

als auch

- **Formatierungsanweisungen** (z. B. Reihenfolge, Zeilenumbrüche, Schriftstile)

Zum Beispiel könnte ein Report folgende Anweisung enthalten:

        [VORNAME] [NACHNAME], [GEB_DATUM]

Die Begriffe in den eckigen Klammern stehen beispielhaft für **Datenbankfelder**. Beim Ausführen des Reports werden diese Felder für jeden ausgewählten Schüler mit den tatsächlichen Daten gefüllt.

Sind beispielsweise die Schüler „Simon Müller“ und „Lisa Heinz“ ausgewählt, würde das Ergebnis wie folgt aussehen:

        Simon Müller, 09.08.2019
        Lisa Heinz, 23.07.2019

## Beispiel: Klassenliste

Als Beispiel soll eine Klassenliste analysiert werden.

### Der Report „Klassenliste“

[![Die Anweisung, eine Klassenliste zu erzeugen.](/bilder/reportdesigner/grundlagen-1.png)](/bilder/reportdesigner/grundlagen-1.png)

*Die Anweisung, eine Klassenliste zu erzeugen.*

In der Kopfzeile wird die Darstellung der Klassenliste festgelegt. Diese Kopfzeile ist farblich formatiert (blau/weiß) und bleibt bei der Ausgabe unverändert.

In der Zeile darunter befinden sich **Datenfelder**. Im Beispiel ist das Feld **NameVorname** hervorgehoben.

Jedes **Datenfeld** gehört zu einer **Datenquelle**. Die Datenquelle **Schueler** enthält z. B. Informationen wie

- Name
- Geburtsdatum
- aktuelle Klasse
- Jahrgang
- Bildungsgang

und weitere Stammdaten.

Im Bild ist die Datenquelle **Schueler** oben links ausgewählt. Wurde eine Datenquelle ausgewählt, kann im danebenliegenden Dropdown ein konkretes **Datenfeld** gewählt werden, hier im Beispiel **NameVorname**.

Der Report ruft zusätzlich weitere Felder ab, u. a.

- die Klasse des jeweiligen Schülers
- das aktuelle Schuljahr
- den aktuellen Abschnitt (oben rechts)

### Klassenliste drucken

[![Erzeugen eines Reports aus einer fertigen Vorlage.](/bilder/reportdesigner/grundlagen-2.png)](/bilder/reportdesigner/grundlagen-2.png)

*Erzeugen eines Reports aus einer fertigen Vorlage.*

Zunächst wird im Container die Gruppe ausgewählt, auf die der Report angewendet werden soll. Im Beispiel ist dies die Klasse **5a**.

Anschließend wird der Karteireiter **Reportverwaltung** geöffnet und in der Ordnerstruktur der gewünschte Report ausgewählt. Im Beispiel wird der Report **Schüler-Klassenliste Geburtstagsliste** mit einem Doppelklick gestartet.

[![Wahl der Ausgabe und ob die ganze Gruppe verarbeitet werden soll.](/bilder/reportdesigner/grundlagen-3.png)](/bilder/reportdesigner/grundlagen-3.png)

*Wahl der Ausgabe und ob die ganze Gruppe verarbeitet werden soll.*

Über die Auswahl **Ausgabe** kann nun festgelegt werden, ob der Report sofort gedruckt oder zunächst als Vorschau angezeigt werden soll. Im Beispiel wird die Option **Vorschau** gewählt.

[![Die Klassenliste als Ergebnis.](/bilder/reportdesigner/grundlagen-4.png)](/bilder/reportdesigner/grundlagen-4.png)

*Die Klassenliste als Ergebnis.*

In der Vorschau ist zu sehen, wie die festen Elemente des Reports (z. B. Kopfzeile) unverändert erscheinen, während die darunterstehenden Zeilen für jeden Schüler individuell aus der Datenbank befüllt werden.

Zusätzlich kann ein Report so konfiguriert werden, dass u. a. ausgegeben werden:

- Klassenleitungen
- aktueller Abschnitt
- automatische Nummerierungen
- Seitenzahlen
- Druckdatum und Uhrzeit
- Dateiname des Reports

## Komplexe Reports – zum Beispiel Zeugnisse

[![Ein Zeugnis als Beispiel für einen komplexen Report.](/bilder/reportdesigner/report-zeugnisse-0.png)](/bilder/reportdesigner/report-zeugnisse-0.png)

*Ein Zeugnis als Beispiel für einen komplexen Report.*

Bei komplexen Reports wie Zeugnissen ist der Aufbau mehrstufig. Ein Hauptreport kann dabei weitere **Unter-Reports** aufrufen. Über Berechnungen und unterschiedliche Datenquellen wird das endgültige Dokument erzeugt.

::: example Beispiel

Bei einem Zeugnis werden z. B. Leistungen aus mehreren Datenquellen zusammengeführt, abhängig vom aktuellen Abschnitt, den Fächereinstellungen und ggf. Abschlussregelungen.

:::

[![In einem Zeugnis werden mehrere Seiten in einem Report erzeugt.](/bilder/reportdesigner/report-zeugnisse-1.png)](/bilder/reportdesigner/report-zeugnisse-1.png)

*In einem Zeugnis werden mehrere Seiten in einem Report erzeugt.*

Das hier gezeigte Zeugnis besteht aus Vorder- und Rückseite. Auf der ersten Seite erscheinen die Leistungsdaten der für den Druck konfigurierten Fächer. SchILD-NRW 3 berücksichtigt außerdem Besonderheiten, etwa unterschiedliche Abschlussregelungen im Jahrgang 10 oder Lernbereichsnoten.

Über die Kopfzeile des Vorschaufensters können Zoomfaktor und Seitenwechsel gesteuert werden.

[![In einem Zeugnis werden mehrere Seiten in einem Report erzeugt.](/bilder/reportdesigner/report-zeugnisse-2.png)](/bilder/reportdesigner/report-zeugnisse-2.png)

*In einem Zeugnis werden mehrere Seiten in einem Report erzeugt.*

Auf der zweiten Seite erscheinen die im **aktuellen Halbjahr** erfassten Bemerkungen oder Zuweisungen. Eine mit dem Zeugnis gelieferte `.ini`-Datei legt unter anderem die Darstellung der Unterschriften fest, etwa Amtsbezeichnung sowie Vor- und Nachname.

::: info Hinweis

Ein häufiges Fehlerbild: Das Entlassdatum erscheint als „30. Dezember 1899“. Dieses Datum bedeutet, dass für den aktuellen Abschnitt kein gültiges Datum gesetzt ist. Reports geben grundsätzlich das aus, was in der Datenbank hinterlegt ist.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Was_leistet_ein_Report_in_SchILD-NRW_3%3F) · Quellrevision 6678.
