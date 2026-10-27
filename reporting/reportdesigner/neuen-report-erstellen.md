---
title: "Einen Report ohne Assistenten erstellen"
---

# Einen Report ohne Assistenten erstellen

Erstellen Sie einen leeren Report und bauen Sie eine einfache Liste aus festem Text und einem Datenbankfeld auf. Prüfen Sie das Ergebnis in der Vorschau und speichern Sie anschließend die Vorlage.

Um die grundlegende Struktur eines Reports und des Reporteditors in **SchILD-NRW 3** kennenzulernen, wird ein neuer, leerer Report erstellt.

[![Bearbeiten von Reports beziehungsweise Erstellen neuer Reports mit der rechten Maustaste.](/bilder/reportdesigner/report-neu-und-veraendern-1.png)](/bilder/reportdesigner/report-neu-und-veraendern-1.png)

*Bearbeiten von Reports beziehungsweise Erstellen neuer Reports mit der rechten Maustaste.*

## Den leeren Report anlegen

Öffnen Sie die **Reportverwaltung**. Nachdem in den Ordner navigiert wurde, in dem der neue Report entstehen soll, öffnet ein Rechtsklick ein Kontextmenü, über das **Neuen Report erzeugen** gewählt werden kann.  

## 1. Entwurf, Vorschau und Reportbereiche kennenlernen

[![Wichtige Elemente des Reporteditors.](/bilder/reportdesigner/report-neu-und-veraendern-2.png)](/bilder/reportdesigner/report-neu-und-veraendern-2.png)

*Wichtige Elemente des Reporteditors.*

Wesentliche Elemente des Editors sind die beiden Schaltflächen **Entwurf** und **Vorschau**. Die Entwurfsansicht dient der Bearbeitung, die Vorschau zeigt das erzeugte Ergebnis.

**Entwurf** bezeichnet die Ansicht, in der Felder als feste Texte, Datenbankinhalte, Bilder, Linien usw. platziert und konfiguriert werden können.

In der **Vorschau** sehen Sie die Ausgabe mit den aktuellen Einstellungen und Daten. Wechseln Sie bei der Bearbeitung zwischen **Entwurf** und **Vorschau**, um Änderungen am Layout direkt zu prüfen.

Der Report selbst, im Bild grün markiert, besteht aus drei grundlegenden Bereichen:

- **Kopf** – feste Elemente, die über dem eigentlichen Inhalt erscheinen (z. B. Schulkopf oder Kopfzeilen)
- **Detailbereich** – enthält das Layout des eigentlichen Reports; hier werden die Daten zeilenweise ausgegeben
- **Fuß** – abschließende Elemente wie Seitenzahlen, Datum oder andere Reportinformationen

Der **Berichtsbaum** (lila markiert) zeigt die Struktur eines Reports hierarchisch an. Er stellt übersichtlich dar, welche Elemente im Kopf-, Detail- und Fußbereich verwendet werden. Gerade bei komplexeren Reports ist dieser Bereich hilfreich.

Im Beispiel ist zu sehen, dass ein **Label** (ein festes Textfeld) und ein **DBText** (ein Datenbankfeld) in den Detailbereich gelegt wurden. Kopf und Fuß sind leer, daher erscheinen dort keine Einträge im Berichtsbaum.  

::: tip Tipp

Der Berichtsbaum wird besonders relevant, wenn Reports mehrfach geschachtelte **Unterberichte** verwenden. Dies ist z. B. bei Zeugnissen der Fall.

:::

## 2. Feste Texte und Datenbankfelder einfügen

[![Die Werkzeugleiste.](/bilder/reportdesigner/report-neu-und-veraendern-3.png)](/bilder/reportdesigner/report-neu-und-veraendern-3.png)

*Die Werkzeugleiste.*

Über die **Werkzeugleiste** werden die Feldtypen bereitgestellt, mit denen ein Report aufgebaut wird.

Es stehen Werkzeuge für feste Texte (Labels), Datenbankinhalte (DBText), Bilder, Linien, Formen und formatierte Textblöcke zur Verfügung.

