# SchILD-NRW 3 – Dokumentation

Praxisanleitungen und Nachschlagewerk für die tägliche Arbeit mit SchILD-NRW 3: Schülerdaten, Unterricht, Zeugnisse, Abschlüsse, Reporting und Administration.

Die Dokumentation beschreibt den Zielstand **SchILD-NRW 3.6.0**. Die jeweils verfügbaren Installationspakete und passenden Serverversionen stehen in den [offiziellen Releasehinweisen](https://github.com/SVWS-NRW/Schild-NRW-3/releases).

## Lokal ansehen

Benötigt wird Node.js 22. Im Repository:

```sh
npm ci
npm run docs:dev
```

Die im Terminal angezeigte lokale Adresse im Browser öffnen. Bilder und Downloads sind im Repository enthalten; sie werden nicht beim Start nachgeladen.

## Artikel bearbeiten

Die Artikel direkt in den Markdown-Dateien bearbeiten. Änderungen erfolgen auf einem eigenen Branch mit Pull Request gegen `dev`. Den Merge übernimmt der Verantwortliche.

Unter **Hilfe** stehen [Artikel schreiben und bearbeiten](hilfe/artikel-schreiben.md) mit den gemeinsamen Schreibregeln und [Markdown und Gestaltung](hilfe/markdown-und-gestaltung.md) mit kopierbaren Beispielen. Die [Anleitung zur technischen Mitarbeit](CONTRIBUTING.md) erklärt Branches, lokale Vorschau, Menüzuordnung und Einreichen einer Änderung.

## Prüfen

Vor einem Pull Request:

```sh
npm test
npm run docs:build
npm run docs:check
```

Der Build erstellt die Website und prüft Seitenverweise. `docs:check` kontrolliert anschließend interne Links einschließlich Sprungmarken sowie die referenzierten Bilder im fertigen Ergebnis. Externe Websites werden dabei nicht abgefragt. Die kleinen Tests prüfen zentrale Darstellungsfunktionen und die Linkprüfung.

Bei Änderungen an Menü, Suche oder Darstellung zusätzlich die gezielte Browserprüfung ausführen:

```sh
npm install --no-save --package-lock=false playwright@1.56.1
npx playwright install chromium
npm run docs:check-browser
```

Sie prüft Themenmenü, Programmreferenz, Weiterblättern und breite Tabellen auf Desktop und Smartphone sowie Suche, Artikelindex und einen bestehenden Weiterleitungslink. Es gibt keinen vollständigen Artikelscan und keinen dauernden Vergleich mit alten Wiki-Fassungen.

Auf GitHub läuft **Dokumentation prüfen** bei jedem Pull Request nach `dev`. **Bedienung prüfen** läuft bei Änderungen an Theme, Werkzeugen, Tests, Abhängigkeiten und den ausgewählten Darstellungsseiten. Bei Bedarf kann der Browserlauf auch manuell gestartet werden. Fehleraufnahmen liegen als GitHub-Artefakt vor; lokale Ausgaben unter `test-results/` gehören nicht in Git.

## Veröffentlichen

```sh
npm run docs:build
npm run docs:preview
```

Veröffentlicht wird ausschließlich der Inhalt von `.vitepress/dist` über statisches HTTPS-Hosting. Entwicklungs- und Vorschau-Server werden nicht öffentlich betrieben. Der Build ist für die Domainwurzel konfiguriert; für einen Unterpfad muss die VitePress-Option `base` angepasst werden.

Die veröffentlichende Stelle legt Hosting und Zieladresse fest und ergänzt die benötigten Anbieter-/Datenschutzangaben und Nutzungsrechte. Externe Videoeinbettungen berücksichtigen. Eine eigene Inhaltslizenz ist noch nicht festgelegt; vorhandene Quellenverweise bleiben erhalten.

Nach dem Upload Startseite, tiefe Artikellinks, Suche, Bilder und Mobilmenü auf der tatsächlichen Zieladresse prüfen.

## Offene Fach- und Wartungsfragen

- Ankreuzkompetenzen nach Behebung des gemeldeten Bugs praktisch nachprüfen.
- Bildungsgangwechsel am Berufskolleg und Versetzung bei jahrgangsgemischten Klassen fachlich nachprüfen.
- Zielrelease 3.6.0 und passende Serverversion mit dem tatsächlich ausgelieferten Programm abgleichen.
- Schnittstellen-Sonderfälle und den offenen externen Broschürendruck-PDF-Verweis nachführen.
- Verbleibende Auditmeldungen der Werkzeugkette VitePress → Vite → esbuild separat prüfen und mit getesteten Updates beheben.

Die einmaligen Migrationswerkzeuge und historischen Vergleichsberichte sind nicht mehr Teil des aktiven Bestands. Frühere Fassungen bleiben in der Git-Historie nachvollziehbar. Veröffentlichte Artikelbilder liegen unter `public/bilder/`.


