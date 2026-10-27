---
title: "Serienbriefe zur Nichtversetzung erstellen"
---

# Serienbriefe zur Nichtversetzung erstellen

Filtern Sie zunächst die betroffenen Schülerinnen und Schüler. Der Report wählt anschließend anhand ihrer schulischen Situation die passende RTF-Vorlage aus; diese können Sie an die Bedürfnisse Ihrer Schule anpassen.

## Serienbrief Nichtversetzung

Filtern Sie mit **Filter I** zunächst die nicht versetzten Schülerinnen und Schüler. Der Serienbrief wählt für jede Person eine passende RTF-Textdatei aus. Dazu wertet er Schulform, Gliederung, Jahrgang, Verweildauer und eine mögliche Wiederholung des aktuellen Schuljahres aus.

Die RTF-Textdateien sind nach Schulform geordnet und können an Ihre Schule angepasst werden. Welche Datei geladen wird, legt die Prozedur `RtfNichtversetztAutomatischLaden` fest. Sie finden sie in den Berechnungen des Reports unter **Programme**. In der EF prüft der Report zusätzlich die Volljährigkeit und lädt für volljährige Personen eine eigene Textfassung.

Im dreigliedrigen Schulsystem wird an den entsprechenden Stellen auf einen Schulformwechsel hingewiesen. In anderen Schulsystemen wird ein gesonderter Report aufgerufen, der auf einen Gliederungswechsel hinweisen kann. In den Schulsystemen werden die im Folgenden tabellarisch dargestellten Fälle unterschieden.

| Kürzel | Versetzung | Konsequenz | Inkl. volljährig |
| --- | --- | --- | --- |
| nv | nicht versetzt |  |  |
| nv-sw | nicht versetzt | Schulformwechsel/Gliederungswechsel (nicht explizit aufgeführt) |  |
| nv-sv | nicht versetzt | Schule verlassen |  |
| np | Nachprüfung |  |  |
| np-sw | Nachprüfung | Schulformwechsel/Gliederungswechsel (nicht explizit aufgeführt) |  |
| np-sv | Nachprüfung | Schule verlassen |  |
| nv - vj | nicht versetzt |  | volljährig |
| nv-sv - vj | nicht versetzt | Schulformwechsel/Gliederungswechsel (nicht explizit aufgeführt) | volljährig |
| np - vj | Nachprüfung |  | volljährig |

Der *Serienbrief Nichtversetzte* ist dafür vorgesehen, dass Schülerinnen und Schüler vor den Sommerferien ein Anschreiben erhalten, das über die Nichtversetzung und mögliche Nachprüfungsfächer informiert. Damit jede Schülerin und jeder Schüler das korrekte Anschreiben erhält, analysiert der Serienbrief die Schulform, die Gliederung, den Jahrgang, das Versetzungskürzel, die Wiederholung sowie die Verweildauer.

## Die betroffenen Schülerinnen und Schüler filtern

Rufen Sie *Filter I ➜ Lernabschnitt / Leistungsdaten* auf. Wählen Sie dort die Versetzungsvermerke *Nichtversetzt* und *N.v., Nachprüfung möglich* aus. In manchen Fällen ist zusätzlich der Versetzungsvermerk *Abschluss* hinzuzunehmen.

Es werden daraufhin alle Schülerinnen und Schüler gefiltert, die ein entsprechendes Anschreiben erhalten sollen.

## RTF-Anschreiben anpassen

[![RTF-Dokumente](/bilder/serienbriefe/rtf-dokumente.png)](/bilder/serienbriefe/rtf-dokumente.png)

*RTF-Dokumente*

Im Ordner *Serienbriefe* finden Sie den Unterordner *RTF-Serienbriefvorlagen ➜ Nichtversetzung*. Dieser enthält alle schulformspezifischen Anschreiben an nichtversetzte Schülerinnen und Schüler. Die Dateinamen enthalten verschiedene Informationen:

- Schulform oder Schulgliederung (z. B. GY)
- Jahrgangsbereich (z. B. 07–10)
- NV (nicht versetzt)
- NP (Nachprüfungsmöglichkeit)
- SV (Schulformwechsel)
- GW (Gliederungswechsel)
- SV (Schule verlassen)
- VJ (Brief an Volljährige)

