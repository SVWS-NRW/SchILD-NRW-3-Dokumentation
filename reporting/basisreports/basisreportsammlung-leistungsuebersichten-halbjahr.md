---
title: "Leistungsübersichten für ein Halbjahr"
---

# Leistungsübersichten für ein Halbjahr

Verwenden Sie die Halbjahresübersichten als Konferenzprotokoll oder Beamerprojektion. Die Parameter steuern unter anderem Konferenzart, Kursarten, Teilleistungen und Notendarstellung.

## Einsatzbereiche und enthaltene Informationen

[![Konferenzprotokoll](/bilder/archiv/leistungsuebersicht-konferenzprotokoll.png)](/bilder/archiv/leistungsuebersicht-konferenzprotokoll.png)

*Konferenzprotokoll*

Die Leistungsübersichten in SchILD-NRW 3 sind für die Nutzung in den Jahrgängen 05 bis Q2 der Sekundarstufen I und II entwickelt worden. Sie funktionieren in der Regel auch in der Grundschule in den Jahrgängen 03 und 04, in denen Noten vergeben werden. Für Berufskollegs kann die Leistungsübersicht eine gute Grundlage darstellen, um mit kleinen Anpassungen eine BK-spezifische Leistungsübersicht zu erstellen.

Die Leistungsübersichten liefern Informationen zu einem im Reportverzeichnis gewählten Halbjahr. Die Leistungsübersichten können bei Bedarf auch Quartalsnoten anzeigen. Ein Konferenzprotokoll liefert zudem optional Informationen zu Teilleistungen der Fächer.

## Konferenzprotokoll und Beamerprojektion

Die Leistungsübersichten bestehen aus drei Reports – zwei Konferenzprotokollen mit und ohne Teilleistungen und einer zugehörigen Beamerprojektion ohne Teilleistungen. Die Konferenzprotokolle sollten für Konferenzen in Papierform ausgedruckt werden. Die Beamerprojektion sollte als PDF erzeugt und in der Konferenz als PDF-Anzeige verwendet werden. Das PDF für die Beamerprojektion hat ein Seitenverhältnis von 16:9.

[![Beamerprojektion](/bilder/archiv/leistungsuebersicht-beamerprojektion.png)](/bilder/archiv/leistungsuebersicht-beamerprojektion.png)

*Beamerprojektion*

Die Reports geben folgende Informationen aus:

- **Unterricht und Leistungen:** Fächer, Noten, Fachlehrkräfte, Epochenunterricht, Mahnungen und Fehlstunden.
- **Zeugnis und Abschluss:** Zeugnisbemerkungen, Versetzung, Abschlüsse, Prognoseabschlüsse und Nachprüfungsfächer.
- **Laufbahn und Förderung:** wiederholte Abschnitte, Wiederholer, Klassenart Deutschförderklasse, Ende der Erstförderung, Wechsel des Leistungsniveaus, Schulbesuchsjahre und Förderschwerpunkte.

Im zweiten Halbjahr des Jahrgangs 10 kommen die ZP10-Noten hinzu; in der früheren G8-Laufbahn betrifft dies EF.2.

Die Konferenzprotokolle schließen nach jeder Klasse mit einer Liste aller Lehrkräfte ab, die in der Klasse unterrichten, sowie mit Feldern für die Protokollunterschrift. Die Beamerprojektion zeigt zusätzlich das Bild des Schulkindes an, sofern dieses in der Datenbank gespeichert ist.

Das **Konferenzprotokoll** fasst mehrere Schülerinnen und Schüler auf einer Seite zusammen. Die **Beamerprojektion** zeigt eine Person pro Seite. Beide Ausgaben enthalten eine Nummer innerhalb der Klasse und eine laufende Nummer. Letztere entspricht in der Regel der Seite der Beamerprojektion. So können Sie während der Konferenz gezielt zur gewünschten Person wechseln.

## Zeugniskonferenz oder Quartalskonferenz

[![Art der Konferenz auswählen](/bilder/archiv/leistungsuebersicht-konferenzauswahl.png)](/bilder/archiv/leistungsuebersicht-konferenzauswahl.png)

*Art der Konferenz auswählen*

Die Leistungsübersicht kann für Quartals- und Zeugniskonferenzen verwendet werden. Standardmäßig erscheint die Ansicht für die Zeugniskonferenz. Setzen Sie `AbfrageKonferenzart` auf `True`, wenn beim Start zwischen beiden Ansichten gewählt werden soll. Die Einstellung ist besonders für Schulen mit Quartalsbetrieb gedacht.

