---
title: "Serienbriefe einrichten und drucken"
source_pageid: 1503
source_revision: 7123
---

# Serienbriefe einrichten und drucken

Richten Sie den Briefkopf einmalig ein und verwenden Sie für verschiedene Anlässe eigene Brieftexte. Sie können den Text als RTF-Datei laden oder direkt im Report bearbeiten; die Parameter steuern die Abfragen beim Aufruf.

## Vorlagen und Einsatzmöglichkeiten

Im Serienbriefpaket werden mehrere Reports zur Verfügung gestellt, unter anderem ein Serienbrief an Erzieher, ein Serienbrief an Schülerinnen und Schüler sowie ein Serienbrief an Betriebe.

[![Serienbrief ordnerstruktur.jpg](/bilder/serienbriefe/serienbrief-ordnerstruktur.jpg)](/bilder/serienbriefe/serienbrief-ordnerstruktur.jpg)

Alle Serienbriefe orientieren sich am Geschäftsbrief nach DIN 5008, Variante B. Zudem werden sämtliche Vorgaben zur automatisierten Briefversendung der Deutschen Post berücksichtigt, sodass die Briefe problemlos in Briefumschläge mit Sichtfenster gesteckt werden können. Außerdem sind alle Briefe serien-E-Mail-fähig und können automatisch im Dokumentenverzeichnis archiviert werden.

[![Serienbrief nebeneinander.png](/bilder/serienbriefe/serienbrief-nebeneinander.png)](/bilder/serienbriefe/serienbrief-nebeneinander.png)

Im Reportdesigner sehen Sie bereits, wie der Serienbrief später gedruckt wird. Vor dem ersten Einsatz passen Sie die Vorlage an Ihre Schule an. Diese grundlegenden Anpassungen müssen Sie bei späteren Ausgaben nicht wiederholen.

[![Serienbrief reportdesigneransicht.jpg](/bilder/serienbriefe/serienbrief-reportdesigneransicht.jpg)](/bilder/serienbriefe/serienbrief-reportdesigneransicht.jpg)

## Briefkopf und Brieftext getrennt verwalten

Der Serienbriefreport besteht im Kern aus zwei Komponenten:

1.  dem Briefkopf mit Absenderangaben, Logo, Adressfeld und Infoblock und
2.  dem Textteil.

Der Briefkopf muss einmalig an die schulischen Bedürfnisse angepasst werden und wird dann in der Regel zukünftig nicht mehr geändert. Beim Ausdruck wird das Adressfeld automatisch mit den Daten aus SchILD gefüllt, sodass die Briefe den korrekten Adressaten erreichen.

Den Brieftext erstellen Sie vor jedem Seriendruck. Sie können ihn direkt im Reportdesigner eingeben oder aus einer gesonderten **RTF-Datei** laden. RTF ist ein Textformat, das auch Formatierungen wie Fettdruck enthält.

Eine gesonderte Textdatei hat zwei Vorteile: Sie können den Text in einem Programm mit RTF-Unterstützung bearbeiten. Außerdem bleibt der Brieftext vom Briefgerüst getrennt, sodass Sie den Briefkopf nicht versehentlich mitändern.

Speichern Sie die Reports in einem passenden Unterordner von **SchILD-Reports**. Für gesonderte Brieftexte bietet sich der mitgelieferte Ordner **RTF-Serienbriefvorlagen** an. Ein anderer Speicherort ist ebenfalls möglich: Vor dem Druck wählen Sie die gewünschte Textdatei aus.

## Standardablauf für den Ausdruck

Nach dem einmaligen Einrichten des Briefkopfes sieht der Standardablauf für einen Ausdruck dann folgendermaßen aus (beide Varianten werden später ausführlicher erläutert).

### Empfohlener Ablauf mit externer RTF-Datei

