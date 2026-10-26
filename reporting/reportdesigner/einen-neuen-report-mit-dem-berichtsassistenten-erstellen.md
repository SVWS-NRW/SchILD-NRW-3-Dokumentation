---
title: "Einen Report mit dem Berichtsassistenten erstellen"
source_pageid: 1566
source_revision: 6681
---

# Einen Report mit dem Berichtsassistenten erstellen

Lassen Sie den Berichtsassistenten eine erste Liste erzeugen. Anschließend passen Sie Layout, Gruppenwechsel, Systemvariablen und Zeilenzähler an.

In den bisherigen Beispielen wurden Reports und ihre Bestandteile manuell erstellt. Der **Berichtsassistent** in **SchILD-NRW 3** automatisiert große Teile dieses Prozesses: Er kann Datenfelder auswählen, gruppieren, sortieren und erste Formatierungen vornehmen. Dies spart Zeit und eignet sich gut für Standardlisten, die direkt nutzbar sind oder anschließend leicht angepasst werden können.

Im folgenden Beispiel wird eine einfache Liste erzeugt und anschließend optimiert. Dies dient zugleich als Einführungsbeispiel für wichtige Werkzeuge im Reporteditor.

## 1. Erstellung des Reports

[![Erzeugen eines neuen Reports.](/bilder/reportdesigner/report-berichtsassistent-1.png)](/bilder/reportdesigner/report-berichtsassistent-1.png)

*Erzeugen eines neuen Reports.*

Öffnen Sie im **Reportdesigner** das Menü **Datei → Neu…** oder drücken Sie **Strg + N**. Wie Sie den Reportdesigner aufrufen, erläutert [Den Reportdesigner öffnen und verwenden](/reporting/reportdesigner/reportdesigner).

[![Aufruf des Berichtsassistenten.](/bilder/reportdesigner/report-berichtsassistent-2.png)](/bilder/reportdesigner/report-berichtsassistent-2.png)

*Aufruf des Berichtsassistenten.*

Im nächsten Schritt wird **Berichtsassistent** gewählt und mit **Ok** bestätigt.  

[![Aufruf des Berichtsassistenten.](/bilder/reportdesigner/report-berichtsassistent-3.png)](/bilder/reportdesigner/report-berichtsassistent-3.png)

*Aufruf des Berichtsassistenten.*

Wählen Sie die **Datenquelle Schueler**. Eine Datenquelle stellt die Datenfelder für den Report bereit; für die hier gezeigte Schülerliste benötigen Sie die Schülerdaten.

Darunter stehen nun die zur Verfügung stehenden **Datenfelder**. Mit einem Doppelklick oder per Klick auf **\>** werden Felder nach **Ausgewählte Felder** übernommen. Mit **\<** können Felder wieder entfernt werden.

Die Pfeilsymbole rechts verändern die Reihenfolge der Felder. Die obersten Felder stehen später in der erzeugten Liste links.

::: tip Tipp

Sollen Felder nur für eine Gruppierung verwendet werden, aber nicht in der Liste erscheinen, können sie trotzdem hier ausgewählt werden.

:::

Der Bericht kann bereits mit **Fertigstellen** erzeugt werden. Im Beispiel werden jedoch zusätzliche Funktionen erläutert, daher wird **Weiter \>** gewählt.  

[![Datenfelder werden genutzt, um Schüler zu gruppieren.](/bilder/reportdesigner/report-berichtsassistent-4.png)](/bilder/reportdesigner/report-berichtsassistent-4.png)

*Datenfelder werden genutzt, um Schüler zu gruppieren.*

Im nächsten Schritt können Daten gruppiert werden. Durch Doppelklick wurde das Feld **Klasse** in den Bereich **Gruppen** verschoben. Dies erzeugt später eine nach Klassen sortierte Liste.

::: example Beispiel

Eine Gruppierung nach **Klasse** oder nach **Alter** ist typischer Anwendungsfall.  

Eine Gruppierung nach Vornamen oder Geburtsdatum wäre technisch möglich, aber wenig sinnvoll.

