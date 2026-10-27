---
title: "Das Erscheinungsbild von Grundschulzeugnissen konfigurieren"
pageClass: zeugnisoptionen
---

# Das Erscheinungsbild von Grundschulzeugnissen konfigurieren

Passen Sie die mitgelieferte INI-Datei an den verwendeten Zeugnistyp an. Die Anleitung beschreibt Fächerfolge, Layout, Inhalte, Überschriften und Unterschriften.

Nehmen Sie bitte die [Themenseiten zu den Zeugnissen](/reporting/zeugnisformulare/zeugnisse-themenuebersicht) zur Kenntnis, wie Zeugnisse zu installieren und über die *Zeugniseinstellungen.ini* konfiguriert werden *könnten*.

Bezüglich für die Grundschulzeugnisse ist dieses Tutorial hier eine verkürzte, spezialisierte Übersicht.

## Der Speicherort der Dateien

[![Die Übersicht im Windows-Explorer. Hier ist relevant: Wir sind bei den SchILD-Reports im Verzeichnis, das für Zeugnisse angelegt wurde. Es ist die Konfigurationsdatei zu sehen, ebenfalls ein PDF, in dem die Einstellungen noch einmal erklärt werden. Weiterhin die RTM-Dateien, welche die eigentlichen Zeugnisreports darstellen.](/bilder/grundschule/tutorials-gs-zeugnistutorial-explorer.png)](/bilder/grundschule/tutorials-gs-zeugnistutorial-explorer.png)

*Die Übersicht im Windows-Explorer. Hier ist relevant: Wir sind bei den SchILD-Reports im Verzeichnis, das für Zeugnisse angelegt wurde. Es ist die Konfigurationsdatei zu sehen, ebenfalls ein PDF, in dem die Einstellungen noch einmal erklärt werden. Weiterhin die RTM-Dateien, welche die eigentlichen Zeugnisreports darstellen.*

Die installierten Zeugnisformulare lassen sich in ihrem Erscheinungsbild über eine Konfigurationsdatei einstellen. Diese Datei wird mit einem Zeugnispaket mit heruntergeladen und ist somit enthalten.

Bei den **Ankreuzzeugnissen** heißt die Datei *AnkreuzzeugnisEinstellungen.ini*. Hierbei kann es sein, dass die Dateiendung *".ini"* von Windows ausgeblendet wird und die Datei somit lediglich als *AnkreuzzeugnisEinstellungen* angezeigt wird.

Für die **normalen Zeugnisse** nutzen Sie die *Zeugniseinstellungen.ini*, die bei den jeweiligen Zeugnissen mitgeliefert wird. Für die **Hybridzeugnisse** heißt die Datei entsprechend *HybridzeugnisEinstellungen.ini*.

Die Datei lässt sich **Bearbeiten**, indem Sie im Windows-Explorer oder direkt aus dem Report-Explorer in ScHILD-NRW `doppelt angeklickt` wird.

Bearbeiten Sie die Datei gewünscht und `speichern` Sie die gemachten Einstellungen.

Generieren Sie anschließend einen Zeugnis-Report, holt sich der Report die Einstellungen automatisch aus der zugehörigen Konfigurationsdatei.

## Aufbau der Konfigurationsdatei

Die Zeugnisdatei ist wie folgt aufgebaut:

- Zeilen, die mit einem *Semikolon (;)* beginnen sind für Menschen zu lesende Kommentare und werden vom Zeugnisformular

bei der Verarbeitung ignoriert.

- Zusammengehörige Konfigurationen werden in Blöcken zusammengefasst, die mit eckigen Klammern umgeben sind.

[![Die Eintragungen, wie sie in der Konfigurationsdatei erscheinen. Die Zeilen mit Semikolon sind Kommentare für den Menschen und werden beim Zeugnisdruck nicht durch den Computer verarbeitet.](/bilder/grundschule/tutorials-gs-zeugnistutorial-konfigurationsdatei-beispiel.png)](/bilder/grundschule/tutorials-gs-zeugnistutorial-konfigurationsdatei-beispiel.png)

