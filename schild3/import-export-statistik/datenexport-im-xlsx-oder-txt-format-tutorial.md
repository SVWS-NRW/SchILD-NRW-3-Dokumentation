---
title: "Daten als Excel-, Text- oder CSV-Datei exportieren"
---

# Daten als Excel-, Text- oder CSV-Datei exportieren

Wählen Sie Datenart und Felder für einen individuellen Export. Vorlagen und Feldzuordnungen unterstützen wiederkehrende Ausgaben und den Seriendruck in Word.

Aus SchILD können viele Daten exportiert werden, so dass diese in Excel oder als Textdatei von weiteren Programmen verarbeitet werden können.

Es lässt sich auch eine *Feldzuordnungsdatei* festlegen, um direkt Formate zu erzeugen, die von anderen Programmen erwartet werden.

## Videotutorial zum Datenexport im xlsx- oder txt-Format

<iframe data-extension="youtube" width="560" height="315" src="//www.youtube-nocookie.com/embed/NNczZmza6J4?" frameborder="0" allowfullscreen="" v-pre=""></iframe>

## Daten nach Excel oder als CSV exportieren

[![Der Verlauf des Exports.](/bilder/import-export-statistik/verwaltung-export-1-verlauf.png)](/bilder/import-export-statistik/verwaltung-export-1-verlauf.png)

*Der Verlauf des Exports.*

[![Verändern der Felderreihenfolge.](/bilder/import-export-statistik/verwaltung-export-2-pfeile.png)](/bilder/import-export-statistik/verwaltung-export-2-pfeile.png)

*Verändern der Felderreihenfolge.*

Der Weg des Exports für Tabellenkalkulationsprogramme wie MS Excel oder Open Office Calc wird wie im Screenshot gezeigt durchgeführt.

Der Export verläuft, sofern keine besonderen Ziele verfolgt werden, nach dieser Liste:

1.  **Auswahl der Schüler**: Soll nicht der komplette Schülerbestand exportiert werden, wird zuerst im Reiter *Schüler* auf die gewünschten Personen gefiltert.
2.  **Öffnen des Export-Werkzeugs**: Über *Verwaltung ➜ Export ➜ Als Excel-/Textdateien.*
3.  **Datenart wählen**: Es stehen die Datenarten *Schüler*, *Lehrer*, *Erziehungsberechtigte*, *Telefonische Ansprechpartner* und *Allgemeine Adressen* zur Verfügung.
4.  **Felder auswählen:** Übernehmen Sie die benötigten Datenfelder mit einem Doppelklick oder dem kleinen Pfeil oben rechts in die Auswahl. Auf dieselbe Weise entfernen Sie Felder wieder. Ordnen Sie die ausgewählten Felder mit den roten Pfeilen unterhalb der Liste. Die Reihenfolge von oben nach unten entspricht später den Spalten von links nach rechts. Für die Datenart **Schüler** steht zusätzlich der Reiter **Zeugnisdaten** zur Verfügung; siehe den Abschnitt weiter unten.
5.  **Ausgabedatei**: Hier werden Speicherort und Name der Ausgabedatei gewählt. Soll die Datei direkt in Excel geöffnet werden, ist im Dropdown-Menü die Endung *.xlsx* zu wählen, ansonsten *.txt*. Über *\*.\** lassen sich beliebige Dateiendungen vergeben (z.B. "Export.csv", "daten_2023.dat" usw.).
6.  **Export starten**: Startet den Export.

### Zeugnisdaten

[![Ausgabe von Zeugnisdaten in der Datenart Schüler.](/bilder/import-export-statistik/verwaltung-export-3-zeugnisdaten.png)](/bilder/import-export-statistik/verwaltung-export-3-zeugnisdaten.png)

*Ausgabe von Zeugnisdaten in der Datenart Schüler.*

Sollen mit der Leistung verbundene Daten exportiert werden, ist in der Datenart *Schüler* der Reiter *Zeugnisdaten* anzuwählen.

Dort wird der Haken bei **Zeugnisdaten exportieren** gesetzt.

Weiterhin ist das passende **Halbjahr** auszuwählen. Somit lassen sich auch Leistungsdaten für vergangene Lernabschnitte exportieren.

Im Feld *Fächer* lässt sich konfigurieren, in welchem Format Noten ausgegeben werden, also als Zahlen, Klartext oder auch als Klartext mit Tendenz. Für die gymnasiale Oberstufe können Noten als Punkte exportiert werden.

