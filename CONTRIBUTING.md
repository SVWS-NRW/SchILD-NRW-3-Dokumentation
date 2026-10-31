# An der Dokumentation mitarbeiten

Sie können Fehler berichtigen und Anleitungen ergänzen, ohne etwas auf Ihrem Computer zu installieren. Öffnen Sie den gewünschten Artikel und wählen Sie neben dem Drucksymbol den **Stift** für den GitHub-Dateieditor oder **VS** für VS Code im Browser. Beide öffnen die Quelldatei auf `dev`. Melden Sie sich mit Ihrem GitHub-Konto an.

## Den passenden Bearbeitungsweg wählen

- [Mit dem GitHub-Editor bearbeiten](/hilfe/github-editor): für eine einzelne Datei und kleine Textkorrekturen.
- [Mit VS Code im Browser bearbeiten](/hilfe/vscode-editor): für längere Änderungen und die Arbeit an mehreren Dateien.
- [Artikel schreiben](/hilfe/artikel-schreiben): verständliche Texte aufbauen und fachliche Inhalte erhalten.
- [Markdown und Gestaltung](/hilfe/markdown-und-gestaltung): Überschriften, Listen, Links und Bilder einfügen.

Ein **Branch** ist ein eigener Arbeitsstand. Speichern Sie Ihre Änderungen in einem neuen Branch mit Ihrem Autorennamen, etwa `musterfrau/filter-erklaeren`. Ein **Commit** hält die Änderung mit einer kurzen Erläuterung fest; **Push** überträgt sie zu GitHub. Mit einem **Pull Request** reichen Sie diesen Arbeitsstand zur Prüfung gegen `dev` ein. Eine Administratorin oder ein Administrator prüft den Vorschlag und übernimmt ihn nach Freigabe. Schreiben Sie deshalb nicht direkt in `dev` oder `master`.

Unter [Alle Artikel A–Z](/hilfe/alle-artikel) finden Sie auch Seiten, deren genaue Menüposition Sie nicht kennen. Öffnen Sie zuerst den Artikel und verwenden Sie dann dessen Stift- oder VS-Schaltfläche. Die alphabetische Liste wird automatisch aus den Artikeln erstellt.

Die folgenden Abschnitte richten sich an Personen, die lokal an Texten, Menüführung oder Gestaltung arbeiten. Bearbeitet werden Markdown-Dateien direkt; ein Wiki-Konverter ist nicht erforderlich.

## Lokal beginnen

Benötigt werden Git und Node.js 22. Für einen neuen lokalen Klon:

```sh
git clone --branch dev https://github.com/SVWS-NRW/SchILD-NRW-3-Dokumentation.git
cd SchILD-NRW-3-Dokumentation
git switch -c redaktion/mein-thema
npm ci
npm run docs:dev
```

`redaktion/mein-thema` ist ein Beispiel; wählen Sie einen eigenen passenden Branchnamen. Beginnen Sie auch in einem vorhandenen Klon mit einem aktuellen Stand von `dev` und arbeiten Sie auf einem eigenen Branch. Vorhandene lokale Änderungen vorher sichern.

Öffnen Sie die im Terminal angezeigte Adresse. Die Vorschau bleibt verfügbar, solange der Prozess läuft; mit Strg+C beenden Sie ihn. In Windows PowerShell kann statt `npm` auch `npm.cmd` verwendet werden.

## Dateien und Zuordnungen bearbeiten

- Artikel direkt in den Markdown-Dateien der Themenordner bearbeiten. Wiki-Quellenlinks, bestehende Artikeladressen und verwendete Überschrift-Sprungmarken erhalten. Alte Wiki-Kennungen, Revisionsnummern oder zusätzliche leere Sprungmarken werden nicht neu angelegt.
- Bilder unter `public/bilder/`, andere Downloads unter `public/dateien/` ablegen. In Artikellinks das Präfix `public` weglassen.
- Verwendete Bilder im Katalog `.vitepress/image-catalog.json` nachführen: Dateipfad, Beschreibung, Bildunterschriften und verlinkte Artikel berücksichtigen. Auch bei der Wiederverwendung eines Bildes den zusätzlichen Artikel eintragen.
- Hauptmenü und normale Seitenmenüs in `.vitepress/navigation.json` pflegen. Bei Themenübersichten können Untermenüs zusätzlich aus den dortigen Artikellisten entstehen; dies übernimmt `.vitepress/sidebar.mjs`.
- Die Hierarchie der Programmreferenz steht in `.vitepress/program-reference.json`. Bestehende Referenz-IDs und Linkziele erhalten.
- Die manuelle [Vergleichstabelle zwischen Dokumentation und Wiki](/hilfe/artikel-wiki-zuordnung) bei neuen, entfernten oder umbenannten Artikeln nachführen und ihren Aktualitätsstand anpassen.
- Der Artikelindex und die lokale Suche erfassen veröffentlichte Markdown-Seiten automatisch. Eine neue Seite muss zusätzlich im passenden Themenmenü oder in einer Übersicht erreichbar sein.

## Änderung prüfen

```sh
npm test
npm run docs:build
npm run docs:check
```

Den Artikel außerdem in der lokalen Vorschau gegenlesen und Bilder, Verweise und Darstellung ansehen. Bei Änderungen an Menü, Suche oder Gestaltung zusätzlich `npm run docs:check-browser` ausführen. Die benötigte Playwright-Installation ist in der [README](https://github.com/SVWS-NRW/SchILD-NRW-3-Dokumentation/blob/dev/README.md) beschrieben. Alle Prüfdateien liegen unter `scripts/`; auf GitHub laufen die Dokumentations- und Browserprüfungen bei jedem PR gegen `dev` und `master`.

## Änderung einreichen

1. Die geänderten und neu hinzugefügten Dateien auf dem eigenen Branch committen.
2. Den Branch nach GitHub pushen und einen Pull Request gegen `dev` öffnen.
3. Im Pull Request kurz erklären, was geändert wurde, worauf fachliche Änderungen beruhen und was geprüft wurde.
4. Die automatischen Prüfungen abwarten und gegebenenfalls Fehler beheben.
5. Die [Freigabe- und Merge-Regeln](https://github.com/SVWS-NRW/SchILD-NRW-3-Dokumentation/blob/dev/WORKFLOW.md#freigabe-und-merge-nach-dev) einhalten. Nur veröffentlichungsfähige Änderungen nach `dev` übernehmen.

`dev` und `master` werden nicht direkt beschrieben. Den Merge übernimmt der Verantwortliche. Fehler oder fachliche Ergänzungsvorschläge können auch über die [Issues des Repositorys](https://github.com/SVWS-NRW/SchILD-NRW-3-Dokumentation/issues) gemeldet werden.
