# Reports verwenden und verwalten

Mit der Reportverwaltung richten Sie vorhandene Reports ein und erzeugen daraus Ausgaben mit den Daten Ihrer Schule. Dieser Einstieg führt Sie vom Einfügen eines Reports bis zur Kontrolle der Ausgabe. Wenn der Report bereits eingerichtet ist, beginnen Sie bei Schritt 3.

## Was möchten Sie tun?

- Einen neuen Report verwenden: Folgen Sie dem [Arbeitsablauf](#einen-report-einrichten-und-verwenden).
- Daten eines früheren Halbjahres ausgeben: Lesen Sie [Daten aus zurückliegenden Abschnitten drucken](/reporting/reportverwaltung/daten-aus-zurueckliegenden-abschnitten-drucken).
- Einen häufig benötigten Report schneller öffnen: Nutzen Sie den [Schnellzugriff](/reporting/reportverwaltung/reports-ueber-den-schnellzugriff-aufrufen).
- Eine Schaltfläche nachschlagen: Öffnen Sie die Beschreibung des [Menübands der Reportverwaltung](/reporting/reportverwaltung/menueband-reportverwaltung).
- Einen Report selbst gestalten: Wechseln Sie zu [Reports erstellen und anpassen](/reporting/reportdesigner).

## Einen Report einrichten und verwenden

### 1. Den passenden Ordner vorbereiten

Die Reportverwaltung bildet die Ordnerstruktur unter `Schild-Reports` im SchILD-Arbeitsverzeichnis ab. Wählen Sie einen passenden Unterordner oder legen Sie einen eigenen an, etwa für die Sekundarstufe I.

::: warning Wichtig – Arbeitsverzeichnis im Netzwerk
Bei einer Netzwerkinstallation verwenden Sie das Arbeitsverzeichnis im Netzwerk. Der konkrete Pfad kann von den Beispielen in der Dokumentation abweichen.
:::

Beachten Sie die besonderen Ordner `Subreports` und `Header_Footer`. Für Zeugnisformulare empfiehlt sich eine Ablage nach Schuljahr und Halbjahr, damit die ursprünglichen Formulare für spätere Nachdrucke erhalten bleiben.

Die Einzelheiten erläutert [Die Ordnerstruktur der Reportverwaltung](/reporting/reportverwaltung/die-ordnerstruktur-der-reportverwaltung).

### 2. Den Report einfügen

Entpacken Sie das Reportarchiv in den gewählten Ordner. Die eigentliche Reportvorlage hat die Erweiterung `.rtm`; eine zusätzlich enthaltene PDF-Datei zeigt ein bereits erzeugtes Beispiel.

Ist die Reportverwaltung währenddessen geöffnet, klicken Sie auf **Verzeichnisbaum aktualisieren**. Der eingefügte Report erscheint anschließend im entsprechenden Ordner.

Die bebilderte Anleitung [Reports in die Reportverwaltung einfügen](/reporting/reportverwaltung/reports-in-die-reportverwaltung-einfuegen) zeigt Download, Entpacken und Aufruf an einem Beispiel. Für ganze Sammlungen verwenden Sie die Anleitungen zu [Basisreports](/reporting/basisreports/basisreportsammlung-herunterladen-und-aktualisieren) oder [Zeugnisformularen](/reporting/zeugnisformulare/zeugnisformulare-herunterladen-und-aktualisieren).

### 3. Lernabschnitt und Personenkreis wählen

Standardmäßig werden Daten des aktuellen Abschnitts verwendet. Benötigen Sie eine Ausgabe für ein früheres Halbjahr, wählen Sie vor dem Aufruf den passenden Eintrag unter **Schuljahr/Abschnitt**. Die Anleitung [Daten aus zurückliegenden Abschnitten drucken](/reporting/reportverwaltung/daten-aus-zurueckliegenden-abschnitten-drucken) zeigt die Auswahl.

Öffnen Sie den Report mit einem Doppelklick. Beim Aufruf wählen Sie, ob die Ausgabe für die ausgewählte Person, die markierten Personen oder die ganze Gruppe erzeugt werden soll.

::: warning Wichtig – Nach dem Druck zurückstellen
Wenn Sie einen früheren Abschnitt gewählt haben, stellen Sie danach wieder den aktuellen Abschnitt ein. Sonst können auch die folgenden Reports mit Daten des falschen Abschnitts erzeugt werden.
:::

### 4. Die Ausgabe in der Vorschau kontrollieren

Je nach Report erscheinen zusätzliche Rückfragen. Prüfen Sie deren Wirkung in der Vorschau. Im Beispiel der Einfügeanleitung betrifft dies die Formatierung von Bemerkungen, Arbeits- und Sozialverhalten sowie außerunterrichtlichem Engagement; andere Reports können andere Rückfragen stellen.

Kontrollieren Sie vor der weiteren Ausgabe, ob Lernabschnitt, Personenkreis und Darstellung zum gewünschten Ergebnis passen. Entscheiden Sie anschließend, ob der Report verwendet werden kann oder angepasst werden muss.

## Häufig benötigte Ergänzungen

| Aufgabe | Anleitung |
| --- | --- |
| Reports in einem schwebenden Fenster bereitstellen | [Reports über den Schnellzugriff aufrufen](/reporting/reportverwaltung/reports-ueber-den-schnellzugriff-aufrufen) |
| Stammblatt oder Schulbescheinigung direkt öffnen | [Direkter Zugriff auf das Schülerstammblatt und die Schulbescheinigung](/reporting/serienbriefe/direkter-zugriff-auf-das-schuelerstammblatt-und-die-schulbescheinigung) |
| Erzeugte Dokumente archivieren | [Dokumentenverwaltung und Zeugnisarchivierung](/reporting/zeugnisformulare/dokumentenverwaltung-und-zeugnisarchivierung) |
| Den Ablageort der Dokumente ändern | [Verzeichnis der Dokumentenverwaltung ändern](/reporting/reportdesigner/verzeichnis-der-dokumentenverwaltung-aendern-tutorial) |
| Einen Report per E-Mail versenden | [Einen Report per E-Mail versenden und teilen](/reporting/reportverwaltung/einen-report-per-e-mail-versenden-und-teilen) |
| Schülerindividuelle Reports gesammelt per E-Mail versenden | [Serien-E-Mail-Versand](/reporting/reportdesigner/serien-e-mail-versand) |

## Wenn der Report nicht wie erwartet erscheint

| Beobachtung | Nächster Schritt |
| --- | --- |
| Eine im Windows-Explorer eingefügte Reportdatei fehlt in der geöffneten Reportverwaltung. | **Verzeichnisbaum aktualisieren** ausführen; Ablage unter dem tatsächlich verwendeten Arbeitsverzeichnis kontrollieren. |
| Eine geänderte Fachbezeichnung erscheint noch mit dem alten Stand. | **Abfragen aktualisieren** verwenden. Einige Katalogdaten werden beim Start in die Reportumgebung geladen. |
| Ein neu verfügbarer Windows-Drucker fehlt in der Auswahl. | **Druckerliste aktualisieren** ausführen. |

Diese Funktionen sind im [Menüband der Reportverwaltung](/reporting/reportverwaltung/menueband-reportverwaltung) beschrieben.
