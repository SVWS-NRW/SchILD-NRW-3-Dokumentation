---
title: "Eigene Datenquellen für Reports definieren"
---

# Eigene Datenquellen für Reports definieren

Erstellen Sie eine eigene Datenquelle mit dem Abfrageassistenten oder dem Abfrageeditor. Danach steht sie mit ihren Feldern für die Gestaltung des aktuellen Reports zur Verfügung.

Eigene Datenquellen werden unter **Daten** für den aktuellen Report definiert. Die SQL-Abfrage kann Felder aus einer Tabelle auswählen, mehrere Tabellen verknüpfen und Datensätze gruppieren oder sortieren.

Öffnen Sie den Reiter **Daten**. Enthält der Report noch keine eigene Datenquelle, ist die Seite zunächst leer. Wählen Sie **Daten → Neu** und anschließend den Abfrageassistenten oder den Abfrageeditor.

## Eine Datenquelle mit dem Abfrageassistenten erstellen

[![Mit dem Abfrageassistenten lassen sich SQL-Befehle erzeugen.](/bilder/programmierung/reports-eigene-datenquellen-abfrageassistent1.png)](/bilder/programmierung/reports-eigene-datenquellen-abfrageassistent1.png)

*Mit dem Abfrageassistenten lassen sich SQL-Befehle erzeugen.*

Der Abfrageassistent ist ein visuelles Hilfsmittel, um SQL-Befehle automatisch zu generieren. Diese Befehle können anschließend noch angepasst werden.

### 1. Datenquellen auswählen 

Wählen Sie zuerst die Tabellen aus, deren Daten Sie benötigen. Für Schülernamen verwenden Sie zum Beispiel **Schüler**. Übernehmen Sie die Tabelle mit dem Pfeil nach rechts in die Auswahl.

Sobald Sie eine zweite Tabelle hinzufügen, legen Sie im folgenden Fenster deren Verknüpfung fest. Der SQL-Befehl dafür heißt **JOIN**. Er verbindet Tabellen über passende Schlüsselfelder, etwa eine gemeinsame Schüler-ID. Vorgeschlagen wird ein **InnerJoin**; dabei werden zusammenpassende Datensätze beider Tabellen berücksichtigt.

### 2. Felder für die Abfrage festlegen 

Im nächsten Schritt kann angegeben werden, welche Daten in der neuen Datenquelle sichtbar sind. Dies entspricht der **Select-Anweisung** in einem SQL-Befehl. Hierbei werden alle Angaben selektiert, die beispielsweise im DBTextfeld für die neue Datenquelle ausgewählt werden können. Die gewünschten Felder können über das Größer-Zeichen der Auswahl hinzugefügt werden.

### 3. Berechnungen hinzufügen 

Mit **Berechnungen hinzufügen** können Sie Werte zusammenfassen, etwa Datensätze zählen oder den größten Wert ermitteln. Solche Berechnungen heißen **Aggregatfunktionen**. Übernehmen Sie das benötigte Feld mit dem Größer-Zeichen in **Gewählte Felder**. Wählen Sie anschließend die Funktion, zum Beispiel **Anzahl** oder **Max**. Der Assistent ergänzt den passenden SELECT-Eintrag. Eine Gruppierung können Sie im nächsten Schritt festlegen.

### 4. Gruppierung hinzufügen 

Fügen Sie bei Bedarf eine **GROUP BY-Klausel** hinzu. Sie ist insbesondere bei Aggregatfunktionen hilfreich. Aktivieren Sie „Gruppierungsfelder auswählen“ und verschieben Sie die benötigten Felder über die Pfeile zu den gewählten Feldern.

[![Die WHERE-Klausel dient dazu, Suchkriterien zu definieren.](/bilder/programmierung/reports-eigene-datenquellen-abfrageassistent-suchkriterium.png)](/bilder/programmierung/reports-eigene-datenquellen-abfrageassistent-suchkriterium.png)

*Die WHERE-Klausel dient dazu, Suchkriterien zu definieren.*

[![Mit der WHERE-Klausel werden hier nach "volljährigen" Schülern gesucht.](/bilder/programmierung/reports-eigene-datenquellen-abfrageassistent-kriterium.png)](/bilder/programmierung/reports-eigene-datenquellen-abfrageassistent-kriterium.png)

