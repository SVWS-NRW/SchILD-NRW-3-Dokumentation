---
title: "Noten über Excel-Dateien austauschen"
---

# Noten über Excel-Dateien austauschen

Exportieren Sie eine Notentabelle, tragen Sie die Noten ein und importieren Sie die bearbeitete Datei. Die für die Zuordnung benötigten Spalten und ihre Reihenfolge dürfen nicht verändert werden.

Zur Noteneingabe können auch Excel-Dateien verwendet werden.

## Export

[![Export der Notendateien, die dann ausgefüllt werden können.](/bilder/vorbereitung/excel-notendateien-export-1.png)](/bilder/vorbereitung/excel-notendateien-export-1.png)

*Export der Notendateien, die dann ausgefüllt werden können.*

[![Wählen Sie einen Pfad und einen Dateinamen.](/bilder/vorbereitung/excel-notendateien-export-2.png)](/bilder/vorbereitung/excel-notendateien-export-2.png)

*Wählen Sie einen Pfad und einen Dateinamen.*

[![Eine Beispieldatei, angezeigt in MS Excel.](/bilder/vorbereitung/excel-notendateien-export-3-beispiel.png)](/bilder/vorbereitung/excel-notendateien-export-3-beispiel.png)

*Eine Beispieldatei, angezeigt in MS Excel.*

Hierzu steht ein Menüpunkt *"Verwaltung Export Excel-Notendateien"* zur Verfügung. Es öffnet sich ein Auswahlfenster, in dem der Abschnitt zu wählen ist, für den die Noten eingetragen werden sollen.

Die Dateien können auch mit anderen Tabellenkalkulationsprogrammen wie Open Office Calc bearbeitet werden.

Nachdem ein Pfad und Dateiname gewählt wurde, wird der Export über **Exportieren** gestartet.

Die Dateien haben folgenden Spalten-Aufbau:

    | Name | Vorname | Geburtsdatum | Klasse | Fach-Kürzel | Kursart | Note | Punkte | Zeugnisbemerkung



::: warning Wichtig

Die ersten sechs Spalten - *Name* bis *Kursart* - werden vom Export gefüllt und dürfen bei der Bearbeitung der Datei (Noteneingabe) nicht verändert werden, da ansonsten keine Zuordnung beim Import möglich ist!\
Nachträgliche Änderungen in SchILD (Fach, Kursart) können dazu führen, dass der betreffende Datensatz beim Import nicht gefunden oder falsch zugeordnet wird!\
Die Reihenfolge der Spalten darf nicht geändert werden!

Die Spaltenbezeichnungen in der Kopfzeile dürfen nicht verändert werden!

:::

Hierbei ist zu beachten:

- Der Export bezieht sich immer auf die aktuell ausgewählte Schülermenge.
- Es werden keine „lehrerbezogenen“ Dateien erzeugt.
- Ebenso lassen sich über von Hand erzeugte Bemerkungen hinaus keine weiteren Daten eingeben.
- Es können *Noten* oder *Punkte* in die jeweilige Spalte eingetragen werden. Wenn beides eingetragen ist, hat die Note Vorrang.
- Es dürfen nur *"erlaubte"* Einträge vorgenommen werden. Achten Sie darauf, dass in SchILD die Eingabe von erweiterten Noten aktiviert ist, falls dies vorgenommen werden soll (über *"Einstellungen ➜ Globale Einstellungen ➜ Fächer, Noten ➜ Erweiterte Noten in den Sek. I zulassen"*).
  - Bei *Noten* sind dies ganze Zahlen von 1 bis 6, optional mit "+" oder "-".
  - *Punkte* gestattet ganze Zahlen von 0 bis 15. Zusätzlich können *E1* (mit besonderem Erfolg teilgenommen), *E2* (mit Erfolg teilgenommen) und *E3* (teilgenommen)) verwendet werden. Alle anderen Einträge werden beim Import ignoriert!
- Zeilen, die keine Noten- oder Punkte-Eingabe enthalten, werden beim Import ignoriert.
- In der Bemerkungsspalte können Sie freie Texte eingeben. Diese werden als Zeugnisbemerkungen importiert. Bemerkungen zu mehreren Fächern derselben Person werden dabei zusammengefügt.
- Beim Import wird die erste Zeile mit den Spaltenüberschriften übersprungen. Wenn Sie die exportierte Datei beispielsweise klassenweise auf mehrere Lehrkräfte aufteilen, muss deshalb jede Teildatei eine solche Kopfzeile enthalten.

## Import

[![Auswahl des Abschnitts für den Import.](/bilder/vorbereitung/excel-notendateien-import-1.png)](/bilder/vorbereitung/excel-notendateien-import-1.png)

*Auswahl des Abschnitts für den Import.*

[![Auswahl der Datei und Beginn des Imports.](/bilder/vorbereitung/excel-notendateien-import-2.png)](/bilder/vorbereitung/excel-notendateien-import-2.png)

*Auswahl der Datei und Beginn des Imports.*

Gehen Sie über *"Verwaltung ➜ Import ➜ Excel-Notendateien"* um den Import ausgefüllter Dateien einzuleiten.

Wie beim Export ist ein **Lernabschnitt** zu wählen, für den die eingetragenen Noten gelten.

Anschließend wählen Sie Ihre Notendatei.

::: info Hinweis

Achten Sie bei aufgeteilten Dateien darauf, dass jede Datei die vollständige Kopfzeile mit den unveränderten Spaltenüberschriften enthält.

:::

Mit **Nicht vorhandene Einträge anlegen** wird ebendies getan. In der Praxis sollten Sie aber sicherstellen, dass die exportierten Daten so korrekt sind, dass keine neuen Einträge angelegt werden müssen.

Klicken Sie auf **Importieren**, um die Notendateien einzulesen.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Excel-Notendateien_(Verwaltung_Export))