Im Beispiel wurde hervorgehoben, wie ein festes Textfeld platziert wird: dazu wird das entsprechende Werkzeug angeklickt und anschließend an die gewünschte Stelle im Report geklickt. Das Feld kann danach noch verschoben werden.

Labels können mit beliebigem Text gefüllt werden, hier z. B. mit „Name und Vorname“. Dies erfolgt entweder per Doppelklick auf das Label oder über die Werkzeugleiste.

::: info Hinweis

Im Reporteditor heißen feste Textfelder **Label** und werden fortlaufend nummeriert (Label1, Label2, ...). Dies gilt ebenso für andere Feldarten, z. B. **Line1**, **Line2** usw. für Linienobjekte.

:::

## 3. Datenquelle und Datenfeld zuweisen

In Lila wurde ein Datenbankfeld (**DBText**) platziert. Dazu wird in der Werkzeugleiste **DBText** gewählt und im Report abgelegt. Wird das Feld aktiviert, kann oben eine passende **Datenquelle** ausgewählt werden.

Im Beispiel wird die Datenquelle **Schueler** verwendet. Diese enthält u. a. Stammdaten wie Name, Geburtsdatum, Klasse, Jahrgang und Bildungsgang.

Aus dem Dropdown-Menü wird anschließend ein konkretes **Datenfeld** gewählt, im Beispiel das Feld **NameVorname**.

[![Der einfache Report in der Vorschau. Noch enthält unser Report einen Fehler.](/bilder/reportdesigner/report-neu-und-veraendern-4.png)](/bilder/reportdesigner/report-neu-und-veraendern-4.png)

*Der einfache Report in der Vorschau. Noch enthält unser Report einen Fehler.*

Nach einem Klick auf **Vorschau** wird ein Report erzeugt.

Für jede Person im Container links entsteht eine Zeile, die aus dem festen Textfeld „Name und Vorname“ und dem Datenbankfeld **NameVorname** besteht.

Allerdings ist das Feld im Beispiel so schmal, dass längere Namen abgeschnitten werden. Dieser Fehler wird im nächsten Schritt korrigiert.  

## 4. Feldbreiten im Kontextmenü anpassen

[![Automatische Größenanpassung des DBText-Feldes.](/bilder/reportdesigner/report-neu-und-veraendern-5.png)](/bilder/reportdesigner/report-neu-und-veraendern-5.png)

*Automatische Größenanpassung des DBText-Feldes.*

Mit einem Klick auf **Entwurf** ist der Report wieder bearbeitbar.

Über einen Rechtsklick auf das **DBText**-Feld wird **Automatische Größenanpassung** gewählt. Das Feld passt sich nun automatisch in der Breite an den jeweiligen Inhalt an.  
Ein erneuter Klick auf **Vorschau** erzeugt ein besseres und korrekt lesbares Ergebnis.

[![Automatische Größenanpassung des DBText-Feldes.](/bilder/reportdesigner/report-neu-und-veraendern-6.png)](/bilder/reportdesigner/report-neu-und-veraendern-6.png)

*Automatische Größenanpassung des DBText-Feldes.*

Dieses Beispiel zeigt, wie Felder in einen Report gezogen werden können und wie sie über Werkzeugleiste oder Kontextmenü konfiguriert werden. Je nach Feldtyp stehen weitere Einstellmöglichkeiten zur Verfügung.  

## 5. Report speichern

[![Speichern des Reports.](/bilder/reportdesigner/report-neu-und-veraendern-7.png)](/bilder/reportdesigner/report-neu-und-veraendern-7.png)

*Speichern des Reports.*

Der Report kann über **Datei → Speichern** beziehungsweise **Datei → Speichern unter...** gespeichert werden.

::: info Hinweis

Es wird hierbei der Report, also der „Bauplan“, gespeichert. Nicht gespeichert wird das Ergebnis eines konkret erzeugten Reports.

:::

::: danger Achtung

Reports können nur verwendet werden, wenn sie im SchILD-Reportverzeichnis – oder in dessen Unterordnern – abgelegt werden.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Einen_neuen_Report_erstellen)
