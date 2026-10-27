---
title: "Aufbau und Regeln der SchILD-NRW-Schnittstelle verstehen"
---

# Aufbau und Regeln der SchILD-NRW-Schnittstelle verstehen

Beachten Sie Dateiaufbau, Zeichencodierung, Datentypen und den Umgang mit leeren Feldern, bevor Sie Schnittstellendateien importieren.

Dieses Dokument beschreibt die Text-Importschnittstelle für **SchILD-NRW 3**.

## Hinweise

[![Diese Schnittstellendateien können an einem Gymnasium im- und exportiert werden und enthalten die jeweiligen Daten. Je nach Schulform kann die Dateiliste abweichen.](/bilder/import-export-statistik/datenaustausch-erzeugbare-schnittstellendateien.png)](/bilder/import-export-statistik/datenaustausch-erzeugbare-schnittstellendateien.png)

*Diese Schnittstellendateien können an einem Gymnasium im- und exportiert werden und enthalten die jeweiligen Daten. Je nach Schulform kann die Dateiliste abweichen.*

[![Einige Schnittstellendateien im Windows-Explorer.](/bilder/import-export-statistik/datenaustausch-schnittstellenbeispiel.png)](/bilder/import-export-statistik/datenaustausch-schnittstellenbeispiel.png)

*Einige Schnittstellendateien im Windows-Explorer.*

Die Schnittstelle von SchILD-NRW 3 wurde ursprünglich für den Import bzw. Export statistikrelevanter Daten eingeführt. Mittlerweile lassen sich darüber die meisten (nicht alle!) Schüler- und Lehrerdaten importieren und exportieren.

Die Schnittstelle basiert auf einer Vielzahl von Textdateien mit der Endung *\*.dat*. Diese enthalten Daten im CSV-Format, bei dem die Datenfelder durch ein „\|“ (Pipe) als Trennzeichen getrennt sind.

Der Import erfolgt aus mehreren Textdateien, deren Struktur nachfolgend erläutert wird.

::: danger Achtung

Konsultieren Sie für die konkreten Dateien, deren Inhalte und die korrekte Befüllung unbedingt die **Schnittstellenbeschreibung**!

:::

::: info Hinweis

Die Textdateien können in den Codierungen *ANSI* oder *UTF-8* (Unicode) gespeichert werden – beide Formate werden unterstützt.

Bitte achten Sie bei UTF-8-Dateien darauf, dass diese mit BOM (Byte Order Mark) gespeichert werden. Dies ist bei einigen Tabellenkalkulationsprogrammen (z. B. LibreOffice) nicht immer der Fall.

:::

## Beispiel

Die Datei *Klassen.dat* enthält beispielsweise die Daten zu den angelegten Klassen aus der *Klassen- und Versetzungstabelle*.

    InternBez|StatistikBez|SonstigeBez|Jahrgang|Folgeklasse|Klassenlehrer|OrgForm|Klassenart|Gliederung|Fachklasse|Jahr|Abschnitt
    05A|05A|05A|05|06A|WEER|1|RK|***||2022|1
    05B|05B|05B|05|06B|BOTS|1|RK|***||2022|1
    05C|05C|05C|05|06C|JANS|1|RK|***||2022|1
    05D|05D||05|06D|BAUE|1|RK|***||2022|1
    06A|06A|06A|06|07A|GÜNT|1|RK|***||2022|1
    06B|06B|06B|06|07B|WEID|1|RK|***||2022|1

## Für alle Textdateien gelten folgende Bedingungen

- SchILD-NRW 3 erwartet, dass die Schnittstellendateien exakt die in der **Schnittstellenbeschreibung** angegebenen Dateinamen besitzen. Beispielsweise wird *Sbasis.dat* anstelle von *SchuelerBasisdaten.dat* nicht erkannt.
- Jede Zeile muss genau einen Datensatz enthalten.
- Als Trennzeichen zwischen den Feldern wird das Pipe-Symbol „\|“ verwendet. Dies hat den Vorteil, dass z. B. in Bemerkungen auch ein Semikolon verwendet werden kann.
- Textfelder werden nicht durch Anführungszeichen eingeschlossen.
- Datumsfelder müssen im Format *TT.MM.JJJJ* vorliegen.
- Die Spalten (Felder) müssen exakt in der vorgegebenen Reihenfolge erscheinen.
- Jede Datei enthält eine *Header-Zeile* mit den Bezeichnungen der einzelnen Spalten. Diese dient nur zur Information und wird beim Import nicht ausgewertet.
- Auch die Header-Zeile muss mit „\|“ getrennt sein.
- Bei leeren Feldern muss dennoch ein Trennzeichen „\|“ ausgegeben werden, d. h. jede Zeile muss exakt die erwartete Anzahl an Trennzeichen enthalten.

## Umgang mit leeren Feldern

Bei den einzelnen Spalten ist angegeben, **ob diese leer sein dürfen**. Dabei treten folgende Zustände auf:

- *Nein*: Spalte darf nicht leer sein, d. h. sie muss einen gültigen Wert enthalten.
- *(Ja)*: Spalte darf technisch leer sein, für die Statistik-Erhebung wird jedoch ggf. ein Eintrag in SchILD-NRW 3 benötigt. Dieser muss dann nach dem Import ergänzt werden.
- *Ja*: Spalte darf leer sein.

## Datentypen

Bei den einzelnen Spalten ist jeweils **der erwartete Datentyp** angegeben:

- *Text(n)*: Text mit einer maximalen Länge von n Zeichen (z. B. Text(20))
- *Integer*: Ganzzahl (z. B. -753, 0, 42 oder 1066)
- *Float*: Gleitkommazahl. Es kann entweder ein Komma oder ein Punkt als Dezimaltrennzeichen verwendet werden (z. B. 1,141592 oder 2.997)

## Partielle bzw. additive Importe

Es ist nicht erforderlich, alle beschriebenen Dateien in einem Schritt zu importieren. Einzelne Dateien können auch nachträglich importiert werden.

Voraussetzung ist jedoch, dass „übergeordnete“ Daten, auf die verwiesen wird, bereits in der Datenbank von SchILD-NRW 3 vorhanden sind (z. B. durch einen vorherigen Import).

Wenn beispielsweise *Lernabschnitts- und Leistungsdaten* separat importiert werden sollen, müssen folgende Daten bereits existieren:

- Die Basisdaten der Schüler
- Die Lehrkräfte (z. B. Klassen- oder Fachlehrer)
- Die Fächer
- Die Kurse
- Die Jahrgänge und Klassen

::: info Hinweis

Falls übergeordnete Daten nicht vorhanden sind, wird der entsprechende Datensatz nicht importiert. Eine entsprechende Meldung erscheint im Importprotokoll.

:::

Schüler-Basisdaten und Schüler-Zusatzdaten können auch additiv importiert werden. Das bedeutet, dass fehlende Daten in einem späteren Import ergänzt werden können.

::: tip Tipp

Falls bei einem Zweitimport Felder leer sind, die in SchILD-NRW 3 bereits gefüllt sind, bleiben die bestehenden Daten unverändert. So können Informationen gezielt ergänzt werden.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Schnittstelle_SchILD_-_Vorbemerkungen)
