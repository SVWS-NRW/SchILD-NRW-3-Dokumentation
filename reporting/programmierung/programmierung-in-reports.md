---
title: "Reports mit Object Pascal erweitern"
---

# Reports mit Object Pascal erweitern

Erweitern Sie einen Report um ereignisgesteuerten Code. Das Beispiel unterdrückt ein Geburtsdatum, wenn die Datenweitergabe gesperrt ist; es setzt Programmierkenntnisse voraus.

## Programmierumgebung und Voraussetzungen

::: danger Achtung

Der folgende Abschnitt richtet sich an Personen mit Informatik- oder Programmierhintergrund.

Die folgenden Schritte setzen einen Informatik- oder Programmierhintergrund voraus.

:::

Der Reporteditor in **SchILD-NRW 3** unterstützt die Programmiersprache **Object Pascal**. Dadurch können Reports um dynamisches Verhalten erweitert werden – von einfachen Sichtbarkeitsabfragen bis hin zu komplexen Berechnungen, Datenmanipulationen oder Benutzerinteraktionen.

::: info Hinweis

Prüfen Sie stets, ob eine gewünschte Funktion programmiertechnisch notwendig ist oder ob sie bereits über Datenfelder, Systemvariablen oder Gruppierungsfunktionen ohne Code umgesetzt werden kann.

So bleiben Reports wartbar und verständlich.

:::

[![Identifikation der relevanten Felder im Editor.](/bilder/programmierung/reports-programmieren-1.png)](/bilder/programmierung/reports-programmieren-1.png)

*Identifikation der relevanten Felder im Editor.*

Im Beispiel soll eine Klassenliste erweitert werden: Ist bei einem Schüler die Datenweitergabe gesperrt (in SchILD markiert als **Keine Auskunft an Dritte**), soll das **Geburtsdatum** im Report nicht ausgegeben werden. Ein ähnliches Vorgehen wäre für Telefon- oder Adresslisten denkbar.

## Das betroffene Datenfeld bestimmen

Zunächst werden im Reporteditor die relevanten Felder identifiziert. Über den **Berichtsbaum** lassen sich vorhandene Elemente schnell durchklicken. Unten links zeigt der Bereich **Eigenschaften von X** die Attribute eines Feldes, u. a. Name, Typ, Formatierungen oder Sichtbarkeitsstatus.

Hier wird sichtbar, dass das Feld mit dem Geburtsdatum **DBText2** ist.

::: tip Tipp

Attribute lassen sich direkt in den Eigenschaften anpassen, z. B. Größen von Grafikobjekten oder Sichtbarkeit der Elemente.

:::

------------------------------------------------------------------------

### Die Ansicht Berechnungen öffnen

[![Die Elemente der Programmierumgebung.](/bilder/programmierung/reports-programmieren-2.png)](/bilder/programmierung/reports-programmieren-2.png)

*Die Elemente der Programmierumgebung.*

Der Modus **Berechnungen** wird über die Moduszeile aktiviert (neben **Entwurf** und **Vorschau**).

Die Programmierumgebung gliedert sich in mehrere Bereiche:

- **Ereignisse** (Events)

```
 Ereignisse sind Funktionspunkte, an denen Code ausgeführt werden kann, z. B. OnGetText oder OnPrint.
```

- **Variablen**

```
 Anzeige der im Report verfügbaren Variablen und Konstanten.
```

- **Subreports**

```
 Bei komplexen Reports kann unten durch Subreports navigiert werden.
```

- **Daten / Elemente / Sprache**

```
 Diese Ansicht steuert, welche Eigenschaften oder Funktionen angezeigt werden:
 * Daten – Variablen eines Elements, inkl. Typen
 * Elemente – Attribute des Felds (z. B. visible für Sichtbarkeit)
 * Sprache – Object-Pascal-Funktionen des Reporteditors inkl. Toolbox
```

Wird im Berichtsbaum ein Feld angeklickt, zeigt die Event-Liste, welche Ereignisse vom Feld verarbeitet werden können. Für **DBText2** wären hier besonders **OnGetText** und **OnPrint** relevant.

------------------------------------------------------------------------

### Die Sichtbarkeit im Ereignis OnPrint steuern

[![Bei »Keine Auskunft« unterdrücke »DBText2«.](/bilder/programmierung/reports-programmieren-3.png)](/bilder/programmierung/reports-programmieren-3.png)

*Bei »Keine Auskunft« unterdrücke »DBText2«.*

Damit **DBText2** unterdrückt wird, muss geprüft werden, ob der Schüler als **Keine Auskunft an Dritte** markiert ist.

Im Modus **Entwurf** werden zunächst testweise die Felder **Gesperrt** und **Keine Auskunft** ausgegeben, um das richtige Datenfeld zu finden. Hierbei zeigt sich, dass das relevante Merkmal im Feld **KeineAuskunft** gespeichert ist, kodiert als:

- **+** = gesetzt
- **-** = nicht gesetzt

Diese temporären Felder werden anschließend wieder entfernt.

Das Feld soll **beim Druck** unterdrückt werden – daher wird das Event **OnPrint** verwendet.

::: tip Tipp

Über den Bereich **Daten** kann das Feld **KeineAuskunft** per Drag &amp; Drop in das Codefenster gezogen werden.

:::

Der Code wird in Object Pascal formuliert. Um das Verhalten sichtbar zu machen, wird zusätzlich ein Feld **Label1** verwendet, das »---« zeigt, wenn das Geburtsdatum unterdrückt wird.

Unter dem Codefenster wird eine Zeile angezeigt, die Syntaxfehler berichtet. Ereignisse mit Code sind durch Symbole markiert:

- **grün** → kein Fehler
- **rot** → Syntaxfehler

Beim Durchklicken der Felder lässt sich damit schnell erkennen, wo Code hinterlegt ist.

[![Das (soweit) fertige Ergebnis.](/bilder/programmierung/reports-programmieren-4.png)](/bilder/programmierung/reports-programmieren-4.png)

*Das (soweit) fertige Ergebnis.*

::: info Hinweis

In Reports können Variablen, Konstanten und Datenstrukturen verwendet werden. Der Editor stellt darüber hinaus Funktionen bereit, um beim Start eines Reports Eingaben über Checkboxen, Listen, Dropdowns, freie Zeichenketten oder Daten abzufragen. Eine häufige Anwendung ist das Ersetzen von Platzhaltern wie **$JAHRGANG$** in **RichText**-Feldern zur Laufzeit.

:::

::: tip Tipp

Zur Orientierung empfiehlt es sich, programmierte Teile von Zeugnisreports anzusehen.

:::

::: info Hinweis – Link

Siehe auch: [Auflistung aller unterstützten RAP-Funktionen](</reporting/> "Kategorie:RAP-Funktionen").

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Programmierung_in_Reports)