*Die Eintragungen, wie sie in der Konfigurationsdatei erscheinen. Die Zeilen mit Semikolon sind Kommentare für den Menschen und werden beim Zeugnisdruck nicht durch den Computer verarbeitet.*

Für eine andere Reihenfolge der Fächer im linken Notenblock ändern Sie zum Beispiel

> [Notenzeugnisreihenfolge_Links]
>
> Deutsch
>
> Sprache
>
> Sachunterricht
>
> Mathematik

zu der gewünschten Reihenfolge verändern

> [Notenzeugnisreihenfolge_Links]
>
> Deutsch
>
> Mathematik
>
> Sprache
>
> Sachunterricht



[![Das Semikolon (blau) zeigt an, dass es sich um einen Kommentar handelt, der vom Computer ignoriert wird. Der grüne Bereich im Kommentar teilt uns mit, welche Werte zulässig als Jahrgänge eingetragen werden können. Weiterhin ist zum Beispiel zu sehen, dass manche Felder gesteuert werden, indem etwa ein Semikolon entfernt wird: zum Beispiel wird ASVAusblenden angewendet, wenn das Semikolon entfernt wurde.](/bilder/grundschule/tutorials-gs-zeugnistutorial-konfigurationsdatei-beispiel2.png)](/bilder/grundschule/tutorials-gs-zeugnistutorial-konfigurationsdatei-beispiel2.png)

*Das Semikolon (blau) zeigt an, dass es sich um einen Kommentar handelt, der vom Computer ignoriert wird. Der grüne Bereich im Kommentar teilt uns mit, welche Werte zulässig als Jahrgänge eingetragen werden können. Weiterhin ist zum Beispiel zu sehen, dass manche Felder gesteuert werden, indem etwa ein Semikolon entfernt wird: zum Beispiel wird ASVAusblenden angewendet, wenn das Semikolon entfernt wurde.*

Soll verändert werden, ab welchem Jahrgang *Noten* gegeben werden, wäre die Zeile

> NotenAbJahrgang=03

so zu verändern, dass statt *03* eben *E1*, *E2* oder *04* steht.

Hier ist zu sehen, dass die zur Eintragung zulässigen Werte immer in den Kommentaren direkt bei der Zeile stehen.

::: info Hinweis

Beachten Sie, dass Änderungen, die in einem Jahr vorgenommen werden, auch in allen Folgejahren in der dann neuen mit den Zeugnissen ausgelieferten Konfigurationsdatei erneut einzutragen sind.

Die meisten Optionen können Sie auf ihren Standardwerten belassen. Passen Sie gezielt die Angaben Ihrer Schule an, etwa die Namen der unterzeichnenden Personen in Abschnitt 5. Ändern Sie weitere Optionen nur, wenn das gewünschte Zeugnislayout dies erfordert.

:::

## Inhalte der Datei und Felder zur Konfiguration

In der Datei werden folgende Aspekte konfiguriert. Wird ein Feld über ein Semikolon ein- oder ausgeschaltet, ist das Semikolon hier in diesem Artikel wie in der Datei als Standard entweder *gesetzt* oder *entfernt*.

### 1. Fächerreihenfolge festlegen

Wie im Beispiel oben gezeigt werden die Bezeichnungen der Fächer *exakt so geschrieben wie in der Datei vorgefunden* in die gewünschte Reihenfolge gebracht.

### 2. Das allgemeine Layout festlegen

Über die hier aufgeführten Schalter wird das allgemeine Layout mit Schrift, Druck und Seitenumbrüchen gesteuert.