*Mit der WHERE-Klausel werden hier nach "volljährigen" Schülern gesucht.*

### 5. Suchkriterium definieren 

Wählen Sie „Suchkriterium definieren“, um eine **WHERE-Klausel** anzulegen. Klicken Sie im zunächst leeren Fenster mit der rechten Maustaste und erstellen Sie ein Kriterium. Das abgebildete Beispiel beschränkt die Datenquelle auf volljährige Schülerinnen und Schüler. Über die rechte Maustaste können Sie weitere Kriterien ergänzen, miteinander verknüpfen und durch Klammern gruppieren.

### 6. Sortieren der Datensätze 

Wählen Sie „Sortiert nach Feldinhalt“. Legen Sie ein oder mehrere Sortierfelder und deren Reihenfolge fest. Der Assistent ergänzt dafür die **ORDER BY-Klausel**.

[![Name der Datenquelle](/bilder/programmierung/reports-eigene-datenquellen-name.png)](/bilder/programmierung/reports-eigene-datenquellen-name.png)

*Name der Datenquelle*

### 7. Fertigstellen 

Im letzten Schritt kann der eigenen Datenquelle noch ein passender Name gegeben werden. Durch Auswahl von "Fertigstellen" wird das Ergebnis sichtbar.

[![Über den Editor kann die gerade erstelle SQL-Abfrage weiter bearbeitet werden.](/bilder/programmierung/reports-eigene-datenquellen-ergebnis.png)](/bilder/programmierung/reports-eigene-datenquellen-ergebnis.png)

*Über den Editor kann die gerade erstelle SQL-Abfrage weiter bearbeitet werden.*

Die Datenquelle steht nun im Entwurfsmodus zur Verfügung. Sie können sie später weiter anpassen.

Klicken Sie auf eines der Symbole oberhalb der Datenquelle, um den Editor zu öffnen. Die Reiter zeigen die einzelnen Schritte des Abfrageassistenten.

Der Reiter **SQL** zeigt die erzeugte Abfrage. Zum Ändern öffnen Sie mit der rechten Maustaste den Bearbeitungsmodus und bestätigen, dass Sie den SQL-Befehl bearbeiten möchten.

Bestätigen Sie die Änderung mit **OK**. Die Abfrage wird gespeichert, wenn sie syntaktisch korrekt ist.

## Eine Datenquelle mit dem Abfrageeditor erstellen

[![Nutzen Sie den Abfrageeditor, um direkt eigene Abfragen zu erstellen.](/bilder/programmierung/reports-eigene-datenquellen-abfrageeditor.png)](/bilder/programmierung/reports-eigene-datenquellen-abfrageeditor.png)

*Nutzen Sie den Abfrageeditor, um direkt eigene Abfragen zu erstellen.*

Alternativ zum Abfrageassistenten kann der SQL-Befehl auch direkt über den Abfrageeditor definiert werden.

Öffnen Sie **Datei → Neu → Abfrageeditor**.

Die Reiter Tabellen (1) und Felder (2) sind zwingend notwendig, um eine sinnvolle eigene Datenquelle zu erstellen.

Über die anderen Reiter können Sie optional weitere SQL-Klauseln ergänzen. Dies entspricht genau den gleichen Schritten, die oben bereits beim Abfrageassistenten erläutert wurden.

SQL-Kenner können auch direkt über den SQL-Bearbeitungsmodus den Befehl über die Tastatur eingeben.

Auf diese Art und Weise können beliebig viele eigene Datenquellen für einen Report erstellt werden, die wiederum über eine JOIN-Befehl miteinander verknüpft werden können.  

## Eigene Datenquelle auswählen

[![DBTextfeld mit eigener DQ](/bilder/programmierung/reports-eigene-datenquellen-entwurf.png)](/bilder/programmierung/reports-eigene-datenquellen-entwurf.png)

*DBTextfeld mit eigener DQ*

Nachdem eine oder mehrere Datenquellen definiert wurden, stehen diese für die Erstellung des Reports zur Verfügung.

Somit können beispielsweise DBTextfelder basierend auf der eigenen Datenquelle erstellt werden.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Eigene_Datenquellen_definieren)
