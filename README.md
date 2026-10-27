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

Sie prüft Themenmenü, Programmreferenz, Weiterblättern und breite Tabellen auf Desktop und Smartphone sowie Suche und Artikelindex. Es gibt keinen vollständigen Artikelscan und keinen dauernden Vergleich mit alten Wiki-Fassungen.

Auf GitHub läuft **Dokumentation prüfen** bei jedem Pull Request nach `dev`. **Bedienung prüfen** läuft bei Änderungen an Theme, Werkzeugen, Tests, Abhängigkeiten und den ausgewählten Darstellungsseiten. Bei Bedarf kann der Browserlauf auch manuell gestartet werden. Fehleraufnahmen liegen als GitHub-Artefakt vor; lokale Ausgaben unter `test-results/` gehören nicht in Git.

## Technischer Paketstand

VitePress 1.6.4 und `markdown-it-container` 4.0.0 bleiben die stabilen Grundlagen. Die Vite-Abhängigkeit von VitePress ist über `overrides` in `package.json` auf **Vite 6.4.5** festgelegt. Diese gezielte Abweichung von der VitePress-Standardabhängigkeit behebt die gemeldeten Vite-/esbuild-Lücken und verwendet den vom vorhandenen Vue-Plugin unterstützten Vite-6-Zweig. Die mitgelieferten Build- und Browserprüfungen decken die verwendeten Funktionen ab.

Bei einem späteren stabilen VitePress-Update prüfen, ob die Festlegung entfallen kann. Nach Paketänderungen `npm ci` ausführen. Entwicklungs- und Vorschau-Server bleiben lokal.

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
- Paketupdates mit `npm audit`, Build, Linkprüfung und bei Änderungen an der Werkzeugkette zusätzlich mit der Browserprüfung kontrollieren.

Die einmaligen Migrationswerkzeuge, historischen Vergleichsberichte, alten Wiki-Sprungmarken und die frühere Gesamtübersicht mit ihrer Weiterleitung sind entfernt. Wiki-Quellenlinks bleiben erhalten. Veröffentlichte Artikelbilder liegen unter `public/bilder/`.

Lokale Zwischenergebnisse unter `tmp/`, `test-results/` und `.vitepress/cache/` können bei Bedarf entfernt werden. `node_modules/` ist die lokale Installation; `.vitepress/dist/` enthält das benötigte Veröffentlichungsergebnis.

## Writing Guide für die Hilfeseiten

Diese Seite ist nur temporär für die Erstellung dieser Dokumentation. Auf ihr werden Absprachen gesammelt, wie Objekte/Bereiche hier in der Dokumentation und im SVWS-Client heißen.

### Alles

* Der Plural von "Schema" ist "Schemata".
* Neutrale Bezeichnungen, wo es möglich ist. "Schüler" bleiben so, wie sie sind; gegebenenfalls "Schülerinnen" ebenfalls nutzen; im stringenten Wechsel sieht auch doof aus.
* Sollen Pfeile verwendet werden, sollte ein echter Pfeil ➜ genutzt werden, keine Bastelllösungen wie > oder ->.
* Die Laufbahnplanung in der Oberstufe heißt "Laufbahnplanung Oberstufe".
* Bei Screenshots ist STRENG darauf zu achten, dass nur anoymisierte Daten verwendet werden.

### SVWS-Client

* Links im vertikalen Menü sind die **Apps**.
* Das DataTable mit den eigentlichen Menüpunkten heißt **Auswahlliste**
* Im rechten Datenbereich heißen die "Reiter" **Tabs**.
* Unter den Tabs sind die **Untertabs**.
* In manchen Bereichen steht noch eine **graue Schaltflächenleiste** (Bezeichnung Todo) zur Verfügung.

### Schreibweisen und Groß- und Kleinschreibung

SVWS-Client, SVWS-AdminClient, SchILD-NRW, SVWS-WeNoM, GOSt, SVWS-WebLuPO, ...

### Web-Dokumentationen

Die Beschreibung der einzelnen Funktionen selbst sollte ohne lange Prozessbeschreibungen nur darlegen, was da ist und wie man es benutzt.

Tatsächliche Anleitungen, Tutorials und Prozessbeschreibungen (ZP10) und vor allem auch Dinge, die mit aktuellen Vorgaben (Prüfungsordnungen usw.) zu tun haben, sollen soweit wie möglich in sinnvoll gegliederte  **Anleitungen** (usw.?) ausgelagert werden.

#### Grafiken, Schaubilder und Links