Jeder Brief kann inhaltlich in einem RTF-Editor an die eigenen Bedürfnisse angepasst werden. RTF-Editoren unterscheiden sich teils deutlich in der Menge des erzeugten RTF-Codes. Es wird empfohlen, einen möglichst schlanken RTF-Editor zu verwenden. Sie können RTF-Dokumente auch im Reportdesigner öffnen, bearbeiten und speichern.

## Den Serienbrief erzeugen

[![Beispiel-Brief](/bilder/serienbriefe/nichtversetzung-beispiel.png)](/bilder/serienbriefe/nichtversetzung-beispiel.png)

*Beispiel-Brief*

Beim Aufruf des Serienbriefs analysiert dieser schülerspezifisch die Bedingungen der Nichtversetzung und deren Folgen. Anhand des Analyseergebnisses wird automatisch das passende RTF-Dokument geladen.

Platzhalter können beim Start des Reports eine Text- oder Datumseingabe anfordern. Derselbe Platzhalter wird nur einmal abgefragt, auch wenn später eine andere RTF-Datei geladen wird. Benötigen Sie in verschiedenen Textfassungen unterschiedliche Eingaben, verwenden Sie dort unterschiedliche Platzhalter.

Als Beispiel kann eine Schule dienen, die die schriftlichen Nachprüfungen der SI und der SII an unterschiedlichen Tagen plant. In den RTF-Dokumenten der SI kann der Platzhalter `$Eingabe|Datum|GY-07-10-NP: schriftliches Nachprüfungsdatum$` verwendet werden und in den RTF-Dokumenten der SII der Platzhalter `$Eingabe|Datum|GY-EF-NP: schriftliches Nachprüfungsdatum$`. In diesem Fall erfolgen zwei getrennte Datumsabfragen, da sich die Platzhalter unterscheiden.

Der Programmcode kann unter *Berechnungen* in der Ansicht *Verwendete Module* in der Prozedur *RtfNichtversetztAutomatischLaden* eingesehen werden. Der Code ist so strukturiert, dass individuelle Anpassungen leicht vorgenommen werden können. Dort können auch die Dateinamen der RTF-Dokumente definiert und Sonderfälle hinterlegt werden.

## Weitere Informationen

Bei dem Serienbrief handelt es sich um einen erweiterten Serienbrief an Erzieher. Damit der Serienbrief unterschiedliche RTF-Dokumente schülerindividuell einlesen kann, muss der Parameter *rtfLaden* den Wert *nein* haben. Dies entspricht der Voreinstellung. Andernfalls würde kein schülerindividuelles RTF-Dokument automatisch geladen, sondern ein einzelnes RTF-Dokument über ein Auswahlfenster – wie bei einem normalen Serienbrief.

Der Serienbrief analysiert keine Abschlüsse, die durch eine Nachprüfung erreicht werden könnten. Wenn ein Brieftext Informationen zu Nachprüfungsmöglichkeiten enthalten soll, sind Texte mit Auswahlfeldern sinnvoll, die nach dem Ausdruck manuell angekreuzt werden können (siehe RTF-Dokumente der EF am Gymnasium).

Zusätzlich können eine Excel-Übersicht und eine LibreCalc-Übersicht heruntergeladen werden, die die Konstellationen der Nichtversetzung nach Schulform und Gliederung darstellen. Die Dateien enthalten außerdem eine Übersicht darüber, welcher Serienbrief in welcher Konstellation geladen wird.

::: info Hinweis – Download

- [LibreCalc – Schulform Jahrgang Nichtversetzte Matrix](</dateien/serienbriefe/schulform-jahrgang-nichtversetzte-matrix.ods> "Schulform Jahrgang Nichtversetzte Matrix.ods")
- [Excel – Schulform Jahrgang Nichtversetzte Matrix](</dateien/serienbriefe/schulform-jahrgang-nichtversetzte-matrix.xlsx> "Schulform Jahrgang Nichtversetzte Matrix.xlsx")

:::

::: info Hinweis – Siehe auch

- [Serienbriefe einrichten und drucken](/reporting/serienbriefe/basisreportsammlung-serienbriefe)
- [Serienbrief zur Mahnung bei gefährdeter Versetzung](/reporting/serienbriefe/basisreportsammlung-serienbrief-mahnung-gefaehrdete-versetzung)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Serienbrief_Nichtversetzung)
