---
title: "Leistungsübersichten für Q1 und Q2"
source_pageid: 1658
source_revision: 7232
---

# Leistungsübersichten für Q1 und Q2

Bereiten Sie Konferenzprotokoll und Beamerprojektion für die Qualifikationsphase vor. Beachten Sie die Kursdarstellung, optionalen Zusatzinformationen und die Auswahl früherer Lernabschnitte.

## Konferenzprotokoll und Beamerprojektion

[![Konferenzprotokoll](/bilder/archiv/leistungsuebersicht-konferenzprotokoll-qualifikationsphase.png)](/bilder/archiv/leistungsuebersicht-konferenzprotokoll-qualifikationsphase.png)

*Konferenzprotokoll*

Die Leistungsübersichten in SchILD-NRW 3 bestehen aus drei Reports – zwei Konferenzprotokollen und einer zugehörigen Beamerprojektion. Die Konferenzprotokolle sollten für Konferenzen in Papierform ausgedruckt werden. Die Beamerprojektion sollte als PDF erzeugt und in der Konferenz als PDF-Anzeige verwendet werden. Das PDF für die Beamerprojektion hat ein Seitenverhältnis von 16:9.

Die Reports zeigen Fächer, Punkte, Kursarten, Fehlstunden, Zeugnisbemerkungen, wiederholte Abschnitte, Wiederholer, Defizite und belegte Kurssummen. Nach jeder Klasse folgt im Konferenzprotokoll eine Liste der Lehrkräfte des letzten Abschnitts mit Feldern für die Protokollunterschrift. Das Protokoll ist mit oder ohne Teilleistungsnoten aus dem letzten beziehungsweise gewählten Abschnitt verfügbar.

[![Beamerprojektion](/bilder/archiv/leistungsuebersicht-beamerprojektion-qualifikationsphase.png)](/bilder/archiv/leistungsuebersicht-beamerprojektion-qualifikationsphase.png)

*Beamerprojektion*

Das **Konferenzprotokoll** fasst mehrere Schülerinnen und Schüler auf einer Seite zusammen. Die **Beamerprojektion** zeigt eine Person pro Seite. Beide Ausgaben enthalten eine Nummer innerhalb der Klasse und eine laufende Nummer. Letztere entspricht in der Regel der Seite der Beamerprojektion. So können Sie während der Konferenz gezielt zur gewünschten Person wechseln.

## Kursart, Lehrkraft und Fehlstunden einblenden

[![Konferenzprotokoll mit optionalen Details](/bilder/archiv/leistungsuebersicht-konferenzprotokoll-qualifikationsphase-details.png)](/bilder/archiv/leistungsuebersicht-konferenzprotokoll-qualifikationsphase-details.png)

*Konferenzprotokoll mit optionalen Details*

Mithilfe von Parametern kann gesteuert werden, ob zusätzliche Informationen unterhalb der Note eingeblendet werden sollen. So können zusätzlich zur Note die Kursart, die Kurslehrkraft und die kursindividuellen Fehlstunden angezeigt werden. Dadurch erhöht sich jedoch der Platzbedarf der Abschnitte, sodass im Konferenzprotokoll weniger Schülerinnen und Schüler pro Seite ausgegeben werden.

Sie können frei festlegen, welche Informationen unterhalb der Note angezeigt werden sollen. Die Darstellung wird entsprechend der gewählten Optionen automatisch angepasst.

## Teilleistungsnoten im Konferenzprotokoll ausgeben

Ein Konferenzprotokoll kann zusätzlich die Teilleistungsnoten der sonstigen Mitarbeit und der schriftlichen Leistungen ausgeben. Wählen Sie im Reportdesigner den gewünschten Abschnitt; in der Regel ist dies der aktuelle Abschnitt. Die Ausgabe nennt Jahrgang und Abschnitt, damit die Teilnoten der Endnote zugeordnet werden können. Welche Teilleistungsarten erscheinen, steuert der Parameter **Teilleistungsarten**; siehe unten.

## Darstellung

[![Beamerprojektion mit optionalen Details](/bilder/archiv/leistungsuebersicht-beamerprojektion-qualifikationsphase-details.png)](/bilder/archiv/leistungsuebersicht-beamerprojektion-qualifikationsphase-details.png)

*Beamerprojektion mit optionalen Details*

Leistungskurse werden in kursiver Fettschrift mit grünem Hintergrund dargestellt. Die Kurse AB3 und AB4 werden ebenfalls in kursiver Fettschrift mit blauem Hintergrund dargestellt. Schriftliche Kurse werden in Fettschrift ausgegeben, mündliche Kurse in normaler Schrift.

Defizite erhalten einen roten Hintergrund. Kurse mit 0 Punkten erhalten einen dunkelroten Hintergrund mit weißer Schrift.

Überschreitet die Anzahl der Defizite typische Grenzwerte, werden die Summen rot dargestellt. Unterschreiten die Kurssummen typische Grenzwerte, werden auch diese Summen rot dargestellt.

Die Anzeige ist auf maximal 13 Kurse in der Q1 und Q2 ausgelegt und deckt damit die üblichen Anforderungen ab.

Unterhalb der Fächer wird die KursartAllgemein ausgegeben. Insbesondere bei Zusatzkursen, die nur in der Q2 angeboten werden, fehlt die Anzeige der Kursart, da diese in der Q1 noch nicht hinterlegt ist. Dies ist eine Einschränkung der zugrunde liegenden Datenquelle.