Die Fächer sind als Standardeinstellung auf die beschränkt, die als Zeugnisfach gekennzeichnet sind. Über den Haken oben können auch alle Fächer zur Wahl gestellt werden.

In den folgenden drei Feldern sind nun neben den konkreten ausgegebenen *Fächern* auch weitere Informationen rund um Leistungsdaten zugänglich, etwa die zu einer Note gehörende *Kursart*.  

### Export-Optionen

[![Konfigurationsoptionen für den Export.](/bilder/import-export-statistik/verwaltung-export-4-export-optionen.png)](/bilder/import-export-statistik/verwaltung-export-4-export-optionen.png)

*Konfigurationsoptionen für den Export.*

- **Feld-Trennzeichen**: Dieses Zeichen trennt die unterschiedlichen Datenfelder. Um lediglich eine Excel-Tabelle oder eine generische .csv-Datei zu erstellen, kann das Standard-Semikolon belassen werden. Ansonsten kann das Zeichen gewählt werden, das von einem zur Weiterverarbeitung bestimmten Programm erwartet wird. Die SchILD-Schnittstellendateien zum Beispiel nutzen das Zeichen **\|**.
- **Begrenzer f. Textfelder**: Felder, die als Daten "Text" enthalten, zum Beispiel in Abgrenzung zu Zahlen, sind von diesem Zeichen eingeschlossen. Hier kann wieder der Standard belassen werden, sollte ein anderes Programm ein anderes Zeichen nutzen, wäre dies hier direkt beim Export zu wählen.
- **Ausgabewert für logisches "Ja"/"Nein"**: Sollen logische Werte verarbeitet werden, lässt sich deren Codierung hierüber festlegen.
- **Ausgabewert für "weiblich"/"männlich"**: Wie oben, nur in Bezug auf das Geschlecht.
- **Datumsformat**: Hier kann das Format für Datumsangaben gewählt werden, das für den beabsichtigten Zweck am sinnvollsten ist.
- **Datum mit Textbegrenzern ausgeben**: Als Standard wird das Datum ohne die *Begrenzer für Textfelder* erzeugt. Beispielsweise kann MS Excel Datumswerte direkt verarbeiten, andere Programme könnten Datumswerte wie andere Felder als Text erwarten, der dann auch in die Begrenzer einzufassen wäre.
- **Kopfzeile ausgeben**: Ist der Haken gesetzt, handelt es sich bei der ersten Zeile in der Exportdatei um die Namen der Datenfelder. Bei einer Abwahl des Hakens beginnt die Datei mit der ersten Datenzeile.

### Vorlagen speichern und laden

[![Speichern von Export-Einstellungen als Vorlage.](/bilder/import-export-statistik/verwaltung-export-5-export-vorlage-speichern.png)](/bilder/import-export-statistik/verwaltung-export-5-export-vorlage-speichern.png)

*Speichern von Export-Einstellungen als Vorlage.*

Wurde für einen Zweck ein passender Export eingestellt, können alle diese Einstellungen zur erneuten Verwendung gespeichert und später neu geladen werden.

Klicken Sie hierzu auf **Als Vorlage speichern**.

Wie in SchILD üblich kann nun eine neue Zeile mit einem Klick auf das **+** angelegt und benannt werden. Geben Sie einen sprechenden Namen, im Screenshot sind einige vielleicht nützliche Beispiele zu sehen.

Klicken Sie dann auf **Übernehmen**, um diesen Export wie eingestellt zu speichern.

Laden Sie einen Export bei erneutem Bedarf über **Vorlage laden**.  

### Feldzuordnungsdatei für Serienbriefdruck

Eine *Feldzuordnungsdatei* verändert die von SchILD verwendeten Bezeichnungen in der Kopfzeile der Exportdatei zu vom Benutzer definierten abweichenden Bezeichnern.

::: example Beispiel

Es ist somit möglich, Word-Serienbriefvorlagen, die für andere Schulverwaltungssysteme erstellt wurden (z.B. IBIS) auch in SchILD weiterzuverwenden oder die Kopfzeile direkt beim Export an das von einem anderen Programm zum Import benötigte Format anzupassen.

:::

Eine solche Zuordnungsdatei muss wie folgt aufgebaut sein:

