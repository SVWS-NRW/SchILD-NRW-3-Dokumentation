---
title: "Unterrichtsdaten aus Excel importieren"
source_pageid: 878
source_revision: 5401
---

# Unterrichtsdaten aus Excel importieren

Übernehmen Sie Unterrichts- und Leistungsdaten aus einer Excel-Datei. Prüfen Sie Vorschau, Tabellenblatt und die im Artikel beschriebene Feldstruktur vor dem Import.

## Import

[![Import von Unterrichtsdaten.](/bilder/import-export-statistik/import-unterrichtsdaten-1.png)](/bilder/import-export-statistik/import-unterrichtsdaten-1.png)

*Import von Unterrichtsdaten.*

Über *"Verwaltung ➜ Import ➜ Unterrichts-Daten (als Excel-Daten)"* können Sie Unterrichts- bzw. Leistungsdaten über eine Excelliste importieren.

Diese Datei kann auch mit anderen Tabellenkalkulationsprogrammen wie Open Office Calc erstellt werden.

Wählen Sie zuerst Ihre Excel-Datei aus. Enthält sie mehrere Tabellenblätter, wählen Sie anschließend das Blatt mit den zu importierenden Daten.

Sie bekommen eine Vorschau der Excel-Datei angezeigt.

Kontrollieren Sie die Vorschau und vergleichen Sie den Aufbau mit dem Abschnitt **Erläuterungen zum Format** weiter unten. Klicken Sie anschließend auf **Daten importieren**.

Der Knopf **Beispieldaten ansehen** zeigt eine Beispieldatei an.

## Erläuterungen zum Format

Wenn Sie auf den Button **Informationen anzeigen** klicken, bekommen Sie folgende Erklärung:

Hier können Sie Unterrichtsdaten, in Form von Excel-Dateien, importieren. In einer Datei können sowohl Angaben zu klassenbezogenem Unterricht als auch zu Kursen stehen. Diese Dateien müssen den folgenden grundsätzlichen Aufbau haben.

::: warning Wichtig

Die erste Zeile muss die jeweiligen Spaltenüberschriften enthalten und wird beim Import ignoriert.

:::

- Spalte 1 **Kursbezeichnung** (optional): Der Eintrag muss in Kombination mit Jahr, Abschnitt und Jahrgang eindeutig sein! Das Feld kann leer sein, falls es sich um einen Unterricht im Klassenverband handelt, dann muss aber Spalte 2 gefüllt sein.
- Spalte 2 **Klasse** (optional): Die Klassenbezeichnung, muss in der Klassen-/Versetzungstabelle vorhanden sein. Folgende Kombinationen mit der Kursbezeichnung sind möglich:
  - Kursbezeichnung nicht leer, Klasse leer: In diesem Fall wird nur ein Kurs in der Kursverwaltung angelegt, es erfolgt keine Zuteilung von Unterricht an die Schüler.
  - Kursbezeichnung nicht leer, Klasse nicht leer: In der Kursverwaltung wird ein Kurs angelegt, dieser wird allen Schülern der Klasse (als Kursunterricht) zugeteilt
  - Kursbezeichnung leer, Klasse nicht leer: Es wird kein Kurs in der Kursverwaltung angelegt, der Unterricht wird ohne Kurszuweisung allen Schülern der Klasse zugeordnet (Unterricht im Klassenverband).
- Spalte 3 *Schuljahr*
- Spalte 4 *Halbjahr* bzw. *Quartal*
- Spalte 5 *Jahrgang* (optional): Die Jahrgangsbezeichnung muss der Bezeichnung in SchILD entsprechen. Falls der Eintrag leer ist, liegt ein jahrgangsübergreifender Kurs vor. Bei Klassenunterricht (Spalte 2 nicht leer) wird die Angabe ignoriert (ebenso, wenn Spalte 1 leer ist).
- Spalte 6 *Fach*: Die Fachbezeichnung, muss in der Fächertabelle vorhanden sein.
- Spalte 7 *Kursart* (optional): Die allgemeine Kursart muss in der Tabelle der *allg. Kursarten* in SchILD vorhanden sein.
- Spalte 8 *Wochenstunden*: Gesamt-Wochenstunden, so wie sie bei den Schüler-Leistungsdaten eingetragen werden.
- Spalte 9 *Wochenstunden Kursleiter*: Anz. Wochenstunden, die vom Kursleiter gehalten werden, falls leer, wird Gesamt-Wochenstd. (Spalte 8) angenommen Wird ignoriert, wenn Kursbezeichnung (Spalte 1) leer ist. Dann liegt Unterricht im Klassenverband vor, bei dem die "Hauptlehrkraft" die gesamten Wochenstunden bestreitet.
- Spalte 10 *Lehrer*: Kursleiter bzw. Fachlehrer (als schulinternes Kürzel)