Im Report ***'Klassenliste - Leistungsübersicht Jg Q1 bis Q2 Konferenzprotokoll TL @KL.rtm'*** können zudem Teilleistungen unterhalb der Zeugnisnoten eingeblendet werden.

In der Vorschau des Reportdesigners kann es zu leichten Darstellungsabweichungen kommen, die im Ausdruck oder bei höherer Zoomstufe nicht sichtbar sind (Linienausgabe, Linienstärke, Bündigkeit).

## Frühere Abschnitte auswählen und ausgeben

Der Report verwendet die Pipelines Schuelerlaufbahn und Leistungsuebersicht. Die Ansicht ist jedoch auf die Q1 und Q2 gefiltert. Wenn Sie eine Leistungsübersicht für Schülerinnen und Schüler aus zurückliegenden Abschnitten drucken möchten, filtern Sie die Schülerinnen und Schüler zunächst auf dem Reiter **Auswahl**. Geben Sie dort den passenden Status ein und filtern Sie nach dem gewünschten Lernabschnitt und Jahrgang.

Wechseln Sie anschließend in den Reiter Reportverwaltung und wählen Sie auch dort das passende Schuljahr sowie den passenden Abschnitt aus. Dies ist in der Regel der letzte Abschnitt der Q2.

## Parameter

Mithilfe von Parametern im Report können Sie die Ausgabe beeinflussen, ohne den Code ändern zu müssen. Um einen Parameter zu ändern, wechseln Sie in den Bearbeitungsmodus des Reports. Ändern Sie in den Eigenschaften des Parameters den Wert unter Value.

Wenn Sie einen vorgegebenen Wert vollständig löschen möchten, ist dies nur über die Eigenschaft SearchExpression möglich. Markieren Sie dort die Zeichenkette und drücken Sie die Taste Entf.

Löschen Sie keinen Parameter aus dem Report, da der Code alle Parameter erwartet und auswertet.

[![Parameter bearbeiten](/bilder/archiv/erlaubte-kursarten.png)](/bilder/archiv/erlaubte-kursarten.png)

*Parameter bearbeiten*

### ErlaubteKursarten

Mit dem Parameter ErlaubteKursarten wird gesteuert, welche Fächer beziehungsweise Kursarten im Report angezeigt werden. Die Standardeinstellung ist `LK1,LK2,AB3,AB4,GKS,GKM,VTF,PJK`. Sie können beliebige Kursarten kommasepariert eintragen. Verwenden Sie keine Leerzeichen.

### KursartAnzeigen

Mit diesem Parameter wird gesteuert, ob unterhalb der Kursnote die Kursart angezeigt wird. Die Anzeige der Kursart erhöht den Platzbedarf der Zeile. Die Standardeinstellung ist `False`.

### LehrkraftAnzeigen

Mit diesem Parameter wird gesteuert, ob unterhalb der Kursnote das Kürzel der Kurslehrkraft angezeigt wird. Die Anzeige erhöht den Platzbedarf der Zeile. Die Standardeinstellung ist `False`.

### FehlstundenAnzeigen

Mit diesem Parameter wird gesteuert, ob unterhalb der Kursnote kursindividuelle Fehlstunden angezeigt werden. Die Darstellung erfolgt in der Form ***Fehlstunden\|unentschuldigte Fehlstunden***. Die Anzeige erhöht den Platzbedarf der Zeile. Die Standardeinstellung ist `False`.

[![Das Auswahlmenü](/bilder/archiv/auswahlmenue.png)](/bilder/archiv/auswahlmenue.png)

*Das Auswahlmenü*

### AuswahlmenueAnzeigen

Mit diesem Parameter wird gesteuert, ob bei jedem Aufruf des Reports ein Auswahlmenü angezeigt wird, in dem die Anzeige von Kursart, Lehrkraft und Fehlstunden ausgewählt werden kann. So kann bei jedem Aufruf neu entschieden werden, wie die Ausgabe erfolgen soll. Die Standardeinstellung ist `False`.

### Teilleistungsarten für den TL-Report

Der Parameter **Teilleistungsarten** enthält eine kommagetrennte Liste mit genau vier Einträgen. Einzelne Einträge dürfen leer sein. Die ersten beiden sind für sonstige Mitarbeit, die folgenden beiden für schriftliche Leistungen vorgesehen. Der Standardwert lautet `Somi1,Somi2,Kl1,Kl2` ohne Leerzeichen. Enthält der Name einer Teilleistungsart selbst ein Leerzeichen, setzen Sie diesen Namen in Anführungszeichen.

#### Beispieleintrag für Teilleistungsarten mit Leerzeichen

`"Somi 1","Somi 2","Kl 1","Kl 2"`: In der ersten Zeile werden zwei Teilleistungsnoten zur sonstigen Mitarbeit und in der zweiten Zeile zwei Teilleistungsnoten zu den schriftlichen Ergebnissen angezeigt.

::: info Hinweis – Siehe auch

- [Basisreports auswählen und verwenden](/reporting/basisreports/basisreports-downloads-themenuebersicht)
- [Leistungsübersichten für ein Halbjahr](/reporting/basisreports/basisreportsammlung-leistungsuebersichten-halbjahr)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Leistungs%C3%BCbersichten_Jg._Q1_bis_Q2) · Quellrevision 7232.
