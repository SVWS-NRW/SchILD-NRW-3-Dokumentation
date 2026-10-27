---
title: "Filterbedingungen erstellen, testen und speichern"
---

# Filterbedingungen erstellen, testen und speichern

Kombinieren Sie Merkmale mehrerer Bereiche im Schülerfilter. Testen Sie die Bedingungen, bevor Sie die Auswahl übernehmen, und speichern Sie wiederkehrende Filter bei Bedarf.

## Der Schülerfilter

[![Der Schülerfilter erlaubt einfache und komplexe Auswahlkombinationen.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-grundlagen.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-grundlagen.png)

*Der Schülerfilter erlaubt einfache und komplexe Auswahlkombinationen.*

Mit dem *Schülerfilter* steht ein sehr mächtiges Werkzeug zur Verfügung, um Schüler in Kombination von vielen Eigenschaften zu finden.

Rufen Sie ihn über *Auswahl* auf.

Es öffnet sich ein Fenster, das an den Kartereiter *Schüler* erinnert.

Der Filter hat eine Kopfzeile, hier in Dunkelblau hervorgehoben:

- **Filter benennen** wenn sie beabsichtigen, eine zusammengeklickte Filterbedingung zu speichern, geben Sie ihr hier eine Bezeichnung. Wollen Sie nur einmalig Filtern, kann das Feld frei bleiben.
- **Testen** führt dazu, dass eine unten zusammengestellte Filterbedingung einmal ausgeführt und getestet wird. Es wird noch nichts im Schülercontainer links verändert. Sind Sie mit der Filterbedingung zufrieden, klicken Sie nach dem *Testen* auf
- **Übernehmen**, um die gefilterten Schüler in den Container links zu übernehmen und mit ihnen weiterarbeiten zu können.
- **Speichern** führt dazu, dass ein Filter, dem Sie eine Bezeichnung gegeben haben, über *Vorhandende Filterbedingungen laden* im Menüband oben wieder aufgerufen werden kann.
- **SQL-Befehl in Datei speichern** erlaubt es computeraffinen Nutzern den tatsächlichen Datenbankbefehl in einer Datei abzulegen.

[![Das Feld Info erläutert die Verwendung des Schülerfilters.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-info.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-info.png)

*Das Feld Info erläutert die Verwendung des Schülerfilters.*

Über **Info** lässt sich eine kurze Bedienungsanleitung zu den Filterbedingungen aufrufen, um Einträge zu negieren, also NICHT nach dem entsprechenden Feldwert zu suchen.  

::: example Beispiel

Um Schüler des Jahrgangs 10 zu suchen, die nicht aus dem Ort kommen, würden Sie unten den *aktuellen Abschnitt* wählen, den *Jahrgang 10* aus der Filterliste anklicken. Dann wählen Sie Ihren Schulort und klicken doppelt darauf. Der Ort ist nun ***fett und kursiv***. Ein Klick auf *Testen* prüft den Filter.

:::

[![Der rote Pfeil.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-roter-pfeil.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-roter-pfeil.png "Der rote Pfeil.")

*Der rote Pfeil.*

Mitunter taucht ein **roter Pfeil** auf. Dieser bedeutet, dass eine Filterbedingung eingestellt wird und mit einem Klick auf den Pfeil wird diese in eine Liste aus optional mehreren Einträgen übernommen.  

[![Ein Beispiel für eine UND-Verknüpfung.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-und.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-und.png)

*Ein Beispiel für eine UND-Verknüpfung.*

[![Ein Beispiel für eine ODER-Verknüpfung.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-oder.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-oder.png)

*Ein Beispiel für eine ODER-Verknüpfung.*

Der *Schülerfilter* stellt über seine Reiter die Daten der entsprechenden Reiter unter *Schüler* zur Verfügung.  

[![Filtern bei einem Merkmal auf Ja oder Nein. Über das X wird eine getätigte Einstellung entfernt.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-ja-nein-weg.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-ja-nein-weg.png)

*Filtern bei einem Merkmal auf Ja oder Nein. Über das **X** wird eine getätigte Einstellung entfernt.*

An vielen Stellen kann eine getätigte Wahl, oft lässt sich bei einem Merkmal *Ja* oder *Nein* wählen, mit dem **X** wieder entfernt werden.  

### Verknüpfungen

Standardmäßig nutzt der Filter UND-Verknüpfungen, bei einigen Feldern werden aber auch ODER-Verknüpfungen genutzt.

- **UND**: Beide Kriterien müssen zutreffen, damit ein Eintrag angezeigt wird. **Beispiel**: der Schüler ist *Volljährig UND Männlich*.
- **ODER**: Manche Felder werden als ODER-Verknüpfung interpretiert, es reicht also, wenn eines (oder beide) Kriterien zutrifft. LIsten mit Mehrfachauswahl werden also ODER-Verknüpfung interpretiert. **Beispiel**: Eine Person ist aus *Beelen ODER Bad Sassendorf ODER Bamberg*.

[![Einträge negieren.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-not-or.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-not-or.png)

*Einträge negieren.*

- Wird ein Wert ausgewählt und Doppelt angeklickt, wird der Eintrag **negiert**. Im Fall dieses Beispiels wurden *katholisch ODER evangelisch* ausgewählt und negiert, was im Filter alle Personen anzeigt, die WEDER *katholisch* NOCH *evangelisch* sind.

### Beispiel: Leistungsdaten filtern

[![Filtern in den Leistungsdaten auf Schüler der EF, die im Aktuellen Abschnitt Evangelischen Religion als mündlichen Kurs belegt haben.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-leistungdaten.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-beispiel-leistungdaten.png)

*Filtern in den Leistungsdaten auf Schüler der EF, die im Aktuellen Abschnitt Evangelischen Religion als mündlichen Kurs belegt haben.*

Gefiltert werden soll auf alle Schüler, die im aktuellen Schuljahr in der Einführungsphase evangelische Religion als mündlichen Grundkurs belegt haben.

Die dafür nötigen Einstellungen müssen unter dem Reiter *Lernabschnitt/Leistungsdaten* getätigt werden

Wählen Sie den gewünschten Abschnitt und unter **Jahrgang** die **Einführungsphase EF**.

Wählen Sie unter **Fächer und Noten** das gesuchte **Fach** und die **Kursart**.

Als verwendete Beziehung muss in diesem Fall UND ausgewählt werden. Die Einstellungen durch einen Klick auf den **roten Pfeil** übernommen.  

::: info Hinweis

Für mehrere Fächer oder Kursarten stellen Sie nacheinander die gewünschten Kombinationen ein. Übernehmen Sie jede Kombination mit dem roten Pfeil in die Liste. Unter **Beziehung verwenden** legen Sie fest, wie die Bedingungen verbunden werden:

- **UND:** Die Schülerinnen und Schüler müssen alle aufgeführten Kombinationen belegt haben.
- **ODER:** Mindestens eine der aufgeführten Kombinationen muss belegt sein.

:::

### Beispiel: Filtern über mehrere Reiter hinweg

Gefiltert werden soll nach allen Schülern, die im

- Schuljahr 2021/22
- die Abiturzulassung erhalten,
- das Abitur dann aber nicht bestanden haben und abgegangen sind
- und Englisch als erste Fremdsprache hatten.

Dafür müssen Einstellungen unter mehreren Reitern getätigt werden:

[![Individualdaten I: Status.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-status.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-status.png)

*Individualdaten I: Status.*

- Wählen Sie unter **Individual-Daten I → Status** nur **Abgänger** aus. Entfernen Sie insbesondere den Haken bei **Aktiv**.

[![Weitere Daten: Sprachenfolge. Tragen Sie das passende Fach ein.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-weitere-daten.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-weitere-daten.png)

*Weitere Daten: Sprachenfolge. Tragen Sie das passende Fach ein.*

- Öffnen Sie **Weitere Daten** und wählen Sie unter **Sprachenfolge** Englisch als erste Sprache.

[![Leistungsdaten: Lernabschnitt und Abiturdaten. Die Datenbank ist im Schuljahr 2022/23, es wird hier das Vorherige, 2021/22, gewählt.](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-leistungsdaten.png)](/bilder/suchen-gruppenprozesse/auswahl-filter-i-mehrere-reiter-leistungsdaten.png)

*Leistungsdaten: Lernabschnitt und Abiturdaten. Die Datenbank ist im Schuljahr 2022/23, es wird hier das Vorherige, 2021/22, gewählt.*

- Wählen Sie unter **Lernabschnitt/Leistungsdaten** das gewünschte Schuljahr. Das Halbjahr ist für dieses Beispiel nicht entscheidend. Die Abbildung verwendet 2022/23 als aktuelles und 2021/22 als vorheriges Schuljahr; wählen Sie in Ihrer Datenbank die passenden Jahre.
- Ganz unten finden sich die Angaben für die *Abiturzulassung* und das *Bestehen des Abiturs*.

Entfernen Sie hier auch mit dem **X** die Angabe, ob eine Prüfung angesetzt wurde oder nicht. Im Beispiel des Screenshots wird nur gezeigt, wenn zusätzlich auch eine nündliche Prüfung *nicht* angesetzt war.  

**Testen** und **Übernehmen** übernimmt die gefunden Schüler in den Container zur Weiterarbeit.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Sch%C3%BClerfilter_(Auswahl))