:::

Ohne Gruppierung würde **Klasse** als normales Feld in der Liste erscheinen.  

[![Auswahl eines Layouts und der Seitenausrichtung.](/bilder/reportdesigner/report-berichtsassistent-5.png)](/bilder/reportdesigner/report-berichtsassistent-5.png)

*Auswahl eines Layouts und der Seitenausrichtung.*

Nun wird ein Layout gewählt. Im Beispiel wurde **Links ausrichten** gewählt.

Bei der Wahl der Seitenausrichtung ist Folgendes zu bedenken:

- viele Datenfelder oder lange Inhalte → **Querformat** sinnvoll
- typische Klassengrößen → passen im Querformat häufig nicht auf A4

[![Wahl eines Stils.](/bilder/reportdesigner/report-berichtsassistent-6.png)](/bilder/reportdesigner/report-berichtsassistent-6.png)

*Wahl eines Stils.*

Im nächsten Fenster wird ein Stil gewählt, hier **sachlich**.

::: tip Tipp

Wenn kein Farbdruck benötigt wird, kann Schwarzweiß sinnvoll sein, um unnötige Farbdrucke zu vermeiden.

:::

[![Wahl des Modus, in dem sich der Editor nach Abschluss des Assistenten befindet.](/bilder/reportdesigner/report-berichtsassistent-7.png)](/bilder/reportdesigner/report-berichtsassistent-7.png)

*Wahl des Modus, in dem sich der Editor nach Abschluss des Assistenten befindet.*

Zum Abschluss wird gewählt, ob der Report im **Editor** oder in der **Vorschau** geöffnet wird. Ein Wechsel zwischen beiden Ansichten ist jederzeit möglich.  

[![Das vorläufig fertige Ergebnis.](/bilder/reportdesigner/report-berichtsassistent-8.png)](/bilder/reportdesigner/report-berichtsassistent-8.png)

*Das vorläufig fertige Ergebnis.*

Der erzeugte Report enthält bereits:

- alle gewählten Felder
- eine Gruppierung nach Klasse
- eine saubere Listenstruktur
- ein Druckdatum und eine Seitenzahl im Fuß

Das Layout ist verwendbar – lässt sich jedoch weiter verbessern.  

## 2. Anpassen des Reports

Die folgenden Anpassungen dienen als Beispiel und zeigen typische Werkzeuge des Reporteditors.

### Einfache Anpassungen zu Layout, Linien und Schriften

[![Identifizierte Probleme.](/bilder/reportdesigner/report-anpassen-1.png)](/bilder/reportdesigner/report-anpassen-1.png)

*Identifizierte Probleme.*

Folgende Punkte sollen verbessert werden:

- Der **Titel** wird nur auf der ersten Seite ausgegeben – bei Klassenlisten oft unerwünscht.
- Die Felder sollen weiter **nach links verschoben** werden, um rechts Platz für Eintragungen zu schaffen.
- Farben sollen in **Schwarzweiß** geändert werden, um Farbdrucke zu vermeiden.

[![Deaktivieren des Titels.](/bilder/reportdesigner/report-anpassen-2.png)](/bilder/reportdesigner/report-anpassen-2.png)

*Deaktivieren des Titels.*

Der Titel kann über **Bericht** deaktiviert werden. Ein **Titel** erscheint nur auf der ersten Seite, die **Zusammenfassung** auf der letzten Seite. **Kopf** und **Fuß** erscheinen auf jeder Seite.

::: example Beispiel

Subreports, z. B. Zeugnisblöcke, benötigen meist keine eigenen Köpfe oder Füße.

:::

Da eine **Gruppe** (Klasse) definiert wurde, erzeugt der Report zusätzlich **Gruppenköpfe** und **Gruppenfüße**. Diese erscheinen am Beginn bzw. Ende jeder Gruppe.

Zum Verschieben mehrerer Felder können diese markiert werden.

::: tip Tipp

