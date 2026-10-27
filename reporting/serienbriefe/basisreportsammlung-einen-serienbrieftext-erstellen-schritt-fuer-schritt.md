---
title: "Serienbrieftexte erstellen und wiederverwenden"
---

# Serienbrieftexte erstellen und wiederverwenden

Erstellen Sie einen Brieftext mit Platzhaltern und speichern Sie ihn für spätere Serienbriefe. Die Anleitung zeigt auch das Laden vorhandener RTF-Texte und den einmaligen Einsatz eines Textes.

Die Serienbriefe wurden für SchILD-NRW 3 überarbeitet und stehen nun als einfach und sehr flexibel einsetzbare Vorlagen zur Verfügung.

## Übersicht

[![Übersicht über den Ordner mit den Serienbriefen im \\SVWS-Arbeitsverzeichnis\\Schild-Reports\\.](/bilder/serienbriefe/basisreportsammlung-einen-serienbrieftext-erstellen-schritt-fuer-schritt-uebersicht.png)](/bilder/serienbriefe/basisreportsammlung-einen-serienbrieftext-erstellen-schritt-fuer-schritt-uebersicht.png)

*Übersicht über den Ordner mit den Serienbriefen im \\SVWS-Arbeitsverzeichnis\\Schild-Reports\\.*

SchILD-NRW 3 wird mit flexibel einsetzbaren *Serienbriefen* ausgeliefert.

Sie finden diese in Ihrem *SVWS-Arbeitsverzeichnis* unter *\SchILD-Reports\Serienbriefe*.

Derzeit werden folgende Standard-Serienbriefe ausgeliefert:

- Ein Serienbrief an Erzieher
- Ein Serienbrief an Schülerinnen und Schüler
- Ein Serienbrief an Betriebe
- Ein Serienbrief zur Mahnung über eine gefährdete Versetzung. Der Inhalt dieses Serienbriefs ist mit dem MSB abgestimmt.
- Ein Serienbrief an Erzieher, der über eine Nichtversetzung und deren Folgen informiert

Die Serienbriefe entsprechen der DIN 5008 für Briefe, insbesondere in Bezug auf Adressblöcke, Falzmarken und die allgemeine Seitenstruktur.

Ein Serienbrief besteht aus drei Teilen:

- dem **Serienbrief** selbst, also dem Serienbrief-Report
- dem **Brieftext**, den Sie jeweils manuell verfassen oder aus einer zuvor gespeicherten RTF-Datei laden können. Diese Vorlagen finden Sie im Unterordner *\RTF-Serienbriefvorlagen\\*
- den **Platzhaltern**, die im Serienbrief und im Brieftext verwendet werden können

::: info Hinweis

Serienbriefe werden für alle Schülerinnen und Schüler generiert, die im Schülercontainer ausgewählt wurden. Wählen Sie daher zuerst Ihre Schülergruppe aus und starten Sie anschließend die *Reportverwaltung*.

:::

## Der Brieftext

### Einen Brieftext laden

[![Laden eines zuvor gespeicherten Brieftextes für einen Serienbrief.](/bilder/serienbriefe/starten.png)](/bilder/serienbriefe/starten.png)

*Laden eines zuvor gespeicherten Brieftextes für einen Serienbrief.*

Öffnen Sie einen Serienbrief im **Report-Explorer** mit einem Doppelklick. Beim Start fragt der Report, ob Sie eine RTF-Textdatei als Brieftext laden möchten. **RTF** ist ein Dateiformat für Texte mit Formatierungen, etwa Fettdruck.

Der Vorteil dieses Vorgehens besteht darin, dass für unterschiedliche Serienbriefe jeweils nur der Brieftext gespeichert werden muss, während die Standardvorlage unverändert genutzt werden kann. Wird die Vorlage beispielsweise durch das MSB überarbeitet, können Sie diese neue Vorlage weiterhin mit Ihren individuellen Brieftexten verwenden.

[![Laden eines vorgefertigten Brieftextes.](/bilder/serienbriefe/serienbrief-rtf-vorlage-oeffnen.png)](/bilder/serienbriefe/serienbrief-rtf-vorlage-oeffnen.png)

*Laden eines vorgefertigten Brieftextes.*

Es öffnet sich ein Fenster, in dem die im Unterordner *RTF-Serienbriefvorlagen* gespeicherten Dateien angezeigt werden.

