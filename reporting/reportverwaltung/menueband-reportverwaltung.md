---
title: "Das Menüband der Reportverwaltung"
source_pageid: 1043
source_revision: 6528
---

# Das Menüband der Reportverwaltung

[![Aktuelles Menüband und Verzeichnisbaum der Reportverwaltung](/bilder/reportverwaltung/reportverwaltung-uebersicht.png)](/bilder/reportverwaltung/reportverwaltung-uebersicht.png)

*Aktuelles Menüband und Verzeichnisbaum der Reportverwaltung — Oberfläche von SchILD-NRW 3.6.0.*

Über das Menüband verwalten Sie Reportdateien, aktualisieren die Reportumgebung und wählen die Datengrundlage für eine Ausgabe.

Das Menüband enthält **Neu**, **Bearbeiten**, **Ausschneiden**, **Einfügen**, **Verzeichnisbaum**, **Druckerliste**, **Standardformulare** und **Datenquellen**. Die Erläuterungen folgen diesen Beschriftungen.

Für die Anzeige von RTF-Dateien verwendet SchILD das unter Windows zugeordnete Standardprogramm.

## Reportbearbeitung

Der Bereich **Reportbearbeitung** bietet die aus Windows bekannten Funktionen zum Verwalten von Dateien im Reportexplorer.

| Funktion | Wirkung |
| --- | --- |
| **Neu** | Erstellt einen neuen, leeren Report im gewählten Ordner. |
| **Bearbeiten** | Öffnet den ausgewählten Report im Reporteditor. |
| **Ausschneiden** | Merkt den ausgewählten Report zum Verschieben vor. Wird er in einem anderen Ordner eingefügt, wird das Original am bisherigen Ort entfernt. |
| **Einfügen** | Fügt einen zum Kopieren oder Ausschneiden vorgemerkten Report im aktuellen Ordner ein. |

## Allgemeine Reportfunktionen

| Funktion | Wann wird sie benötigt? |
| --- | --- |
| **Verzeichnisbaum** | Wenn Sie parallel im Windows-Explorer Ordner geändert oder neue Reports, etwa Zeugnisformulare, abgelegt haben. Die Ordnerstruktur im Reportexplorer wird neu eingelesen. |
| **Druckerliste** | Liest die von Windows bereitgestellten Drucker neu ein, damit SchILD-NRW 3 sie verwenden kann. |
| **Standardformulare** | Zeigt die Reports an, die als Standard für Stammblatt und Schulbescheinigung festgelegt sind. |
| **Datenquellen** | Zeigt die verfügbaren Datenquellen, ihre Struktur und die darin bereitgestellten Datenbankfelder an. |

Die Standardformulare legen Sie mit einem Rechtsklick auf den jeweiligen Report fest. Anschließend lassen sich Stammblatt und Schulbescheinigung unter **Individualdaten I** im Bereich **Drucken** mit einem Klick erzeugen. Die Anleitung [Direkter Zugriff auf das Schülerstammblatt und die Schulbescheinigung](/reporting/serienbriefe/direkter-zugriff-auf-das-schuelerstammblatt-und-die-schulbescheinigung) erläutert diesen Zugang.

## Ansicht und ausgewähltes Schuljahr

[![Die Bereiche Ansicht und Ausgewähltes Schuljahr.](/bilder/reportverwaltung/reports-menueband-ansichtund-abschnitt.png)](/bilder/reportverwaltung/reports-menueband-ansichtund-abschnitt.png)

*Die Bereiche Ansicht und Ausgewähltes Schuljahr.*

Im Bereich **Ansicht** wählen Sie, welche Dateiinformationen angezeigt werden.

| Ansicht | Angezeigte Angaben |
| --- | --- |
| **Details** | Dateiname, Dateigröße in Byte sowie Datum und Uhrzeit der letzten Änderung. Der Zeitstempel hilft, den Stand einer Reportdatei zu erkennen; diese Ansicht ist deshalb zu empfehlen. |
| **Liste** | Nur der Dateiname. |

Unter **Schuljahr/Abschnitt** wählen Sie den Lernabschnitt, dessen Daten für den anschließend erzeugten Report verwendet werden.

::: example Beispiel: Abgangszeugnis nach dem Abschnittswechsel

Nach dem Wechsel in den nächsten Abschnitt stellt sich heraus, dass eine Schülerin oder ein Schüler die Schule verlässt und im aktuellen Abschnitt nicht mehr beschult wird. Für das Abgangszeugnis können Sie den vorherigen Abschnitt als Datengrundlage auswählen.
:::

::: warning Wichtig – Wieder auf den aktuellen Abschnitt zurückstellen

Stellen Sie nach der Ausgabe wieder den aktuellen Abschnitt ein. Andernfalls können weitere Reportausgaben mit Daten des falschen Abschnitts erzeugt werden.
:::

Die Arbeitsschritte zeigt [Daten aus zurückliegenden Abschnitten drucken](/reporting/reportverwaltung/daten-aus-zurueckliegenden-abschnitten-drucken).

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Men%C3%BCband_(Reportverwaltung)) · Quellrevision 6528.