Mehrfachauswahl: Klicken Sie das erste Feld an. Halten Sie danach die **Umschalttaste (Shift)** gedrückt und klicken Sie die weiteren Felder an.

:::

Im Beispiel verschieben Sie die Beschriftungsfelder (**Labels**) im Kopf und die drei Datenfelder (**DBText**) im **Detailbereich** gemeinsam. Der Detailbereich wird für jeden Datensatz ausgegeben, hier also für jede Person der Liste.

[![Umfärben der bunten Felder.](/bilder/reportdesigner/report-anpassen-3.png)](/bilder/reportdesigner/report-anpassen-3.png)

*Umfärben der bunten Felder.*

Mit **Shift + Klick** werden Felder in Blau markiert (z. B. Klassen und Druckdatum). Mit dem **Schriftfarbenwerkzeug** werden sie auf Schwarz geändert.

::: tip Tipp

Das Umfärben lässt sich vermeiden, wenn beim Berichtsassistenten ein Graustufen-Layout gewählt wird.

:::

Das Feld **GeschlechtMW** wird im Gruppenkopf beschriftet – der Datenbankname ist jedoch unschön. Daher wird der sichtbare Titel auf **Geschlecht** geändert.

[![Einfügen von Linien.](/bilder/reportdesigner/report-anpassen-6.png)](/bilder/reportdesigner/report-anpassen-6.png)

*Einfügen von Linien.*

Um handschriftliche Ergänzungen zu ermöglichen, werden Trennlinien gesetzt.

::: tip Tipp

Horizontale Linien gehören oben in den Detailbereich, damit jeder neue Eintrag die Linie unter dem vorherigen erzeugt.

:::

Ein Rechtsklick und die Funktion **Breite der Stammkomponente** setzen die Linie automatisch auf die Breite des Detailbereichs.

::: tip Tipp

Das Platzieren von Linien, Flächen und Farben kann viel Zeit kosten – der **Berichtsbaum** hilft, Felder gezielt auszuwählen.

:::

Im Beispiel wurden zusätzlich:

- beide Felder zum Alter linksbündig gestellt
- alle Schriften modernisiert

[![Der Report im Editormodus.](/bilder/reportdesigner/report-anpassen-4.png)](/bilder/reportdesigner/report-anpassen-4.png)

*Der Report im Editormodus.*

Der Report erscheint nun im Editormodus gut strukturiert.

::: example Beispiel

Weitere mögliche Felder sind **Bilder**, **Formen** oder **Checkboxen**.

:::

[![Der Report in der Vorschau.](/bilder/reportdesigner/report-anpassen-5.png)](/bilder/reportdesigner/report-anpassen-5.png)

*Der Report in der Vorschau.*

In der Vorschau ergibt sich ein funktionales Ergebnis.  

## 3. Seitenwechsel, Systemvariablen und Zähler ergänzen

Folgende Erweiterungen werden ergänzt:

- automatischer Seitenwechsel je Klasse
- Zurücksetzen der Seitenzahlen bei Gruppenwechsel
- Nutzung von Systemvariablen
- Zeilenzähler im Detailbereich

### Gruppen für Seitenwechsel

[![Aufrufen der Gruppeneinstellungen.](/bilder/reportdesigner/report-anpassen-7.png)](/bilder/reportdesigner/report-anpassen-7.png)

*Aufrufen der Gruppeneinstellungen.*

Da der Report bereits nach **Klasse** gruppiert, wird diese Gruppe für Seitenwechsel genutzt. Dies erfolgt über **Bericht → Gruppen…**.  

[![Definition, dass die Gruppe Schueler.Klasse zum Seitenwechsel genutzt werden soll.](/bilder/reportdesigner/report-anpassen-8.png)](/bilder/reportdesigner/report-anpassen-8.png)

*Definition, dass die Gruppe Schueler.Klasse zum Seitenwechsel genutzt werden soll.*

Unter **Bei Gruppenwechsel** können u. a. gewählt werden:

- **Neue Seite beginnen**
- **Seitennummerierung zurücksetzen**

