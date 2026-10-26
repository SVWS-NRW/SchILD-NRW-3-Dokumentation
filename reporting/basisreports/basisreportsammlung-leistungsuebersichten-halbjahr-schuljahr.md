---
title: "Leistungsübersichten für Halbjahr und Schuljahr"
source_pageid: 1666
source_revision: 7233
---

# Leistungsübersichten für Halbjahr und Schuljahr

Nutzen Sie diese Leistungsübersicht für Halbjahres- oder Schuljahreskonferenzen. Über die Parameter wählen Sie die zusätzlichen Informationen und die Darstellung von Quartals- und Teilleistungsnoten.

## Einsatzbereiche und enthaltene Informationen

[![Konferenzprotokoll](/bilder/basisreports/leistungsuebersicht-schuljahr.png)](/bilder/basisreports/leistungsuebersicht-schuljahr.png)

*Konferenzprotokoll*

Die Leistungsübersicht in SchILD-NRW 3 ist für die Nutzung in den Jahrgängen 05 bis Q2 der Sekundarstufen I und II entwickelt worden. Sie funktionieren in der Regel auch in der Grundschule in den Jahrgängen 03 und 04, in denen Noten vergeben werden. Für Berufskollegs kann die Leistungsübersicht eine gute Grundlage darstellen, um mit kleinen Anpassungen eine BK-spezifische Leistungsübersicht zu erstellen.

Die Leistungsübersicht verwendet das Halbjahr, das Sie im Reportverzeichnis ausgewählt haben. Sie enthält:

- **Unterricht und Leistungen:** Fächer, Noten, Quartalsnoten, Teilleistungen, Fachlehrkräfte, Epochenunterricht, Mahnungen und Fehlstunden.
- **Zeugnis und Abschluss:** Zeugnisbemerkungen, Versetzung, Abschlüsse, Prognoseabschlüsse und Nachprüfungsfächer.
- **Laufbahn und Förderung:** wiederholte Abschnitte, Wiederholer, Klassenart Deutschförderklasse, Ende der Erstförderung, Wechsel des Leistungsniveaus, Schulbesuchsjahre und Förderschwerpunkte.

Im zweiten Halbjahr des Jahrgangs 10 kommen die ZP10-Noten hinzu; in der früheren G8-Laufbahn betrifft dies EF.2.

Das Konferenzprotokoll schließt nach jeder Klasse mit einer Liste aller Lehrkräfte ab, die in der Klasse aktuell unterrichten, sowie mit Feldern für die Protokollunterschrift.

## Zeugniskonferenz oder Quartalskonferenz

[![Art der Konferenz auswählen](/bilder/basisreports/abfrage-konferenzart.png)](/bilder/basisreports/abfrage-konferenzart.png)

*Art der Konferenz auswählen*

Die Leistungsübersicht kann für Quartals- und Zeugniskonferenzen verwendet werden. Standardmäßig erscheint die Ansicht für die Zeugniskonferenz. Setzen Sie `AbfrageKonferenzart` auf `True`, wenn beim Start zwischen beiden Ansichten gewählt werden soll. Die Einstellung ist besonders für Schulen mit Quartalsbetrieb gedacht.

In der Zeugniskonferenzansicht werden Zeugnisnoten angezeigt. Der Titel des Berichts weist zusätzlich darauf hin, dass es sich um eine Zeugniskonferenz handelt. Quartalsnoten werden auf Wunsch ebenfalls ausgegeben. Fehlende Zeugnisnoten und defizitäre Zeugnisnoten werden farbig hervorgehoben.

In der Quartalskonferenzansicht werden ausschließlich Quartalsnoten in einer einzelnen Spalte angezeigt. Der Titel des Berichts weist auf die Quartalskonferenz hin. Fehlende Quartalsnoten und defizitäre Quartalsnoten werden farbig hervorgehoben.

::: info Hinweis

Wird die Leistungsübersicht im 2. Halbjahr aufgerufen, so werden für das 1. Halbjahr unabhängig von der Konferenzart lediglich die Zeugnisnoten angezeigt.

:::

## Teilleistungsnoten

Das Konferenzprotokoll kann Teilleistungsnoten ausgeben. Über einen zusätzlichen ***Parameter Teilleistungsarten*** (s.u.) kann die Ausgabe der Teilleistungsnoten gesteuert werden.

## Parameter

Mithilfe von Parametern im Report können Sie die Ausgabe beeinflussen, ohne in den Code eingreifen zu müssen. Um Parameter zu ändern, wechseln Sie in den Bearbeitungsmodus des Reports. Ändern Sie in den Eigenschaften des jeweiligen Parameters den Wert unter Value.

Wenn Sie einen vorgegebenen Wert vollständig löschen möchten, ist dies nur über die Eigenschaft SearchExpression möglich. Markieren Sie dort die Zeichenkette und drücken Sie die Taste Entf.

Löschen Sie keine Parameter aus dem Report. Der Code erwartet alle Parameter und wertet diese aus.

[![Parameter bearbeiten](/bilder/basisreports/leistungsuebersicht-schuljahr-parameter.png)](/bilder/basisreports/leistungsuebersicht-schuljahr-parameter.png)

*Parameter bearbeiten*

### LehrkraefteAnzeigen

Mit dem Parameter LehrkraefteAnzeigen wird die Anzeige der unterrichtenden Lehrkraft unterhalb der Note gesteuert. Die Lehrkraft und die Kursart teilen sich eine Zeile. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `True`.