| Steuerbefehl | Erklärung |
| --- | --- |
| **;Duplex=Vertikal** | aktiviert automatisch den doppelseitigen Druck durch Entfernen des Semikolons (**;**) |
| **Blocksatz** | Blocksatzdruck wird deaktiviert, wenn ein Semikolon gesetzt wird. |
| **SchriftgroesseBemerkungen**=10 | steuert die Schriftgröße. Als Standard ist *10* gesetzt. Stellen Sie eine Schriftgröße "ähnlich groß wie 10" ein, um kleiner oder größer zu drucken. |
| **;ASVSeite2** | setzt das Arbeits- und Sozialverhalten erst auf die zweite Seite, wenn hier das Semikolon entfernt wird. |
| **;FächerAufNeuerSeite** | steuert, ob die Fächer auf einer neue Seite begonnen werden. Steht das Semikolon, ist dieses Verhalten deaktiviert und die Fächer werden direkt auf der ersten Seite gedruckt. |
| **BemerkungenAufNeuerSeite**=E1;E2;E3;03;04 | *BemerkungenAufNeuerSeite* steuert, vor welchen Jahrgängen ein Seitenumbruch für die Zeugnis- und Versetzungsbemerkungen erzeugt wird. Die Jahrgänge, *für die dies zutreffen soll*, folgen durch ein Semikolon aus Aufzählungszeichen getrennt. |

### 3. Allgemeine inhaltliche Einstellungen

Hier werden generelle Einstellungen zu Inhalten vorgenommen.

| Steuerbefehl | Erklärung |
| --- | --- |
| **NotenAbJahrgang**=03 | NotenAbJahrgang lässt den Jahrgang setzen, *ab* dem Noten auf Zeugnissen gedruckt werden. Zulässige Start-Jahrgänge sind *E1, E2, 03* und *04* |
| **;MitJahrgang** | wenn das Semikolon gesetzt ist, werden nur die Klassen im Zeugniskopf gedruckt. Wird das Semikolon entfernt, werden Klasse und Jahrgang ausgegeben. Diese Einstellung ist nur für die Jahrgänge *03* und *04* relevant. |
| **;DeutschNotenEinzeln** | Noten für Lesen, Rechtschreibung und Sprachgebrauch direkt unter entsprechenden Kompetenzbeschreibungen **oder** gebündelt nach den Kompetenzen ausgeben. Für den letzteren Fall ist das Semikolon zu setzen. |
| **;NachnameInVersetzungsvermerk** | Das Semikolon ist zu entfernen, um Nachnamen des Kindes im Versetzungstext auszugeben. |
| **NurRufname** | Falls in SchILD-NRW ein Eintrag unter "alle Namen" vorhanden ist, diese aber nicht auf das Zeugnis gedruckt sollen, ist kein Semikolon zu setzen. |
| **;ASVAusblenden** | Arbeits und Sozialverhalten nicht auf dem Zeugnis drucken: Entfernen Sie das Semikolon. |

### 4. Layout für Fächer und Kompetenzen festlegen

Über diese Schalter werden Layoutfunktionen wie Zeilenabstände, Fächerposition, Linien zwischen Kompetenzen oder das verwendete Ankreuzsymbol gesteuert.-