1.  Erstellen des reinen Brieftextes auf der Windows-Ebene in einem Textverarbeitungsprogramm. Fangen Sie in der ersten Zeile an zu schreiben. Seitenränder spielen keine Rolle. Sie können den Text formatieren. Bilder, Tabellen o. ä. können nicht hinzugefügt werden.
2.  Speichern der Datei im Rich-Text-Format „.rtf“ im Ordner „..\SchILD-Reports\Serienbriefe\RTF-Serienbriefvorlagen“. Schließen des Textverarbeitungsprogramms.
3.  In SchILD-NRW Aufruf des Report-Explorers. Ausführen des Serienbriefes durch Doppelklick auf den Report „Serienbrief Eltern DIN 5008 @Eltern.rtm“.
4.  Es öffnet sich ein Windows-Auswahlfenster. Wählen Sie dort den entsprechenden Brieftext im Format „.rtf“ aus.
5.  Der Serienbrief wird erzeugt.

### Ablauf ohne externes RTF-Dokument

1.  In SchILD-NRW Aufruf des Report-Explorers und dort Bearbeiten des Reports „Serienbrief Eltern DIN 5008 @Eltern.rtm“ über die rechte Maustaste.
2.  Mit der rechten Maustaste den Brieftext bearbeiten. Schließen und Speichern des Brieftextfensters.
3.  Speichern des Reports und Verlassen des Reportdesigners.
4.  Im Report-Explorer Doppelklick auf das Formular „Serienbrief Eltern DIN 5008 @Eltern.rtm“.
5.  Es öffnet sich ein Windows-Fenster. Wählen Sie „Abbrechen“, damit kein externer Brieftext geladen wird.
6.  Der Serienbrief wird erzeugt.

## Den Briefkopf einmalig einrichten

Wählen Sie in SchILD „Druckausgabe – Report-Explorer aufrufen“. Navigieren Sie im Report-Explorer zum gewünschten Serienbrief. Rufen Sie mit Rechtsklick das Kontextmenü auf und wählen Sie dort „Report bearbeiten“. In den Serienbriefen sehen Sie sofort das Brieflayout.

Passen Sie nun zunächst den Infoblock an. Sie können nach einem Doppelklick in die jeweilige Textbox beliebig bearbeiten, löschen und anpassen. Die Textblöcke selbst sollten Sie nicht verschieben.

[![Serienbrief infoblock.jpg](/bilder/serienbriefe/serienbrief-infoblock.jpg)](/bilder/serienbriefe/serienbrief-infoblock.jpg)

Die restlichen Bereiche des Briefkopfes werden automatisch mit den in SchILD hinterlegten Angaben gefüllt. So erscheinen der Schulname und das Logo, welches in SchILD unter „Schulverwaltung – Schule bearbeiten“ hinterlegt wurde. Passen Sie die Größe und Position des Logos nach Ihrem Geschmack an.

[![Serienbrief briefkopf.jpg](/bilder/serienbriefe/serienbrief-briefkopf.jpg)](/bilder/serienbriefe/serienbrief-briefkopf.jpg)

**Wichtig:** Sie können den Inhalt der Felder **Briefkopf Schulbezeichnung, Briefkopf Straße, Briefkopf Postleitzahl Ort, Rücksendeangaben, Vermerkzone, Ort, Datum** oder **Ort, Datumsauswahl manuell** überschreiben. Sie gelangen an die Eingabe mit einem **Doppelklick**.

Inhaltlich veränderte Briefkopf-Felder werden nicht mehr dynamisch mit SchILD-Daten gefüllt. Diese werden nur dann befüllt, wenn sie die ursprünglichen Bezeichnungen enthalten. Lediglich das Feld **Ort, Datum** darf alternativ den Inhalt **Ort, Datumsauswahl** haben. **Ort, Datum** wird dynamisch mit dem Ort und Tagesdatum gefüllt, während bei Verwendung von **Ort, Datumsauswahl** das Briefdatum über ein Abfragefenster ausgewählt werden kann.

Der Report erwartet die Anwesenheit der Objekte **Briefkopf Schulbezeichnung, Briefkopf Straße, Briefkopf Postleitzahl Ort, Rücksendeangaben, Vermerkzone** und **Ort, Datumsauswahl**. Diese dürfen nicht gelöscht werden.

So übertragen Sie einen eingerichteten Briefkopf auf eine andere Serienbriefvorlage:

1. Markieren und kopieren Sie im Reportdesigner die Region **Briefkopf**.
2. Entfernen Sie den bisherigen Briefkopf in der Zielvorlage und fügen Sie den kopierten Briefkopf ein.
3. Wechseln Sie zwischen Eltern- und Schülerbrief, prüfen Sie zusätzlich das Memofeld **BriefAdresse**. Es muss die zum Empfänger passende Datenquelle verwenden; beim Schülerbrief ist dies **Schueler**. Diese Datenquelle heißt im Reportdesigner **Pipeline**.

In seltenen Fällen ist beobachtet worden, dass beim Kopierprozess des Briefkopfes an die Bezeichnungen der Briefkopf-Datenfelder eine Zahl 1 angefügt wurde. In diesem Fall funktionieren die Automatismen nicht mehr, da der Programmcode die Originalbezeichnungen erwartet. Dies können Sie im Berichtsbaum des Reportdesigners erkennen und ggf. rückgängig machen.

## Den Brieftext mit Platzhaltern vorbereiten

Schreiben Sie den gewünschten Serienbrief zunächst in einem Textverarbeitungsprogramm mit RTF-Unterstützung. Verfassen Sie den Textteil des Briefes so, wie Sie ihn normalerweise vor dem Hintergrund eines männlichen Schülers verfassen würden. Dies vereinfacht spätere Anpassungen.

::: example Beispielbrief

Sehr geehrte Eltern,

 Ihr Sohn Stefan ist nun seit 6 Wochen in unserer Schule. Er hat die Schule nun grundlegend kennengelernt. Wir möchten Sie und Stefan am 18.11.2018 zum Theaterstück „Die beste Schule der Welt“ in die Aula der Schule einladen.

Mit freundlichen Grüßen

Franz Becker, Klassenlehrer

:::

Ersetzen Sie die konkreten Daten wie „Ihr Sohn“, „Stefan“, „Klassenlehrer“, „Franz Becker“, „er“ und weitere durch Platzhalter, die für diese Inhalte vorgesehen sind, damit SchILD diese Platzhalter automatisch füllen kann. Platzhalter werden immer von Dollarzeichen flankiert.

| Originaltext | Platzhalter |
| --- | --- |
| Sehr geehrte Eltern | $Formelle Anrede$ |
| Ihr Sohn | $Ihr Sohn$ |
| Stefan | $Vorname$ |
| Er | $Er$ |
| Franz Beckenbauer | $KLVorname$ $KLName$, $Klassenlehrer$ |

Der Brief sieht dann folgendermaßen aus:

::: example Beispielbrief

$Formelle Anrede$,

 $Ihr Sohn$ $Vorname$ ist nun seit 6 Jahren in unserer Schule. $Er$ hat die Schule nun grundlegend kennengelernt. Wir möchten Sie und $Vorname$ am 18.11.2018 zum Theaterstück „Die beste Schule der Welt“ in die Aula der Schule einladen.

Mit freundlichen Grüßen

$KLVorname$ $KLName$, $Klassenlehrer$

:::

Speichern Sie diesen Brief im Ordner „..\SchILD-Reports\Serienbriefe\RTF-Serienbriefvorlagen“ unter Verwendung des Speicherformats „.rtf“. Der Brief heißt z. B. „Einladung Theater.rtf“.

## Serienbrief drucken

Wählen Sie zunächst in SchILD-NRW die Schülermenge aus. Über den Menüpunkt „Druckausgabe - Report-Explorer aufrufen“ gelangen Sie in die Ordneransicht des Report-Explorers. Navigieren Sie hier zu den Serienbrief-Reports. Wählen Sie z. B. „Serienbrief DIN 5008 @Eltern.rtm“ und klicken Sie mit der linken Maustaste doppelt darauf.

1. Wählen Sie **Vorschau** oder **direkt zum Drucker senden** sowie **die ganze Gruppe**.
2. Bestätigen Sie mit **OK**.
3. Beantworten Sie die Frage nach dem Laden einer vorbereiteten RTF-Datei mit **Ja**.
4. Wählen Sie Ihre Textdatei. Im Beispiel ist dies `Einladung Theater.rtf` im Ordner `..\SchILD-Reports\Serienbriefe\RTF-Serienbriefvorlagen`.