* Grafiken werden als .png (Logos, einheitliche Farbflächen, Schaubilder, UI usw.) gespeichert.
* Schaubilder/Schemas sind GraphML-Dateien und werden mit *yEd* erstellt. Die GraphML-Dateien werden ebenfalls in /graphics/ abgelegt.
* Ältere Versionen von Grafiken und Schaubildern bleiben in der Regel in /graphics/ erhalten.
* Alle Grafiken sollten direkt mit sinnvollen "Alternativtexten" und Mausover-Texten versehen werden.
* In **Anleitungen** sollte wirklich *jeder* Schritt erwähnt und mit einem Screenshot versehen werden. Wir schreiben für nicht-technisch versierte Nutzer.
* Bei Grafiken und Links sind wenn möglich *relative* Links und keine absoluten Pfade zu verwenden!
* Grafiken werden im normalen Light-Mode (weißer Hintergrund) aufgenommen.

Diagramme können (bald) mit Mermaid erstellt werden: Hier Beispiele:

https://github.com/sametcn99/vitepress-mermaid-renderer/blob/main/docs/content/en/examples/basic.md?plain=1

### Technische Umsetzung

Die Dokumentation wird aus vielen [Markdown](https://de.wikipedia.org/wiki/Markdown)-Dokumenten erzeugt, die ähnlich wie Wikipedia ein spezielles Formatierungsformat verwendet. Diese Dateien werden mit Hilfe von [vitepress](https://vitepress.dev/) und der Konfigurationsdatei zu einer HTML-Seite gebaut, die dann mit dem Browser angezeigt werden kann.

Die Sammlung dieser Markdown-Dokumente werden in einem [Git](https://git-scm.com/)-Repository auf [GitHub](https://github.com) vorgehalten und können beliebig eingesehen, bearbeitet und verändert werden. Eine ausführliche Anleitung zu Git findet sich [hier](https://docs.github.com/de/get-started/using-git/about-git).

### Hervorherhebungen

Hervorhebungen in **fett** und *kursiv* sollten spärlich eingesetzt werden.

Bislang werden *real vorhandende Funktionen* in **fett** markiert. Ebenso der Hauptgegenstand des Artikels (einmalig). Also etwa **Stunde löschen** oder **Nutzer hinzufügen**. Es sollten nur diese nutzbaren Funktionen hervorgehoben werden.

Andere Hervorhebungen können in *kursiv* gesetzt werden (siehe oben). Ebenso werden Feldinhalte in kursiv gesetzt. Also würde man etwa schreiben: "Tragen Sie in die **Kursart** den Wert *PUK* für *Pflichtunterricht im Klassenverband* ein.

Bei **Anleitungen** empfhielt es sich, die Funktionen, die im Zuge der Anleitung tatsächlich bedient zu werden, als `Code`zu markieren. Also wäre alles, was tatsächlich anzuklicken ist, als Code hervorgehoben. Alternativen wären dann fett. Hier würde man schreiben: "Klicken Sie nun auf `Weiter`, mit **Abbrechen** kehren Sie ohne Änderungen vorzunehmen zum vorherigen Fenster zurück."

Wichtiger als das Einhalten eines globalen Schemas ist aber eher der spärliche Einsatz von Hervorhebungen und Konsistenz innerhalb des Artikels oder der thematischen Artikelreihe.

#### Farbboxen

```md
::: info
This is an info box. Ich bin grau.
:::

::: tip
This is a tip. Ich bin etwas lila (eher blau).
:::

::: warning ACHTUNG
This is a warning. Ich bin gelb.
:::

::: danger SUPER ACHTUNG
This is a dangerous warning. Ich bin rot.
:::

::: details
This is a details block. Ich bin grau, so wie Info.
Der Unterschied ist, dass ich zum AUSKLAPPEN bin.
:::
```


::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning ACHTUNG
This is a warning.
:::

::: danger SUPER ACHTUNG
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Offizielles Repository und Veröffentlichung

Die Entwicklung erfolgt in `SVWS-NRW/SchILD-NRW-3-Dokumentation`, mit Arbeitsbranches und Pull Requests nach `dev`. Die Veröffentlichung bleibt an `main` gebunden.

Der Standardpfad ist `/SchILD-NRW-3-Dokumentation/`, entsprechend der bestehenden GitHub-Pages-Konfiguration. Lokal ist die Website daher unter diesem Unterpfad erreichbar. Mit `DOCS_BASE=/` kann für eine spätere Domain-Veröffentlichung am Website-Stamm gebaut werden.