### Zeugniskonferenz: Quartals- und Zeugnisnoten

In dieser Zeugniskonferenzansicht werden Quartalsnoten und Zeugnisnoten angezeigt. Die Spaltenüberschrift der Beamerprojektion trägt die Titel QN und ZN für Quartalsnote und Zeugnisnote. Der Titel des Berichts weist zusätzlich darauf hin, dass es sich um eine Zeugniskonferenz handelt.

Bei vorhandener Quartalsnote zeigt der Report zwei Spalten: links die Quartalsnote in Dunkelgrau, rechts die Zeugnisnote. Eine fehlende Zeugnisnote wird farbig hervorgehoben. Ohne Quartalsnote erscheint nur eine Zeugnisnotenspalte; der Report behandelt das Fach dann als Fach ohne Quartalsnote. Minderleistungen werden farbig hervorgehoben.

### Zeugniskonferenz: nur Zeugnisnoten

In dieser Zeugniskonferenzansicht werden ausschließlich Zeugnisnoten angezeigt. Die Spaltenüberschrift der Beamerprojektion trägt den Titel ZN für Zeugnisnote. Der Titel des Berichts weist ebenfalls auf die Zeugniskonferenz hin.

Fehlende Zeugnisnoten werden durch eine farbig hervorgehobene leere Notenspalte kenntlich gemacht. Defizitäre Noten werden farbig hervorgehoben.

### Quartalskonferenz: nur Quartalsnoten

In der Quartalskonferenzansicht werden ausschließlich Quartalsnoten in einer einzelnen Spalte angezeigt. Die Spaltenüberschrift trägt den Titel QN für Quartalsnote. Der Titel des Berichts weist auf die Quartalskonferenz hin. Fehlende Quartalsnoten und defizitäre Quartalsnoten werden farbig hervorgehoben.

::: tip Tipp

An Schulen ohne Quartalsbetrieb ergibt sich die gleiche Darstellung wie in der Zeugniskonferenz mit ausschließlich Zeugnisnoten. Lediglich in der Beamerprojektion trägt die Spalte dann die Überschrift QN und ZN. Wer sich daran nicht stört, kann die Abfrage der Konferenzart deaktivieren und so schneller zum Ergebnis gelangen.

:::

## Teilleistungsnoten

Die Konferenzprotokolle existieren in zwei Versionen. Der Report ***Klassenliste - Leistungsübersicht Halbjahr Konferenzprotokoll ZN QN @KL.rtm*** gibt keine Teilleistungsnoten aus. Der Report ***Klassenliste - Leistungsübersicht Halbjahr Konferenzprotokoll ZN QN TL @KL.rtm*** kann Teilleistungsnoten ausgeben. Über einen zusätzlichen ***Parameter Teilleistungsarten*** (s.u.) kann die Ausgabe der Teilleistungsnoten gesteuert werden.

## Parameter

Mithilfe von Parametern im Report können Sie die Ausgabe beeinflussen, ohne in den Code eingreifen zu müssen. Um Parameter zu ändern, wechseln Sie in den Bearbeitungsmodus des Reports. Ändern Sie in den Eigenschaften des jeweiligen Parameters den Wert unter Value.

Wenn Sie einen vorgegebenen Wert vollständig löschen möchten, ist dies nur über die Eigenschaft SearchExpression möglich. Markieren Sie dort die Zeichenkette und drücken Sie die Taste Entf.

Löschen Sie keine Parameter aus dem Report. Der Code erwartet alle Parameter und wertet diese aus.

[![Parameter bearbeiten](/bilder/archiv/leistungsuebersicht-parameter.png)](/bilder/archiv/leistungsuebersicht-parameter.png)

*Parameter bearbeiten*

### DieseKursartenUnterNoteAnzeigen

Mit dem Parameter DieseKursartenUnterNoteAnzeigen wird gesteuert, welche Kursarten unter der Note angezeigt werden. Die Standardeinstellung ist `LK1,LK2,GKM,GKS,VTF,PJK,E,G`. Sie können hier beliebige Kursarten, durch Komma getrennt, eintragen. Verwenden Sie keine Leerzeichen.

### UeberspringeFaecherMitDiesenKursarten

