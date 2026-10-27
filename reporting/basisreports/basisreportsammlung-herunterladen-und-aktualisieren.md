---
title: "Die Basisreportsammlung herunterladen und aktualisieren"
---

# Die Basisreportsammlung herunterladen und aktualisieren

Aktualisieren Sie die Basisreportsammlung unabhängig vom Programmupdate. Bewahren Sie selbst angepasste Reports unter eigenen Dateinamen auf, bevor Sie neue Paketdateien entpacken.

Die Basisreportsammlung wird bei der Erstinstallation von SchILD-NRW 3 mitgeliefert. Standardmäßig liegt sie unter `\SVWS-Arbeitsverzeichnis\Schild-Reports\Schild-NRW-3-Reports`. Ein Programmupdate ersetzt diese Dateien nicht automatisch, damit eigene Anpassungen erhalten bleiben. Aktualisieren Sie die Sammlung bei Bedarf manuell nach den folgenden Schritten.

::: info Hinweis

Sollten Sie den Ordner `SVWS-Arbeitsverzeichnis\Schild-Reports\Schild-NRW-3-Reports` auf Ihrem System nicht finden, informieren Sie sich bei Ihrem IT-Dienstleister über den Speicherort oder über die Möglichkeit die Basisreportsammlung zu aktualisieren.

:::

## 1. Die Basisreportsammlung herunterladen

![Release-Bereich auf GitHub](/bilder/basisreports/release-basisreportsammlung-sch-id-nrw-3.png)

*Release-Bereich auf GitHub*

Die aktuelle Version der Basisreportsammlung für SchILD-NRW 3 finden Sie im Release-Bereich des offiziellen GitHub-Repositories. Dort ist zu jedem Update eine Versionsgeschichte mit den Änderungen innerhalb der Sammlung hinterlegt. Um die neueste Sammlung herunterzuladen, klicken Sie auf den folgenden Link:

::: info Hinweis – Link

[zum Release-Bereich der Basisreportsammlung](https://github.com/SVWS-NRW/Schild-NRW-3-Reports/releases)

:::

Es öffnet sich Ihr Standardbrowser (Edge, Chrome, Firefox etc.) und zeigt Ihnen den Release-Bereich der Basisreportsammlung. Die neuste Sammlung finden Sie zuoberst mit Informationen zu den Änderungen seit der letzten Veröffentlichung. Weiter unten finden Sie ältere Versionen mit den zugehörigen Änderungsbeschreibungen.

![Basisreportsammlung als ZIP-Datei herunterladen](/bilder/basisreports/basisreportsammlung-herunterladen.png)

*Basisreportsammlung als ZIP-Datei herunterladen*

Klicken Sie auf den Link zur ZIP-Datei im Bereich *Assets*. Alternativ können Sie einen Klick mit der rechten Maustaste auf die ZIP-Datei machen und im Kontextmenü *Link speichern unter* auswählen.

Die ZIP-Datei wird entweder automatisch in den Ordner „Downloads“ gespeichert oder in einen Ordner Ihrer Wahl. Die ZIP-Datei sollte in den Ordner `\\SVWS-Arbeitsverzeichnis\\Schild-Reports\\Schild-NRW-3-Reports` gespeichert bzw. im Anschluss dorthin verschoben werden.

::: warning Wichtig – Eigene Anpassungen vor dem Aktualisieren sichern

Eine Aktualisierung der Basisreportsammlung kann bereits vorhandene Dateien überschreiben. Sollten Sie einen Report der Basisreportsammlung für eigene Zwecke angepasst haben, speichern Sie diesen unbedingt unter einem neuen Dateinamen ab. Nur so ist Ihre Version geschützt und wird bei einer Aktualisierung nicht überschrieben.

:::

## 2. Das ZIP-Archiv entpacken und die Ansicht aktualisieren

![ZIP-Datei entpacken](/bilder/basisreports/basisreportsammlung-entpacken.png)

*ZIP-Datei entpacken*

Entpacken Sie die ZIP-Datei, indem Sie im Kontextmenü des Archivs den Punkt „Alle extrahieren...“ auswählen. Geben Sie als Zielpfad `\SVWS-Arbeitsverzeichnis\Schild-Reports\Schild-NRW-3-Reports` ein und klicken Sie auf „Extrahieren“. Die Reportdateien der Basisreportsammlung werden nun aus der ZIP-Datei entpackt. Bereits vorhandene Dateien werden dabei überschrieben.

::: info Hinweis

Auf manchen Windows-Betriebssystemen sind zusätzliche Programme zum Entpacken installiert. Neben den Windows-Bordmitteln können Sie auch diese verwenden.

:::

Wenn Sie nun SchILD-NRW 3 neu starten, finden Sie die aktuellen Reports aus der Basisreportsammlung in der Reportverwaltung. Wenn SchILD-NRW 3 bereits geöffnet war, erscheinen die neuen Dateien im Reportdesigner erst, nachdem Sie die Ansicht in der Reportverwaltung über **„Verzeichnisbaum aktualisieren“** aktualisiert haben.

Sie können die Reports aus der Basisreportsammlung nun in SchILD-NRW 3 nutzen.

::: tip Tipp

Legen Sie sich im Reportverzeichnis einen Ordner wie „Standard“ an und kopieren Sie häufig verwendete Reports dorthin, um sie schneller wiederzufinden.

:::

::: info Hinweis – Siehe auch

- [Basisreports auswählen und verwenden](/reporting/basisreports/basisreports-downloads-themenuebersicht)
- [Stammblatt und Schulbescheinigung direkt aufrufen](/reporting/serienbriefe/direkter-zugriff-auf-das-schuelerstammblatt-und-die-schulbescheinigung)
- [Reports über den Schnellzugriff aufrufen](/reporting/reportverwaltung/reports-ueber-den-schnellzugriff-aufrufen)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Herunterladen_und_aktualisieren)