Wählen Sie die gewünschte Vorlage aus. Im Beispiel wird ein Blindtext verwendet.

Bestätigen Sie mit `Öffnen`.

[![Wählen Sie das Briefdatum.](/bilder/serienbriefe/briefdatum.png)](/bilder/serienbriefe/briefdatum.png)

*Wählen Sie das Briefdatum.*

Wählen Sie anschließend das Briefdatum und bestätigen Sie mit `OK`.

[![Der Serienbrief als Beispiel.](/bilder/serienbriefe/beispiel.png)](/bilder/serienbriefe/beispiel.png)

*Der Serienbrief als Beispiel.*

Der Serienbrief wird nun erzeugt und ist am Betreff zu erkennen. Im Beispiel ist ein Platzhaltertext enthalten.

In dieser Beispieldatenbank ist das Wappen von Nordrhein-Westfalen als *Schullogo* gesetzt. In einem realen Serienbrief erscheint hier das Logo Ihrer Schule.

### Einen Brieftext selbst erstellen und speichern

[![Geben Sie Ihren Brieftext ein.](/bilder/serienbriefe/brieftext-eingeben.png)](/bilder/serienbriefe/brieftext-eingeben.png)

*Geben Sie Ihren Brieftext ein.*

Antworten Sie bei der Nachfrage

     Soll eine RTF-Textdatei als Brieftext geladen werden?

mit `Nein`, öffnet sich das Eingabefenster für den Brieftext.