Durch Doppelklick auf diese Datei wird der Text automatisch in den Serienbrief eingelesen und die Briefe werden gedruckt (oder erscheinen in der Vorschau). Je nach Geschlecht (Schüler/Schülerin bzw. Klassenlehrer/Klassenlehrerin) wird der Brief nun korrekt ausgegeben:

[![Serienbrief druckteilansicht.jpg](/bilder/serienbriefe/serienbrief-druckteilansicht.jpg)](/bilder/serienbriefe/serienbrief-druckteilansicht.jpg)

[![Serienbrief platzhalterersetzung maennlich.jpg](/bilder/serienbriefe/serienbrief-platzhalterersetzung-maennlich.jpg)](/bilder/serienbriefe/serienbrief-platzhalterersetzung-maennlich.jpg)

[![Serienbrief platzhalterersetzung weiblich.jpg](/bilder/serienbriefe/serienbrief-platzhalterersetzung-weiblich.jpg)](/bilder/serienbriefe/serienbrief-platzhalterersetzung-weiblich.jpg)

## Variante: Textteil direkt im Reportdesigner ändern

Sie können den Textteil auch direkt im Reportdesigner oder vor dem Ausdruck eingeben. Um den Brieftext im Reportdesigner einzugeben, wechseln Sie in den Bearbeitungsmodus des Reports. Klicken Sie dann mit der rechten Maustaste auf den Brieftext und wählen Sie „Bearbeiten“. Sie gelangen nun in den RichText-Editor, in dem Sie den Brieftext eingeben können.

[![Serienbrief platzhaltertext.jpg](/bilder/serienbriefe/serienbrief-platzhaltertext.jpg)](/bilder/serienbriefe/serienbrief-platzhaltertext.jpg)

Speichern Sie den Serienbrief-Report unter einem neuen Namen ab, z. B. „Einladung Theater.rtm“.

Zum Drucken des Serienbriefes gehen Sie wie gewohnt vor. Klicken Sie auf die Schaltfläche „Nein“, wenn Sie gefragt werden, ob Sie eine RTF-Textdatei laden möchten. Im Folgenden wird Ihnen der RTF-Brieftext aus dem Report angezeigt, sodass Sie nochmals kontrollieren können, ob alles korrekt ist.

Alternativ können Sie in diesem Textfenster auch den kompletten Serienbrieftext eingeben und als gesonderte RTF-Textdatei für späteren Gebrauch speichern. Schließen Sie das Textfenster über den Menüpunkt „Datei \> Ende“ und klicken Sie in der folgenden Abfrage „Änderungen übernehmen?“ auf „Ja“.

## Platzhalter nachschlagen

Sie finden auf der Seite [Platzhalter für Serienbriefe](/reporting/serienbriefe/platzhalter) alle Platzhalter, die in den Serienbriefen verwendet werden können.

## Serien-E-Mail-Versand

Serienbriefe können auch per E-Mail versendet werden. Schülerbriefe gehen an die E-Mail-Adresse der jeweiligen Person; bei zwei hinterlegten Adressen gilt die Priorität aus den Programmeinstellungen. Elternbriefe gehen an die hinterlegten E-Mail-Adressen der kommunikationsberechtigten Erziehungsberechtigten.

Vor Verwendung dieser Funktion sollten Sie in den Programmeinstellungen die E-Mail-Einstellungen überprüfen. SchILD ist in der Lage, externe E-Mail-Clients zu verwenden oder einen internen E-Mail-Versand über das SMTP-Protokoll vorzunehmen.

[![Serienbrief serienmail einstellungen.png](/bilder/serienbriefe/serienbrief-serienmail-einstellungen.png)](/bilder/serienbriefe/serienbrief-serienmail-einstellungen.png)

Wenn Sie die Serien-E-Mail-Ausgabe verwenden, werden Sie nach einem E-Mail-Text gefragt. Der eigentliche Serienbrief wird der E-Mail als PDF-Datei angefügt.

## Abfragen über Parameter steuern

