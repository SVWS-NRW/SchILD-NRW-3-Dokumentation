---
title: "Einen vorhandenen Report anpassen"
source_pageid: 1568
source_revision: 6680
---

# Einen vorhandenen Report anpassen

Nutzen Sie einen vorhandenen Report als Ausgangspunkt. Am Beispiel einer Schulbescheinigung ändern Sie Schrift, Positionen und ausgegebene Datenfelder.

Reports müssen nicht immer komplett neu erstellt werden. Auf der Webseite **Schulverwaltungssoftware des MSB** stehen bereits umfangreiche Reportsammlungen zur Verfügung. Oft ist es sinnvoll, zunächst zu prüfen, ob ein benötigter Report bereits existiert. Gefundene Reports lassen sich anschließend an die eigenen Bedürfnisse anpassen.

## 1. Beispiel Schulbescheinigung anpassen

[![Eine Schulbescheinigung, die angepasst werden soll.](/bilder/reportdesigner/report-neu-und-veraendern-8.png)](/bilder/reportdesigner/report-neu-und-veraendern-8.png)

*Eine Schulbescheinigung, die angepasst werden soll.*

Im folgenden Beispiel wird eine Schulbescheinigung aus einer Reportsammlung angepasst. Der Ausgangsreport könnte wie rechts dargestellt aussehen.

Es sollen folgende Veränderungen vorgenommen werden:

- Schriftart **Arial** → **Calibri**
- Datenfelder nicht mehr kursiv
- **PLZ** soll etwas nach unten verschoben werden
- **Konfession** soll nicht erscheinen
- dafür soll das **Alter** ausgegeben werden

### Schriftgröße und Schriftart anpassen

[![Verändern von Text innerhalb von Textfeldern.](/bilder/reportdesigner/report-neu-und-veraendern-9.png)](/bilder/reportdesigner/report-neu-und-veraendern-9.png)

*Verändern von Text innerhalb von Textfeldern.*

Im Modus **Entwurf** können Textfelder bearbeitet werden. Dazu wird ein Feld angeklickt. Nun erscheinen im oberen Werkzeugbereich Auswahlfelder für:

- **Schriftart**
- **Schriftgröße**
- Schriftstil (fett, kursiv, unterstrichen)
- Ausrichtung innerhalb des Feldes

Auch Datenbankfelder (**DBText**) besitzen diese Eigenschaften, da sie ebenfalls Text enthalten.

::: tip Tipp

Sie können mehrere Felder gleichzeitig markieren. Ziehen Sie dazu mit gedrückter linker Maustaste einen Auswahlrahmen um die gewünschten Felder. Diese Auswahl wird auch **Lasso** genannt. Markierte Felder erkennen Sie an den grauen Eckpunkten.

:::

Auf diese Weise lassen sich Schriftart und Schriftstil aller betreffenden Felder in einem Schritt ändern.

Im Beispiel wird zusätzlich bei den Datenbankfeldern der Kursivstil deaktiviert (Schalter **I**).  

### Daten hinzufügen und entfernen

[![Verschieben von Feldern – beachten Sie die blaue Hilfslinie.](/bilder/reportdesigner/report-neu-und-veraendern-10.png)](/bilder/reportdesigner/report-neu-und-veraendern-10.png)

*Verschieben von Feldern – beachten Sie die blaue Hilfslinie.*

Nun wird das Feld **Konfession** entfernt. Dazu wird das Feld ausgewählt und mit **Entf** gelöscht (Label und Datenfeld).

Die nun entstehende Lücke wird genutzt, um das Datenfeld **PLZ_Ort** leicht nach unten zu verschieben.

::: tip Tipp

Der Editor zeigt beim Ausrichten eine feine blaue Hilfslinie, wenn Feldkanten mit anderen Feldern übereinstimmen.  

So lassen sich Felder sehr präzise platzieren.

:::

Der darunterliegende Datenblock wird per Lasso markiert und nach oben geschoben, bis das Layout wieder geschlossen wirkt.  

[![Einfügen eines neuen DB-Felds (»Alter«).](/bilder/reportdesigner/report-neu-und-veraendern-11.png)](/bilder/reportdesigner/report-neu-und-veraendern-11.png)

*Einfügen eines neuen DB-Felds (»Alter«).*

Nun soll das **Alter** ausgegeben werden. Dazu wird ein Feld vom Typ **DBText** im Report platziert. Wichtig: Es sollte nicht unmittelbar neben dem Geburtsdatum liegen, damit sich die Felder bei langen Angaben nicht überlappen.

Das neue Feld wird angepasst, im Beispiel auf **Linksbündig** gestellt.

Als **Datenquelle** wird **Schueler** gewählt. Das **Datenfeld** wird per Dropdown auf **Alter** gesetzt.  

[![Der nun überarbeitete Report in der Vorschau.](/bilder/reportdesigner/report-neu-und-veraendern-12.png)](/bilder/reportdesigner/report-neu-und-veraendern-12.png)

*Der nun überarbeitete Report in der **Vorschau**.*

In der **Vorschau** erscheint nun die angepasste Schulbescheinigung.

Ob das Ergebnis bereits zufriedenstellt oder weiter verfeinert werden soll, liegt im Ermessen des Anwenders.

Beispiele für mögliche Weiterentwicklungen:

- ein zusätzliches Textfeld mit der Beschriftung »Alter«
- weitere Datenfelder (z. B. Erziehungsberechtigte)
- Layout-Optimierung für gleichmäßige Abstände

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Einen_vorhandenen_Report_anpassen) · Quellrevision 6680.