| Steuerbefehl | Erklärung |
| --- | --- |
| **;Linien** | Durch Weglassen des Semikolons werden Linien hinzugefügt |
| **Vorname** | Vorname des Kindes bei jedem Fach mit ausgeben, zum Deaktivieren der Linien ist das Semikolon setzen |
| **AbstandFaecher**=3 | Setzt den Abstand zwischen den Fächern |
| **;AbstandZuBemerkungen**=10 | Setzt den Abstand zu den Bemerkungen |
| **KopfHoehe**=28 | Dieses Feld setzt die Breite der Fachkopfes in mm. Diese hängt auch von der Zahl gewählter Kompetenzstufen ab (immer, teilweise, überwiegend) und beeinflusst auch den Abstand zwischen Fach- und Kompetenzbeschreibung. Diese Einstellung wäre beim Wunsch auf individuelle Konfiguration durch Ausprobieren an das gewünschte Erscheinungsbild einzustellen. |
| **Zeilenhoehe**=5 | Höhe einer „Ankreuz-Zeile“ in mm. Erlaubte Werte sind *4* oder *5*. |
| **FachPosition**=Mitte | Vertikale Position der Fächerbezeichnungen. Erlaubte Werte sind *Oben* und *Mitte*. |
| **;Zusammmenhalten** | Ist Fächer *zusammenhalten* per Auslassung des Semikolons aktiviert, werden innerhalb eines Faches keine Zeilenumbrüche erzeugt. |
| **;ZusammenhaltenE1**=Deutsch(einzeln);Englisch;Mathematik | Sollen nur einzelne Fächer zusammengehalten werden, lässt sich dies jeweils für die benannten Jahrgänge für die Jahrgänge über diese Schalter erzeugen. Die Option (einzeln) gilt nur für das Fach Deutsch. |
| **;ZusammenhaltenE2**=Deutsch(einzeln);Englisch;Mathematik | Sollen nur einzelne Fächer zusammengehalten werden, lässt sich dies jeweils für die benannten Jahrgänge für die Jahrgänge über diese Schalter erzeugen. Die Option (einzeln) gilt nur für das Fach Deutsch. |
| **;Zusammenhalten03**=Deutsch(einzeln);Englisch;Mathematik | Sollen nur einzelne Fächer zusammengehalten werden, lässt sich dies jeweils für die benannten Jahrgänge für die Jahrgänge über diese Schalter erzeugen. Die Option (einzeln) gilt nur für das Fach Deutsch. |
| **;Zusammenhalten04**=Deutsch(einzeln);Englisch;Mathematik | Sollen nur einzelne Fächer zusammengehalten werden, lässt sich dies jeweils für die benannten Jahrgänge für die Jahrgänge über diese Schalter erzeugen. Die Option (einzeln) gilt nur für das Fach Deutsch. |
| **Ankreuzsymbol**=X | Hier wird das Symbol für Ankreuzkästchen gewählt. Der Wert *X* setzt ein "X", *C* setzt einen Haken. |
| **LeereAnkreuzkompetenzen**=Z | Legt die Sichtbarkeit von nicht gesetzten Ankreuzkompetenzen fest. Beim Wert *Z* (=Zeigen) werden nicht gesetzte Kompetenzen auf dem Zeugnis ausgegeben, beim Wert *D* (Durchgestrichen) erscheinen nicht gesetzte Kompetenzen durchgestrichen auf dem Zeugnis, beim Wert *A* (Ausblenden) werden nicht gesetzte Kompetenzen ausgeblendet. |
| **FachKopfSichtbarE1**=SG;M;SP | Kompetenzstufen werden i.d.R. für jedes Fach mit gedruckt. Soll dies für bestimmte Jahrgänge genauer gesteuert werden, können hier die Fächer angegeben werden, für welche die Kompetenzstufen gedruckt werden. Wird die ganze Zeile per Semikolon deaktiviert, werden für alle Fächer Kompetenzstufen gedruckt. |
| **;FachKopfSichtbarE2**=SG;M;SP | Kompetenzstufen werden i.d.R. für jedes Fach mit gedruckt. Soll dies für bestimmte Jahrgänge genauer gesteuert werden, können hier die Fächer angegeben werden, für welche die Kompetenzstufen gedruckt werden. Wird die ganze Zeile per Semikolon deaktiviert, werden für alle Fächer Kompetenzstufen gedruckt. |
| **;FachKopfSichtbar03**=KR;RS;MU | Kompetenzstufen werden i.d.R. für jedes Fach mit gedruckt. Soll dies für bestimmte Jahrgänge genauer gesteuert werden, können hier die Fächer angegeben werden, für welche die Kompetenzstufen gedruckt werden. Wird die ganze Zeile per Semikolon deaktiviert, werden für alle Fächer Kompetenzstufen gedruckt. |
| **;FachKopfSichtbar04**=D;E;M | Kompetenzstufen werden i.d.R. für jedes Fach mit gedruckt. Soll dies für bestimmte Jahrgänge genauer gesteuert werden, können hier die Fächer angegeben werden, für welche die Kompetenzstufen gedruckt werden. Wird die ganze Zeile per Semikolon deaktiviert, werden für alle Fächer Kompetenzstufen gedruckt. |

