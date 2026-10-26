---
title: "Reportausgaben und Zeugnisse archivieren"
source_pageid: 1573
source_revision: 7124
---

# Reportausgaben und Zeugnisse archivieren

Richten Sie Dokumentenablage und Zeugnisverzeichnis ein, um Reportausgaben als PDF zu archivieren. Die beiden Ablagen unterscheiden sich bei Benennung und Aufbewahrung älterer Ausgaben.

SchILD bietet unter bestimmten Umständen die Möglichkeit, generierte Reports als .pdf zu archivieren.

- Reports, welche mit der Datenquelle *"Schueler"* erzeugt werden, können in der *Dokumentenablage* abgelegt werden.
- Zeugnisse können in die *Zeugnisablage* gelegt werden.

::: warning Wichtig

Hierbei ist zu beachten, dass die Dokumentenablage entsprechend der Löschfristen bei der automatischen Prüfung mit geprüft und bei Ablauf der Löschfristen mit gelöscht wird.

:::

## 1. Dokumentenablage

Die Dokumentenablage kann zum Beispiel genutzt werden, um Warnbriefe wegen Nichtversetzung, Warnungen wegen zu vieler Fehlstunden oder auch besondere Anschreiben an die Erziehungsberechtigten digital abzulegen.  

[![Einstellungen zur Dokumentenverwaltung.](/bilder/zeugnisformulare/reports-dokumentenverwaltung-1.png)](/bilder/zeugnisformulare/reports-dokumentenverwaltung-1.png)

*Einstellungen zur Dokumentenverwaltung.*

Um die Dokumentenverwaltung und Zeugnisarchivierung zu aktivieren, müssen entsprechende Ordner angegeben werden. Dies ist über *Verwaltung* ➜ *Einstellungen* ➜ *Dokumentenverwaltung* möglich.

Hier in diesem Fenster lassen sich nun für beide Archivierungsmöglichkeiten getrennt Ordner setzen. Wurde ein Ordner eingestellt, stehen die Dokumentenverwaltung beziehungsweise die Zeugnisarchivierung zur Verfügung.

::: info Hinweis

In größeren Systemen werden diese Verzeichnisse als Netzlaufwerke angelegt werden, so dass alle Personen gleiche, auf einem Server liegende Verzeichnis verwenden.

:::

Bei der Dokumentenverwaltung kann die *Dateimaske* eingestellt werden. Diese bestimmt, wie die archivierten Dateien später benannt sind. Der Standard

    "<nvgd>\<f>_<d>"

sieht kryptisch aus, bedeutet aber im Klartext, dass erst für jede Person ein Verzeichnis angelegt wird, das aus Name, Vorname, Geburtsdatum besteht, also z.B. "Müller, Hans, 30_09_2013". In diesem Verzeichnis werden dann die Dokumente mit dem Dateinamen (*\<f\>* für *file*), gefolgt von einem Unterstrich "\_" und dem Datum der Reportgenerierung (*\<d\>* für *date*) abgelegt.  

[![Konfigurieren der Dateimaske per Menü.](/bilder/zeugnisformulare/reports-dokumentenverwaltung-2.png)](/bilder/zeugnisformulare/reports-dokumentenverwaltung-2.png)

*Konfigurieren der Dateimaske per Menü.*

Öffnen Sie **Dateimaske bearbeiten**, um Verzeichnis- und Dateinamen ohne direkte Eingabe der Platzhalter zusammenzustellen.

1. Zeigen Sie mit der Maus auf ein **Merkmal** in der Mitte.
2. Halten Sie die linke Maustaste gedrückt und ziehen Sie das Merkmal nach links in den **Verzeichnisnamen** oder nach rechts in den **Dateinamen**.
3. Lassen Sie die Maustaste los. Diese Bedienung heißt **Drag-and-drop**.
4. Ändern Sie die Reihenfolge bei Bedarf mit den kleinen roten Pfeilen.

Hier im Beispiel wurde noch die Uhrzeit der Reporterzeugung zum Dateinamen hinzugefügt, was am zusätzlichen Schalter *"\<z\>"* in der Dateimaske zu sehen ist.

Entscheiden Sie sich für eine sinnvolle Struktur der Ordner. Existiert dieser Ordner nicht, wird er bei der Erzeugung eines Dokuments angelegt.  

## 2. Archivierte Dokumente öffnen

::: tip Tipp

Im Dokumentenordner können auch eigene Dokumente wie pdf-Dateien oder Dokumente des verwendeten Textverarbeitungsprogramms abgelegt und mit einem Doppelklick aus der SchILD-NRW-Dokumentenverwaltung heraus gestartet werden.

:::

Ein `Doppelklick` auf Ordner klappt diese auf und zu.

Ein `Doppelklick` auf eine der Dateien startet diese mit dem in Windows für diese Datei verknüpften Programm.

Mit der `Rechten Maustaste` öffnen sich das für diese Datei beziehungsweise für Ordner verwendete Windows-Kontextmenü, so dass zum Beispiel Ordner extern im Windows-Explorer geöffnet werden können.

## 3. Zeugnisverzeichnis

