---
title: "Reports übersichtlich und wartbar gestalten"
source_pageid: 1560
source_revision: 6847
---

# Reports übersichtlich und wartbar gestalten

Nutzen Sie diese Gestaltungsregeln beim Anpassen oder Erstellen eines Reports. Sie betreffen Layout, Datenfluss und den sparsamen Einsatz von Programmcode.

## Gestaltungsregeln im Überblick

Dieser Artikel listet Vorschläge auf, die Reports übersichtlich, gut wartbar und möglichst fehlerfrei machen sollen. Die neue Basisreportsammlung wurde entsprechend dieser Leitlinien entwickelt.

### Grundregeln

1.  Nutzen Sie, wenn möglich, existierende Reports der Basisreportsammlung. Erzeugen Sie nach Möglichkeit keine speziellen Einzelfall-Reports.
2.  Nutzen Sie, wenn möglich, die Serienbriefe, für die Sie eigene Texte anlegen und speichern können, die bei Bedarf in die Serienbriefreports geladen werden.
3.  Wenn Sie einen eigenen Report erstellen, passen Sie möglichst einen der Reports aus der Basisreportsammlung an und übernehmen Sie so viel vom bestehenden Layout wie möglich.

### Layout

#### Allgemeine Gestaltung

- Achten Sie auf ein einheitliches Layout von neuen Reports. Basieren Sie Ihre Reports, wenn möglich, auf der Basisreportsammlung.
- Im „offiziellen“ Bereich – etwa bei Briefen an Erziehungsberechtigte – kann überlegt werden, die Schriftgröße anzupassen, damit die Lesbarkeit gewährleistet bleibt.
- Verwenden Sie eine einheitliche Schriftart, die auf den beteiligten Rechnern verfügbar ist. Orientieren Sie sich an der Gestaltung Ihrer übrigen schulischen Dokumente.
- Erzeugen Sie Ihren Report im „What you see is what you get“-Modus. Wenn Sie also einen A4-Brief erzeugen, lassen Sie auch die Vorlage im Report-Designer nach A4 aussehen.
- Enthält der Report viele Informationen, arbeiten Sie zweispaltig oder sogar dreispaltig. Beispiele hierfür wären aktuelle Stammblätter.

#### Robustes und dynamisches Layout

- Das Layout muss robust gegenüber erwarteten und unerwarteten langen Einträgen sein. Ein Beispiel wäre, dass lange Namen abgeschnitten werden oder dass Felder in andere hineinragen. Planen Sie hier so, dass es möglichst keine Kollisionen gibt. Falls sich mögliche Kollisionen nicht verhindern lassen, planen Sie so, dass das Feld in der Größe beschränkt ist und der abgeschnittene Teil unproblematisch bleibt.
- Um Felder in der Höhe wachsen zu lassen, verwenden Sie Memofelder. Dadurch passt sich auch der Detailbereich dynamisch an.

#### Detailbereich und Hintergründe

- Verwenden Sie keine dynamisch eingebundenen Subreports. Wenn solche Subreports verändert werden, kann im eigentlichen Report alles verschoben werden und Schriftarten sowie Layouts nicht mehr passen.
- Nutzen Sie keinen Code, um etwa alternierende Hintergründe zu erzeugen. Verwenden Sie stattdessen die Funktionen des Detailbereichs, der entsprechende Darstellungen automatisch vornimmt.
  - Entsprechend nutzen Sie auch keine „Formen“, um gefärbte Hintergründe zu erzeugen. Eine Ausnahme kann die Verwendung von senkrechten Linien mit der Höhe der Stammkomponente sein.
- Ebenso kann der Detailbereich genutzt werden, um Rahmen zu erzeugen. Nutzen Sie hier bitte keine Formen oder Linien.

#### Dateiname

- Legen Sie den Dateinamen des Reports über eine Systemvariable im Fuß ab.

### Technik

Dieser Abschnitt beschreibt technische Aspekte der Reportstruktur und des Datenflusses, jedoch nicht den Einsatz von Code.