- Die Datei beginnt zwangsläufig mit dem Text *\[Felderzuordnung\]*
- Jede für den Export ausgewählte Feldbezeichnung wird durch ein "**=**" zu einer anderen Bezeichnung. Also: *FeldbezeichnungSchILD=NeueBezeichnung".*

Eine Datei, um Vorname, Nachname und Geburtsdatum könnte wie folgt aussehen:

    [Felderzuordnung]
    Nachname=SName
    Vorname=SVorname
    Geburtsdatum=SGebDat

Dabei wäre der von SchILD erzeugte Spaltenname *"Nachname"* nicht ausgegeben worden, stattdessen stünde *"SName"* in der Serienbriefdatei.

### Word Seriendruck

[![Anstoßen eines Word Serienbriefdrucks über den Export in Textdateien.](/bilder/import-export-statistik/verwaltung-export-6-export-word-serienbrief.png)](/bilder/import-export-statistik/verwaltung-export-6-export-word-serienbrief.png)

*Anstoßen eines Word Serienbriefdrucks über den Export in Textdateien.*

Eine Exportdatei im txt-Format kann auch genutzt werden, um einen Serienbriefdruck in MS Word anzustoßen. Dies kann sinnvoll sein, da Sie Ihre schon als Word vorhandenen Vorlagen von SchILD-NRW 3 aus nutzen können.

Erstellen Sie zuerst ein Worddokument als Vorlage für den Serienbrief.

Wählen Sie für einen Serienbriefdruck die Datenart *Schüler*, dann wählen Sie alle Felder aus, die Sie im Serienbrief verwenden möchten.

Die zum Export gewählten Felder stehen in Word als Seriendruckfelder zur Verfügung.  

::: info Hinweis

Denken Sie daran, zusätzlich zu den inhaltlich benötigten Feldern alle für eine Anschrift benötigten Felder anzuwählen.

:::

Als Exportdatei muss die Dateiendung *.txt* gewählt werden. Wurde dies getan, lässt sich nun bei **Nach dem Export Word-Seriendruck starten** der Haken setzen. Ist die Datenart nicht *Schüler* beziehungsweise ist die Datei keine *.txt*, bleibt diese Option ausgegraut und nicht anwählbar.

::: danger Achtung

Word muss zuvor geschlossen worden sein.

:::

Nach einem Klick auf **Export starten** öffnet sich ein Fenster, in dem eine Worddatei, *.docx* anzuwählen ist. Wählen Sie Ihren Serienbrief an.

Es öffnen sich nun *zwei* Worddateien:

- Ihr Worddokument als Vorlage für den Serienbrief
- Der generierte Serienbrief - wenn in der Vorlage noch keine Serienbrieffelder gesetzt wurden, sehen beide Dokumente identisch aus und enthalten noch keine dynamischen Informationen. Sind schon Serienbrieffelder gesetzt, wird der Serienbrief natürlich schon ausgefüllt sein.

[![Bearbeiten und generieren des Serienbriefs in Word.](/bilder/import-export-statistik/verwaltung-export-7-export-word-serienbrief-word-serienbrief.png)](/bilder/import-export-statistik/verwaltung-export-7-export-word-serienbrief-word-serienbrief.png)

*Bearbeiten und generieren des Serienbriefs in Word.*

In Ihrer Word-Serienbriefvorlage steht nun ein neuer Reiter zur Verfügung. Wählen Sie **Sendungen** an.

Nun können über **Seriendruckfeld einfügen** alle von SchILD exportierten Datenfelder angewählt und in die Serienbriefvorlage eingebaut werden.

Ist der Serienbrief zufriedenstellend erstellt worden, klicken Sie auf **Fertig stellen und zusammenführen**, im in einem neuen Worddokument die Serienbriefe generiert zu bekommen.

Bei der Erstellung kann in Word angewählt werden, ob die Briefe direkt gedruckt, erst in Word geöffnet oder per E-Mail verschickt werden sollen. Weiterhin lässt sich der Bereich anwählen, in dem die Briefe generiert werden sollen, also *"Alle", "Den aktuellen Datensatz"* oder einen *"Bereich von... bis..."*.

Beim Text- und Excel-Export stehen auch Angaben zur **Klassenleitung und stellvertretenden Klassenleitung** zur Verfügung. Kontrollieren Sie vor der Ausgabe Schülerauswahl, Abschnitt und gewählte Felder.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Datenexport_im_xlsx-_oder_txt-Format_(Tutorial))