Sie können das Verhalten des Serienbriefes steuern, indem Sie eingebaute Schalter (Parameter) festlegen oder ändern. Auf diese Weise können Sie den Seriendruck an Ihre Prozesse anpassen und damit den Ausdruck beschleunigen. So können Sie mithilfe der Parameter Abfragen vor dem Ausdruck reduzieren, wenn diese in Ihrem Arbeitsprozess nicht notwendig sind.

**Parameter** sind Einstellungen, mit denen Sie das Verhalten des Reports steuern. Öffnen Sie die Entwurfsansicht und wählen Sie den Parameter links im **Berichtsbaum**. Rechts im Eigenschaftenfenster ändern Sie seinen Wert unter **Data → Value**. In den folgenden Parametern sind **ja** und **nein** zulässig. Bestätigen Sie die Eingabe mit der Eingabetaste.

[![Serienbrief parameter.jpg](/bilder/serienbriefe/serienbrief-parameter.jpg)](/bilder/serienbriefe/serienbrief-parameter.jpg)

### rtfLaden

Die Standardeinstellung des Parameters ist „ja“.

Der Parameter ist grundlegend dafür verantwortlich, dass gesondert gespeicherte RTF-Textdateien geladen werden können. Wird der Parameter auf „nein“ gesetzt, wird ausschließlich der im Report befindliche Text gedruckt. Hierdurch werden gleichzeitig alle Abfragen, die zum Laden eines externen RTF-Brieftextes benötigt werden, abgeschaltet.

### rtfMitAbfrage

Die Standardeinstellung des Parameters ist „ja“.

Diese Einstellung wirkt nur, wenn `rtfLaden` ebenfalls den Wert **ja** hat. Ist auch dieser Parameter auf **ja** gesetzt, erscheint vor dem Druck eine Abfrage:

- **Ja:** Sie wählen eine externe RTF-Textdatei aus.
- **Nein:** Der im Report gespeicherte Brieftext wird verwendet.

### rtfVolljaehrigeLaden für Serienbriefe an Erzieher

Die Standardeinstellung des Parameters ist „nein“. Der Parameter wird nur berücksichtigt, wenn rtfLaden ebenfalls den Wert „ja“ hat. Der Parameter steht nur im Serienbrief an Erzieher zur Verfügung.

Mit dem Wert **ja** wählen Sie nacheinander zwei RTF-Textdateien: zuerst den Text für Erziehungsberechtigte, danach den Text für volljährige Schülerinnen und Schüler. So erhalten Volljährige einen sprachlich passenden Brief.

Für die Unterscheidung verwendet der Report das Feld **Art** unter **Erz. Berechtigte**. Damit die Volljährigenfassung gewählt wird, muss die Erzieherart das Wort **volljährig** enthalten.

Es wird empfohlen, den Parameter rtfMitAbfrage auf den Wert „ja“ zu stellen, sofern der Parameter „rtfVolljaehrigeLaden“ auf den Wert „ja“ gesetzt wird.

### rtfNachbearbeiten

Die Standardeinstellung des Parameters ist „ja“.

Mit dem Wert **ja** öffnet sich vor der Ausgabe ein RTF-Bearbeitungsfenster. Dort können Sie den im Report gespeicherten Brieftext prüfen, ändern, speichern und übernehmen. Wenn Sie stattdessen eine externe RTF-Datei laden, erscheint dieses Fenster nicht. Bearbeiten Sie eine solche Datei vorher in Ihrem Textprogramm.

Mit Hilfe des Bearbeitungsfensters haben Sie die Möglichkeit, ohne den Report selbst bearbeiten zu müssen, schnell einen Serienbrief zu tippen oder einen vorgefertigten Text in das Bearbeitungsfenster einzufügen. Schalten Sie den Parameter auf den Wert „nein“, wenn Sie kein Bearbeitungsfenster angezeigt bekommen wollen.

::: info Hinweis – Siehe auch

- [Die Basisreportsammlung im Überblick](/reporting/basisreports/basisreportsammlung-ein-ueberblick)
- [Die Basisreportsammlung herunterladen und aktualisieren](/reporting/basisreports/basisreportsammlung-herunterladen-und-aktualisieren)
- [Platzhalter für Serienbriefe](/reporting/serienbriefe/platzhalter)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Serienbriefe) · Quellrevision 7123.