Mit dem Parameter UeberspringeFaecherMitDiesenKursarten wird gesteuert, dass Fächer nicht in der Fächertabelle, sondern gesondert unterhalb der Fächertabelle ausgegeben werden. Die Standardeinstellung ist `AGGT,ZUV`. Sie können beliebige allgemeine Kursarten eintragen. Verwenden Sie keine Leerzeichen.

### NurFaecherMitMarkerAufZeugnis

Mit dem Parameter NurFaecherMitMarkerAufZeugnis wird gesteuert, ob nur Fächer mit dem Marker ***Auf Zeugnis ausgegeben*** gedruckt werden. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `True`.

### NotenOhneTendenzAusgeben

Mit dem Parameter NotenOhneTendenzAusgeben wird gesteuert, ob Noten mit oder ohne Tendenz ausgegeben werden. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `True`.

### AbfrageKonferenzart

Über den Parameter AbfrageKonferenzart wird geregelt, ob beim Start nach der Konferenzart gefragt werden soll. Ist der Parameter aktiviert, erscheint beim Aufruf des Reports ein Abfragefenster zur Auswahl der Konferenzart und der zugehörigen Ansicht. Zur Auswahl stehen drei Zustände:

- Zeugniskonferenz: Quartals- und Zeugnisnoten (Standard bei fehlender Abfrage)
- Zeugniskonferenz: nur Zeugnisnoten
- Quartalskonferenz: nur Quartalsnoten

Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `False`.

Empfehlung: An Schulen mit Quartalskonferenzen sollte der Parameter auf True gesetzt werden. An Schulen ohne Quartalskonferenzen sollte der Parameter auf False gesetzt werden.

### Teilleistungsarten für den TL-Report

Der Parameter Teilleistungsarten steuert die Anzeige der Teilleistungsnoten zu einem Fach. Er erwartet eine kommagetrennte Liste mit genau sechs Teilleistungsarten, wobei eine Teilleistungsart auch leer sein darf. Es wird beim ausgelieferten Report davon ausgegangen, dass die ersten drei Teilleistungsarten für mündliche Mitarbeit und die nächsten drei Teilleistungsarten für schriftliche Ergebnisse genutzt werden.

Der Report reagiert bei der Ausgabe flexibel auf leere Werte. Diese müssen jedoch sinnvoll gesetzt werden, z.B. nicht zu Beginn einer Ausgabezeile. Teilleistungsarten, welche ein Leerzeichen enthalten, müssen in Anführungszeichen gesetzt werden.

#### Beispieleintrag SI für die Ausgabe von zwei mündlichen und drei schriftlichen Teilleistungen

`Somi1,Somi2,,Kl1,Kl2,Kl3`: In der ersten Zeile werden zwei Noten zur sonstigen Mitarbeit und in der zweiten Zeile drei Klausurnoten angezeigt.

#### Beispieleintrag SII für die Ausgabe von zwei Teilleistungen zur sonstigen Mitarbeit und zwei schriftlichen Teilleistungen

`"Somi 1","Somi 2",,"Kl 1","Kl 2",`: In der ersten Zeile werden zwei Noten zur sonstigen Mitarbeit und in der zweiten Zeile zwei Klausurnoten angezeigt.

#### Fehlerhaft gesetzte leere Teilleistungsart

Die Liste `Somi1,,Somi2,Kl1,,Kl2` führt durch die leeren zweiten und fünften Einträge zu einer fehlerhaften Ausgabe. Verwenden Sie stattdessen `Somi1,Somi2,,Kl1,Kl2,`. Soll tatsächlich ein mittleres Feld leer bleiben, verwenden Sie `Somi1,x,Somi2,Kl1,x,Kl2`. Dabei steht `x` für eine Teilleistungsart, die in SchILD-NRW nicht vergeben ist. Die genaue Position der leeren Einträge bleibt also wichtig.

### SchulbesuchsjahreAusgeben

Mit dem Parameter SchulbesuchsjahreAusgeben wird gesteuert, ob die Anzahl der Schulbesuchsjahre ausgegeben wird. Die Standardeinstellung ist `True`.

::: info Hinweis – Siehe auch

- [Basisreports auswählen und verwenden](/reporting/basisreports/basisreports-downloads-themenuebersicht)
- [Leistungsübersichten für Q1 und Q2](/reporting/basisreports/basisreportsammlung-leistungsuebersichten-jg-q1-bis-q2)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Leistungs%C3%BCbersichten_Halbjahr)