::: info Hinweis

Bis hier müssen alle Spalten existieren. Die folgenden Spalten können dagegen fehlen. Wenn allerdings Wochenstunden einer Zusatzkraft (Spalte 13 u. 14) übergeben werden sollen, müssen auch die Spalten 11 u. 12 existieren, die dann aber auch leer sein dürfen, die Spaltenüberschriften müssen aber existieren.

:::

- Spalte 11 *Epochalunterricht*: Als "J" oder "N" (wenn leer, wird "N" gesetzt)
- Spalte 12 *Schulnummer*: Falls ein Kurs im Rahmen einer Kooperation an einer anderen Schule gegeben wird, kann hier die Schulnr dieser Schule übergeben werden. Wird nur bei Kursunterricht (Spalte 1 nicht leer) berücksichtigt.
- Spalte 13 *Wochenstunden Zusatzkraft*: Die Wochenstunden einer Zusatzkraft, wird bei Klassenunterricht (Spalte 2 nicht leer) importiert.
- Spalte 14 *Zusatzkraft (als schulinternes Kürzel)*
- Spalte 15, 16 usw. *Wochenstunden und Kürzel von weiteren Zusatzkräften*: Falls die Kursbezeichnung (Spalte 1) nicht leer ist, können hier im Wechsel beliebig viele Wochenstunden und Kürzel von weiteren Zusatzkräften eingegeben werden. Ist die Kursbezeichnung leer, so werden diese Angaben ignoriert.

## Beispiele

[![Beispieldatei mit Unterrichten.](/bilder/import-export-statistik/import-unterrichtsdaten-2-beispiel.png)](/bilder/import-export-statistik/import-unterrichtsdaten-2-beispiel.png)

*Beispieldatei mit Unterrichten.*

Die folgenden fünf Beispiele sind aus der früheren Dokumentation übernommen. **Die Textbeschreibungen nennen 2022/23, die Datenzeilen enthalten dagegen 2006.** Verwenden Sie diese Zeilen nicht unverändert als Importvorlage. Für einen aktuellen Import müssen Jahr, Abschnitt, Fach- und Kursartkürzel zum Zielbestand passen. Die Reihenfolge der Spalten ist maßgeblich.

Beispiel 1: 2 Std. Sport als Klassenunterricht in Klasse 06A im 2. Hj. 2022/23 bei Lehrer "BO", kein Epochenunterricht

    | 06A | 2006 | 2 |   | SP | PUT | 2 |   | BO | N

Beispiel 2: 2 Std. Sport als Klassenunterricht in Klasse 06B im 2.Hj. 2022/23 bei Lehrer "BO", Lehrer "ALD" nimmt 1 Std. als "team-teacher" teil.

    | 06B | 2006 | 2 |   | SP | PUT | 2 |   | Bo | N |   | 1 | ALD

Beispiel 3: 2-stündiger Sportkurs "Volleyball" in Jahrgang 07 im 2. Hj. 2022/23, 1 Std. bei Lehrer "BO", 1 Std. bei Lehrer "ALD", wird nur als Kurs eingerichtet (d.h. keine Zuweisungen bei Schülern)

    Volleyball |   | 2006 | 2 | 07 | SP | AGGT | 2 | 1 | BO | N |   | 1 | ALD

Beispiel 4: 4-stündiger Sportkurs "Sport-1-07a" in Jahrgang 07 im 2. Hj. 2022/23, 3 Std. bei Lehrer "BO", 1 Std. bei Lehrer "ALD", 1 Std. bei Lehrer "MÜ", alle Schüler der Klasse 07A nehmen teil (Hinweis: Wenn Teile des Unterrichtes von mehreren Lehrern gleichzeitig betreut werden, kann die Summe der Lehrerstunden größer als die des Kurses sein.)

    Sport-1-07a | 07A | 2006 | 2 | 07 | SP | AGGT | 4 | 3 | BO | N |   | 1 | ALD | 1 | MÜ

Beispiel 5: 2-stündiger Sportkurs "Hockey" in Jahrgang 08 im 2. Hj. 2022/23, wird an Partnerschule mit Schulnr. 123456 gegeben

    Hockey |   | 2006 | 2 | 08 | SP | AGGT | 2 |   |   | N | 123456

  






---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Unterrichts-Daten_(als_Excel-Daten)_(Verwaltung_Import)) · Quellrevision 5401.