### KursartenAnzeigen

Mit dem Parameter KursartenAnzeigen wird die Anzeige der Kursart des Fachs unterhalb der Note gesteuert. Die Lehrkraft und die Kursart teilen sich eine Zeile. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `True`.

### FachbezogeneFehlstundenAnzeigen

Mit dem Parameter FachbezogeneFehlstundenAnzeigen wird die Anzeige der fachbezogenen Fehlstunden und unentschuldigten fachbezogenen Fehlstunden unterhalb der Note gesteuert. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `False`.

### QuartalsnotenAnzeigen

Mit dem Parameter QuartalsnotenAnzeigen wird die Anzeige der Quartalsnoten gesteuert. Die Quartalsnote wird nur in der Zeile des aktuellen Abschnitts links neben der Zeugnisnote ausgegeben. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `False`.

### Teilleistungsarten

Der Parameter Teilleistungsarten steuert die Anzeige von Teilleistungsnoten zu einem Fach. Er erwartet eine kommagetrennte Liste mit genau sechs Teilleistungsarten. Es wird beim ausgelieferten Report davon ausgegangen, dass die ersten drei Teilleistungsarten für mündliche Mitarbeit und die nächsten drei Teilleistungsarten für schriftliche Ergebnisse genutzt werden.

Ist der Parameter leer, oder die Anzahl der Teilleistungsarten ungleich 6, so erfolgt keine Teilleistungsausgabe. Die Standardeinstellung ist `leer`.

Die Teilleistungsarten 1 bis 3 und 4 bis 6 müssen jeweils von vorne befüllt werden. Teilleistungsarten, welche ein Leerzeichen enthalten, müssen in Anführungszeichen gesetzt werden.

- **Beispieleintrag SI** für die Ausgabe von zwei mündlichen und drei schriftlichen Teilleistungen

`Somi1,Somi2,,Kl1,Kl2,Kl3`

In der ersten Zeile werden zwei Noten zur sonstigen Mitarbeit und in der zweiten Zeile drei Klausurnoten angezeigt.

- **Beispieleintrag SII** für die Ausgabe von zwei Teilleistungen zur sonstigen Mitarbeit und zwei schriftlichen Teilleistungen

`"Somi 1","Somi 2",,"Kl 1","Kl 2",`

In der ersten Zeile werden zwei Noten zur sonstigen Mitarbeit und in der zweiten Zeile zwei Klausurnoten angezeigt.

- **Fehlerhaft gesetzte leere Teilleistungsart**

`Somi1,,Somi2,Kl1,,Kl2`

Leere zweite und fünfte Einträge führen zu einer fehlerhaften Ausgabe. Verwenden Sie stattdessen `Somi1,Somi2,,Kl1,Kl2,`. Soll ein mittleres Feld gezielt leer bleiben, verwenden Sie `Somi1,x,Somi2,Kl1,x,Kl2`. `x` muss dabei eine Teilleistungsart bezeichnen, die in SchILD-NRW nicht vergeben ist.

### NotenOhneTendenzAusgeben

Mit dem Parameter NotenOhneTendenzAusgeben wird gesteuert, ob Noten mit oder ohne Tendenz ausgegeben werden. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `True`.

### UeberspringeFaecherMitDiesenKursarten

Mit dem Parameter UeberspringeFaecherMitDiesenKursarten wird gesteuert, dass Fächer nicht in der Fächertabelle, sondern gesondert unterhalb der Fächertabelle ausgegeben werden. Die Standardeinstellung ist `AGGT,ZUV`. Sie können beliebige **allgemeine Kursarten** eintragen. Verwenden Sie keine Leerzeichen.

### AbfrageKonferenzart

Über den Parameter AbfrageKonferenzart wird geregelt, ob beim Start nach der Konferenzart gefragt werden soll. Ist der Parameter aktiviert, erscheint beim Aufruf des Reports ein Abfragefenster zur Auswahl der Konferenzart und der zugehörigen Ansicht. Zur Auswahl stehen zwei Zustände:

- Zeugniskonferenz: Zeugnisnoten und ggf. Quartalsnoten (Standard bei fehlender Abfrage)
- Quartalskonferenz: nur Quartalsnoten

Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `False`.

Empfehlung: An Schulen mit Quartalskonferenzen sollte der Parameter auf True gesetzt werden. An Schulen ohne Quartalskonferenzen sollte der Parameter auf False gesetzt werden.

### NurFaecherMitMarkerAufZeugnis

Mit dem Parameter NurFaecherMitMarkerAufZeugnis wird gesteuert, ob nur Fächer mit dem Marker ***Auf Zeugnis ausgegeben*** gedruckt werden. Sie können dem Parameter die Werte True oder False zuweisen. Die Standardeinstellung ist `True`.

### SchulbesuchsjahreAusgeben

Mit dem Parameter SchulbesuchsjahreAusgeben wird gesteuert, ob die Anzahl der Schulbesuchsjahre ausgegeben wird. Die Standardeinstellung ist `True`.

::: info Hinweis – Siehe auch

- [Basisreports auswählen und verwenden](/reporting/basisreports/basisreports-downloads-themenuebersicht)
- [Leistungsübersichten für Q1 und Q2](/reporting/basisreports/basisreportsammlung-leistungsuebersichten-jg-q1-bis-q2)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Leistungs%C3%BCbersichten_Halbjahr-Schuljahr) · Quellrevision 7233.
