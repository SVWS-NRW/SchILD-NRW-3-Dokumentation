---
title: "Reports in die Reportverwaltung einfügen"
source_pageid: 1572
source_revision: 6685
---

# Reports in die Reportverwaltung einfügen

Fügen Sie einen vorhandenen Report in die Reportverwaltung ein, um daraus eine Ausgabe mit den Daten Ihrer Schule zu erzeugen. Die Reportverwaltung bildet die Ordnerstruktur unter `Schild-Reports` im SchILD-Arbeitsverzeichnis ab.

## Voraussetzungen

Sie benötigen das Reportarchiv und den Pfad zum SchILD-Arbeitsverzeichnis. Der konkrete Pfad kann in Ihrer IT-Umgebung anders heißen als im Beispiel.

::: warning Wichtig – Arbeitsverzeichnis im Netzwerk verwenden
Bei einer Netzwerkinstallation verwenden Sie den Netzwerkpfad des SchILD-Arbeitsverzeichnisses.
:::

## 1. Den Report herunterladen

[![Download eines Einzelreports.](/bilder/reportverwaltung/reports-grundlagen-6.png)](/bilder/reportverwaltung/reports-grundlagen-6.png)

*Download eines Einzelreports.*

Im Beispiel wird ein Einzelreport für eine Zeugniskonferenz heruntergeladen. Er fasst wichtige Informationen zu einer ausgewählten Schülerin oder einem ausgewählten Schüler zusammen.

## 2. Einen Zielordner wählen und das Archiv entpacken

Wählen Sie einen passenden Unterordner in `Schild-Reports` oder legen Sie dort einen neuen an. Im Beispiel heißt er `Sek I`; hier werden Reports für die Verwaltung der Sekundarstufe I gesammelt.

[![Entpacken des Einzelreports.](/bilder/reportverwaltung/reports-grundlagen-8.png)](/bilder/reportverwaltung/reports-grundlagen-8.png)

*Entpacken des Einzelreports.*

::: tip Tipp – Die Ordnerstruktur an die Schule anpassen
Verwenden Sie eine Gliederung, die zu Ihren Arbeitsabläufen passt. Beachten Sie die [besonderen Ordner der Reportverwaltung](/reporting/reportverwaltung/die-ordnerstruktur-der-reportverwaltung#besondere-ordner).
:::

Klicken Sie mit der rechten Maustaste auf die `.zip`-Datei und wählen Sie **Hier entpacken**. Im Beispiel enthält das Archiv zwei Dateien:

[![Nun liegt der Report als .zip, als Vorschau-pdf und als der eigentliche Report als .rtm vor.](/bilder/reportverwaltung/reports-grundlagen-9.png)](/bilder/reportverwaltung/reports-grundlagen-9.png)

*Nun liegt der Report als .zip, als Vorschau-pdf und als der eigentliche Report als .rtm vor.*

| Datei | Bedeutung |
| --- | --- |
| `.pdf` | Eine bereits erzeugte Vorschau. Sie können das Beispielergebnis ansehen, ohne SchILD-NRW 3 zu starten. |
| `.rtm` | Die eigentliche Reportvorlage. Beim Aufruf in SchILD-NRW 3 erzeugt sie eine Ausgabe aus der verwendeten Datenbank. |

::: info Hinweis – Das ZIP-Archiv muss nicht im Reportordner bleiben
Nach dem Entpacken wird die `.zip`-Datei für den Aufruf des Reports nicht mehr benötigt und kann gelöscht werden. Sie können das Archiv auch in einem Downloadordner speichern und beim Entpacken den Zielordner unter `Schild-Reports` angeben.
:::

## 3. Den eingefügten Report aufrufen

[![SchILD bildet die Ordnerstruktur in "Schild-Reports" ab.](/bilder/reportverwaltung/reports-grundlagen-10.png)](/bilder/reportverwaltung/reports-grundlagen-10.png)

*SchILD bildet die Ordnerstruktur in "Schild-Reports" ab.*

Der Report erscheint als `.rtm`-Datei im gewählten Ordner der Reportverwaltung.

[![Ist die Reportverwaltung in SchILD schon geöffnet, kann ein verändertes Report-Verzeichnis aktualisiert werden.](/bilder/reportverwaltung/reports-grundlagen-13.png)](/bilder/reportverwaltung/reports-grundlagen-13.png)

*Ist die Reportverwaltung in SchILD schon geöffnet, kann ein verändertes Report-Verzeichnis aktualisiert werden.*

Falls die Reportverwaltung bereits geöffnet war, während Sie im Windows-Explorer Dateien geändert haben, klicken Sie im Menüband auf **Verzeichnisbaum**. Damit lesen Sie die Ordnerstruktur neu ein.

Öffnen Sie den Report mit einem Doppelklick. Beim Aufruf wählen Sie den Personenkreis aus dem Schülercontainer links: die ausgewählte Person, alle markierten Personen oder die ganze Gruppe.

[![Wahl der Ausgabe und ob die ganze Gruppe im Container verarbeitet werden soll.](/bilder/reportdesigner/grundlagen-3.png)](/bilder/reportdesigner/grundlagen-3.png)

*Wahl der Ausgabe und ob die ganze Gruppe im Container verarbeitet werden soll.*

## 4. Rückfragen beantworten und die Ausgabe prüfen

[![Eine unerwartete Nachfrage. Hier wird probiert, wie das Ergebnis aussieht, wenn einfach "Ja" gewählt wird.](/bilder/reportverwaltung/reports-grundlagen-11.png)](/bilder/reportverwaltung/reports-grundlagen-11.png)

*Eine unerwartete Nachfrage. Hier wird probiert, wie das Ergebnis aussieht, wenn einfach "Ja" gewählt wird.*

Je nach Report erscheinen zusätzliche Rückfragen. Im Beispiel wird gefragt, ob **Bemerkungen**, **Arbeits- und Sozialverhalten** und **Außerunterrichtliches Engagement** umformatiert werden sollen. Hier wird **Ja** gewählt.

Wenn Sie die Wirkung einer Option noch nicht kennen, können Sie sie anhand der Vorschau ausprobieren.

[![Das Ergebnis.](/bilder/reportverwaltung/reports-grundlagen-12.png)](/bilder/reportverwaltung/reports-grundlagen-12.png)

*Das Ergebnis.*

Kontrollieren Sie das Ergebnis. Entscheiden Sie, ob der Report für Ihre Schule verwendbar ist, ob Sie ihn [anpassen](/reporting/reportdesigner/einen-vorhandenen-report-anpassen) möchten oder ob Sie einen anderen Report benötigen.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Reports_in_die_Reportverwaltung_einf%C3%BCgen) · Quellrevision 6685.
