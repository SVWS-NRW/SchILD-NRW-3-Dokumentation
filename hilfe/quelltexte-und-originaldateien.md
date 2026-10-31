# Quelltexte und Originaldateien

Hier finden Sie die bei der Migration gesicherten Wiki-Texte, Originaldateien und Offline-Inhaltskopien vom 18. Oktober 2026. Für einen reinen Textvergleich genügt das kleine [Wiki-Quelltextarchiv](/dateien/quellen/wiki-quelltexte.zip). Für Bilder, Anhänge und die Offline-Seiten laden Sie zusätzlich die vier Teile der erweiterten Quellsicherung herunter.

## Quellsicherung mit Originaldateien herunterladen

Die Quellsicherung ist wegen der Größenbegrenzung von GitHub in vier Dateien aufgeteilt. **Sie benötigen alle vier Teile.** Es handelt sich nicht um vier unabhängig entpackbare ZIP-Archive.

| Download | Größe |
| --- | --- |
| [Quellsicherung – Teil 1 von 4](/dateien/quellen/SchILD3-Quellsicherung-2026-10-18-001.zip){download} | 50 MiB |
| [Quellsicherung – Teil 2 von 4](/dateien/quellen/SchILD3-Quellsicherung-2026-10-18-002.zip){download} | 50 MiB |
| [Quellsicherung – Teil 3 von 4](/dateien/quellen/SchILD3-Quellsicherung-2026-10-18-003.zip){download} | 50 MiB |
| [Quellsicherung – Teil 4 von 4](/dateien/quellen/SchILD3-Quellsicherung-2026-10-18-004.zip){download} | 48,1 MiB |

### Die vier Teile unter Windows zusammensetzen

1. Speichern Sie alle vier Dateien im selben Ordner. Behalten Sie die Dateinamen bei; vermeiden Sie zusätzliche Zusätze wie `(1)` durch mehrfaches Herunterladen.
2. Öffnen Sie diesen Ordner im Windows-Explorer. Klicken Sie in die Adresszeile, geben Sie `cmd` ein und drücken Sie die Eingabetaste. Die Eingabeaufforderung öffnet sich in diesem Ordner.
3. Kopieren Sie den folgenden Befehl vollständig in das Fenster und bestätigen Sie mit der Eingabetaste. Er verbindet die vier Teile in der richtigen Reihenfolge. Die heruntergeladenen Dateien bleiben erhalten.

```bat
copy /b SchILD3-Quellsicherung-2026-10-18-001.zip+SchILD3-Quellsicherung-2026-10-18-002.zip+SchILD3-Quellsicherung-2026-10-18-003.zip+SchILD3-Quellsicherung-2026-10-18-004.zip SchILD3-Quellsicherung-2026-10-18.zip
```

4. Im Ordner liegt nun zusätzlich `SchILD3-Quellsicherung-2026-10-18.zip`. Diese Datei muss **207.714.929 Bytes** groß sein. Entpacken Sie diese zusammengesetzte Datei über **Alle extrahieren** in einen eigenen Ordner.
5. Öffnen Sie dort `index.html` für die Offline-Inhaltsseiten. Einzelheiten zur Sicherung stehen in `Sicherungsbericht.md` und `backup-summary.json`.

### Inhalt der erweiterten Quellsicherung

| Bestandteil | Inhalt |
| --- | --- |
| `wiki-files` | Gesicherte Originaldateien des Wikis; laut Sicherungsprotokoll wurden 1.033 Dateien überprüft. |
| `offline-html` und `index.html` | 469 Inhaltskopien mit lokal zugeordneten Bildern und einer Einstiegsseite. Externe Links und Videos benötigen weiterhin eine Internetverbindung. |
| `rendered-html` und `rendered-api` | Gerenderte Fassungen der 469 Artikel sowie die zugehörigen API-Antworten. |
| `packages` und `unpacked` | Acht damals gesicherte Downloadpakete und deren entpackte Inhalte. |
| Berichte und Prüflisten | Bestandsangaben, Prüfsummen und Ergebnisse der Sicherung. |

Die Sicherung hält den damaligen Stand fest. Das Protokoll nennt einen fehlgeschlagenen externen Download von `broschuerendruck.pdf`; diese Datei ist nicht als erfolgreich gesichert ausgewiesen. Die Sicherung ist kein aktuelles Software- oder Reportpaket.

## Wiki-Quelltexte separat herunterladen

Das kleine [Wiki-Quelltextarchiv herunterladen](/dateien/quellen/wiki-quelltexte.zip){download} bewahrt die ursprünglichen MediaWiki-Texte und Bestandslisten. Es wird unverändert bereitgestellt; die ursprüngliche Datei heißt `Zielbestand-Punkt2.zip`.

## Inhalt des Quelltextarchivs

| Bestandteil | Inhalt |
| --- | --- |
| `pages.json` | Quelltexte aller 469 erfassten Artikelseiten sowie 31 Vorlagen, sieben MediaWiki-Seiten, sieben Kategorieseiten und zwei Projektseiten; zusammen 516 Seiten mit Revisionsangaben. |
| `files.json` und `file-descriptions.json` | Bestandsangaben und Beschreibungen zu 1.033 Wiki-Dateien. |
| Bestandslisten und Manifeste | Zuordnung der Artikel, Dateien, Vorlagen und externen Verweise sowie Angaben zu den damaligen Downloads. |
| Erhebungsbericht und Skripte | Beschreibung der Sicherung und die zugehörigen Erfassungs- und Auswertungsskripte. |

Das Archiv enthält die jeweils erfassten Revisionen, keine vollständige Versionsgeschichte. Bilder, PDF-Dateien und andere binäre Anhänge sind nicht Bestandteil dieses Quelltextarchivs. Die in dieser Dokumentation bereitgestellten Originaldateien sind bei den Fachartikeln verlinkt; Abbildungen finden Sie zusätzlich im [Bilderkatalog](/bilder/).

## Quelltexte verwenden

Entpacken Sie das ZIP, um die Bestandslisten und den Erhebungsbericht zu lesen. Die Wiki-Texte stehen in `pages.json` im ursprünglichen MediaWiki-Format. Sie dokumentieren den gesicherten Ausgangsbestand und können von den inzwischen überarbeiteten VitePress-Artikeln abweichen.

Für Änderungen an der heutigen Dokumentation verwenden Sie die Stift- oder VS-Schaltfläche des betreffenden Artikels. Den Ablauf erklärt [Mitarbeiten](/hilfe/mitarbeiten).