- Laden Sie keine Header und Footer nach; der Report soll für sich alleine stehen.
- Vermeiden Sie, wenn möglich, Subreports.
- Verwenden Sie die Pipeline „Klassen“ nicht. Um nach Klassen oder anderen Kriterien zu trennen, nutzen Sie die Pipeline „Schüler“ und führen die Trennung über Gruppen durch.
- Filtern Sie nach Möglichkeit Schüler nicht innerhalb eines Reports. Die Filterung soll immer durch den Nutzer über die Auswahl der Schüler im Schülercontainer vorgenommen werden.
- Wenn in komplexeren Reports Tabellen verwendet werden, nutzen Sie einen Subreport, dessen Ausdehnung des Detailbereichs den Rahmen festlegt. Grids werden hier in der Regel nicht benötigt.
- Für Listen von Personengruppen, etwa Schülern, testen Sie, ob 34 Einträge möglich sind. Testen Sie auch mit Personen mit langen Feldinhalten (z. B. Name, Straße, …).
- Alle Objekte wie Labels oder Datenfelder sollten passend umbenannt werden. Benennen Sie also z. B. „DBText1“ besser in „DBVorname“. Das gleiche gilt auch für Labels und andere Bezeichner.
- Richten Sie Objekte wie Labels präzise aus, indem Sie Position und Breite (Width) numerisch per Zahleneingabe händisch auf ganze Zahlen oder genaue Nachkommastellen setzen.

### Code

Dieser Abschnitt behandelt ausschließlich den Einsatz von Code innerhalb von Reports.

- Vermeiden Sie Code, wo immer dies möglich ist. Sollte der Reportdesigner eine Möglichkeit anbieten, etwas mit Tools und Feldern anzuzeigen, nutzen Sie diese Option.
  - Nutzen Sie, wo möglich, Memofelder mit MailMerge, um Daten aus der Datenbank zu verarbeiten.
  - Wenn Code verwendet werden muss, setzen Sie ihn so sparsam wie möglich ein.
  - Erzeugen Sie Code an möglichst wenigen Stellen. Verteilen Sie keinen Code über alle möglichen Objekte, die über einen ganzen Report und Subreports verteilt sind.
- Soll in Reports eingegriffen werden, verwenden Sie Parameter als definierbare und mit voreingestellten Werten geladene Variablen. Der Parameter lässt sich ändern, indem der Report gespeichert wird. Drücken Sie nach der Eingabe die Eingabetaste, um den Parameter zu sichern.
- Hinweis bei Zählern: Das Event „Detail Before Print“ kann in Grenzfällen Schüler doppelt zählen. Verwenden Sie daher „Detail After Print“.
- Variablen müssen sprechend und eindeutig benannt sein.
- Schreiben Sie Code so sprechend, dass Kommentare nicht notwendig sind.
- Setzen Sie Kommentare dort, wo sie für die Verständlichkeit nötig und sinnvoll sind.
- Überlegen Sie im Code unbedingt, welche Randbedingungen und Spezialfälle bei den verarbeiteten Feldern auftreten können. Zum Beispiel ist zu beachten, dass SchILD-NRW vier mögliche Einträge beim Feld „Geschlecht“ kennt und die Verarbeitung von nur „m/w“ nicht ausreicht. Ebenfalls können in Notenfeldern Werte wie „NB“ vorkommen, auf die Rücksicht genommen werden muss.

::: info Hinweis – Siehe auch

- [Die Basisreportsammlung im Überblick](/reporting/basisreports/basisreportsammlung-ein-ueberblick)
- [Die Basisreportsammlung herunterladen und aktualisieren](/reporting/basisreports/basisreportsammlung-herunterladen-und-aktualisieren)
- [Serienbriefe einrichten und drucken](/reporting/serienbriefe/basisreportsammlung-serienbriefe)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Designrichtlinien) · Quellrevision 6847.