Wurde das Zeugnisverzeichnis gesetzt, werden dort die Dateien mit einem Namen abgelegt, der folgendem Schema entspricht:

     Name, Vorname, Geb.-Datum, Klasse des gedruckten Lernabschnitts, Name der Reportvorlage.pdf

[![Ein Beispieldateiname nach dem hier erklärten Schema.](/bilder/zeugnisformulare/zeugnisdruck-zeugnisablage-dateiname.png)](/bilder/zeugnisformulare/zeugnisdruck-zeugnisablage-dateiname.png)

*Ein Beispieldateiname nach dem hier erklärten Schema.*

Somit würde zum Beispiel nach einem derartigen Schema eine Datei in der Dokumentenablage benannt werden.  

::: info Hinweis

Bei diesem Verzeichnis ist zu beachten, dass Dateien darin nicht das Datum oder andere Werte, die für das Dokumentenverzeichnis eingestellt werden können, beinhalten. Somit wird immer nur das letzte Zeugnis - einer bestimmten Anlage - abgelegt.

Um Zeugnisse vergangener Lernabschnitte zu erhalten, sind die passenden Zeugnisse in Ordner der entsprechenden Lernabschnitte zu kopieren. Alternativ ist das Zeugnisverzeichnis als Dokumentation des jeweils letzten Standes mit dem aktuellsten Zeugnis zu sehen.

Sollen die Zeugnisse automatisch passend benannt werden, kann entschieden werden, die Dokumentenablage auch zur Zeugnisarchivierung zu verwenden.

:::

## 4. Verwendung der Verzeichnisse

[![Neue Schaltflächen zur Archivierung.](/bilder/zeugnisformulare/reports-dokumentenverwaltung-3.png)](/bilder/zeugnisformulare/reports-dokumentenverwaltung-3.png)

*Neue Schaltflächen zur Archivierung.*

Wurde die Dokumentenverwaltung aktiviert, stehen bei der Generierung von Reports neue Schaltflächen zur Verfügung:

- **Drucker mit Archivierung**: Dies generiert den Report wie gewohnt, der zu einem Drucker gesendet werden kann und generiert ihn im Anschluss noch einmal erneut, um ihn als .pdf in den jeweiligen Schülerordner abzulegen. **Drucker ohne Archivierung** ist die Schaltfläche, mit ein Report einfach nur zum Druck erzeugt wird.
- **Nur Archivierung (in Dokumentenablage)** generiert den Report direkt in die Dokumentenablage. Dies ist sinnvoll, wenn ein Report schon "ohne Archivierung" gedruckt wurde, er nun aber auch noch archiviert werden soll.
- **Archivierung in Zeugnisverzeichnis**: Legt den Report in das Zeugnisarchiv. Es sollten nur Zeugnisse - und eventuell vergleichbare Reports - dorthin archiviert werden.

::: info Hinweis

Da die Reports zweimal komplett erstellt werden, sind eventuelle anzuklickende Einstellungen oder Eingaben eines Reports bei einer Archivierung auch doppelt vorzunehmen. Dies betrifft etwa die Frage, ob mit Rand gedruckt werden soll oder (noch) fehlende Projektkurstitel für Projektkurse der Q1.

:::

## 5. Voraussetzungen im Report prüfen

Sollte ein Report nicht in die Dokumentenverwaltung abgelegt werden können, prüfen Sie, ob alle dieser drei Bedingungen erfüllt sind:

- die *Datenquelle Schueler* muss für den Report ausgewählt sein
- es muss eine *Gruppierung* bezüglich eines Datenfeldes der Datenquelle im Report vorhanden sein, z.B. nach Schueler_Id
- Auswahl *Drucker mit Archivierung* oder *nur Archivierung (in Dokumentenverwaltung)* im Druckmenü

## 6. Datenquelle und Schülergruppe konfigurieren

[![Datenquellen und Gruppen einstellen.](/bilder/zeugnisformulare/reports-dokumentenverwaltung-4-dq-und-gruppen.png)](/bilder/zeugnisformulare/reports-dokumentenverwaltung-4-dq-und-gruppen.png)

*Datenquellen und Gruppen einstellen.*

Gehen Sie über *Bericht*, um über *Datenquellen* die Datenquelle *Schueler* einzustellen.

Über dieses Dropdown-Menü können auch *Gruppen...* konfiguriert werden.  

[![Setzen der Gruppe Schueler.ID.](/bilder/zeugnisformulare/reports-dokumentenverwaltung-5-gruppe.png)](/bilder/zeugnisformulare/reports-dokumentenverwaltung-5-gruppe.png)

*Setzen der Gruppe Schueler.ID.*

Die Gruppe *Schueler.ID* erzeugt einen Gruppenwechsel bei Wechsel des Schülers, so dass der Dokumentenverwaltung signalisiert wird, den Ordner zu wechseln.

Die Gruppe kann auch ansonsten im Report "unsichtbar" sein, das heißt, dass sie im eigentlichen Report nicht weiter verwendet wird.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Dokumentenverwaltung_und_Zeugnisarchivierung) · Quellrevision 7124.