::: tip Tipp

Wenn Schülerdaten komplexer sind, kann zusätzlich nach **Schueler.ID** gruppiert werden. Mit **Gruppe zusammenhalten** werden halbe Datensätze nicht geteilt.

:::

### Systemvariablen

[![Verwendung von Systemvariablen.](/bilder/reportdesigner/report-anpassen-9.png)](/bilder/reportdesigner/report-anpassen-9.png)

*Verwendung von Systemvariablen.*

Eine **Systemvariable** wurde bereits vom Assistenten gesetzt: das **Druckdatum** im Fuß. Eine weitere sinnvolle Variable ist der **Dokumenten-Name**, mit dem der Dateiname des Reports ausgegeben wird.

Platzieren Sie eine Systemvariable wie ein anderes Feld und wählen Sie anschließend die gewünschte Angabe in der Auswahlliste. Zur Verfügung stehen unter anderem:

- Druckdatum (mit/ohne Zeit)
- Seitenzahlen
- Dokumenten-Name

### Zeilennummerierung per Zähler

[![Einfügen des DBCalc-Feldes.](/bilder/reportdesigner/report-anpassen-10.png)](/bilder/reportdesigner/report-anpassen-10.png)

*Einfügen des **DBCalc**-Feldes.*

Um Zeilen zu nummerieren, wird Platz geschaffen und ein **DBCalc**-Feld gesetzt. **DBCalc** dient für datenbankbasierte Berechnungen.

::: tip Tipp

Für präzises Ausrichten kann der **Zoom** erhöht und der Detailbereich temporär vergrößert werden.

:::

[![Wahl von Laufender Zähler nach Rechtsklick.](/bilder/reportdesigner/report-anpassen-11.png)](/bilder/reportdesigner/report-anpassen-11.png)

*Wahl von **Laufender Zähler** nach Rechtsklick.*

Per Rechtsklick wird **Laufender Zähler** ausgewählt.  

[![Zurücksetzen des Zählers bei Gruppenwechsel.](/bilder/reportdesigner/report-anpassen-12.png)](/bilder/reportdesigner/report-anpassen-12.png)

*Zurücksetzen des Zählers bei Gruppenwechsel.*

Wie bei den Seitenzahlen wird der Zähler bei **Klasse** zurückgesetzt.  

[![Der Zähler funktioniert technisch…](/bilder/reportdesigner/report-anpassen-13.png)](/bilder/reportdesigner/report-anpassen-13.png)

*Der Zähler funktioniert technisch…*

::: info Hinweis

Die Zeilenhöhe war zu groß, da der Detailbereich nicht wieder verkleinert wurde. Dies wurde korrigiert.

:::

[![Veränderung des Anzeigeformats.](/bilder/reportdesigner/report-anpassen-14.png)](/bilder/reportdesigner/report-anpassen-14.png)

*Veränderung des Anzeigeformats.*

Über **Anzeigeformat** wird das Ausgabeformat definiert.  

[![Eingabe des gewünschten Formats.](/bilder/reportdesigner/report-anpassen-15.png)](/bilder/reportdesigner/report-anpassen-15.png)

*Eingabe des gewünschten Formats.*

Für die Ausgabe „5.“ wird z. B. **\#'.** gewählt. **\#** steht für die laufende Zahl.

::: info Hinweis

Das Hochkomma findet sich auf derselben Taste wie »#«.

:::

[![Das Ergebnis.](/bilder/reportdesigner/report-anpassen-16.png)](/bilder/reportdesigner/report-anpassen-16.png)

*Das Ergebnis.*

Das Ergebnis ist eine nach Klassen getrennte Liste mit Zeilennummerierung. Welche Klassen oder Gruppen verarbeitet werden, wird zuvor in SchILD-NRW 3 über den Container ausgewählt.

Je nach Bedarf können weitere Anpassungen erfolgen (z. B. größere Zeilenhöhe).

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Einen_neuen_Report_mit_dem_Berichtsassistenten_erstellen) · Quellrevision 6681.