### 5. Text und Layout der Unterschriften anpassen

Über diese Schalter werden Art und Layout der Unterschriften gesteuert.

| Steuerbefehl | Erklärung |
| --- | --- |
| **Unterschrift**=VN | Über die unterschiedlichen Optionen wird die Art der Unterschriften eingestellt. Zulässige Schalter sind: *VN* = Vorname Nachname; *NV* = Nachname, Vorname; *N* = Nachname, KlassenlehrerIn; *ON* = Klassenleitung |
| **PositionSchulleitungText**=R | Zulässige Optionen zur Positionierung der Schulleitungsunterschrift sind *R* für rechts und *L* für links. |
| **;SchulleitungText**=Vertretung (Frau Mustermann) | Falls nicht die in SchILD hinterlegte Schulleitung unterschreibt, kann hier ein freier Text eingegeben werden, der unter der Linie zum unterschreiben gedruckt wird. Zusätzlich zur Angabe des freien Textes muss bei einem gewünschten Eintrag das Semikolon vor `;SchulleitungText=` entfernt werden. |
| **UnterschriftMitStVertr**=nein | Ist die *Stellvertrende Klassenleitung* auch anzeigen? Optionen: *ja*, *nein*. |
| **;KlassenleitungText**=Klassenleitung | Falls nicht die Klassenleitung aus SchILD-NRW unterschreiben soll, kann hier ein Text eingegeben werden. |
| **;SonderpaedagogeText**=Herr Mustermann | Der Name der sonderpädagogischen Lehrkraft wird i.d.R. aus SchILD-NRW heraus generiert. Über diesen Schalter ein (freier) Name für die Unterschrift eingetragen werden. |

### 6. Anpassen von Überschriften und Textpassagen

| Steuerbefehl | Erklärung |
| --- | --- |
| **ASVText**=Arbeitsverhalten | Hier lässt sich mit einem freien Text die Überschrift für das Arbeits- und Sozialverhalten setzen. |
| **LELSText**= | Überschrift für den Leistungsstand. Das Feld kann wie im Standard auch leer bleiben. |
| **;WiderspruchInEingangsphaseAusblenden** | Per Standard ist der Widerspruchtstext für die Schuleingangsphase *nicht* ausgeblendet, wird also angezeigt. Ein Entfernen des Semikolons führt somit dazu, dass der Widerspruchstext nicht angezeigt wird. |
| **;Folgejahrgang** | Steuert, ob bei einer "Versetzung" die *neue Klasse* oder der *neue Jahrgang* angezeigt wird. Wird der Schalter *Folgejahrgang* über das Semikolon *Deaktiviert* wird ein Klassentext erzeugt: Max wird in die *Klasse 03a* versetzt. Ist der Schalter aufgrund des entfernten Semikolons *Aktiviert*, wird ein Jahrgangstext erzeugt: Aktiviert => Max wird in den *Jahrgang 03* versetzt |
| **BemerkungText**=Bemerkung | Sofern hier ein Eintrag vorgenommen wird, ist dies die Überschrift für weitere *fachbezogene Bemerkungen* (unterhalb der Kompetenzen)). |
| **;BemerkungLeerText**=-keine- | Ist *keine* Bemerkung eingetragen, soll der folgende freie Text erscheinen. Wenn ein Text gesetzt wird, muss der Schalter auch noch durch das Entfernen des Semikolons aktiviert werden. |
| **;SchulbesuchsjahrText**=Schuleingangsphase $JAHR$. Schulbesuchsjahr | Der Text für Schulbesuchsjahre im Zeugniskopf kann bei bei Bedarf angepasst werden. Sofern ein Text gesetzt wird, ist der ganze Eintrag zusätzlich durch Entfernen des Semikolons zu aktivieren. |

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Grundschulzeugnisse_Konfiguration_des_Erscheinungsbildes_von_Zeugnissen_(Tutorial))