Geben Sie im Texteditor Ihren formatierten Brieftext ein. Mit **Platzhaltern** werden beim Erzeugen des Briefes beispielsweise Name und Klasse automatisch aus der Datenbank eingesetzt. Das Vorgehen erläutert der Abschnitt [Platzhalter verwenden](#platzhalter-verwenden).

[![Speichern](/bilder/serienbriefe/brieftext-speichern.png)](/bilder/serienbriefe/brieftext-speichern.png)

*Speichern*

Soll der Brieftext später erneut verwendet werden, klicken Sie auf `Speichern`.

Navigieren Sie zum *SVWS-Arbeitsverzeichnis* und dort zu *SchILD-Reports\Serienbriefe\RTF-Serienbriefvorlagen\\* und speichern Sie den Brieftext unter einem passenden Namen.

::: info Hinweis

Speichern Sie Brieftexte nicht im Installationsverzeichnis von SchILD-NRW 3.

:::

Schließen Sie den Brieftext-Editor anschließend über das `X` oben rechts und übernehmen Sie die Änderungen. Der Serienbrief wird nun generiert.

### Einen Brieftext nur einmal verwenden

Wenn Sie einen Serienbrief nur einmalig erzeugen möchten, ohne den Brieftext dauerhaft zu speichern, gehen Sie wie folgt vor:

- Starten Sie den Serienbrief-Report.
- Wählen Sie bei der Nachfrage nach einer RTF-Textdatei die Option `Nein`.
- Öffnen Sie den RichText-Editor per `Rechtsklick` auf das RichText-Feld und wählen Sie `Bearbeiten`.
- Geben Sie Ihren Brieftext mit den gewünschten Platzhaltern in den Editor ein.
- Schließen Sie den Editor über das `X`.
- Bestätigen Sie die Übernahme der Änderungen mit `Ja`.
- Erzeugen Sie den Serienbrief über „Vorschau“ oder speichern Sie den Report und generieren ihn anschließend.

::: info Hinweis

Überschreitet der Brieftext eine Seite, werden Seitenumbrüche automatisch unterstützt.

:::

::: tip Tipp

Fußbereiche zum Unterschreiben oder Abtrennen und Zurücksenden können mit passenden Platzhaltern am Ende des Brieftexts ergänzt werden. Achten Sie hierbei auf geeignete Seitenumbrüche.

:::

## Platzhalter verwenden

[![Die Platzhalter in der Kategorie Schüler.](/bilder/serienbriefe/platzhalter.png)](/bilder/serienbriefe/platzhalter.png)

*Die Platzhalter in der Kategorie Schüler.*

Die Stärke automatisch generierter Serienbriefe liegt in der Verwendung von Platzhaltern, die beim Erzeugen des Briefes dynamisch mit Daten aus der Datenbank gefüllt werden.

Ein Platzhalter wird durch ein von Dollarzeichen eingeschlossenes Wort gekennzeichnet. So wird beispielsweise der Platzhalter *\$Schuljahr\$* beim Generieren des Serienbriefs durch das aktuelle Schuljahr ersetzt.

Ist ein Platzhalter geschlechtsspezifisch, wird die passende grammatikalische Form anhand des in der Datenbank hinterlegten Geschlechts gewählt. So wird *\$Herr\$* zu *Herr* oder *Frau* und *\$Schueler\$* zu *Schüler* oder *Schülerin*.

Der Text

     $Vorname$ aus der Klasse $Klasse$ hat so gut gelernt, dass $er$ die Folgeklasse $Folgeklasse$ überspringen kann.

wird zum Beispiel zu

     Kevin aus der Klasse 6b hat so gut gelernt, dass er die Folgeklasse 7b überspringen kann.

Es gibt Platzhalter in unterschiedlichen Kategorien:

- **Schüler**
- **Erzieher**
- **Anrede der Erzieher**
- **Klassenleitung** und **stv. Klassenleitung**
- **Schulleitung**
- **Platzhalter**
- **Sonderfunktionen**

::: tip Tipp

Alle Platzhalter finden Sie in der Datei *Serienbriefe\RTF-Serienbriefvorlagen\Übersicht Platzhalter.rtf*. Weiterhin können Sie diese Datei direkt öffnen, um gewünschte Platzhalter per Kopieren und Einfügen in Ihren Text zu übernehmen. Eine tabellarische Übersicht aller Platzhalter finden Sie auch [Platzhalter für Serienbriefe](</reporting/serienbriefe/platzhalter>).

:::

### Zugriff auf weitere Datenbankfelder

::: danger Achtung

Das hier beschriebene Vorgehen richtet sich an technisch fortgeschrittene Anwender.

:::

[![Im Report-Designer wird das RichText-Feld zum Bearbeiten geöffnet.](/bilder/serienbriefe/bearbeiten-mail-merge.png)](/bilder/serienbriefe/bearbeiten-mail-merge.png)

*Im Report-Designer wird das RichText-Feld zum Bearbeiten geöffnet.*

Öffnen Sie einen Serienbrief im Bearbeitungsmodus und klicken Sie mit der `rechten Maustaste` auf das RichText-Feld, um den Editor zu öffnen.

[![Nutzen Sie MailMerge, um im RichText-Feld auch auf andere Datenquellen und deren Felder zuzugreifen.](/bilder/serienbriefe/mail-merge.png)](/bilder/serienbriefe/mail-merge.png)

*Nutzen Sie MailMerge, um im RichText-Feld auch auf andere Datenquellen und deren Felder zuzugreifen.*

Mit **MailMerge**, der Serienbrieffunktion des Editors, können Sie neben den vorbereiteten Platzhaltern auch weitere Datenbankfelder direkt in den Brieftext einsetzen.

Aktivieren Sie hierzu im RichText-Editor die Option **MailMerge**. Anschließend stehen Ihnen alle verfügbaren *Datenquellen* sowie die zugehörigen *Datenfelder* zur Verfügung.

Fügen Sie gewünschte Datenfelder per `Doppelklick` in den Text ein. Diese Codestücke dürfen anschließend nicht mehr verändert werden.

Im Beispiel werden die Felder *SumFehlStd* und *SumFehlStdU* aus der Datenquelle *Lernabschnitte* verwendet, um Fehlstunden aus dem aktuellen Lernabschnitt eines Schülers auszulesen.

::: info Hinweis

Nicht alle verfügbaren Datenfelder sind für Serienbriefe sinnvoll nutzbar. Testen Sie die Ergebnisse sorgfältig und nutzen Sie im Zweifel das Supportangebot im Forum.

:::

[![Speichern Sie Ihre Arbeit.](/bilder/serienbriefe/mail-merge-speichern.png)](/bilder/serienbriefe/mail-merge-speichern.png)

*Speichern Sie Ihre Arbeit.*

Speichern Sie den Brieftext im Ordner *SchILD-Reports\Serienbriefe\RTF-Serienbriefvorlagen*, um ihn später erneut verwenden zu können.

[![MailMerge im Beispiel.](/bilder/serienbriefe/mail-merge-beispiel.png)](/bilder/serienbriefe/mail-merge-beispiel.png)

*MailMerge im Beispiel.*

Der Serienbrief wird nun mit den über MailMerge geladenen Daten aus der Datenbank erzeugt.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Einen_Serienbrieftext_erstellen_-_Schritt_f%C3%BCr_Schritt)
