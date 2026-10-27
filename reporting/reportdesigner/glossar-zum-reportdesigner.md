---
title: "Begriffe des Reportdesigners"
---

# Begriffe des Reportdesigners

Schlagen Sie Begriffe zu Reportbereichen, Elementen, Datenquellen und Programmierung nach. Die Erläuterungen sind nach Themen geordnet.

Dieses Glossar erklärt Begriffe, die im Zusammenhang mit dem Reportdesigner von **SchILD-NRW 3** verwendet werden. Die Begriffe sind nach Themenbereichen sortiert und innerhalb der Bereiche alphabetisch gelistet.

## Bereiche eines Reports

### Detailbereich

Bereich des Reports, der für jeden Datensatz einmal ausgegeben wird (z. B. pro Schüler eine Zeile). Kernbereich für Listen.

### Fuß

Unterer Bereich eines Reports. Kann pro Seite oder pro Gruppe erscheinen. Typische Inhalte: Seitenzahlen, Datum, Dokumentname.

### Gruppenkopf

Kopf einer Gruppe. Wird zu Beginn einer Gruppierung ausgegeben (z. B. „Klasse 5a“).

### Gruppenfuß

Fuß einer Gruppe. Wird am Ende einer Gruppierung ausgegeben.

### Kopf

Oberer Bereich eines Reports. Kann pro Seite oder pro Gruppe erscheinen. Typischer Ort für Schulköpfe.

## Felder und Elemente

### DBCalc

Feld für Berechnungen, Zähler oder Summen. Kann pro Gruppe oder global zurückgesetzt werden.

### DBText

Feld zur Ausgabe von Datenfeldern (z. B. Name, Geburtsdatum, Klasse).

### Element

Sammelbegriff für alle Bestandteile eines Reports, z. B. Linien, Textfelder, Datenfelder, Bilder oder Subreports.

### Label

Feld mit festem Text. Wird zur Beschriftung verwendet (z. B. „Name“ oder „Geburtsdatum“).

### Linie

Element zur visuellen Trennung. Wird häufig zwischen Detailbereichen genutzt.

### RichText

Textfeldtyp mit formatiertem Text. Ermöglicht Platzhalter wie **\$JAHRGANG\$** zur Laufzeit.

### Statischer Subreport

Eingebetteter Report, der in den Hauptreport kopiert wird und dort unabhängig weiter existiert.

### Dynamischer Subreport

Verknüpfter Report, der beim Generieren geladen wird. Änderungen wirken automatisch in allen Reports.

### Systemvariable

Vorgefertigte Variable wie **Druckdatum**, **Dokumentname** oder Seitenzahlen.

## Daten und Datenverarbeitung

### Datenfeld

In einer Datenquelle enthaltenes Feld (z. B. **NameVorname**, **GebDat**).

### Datenquelle

Quelle der Daten (z. B. **Schueler**, **Abschnitt**, **Faecher**). Enthält mehrere Datenfelder.

### Gruppe / Gruppierung

Zusammenfassung von Datensätzen nach einem Merkmal (z. B. Klasse). Ermöglicht eigene Köpfe, Füße und Seitenwechsel.

### Serienreport

Report, der für mehrere Datensätze erzeugt wird (z. B. ein Zeugnis pro Schüler).

### Zähler

Mechanismus zur Nummerierung, häufig über **DBCalc** implementiert.

## Ansichten und Bedienung

### Berechnungen

Modus des Editors zur Hinterlegung von Object-Pascal-Code. Reagiert auf Ereignisse (Events).

### Entwurf

Modus zur Bearbeitung von Layout und Feldern.

### Vorschau

Modus zur Ansicht des fertigen Reports vor dem Druck.

## Programmierung und Laufzeit

### Ereignis und Event

Auslöser, zu dem Code ausgeführt wird (z. B. beim Drucken, beim Anzeigen oder zwischen Datensätzen).

### OnGetText

Ereignis zur Manipulation des darzustellenden Textes.

### OnPrint

Ereignis kurz vor der Ausgabe. Häufig genutzt zur Steuerung von Sichtbarkeit.

### RAP-Funktionen

Erweiterungen für SchILD-NRW. Bieten Sonderlogik, z. B. für Abschluss- oder Abschnittsinformationen.

### Variable

Wert, der im Modus „Berechnungen“ definiert und für Code verwendet werden kann.

## Layout und Gestaltung

### Dehnen

Eigenschaft, die ein Element an die Höhe seines Inhalts anpasst.

### Seitenwechsel

Erzeugt eine neue Seite, z. B. bei Gruppen oder Datensatzwechseln.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Glossar_zum_Reportdesigner)
