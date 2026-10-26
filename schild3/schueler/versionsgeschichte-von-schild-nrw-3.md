---
title: "Frühere Versionshinweise zu SchILD-NRW 3 nachschlagen"
source_pageid: 1442
source_revision: 6234
---

# Frühere Versionshinweise zu SchILD-NRW 3 nachschlagen

Lesen Sie die übernommenen Versionshinweise bis zur Fassung 3.1.20. Die Liste dokumentiert frühere Änderungen und ist keine Aufstellung der aktuell verfügbaren Versionen.

## v3.1.20 vom 31.10.2025 - RELEASE

- Release Version
- Neues Login-Fenster
- Schnittstellenimport: Wenn bei den Basisdaten keine Klasse eingetragen war, wurde die betreffende Person beim Import weiterer Daten nicht gefunden. Nun behoben.
- Fehlermeldung bei "Daten gemäß Löschfristen löschen" behoben.
- Bei der Datenquelle KursSchueler wird jetzt auch die Collation berücksichtigt (Sortierung)
- Abfrage für Datenquelle KursSchueler korrigiert
- Bei den SMTP-Einstellungen gibt es jetzt eine weitere Option "Konfiguration automatisch anpassen". Wenn diese aktiviert ist, werden möglicherweise widersprüchliche SMTP-Einstellungen automatisch korrigiert. Das war bisher implizit der Fall. Dieses Verhalten kann nun deaktiviert werden.
- Es wird jetzt standardmäßig ein "KeepConnectionAliveInterval" von 10 Minuten verwendet. Das kann über einen Eintrag in der Datei Admin.ini aber auch geändert werden.
- Lauffähig mit SVWS-Server v1.1.1
- Wichtig!

Die Report Basissammlung wurde mit Version 1.0.0 aktualisiert. Bei einem Update werden diese aber nicht ausgetauscht. Nur bei einer Neuinstallation! Diese können aber manuell hier heruntergeladen werden:

[https://github.com/SVWS-NRW/Schild-NRW-3-Reports/releases/tag/v1.0.0](<https://github.com/SVWS-NRW/Schild-NRW-3-Reports/releases/tag/v1.0.0>)

## v3.1.18 vom 26.09.2025

- Anpassungen an die Version 1.0.12 des SVWS-Servers
- Filterung auf Sonderpädagogen umgesetzt
- Verwaltung der Lehrer-Lehrbefähigungen komplett auf SVWS-Server-API umgestellt.
- Bei der Abschlussberechnung an der Gesamtschule können jetzt auch die Quartalsnoten ausgewählt werden.
- BK und WBKs: In Das Feld "Beruf" kann nun auch ein Freitext eingegeben werden.
- Auf dem Karteireiter "Schulbesuch" werden die Abschlüsse an der Herkunftsschule nun entsprechend dem Entlassdatum gefiltert.
- Bei Neueingaben wurde manchmal das falsche Schuljahr/Halbjahr eingetragen, nun behoben.
- Beim Gruppenprozess für die Versetzungs-/Abschlussberechnung an der Gesamtschule (und allen Schulformen, wo eine Quartalsprognose möglich ist) erscheint nun ein Dialog, wo man festlegen kann, welche Noten (Quartals- oder Zeugnisnoten) verwendet werden sollen
- Bei den Lehrer-Lehrämtern wurde testweise mal die Option freigeschaltet, neue Datensätze auch ohne Verwendung der "Plus"-Schalters anzulegen
- Bei Filterung auf einen Status wurde der Button zum Ausführen der Filterung nicht angezeigt, nun behoben.
- Filterung der Abschlüsse auf dem Karteireiter "Schulbesuch" wurde überarbeitet
- Beim Start wird nun geprüft, ob die Tabelle "Schuljahresabschnitte" korrekt ist. Folgendes wird geprüft: Mehrfacheinträge, Lücken, falsche Reihenfolge
- Vor dem Löschen einer Klasse wird geprüft, ob darin SuS enthalten sind. Sollte dies der Fall sein, ist ein Löschen nicht möglich.
- Man kann nun ein Zeitintervall für ein Ping zum Datenbankserver definieren. Dadurch kann verhindert werden, dass die Datenbankverbindung nach einer gewissen Zeit der Untätigkeit vom Datenbanktreiber gekappt wird.

Dazu in der Datei "Admin.ini" (im Programmverzeichnis) den folgenden Eintrag machen (der Wert ist der Zeitabstand in Minuten)

`[Administration]`

`KeepConnectionAliveInterval=5`

- Beim Gruppenprozess für die Versetzungs-/Abschlussberechnung an der Gesamtschule (und allen Schulformen, wo eine Quartalsprognose möglich ist) erscheint nun ein Dialog, wo man festlegen kann, welche Noten (Quartals- oder Zeugnisnoten) verwendet werden sollen.
- Bei den Lehrer-Lehrämtern wurde testweise mal die Option freigeschaltet, neue Datensätze auch ohne Verwendung der "Plus"-Schalters anzulegen.
- Bei Filterung auf einen Status wurde der Button zum Ausführen der Filterung nicht angezeigt, nun behoben.
- Anpassung an Version 1.0.11 des SVWS-Servers
- Filterung der Abschlüsse auf dem Karteireiter "Schulbesuch" wurde überarbeitet
- Beim Start wird nun geprüft, ob die Tabelle "Schuljahresabschnitte" korrekt ist. Folgendes wird geprüft: Mehrfacheinträge, Lücken, falsche Reihenfolge
- Vor dem Löschen einer Klasse wird geprüft, ob darin SuS enthalten sind. Sollte dies der Fall sein, ist ein Löschen nicht möglich.
- Bei der Kursart "PUT" wurde die "Statistik-Nummer" als "0" anstelle "00" gespeichert, nun behoben
- Bei Grundschulen ist es wieder möglich, Quartalsnoten zu aktivieren
- Die GeR-Berechnung bei der dritter Fremdsprache in Sek1 war nicht korrekt, nun behoben
- Die Suche in der aktuellen Schülerauswahl wurde überarbeitet. Sie arbeitet nun auch dann flüssig, wenn der Karteireiter "Akt. Halbjahr" ausgewählt ist. Um die Suche nach Eingabe des Suchtextes zu aktivieren, muss die Eingabetaste gedrückt werden.
- Die Anzeige und Eingabe von Straße, Hausnummer und Hausnr.-Zusatz erfolgt nun (wie beim Web-Client) zusammen in einem Eingabefeld. Beim Speichern werden daraus drei separate Werte für den Straßennamen, die Hausnummer und den Hausnr.-Zusatz ermittelt und in den zugehörigen Feldern der Datenbank abgelegt.
- Bei Kursen, die schon belegt sind, ist keine Jahrgangsänderung mehr möglich, da dies zu Inkonsistenzen führen würde (der Jahrgang bei den SuS ist dann ein anderer als der beim Kurs), die dann wieder zu Probleme beim Abschnittswechsel führen würden. Wenn der Jahrgangsbezug eines schon belegten Kurses geändert werden muss, so ist der Kurs zu löschen und mit neuem Jahrgangsbezug neu anzulegen).
- Die Filterung der Kurse nach einer Neueingabe eines Kurses wurde überarbeitet.
- Bei der Report-Datenquelle "KursSchueler" können nun folgende Sortieroptionen gewählt werden:
- Status, Name, Vorname
- Status, Schulnr., Name, Vorname
- Klasse, Name, Vorname
- Name, Vorname
- In der Report-Datenquelle "Kurse" steht jetzt auch ein Feld "FachBezeichnung" (ausgeschriebener Name des Faches)
- Bei der Versendung einer Kursliste als Serienmail (an die Kursleitung) wird der Name der PDF-Datei nun wie folgt gebildet:

Kurs_Jahrgang_Fach_Kursart_Kursleitung_Datum_KursID.pdf

Beispiel: L-1_10_L7_WPIGY_Kieß_2025-09-12_1649.pdf

- Die Zeilenhöhe in dem Fenster, in dem die Statistikfehler angezeigt werden, kann nun angepasst werden (um den Fehlertext komplett lesen zu können).
- Die Berechtigungen für den "Text-/Excel-Export" und für den "BAN-Export" waren falsch gesetzt, nun behoben.
- Beim WBK waren die Texte "Semesterwechsel (in Sommersemester)" und "Semesterwechsel (in Wintersemester)" vertauscht, nun korrigiert.
- Beim E-Mail-Versand über SMTP konnten die Parameter "Benutzername" und "Kennwort" unter bestimmten Bedingungen nicht eingetragen werden. Das funktioniert jetzt wieder.
- Beim Menüpunkt "Info" wird jetzt auch die Version des SVWS-Servers ausgegeben
- Beim Gruppenprozess "Eingabe der Prüfungsergebnisse zum Abitur" wurde die Sortierung nicht immer korrekt ausgeführt, nun behoben.
- Lauffähig mit dem SVWS-Server 1.0.12.
- Datenbankrevision 47

## v3.1.17 vom 29.08.2025

- Filterung auf Sonderpädagoge umgesetzt
- Verwaltung der Lehrer-Lehrbefähigungen komplett auf SVWS-Server-API umgestellt.
- Bei der Abschlussberechnung an der Gesamtschule können jetzt auch die Quartalsnoten ausgewählt werden.
- BK und WBKs: In Das Feld "Beruf" kann nun auch ein Freitext eingegeben werden.
- Auf dem Karteireiter "Schulbesuch" werden die Abschlüsse an der Herkunftsschule nun entsprechend dem Entlassdatum gefiltert.
- Bei Neueingaben wurde manchmal das falsche Schuljahr/Halbjahr eingetragen, nun behoben.
- Beim Gruppenprozess für die Versetzungs-/Abschlussberechnung an der Gesamtschule (und allen Schulformen, wo eine Quartalsprognose möglich ist) erscheint nun ein Dialog, wo man festlegen kann, welche Noten (Quartals- oder Zeugnisnoten) verwendet werden sollen.
- Bei den Lehrer-Lehrämtern wurde testweise mal die Option freigeschaltet, neue Datensätze auch ohne Verwendung des "Plus"-Schalters anzulegen.
- Bei Filterung auf einen Status wurde der Button zum Ausführen der Filterung nicht angezeigt, nun behoben.
- Anpassung an Version 1.0.11 des SVWS-Servers
- Filterung der Abschlüsse auf dem Karteireiter "Schulbesuch" wurde überarbeitet
- Beim Start wird nun geprüft, ob die Tabelle "Schuljahresabschnitte" korrekt ist. Folgendes wird geprüft: Mehrfacheinträge, Lücken, falsche Reihenfolge
- Vor dem Löschen einer Klasse wird geprüft, ob darin SuS enthalten sind. Sollte dies der Fall sein, ist ein Löschen nicht möglich.
- Man kann nun wieder (wie bei SchILD2) ein Zeit-Intervall für ein Ping zum Datenbankserver definieren. Dadurch kann verhindert werden, dass die Datenbankverbindung nach einer gewissen Zeit der Untätigkeit vom Datenbanktreiber gekappt wird.
- Dazu in der Datei ""Admin.ini"" den folgenden Eintrag machen (der Wert ist der Zeitabstand in Minuten)

`[Administration]`

`KeepConnectionAliveInterval=5`

- Bei der Kursart "PUT" wurde die "Statistik-Nummer" als "0" anstelle "00" gespeichert, nun behoben
- Bei Grundschulen ist es wieder möglich, Quartalsnoten zu aktivieren
- Die GeR-Berechnung bei der dritter Fremdsprache in Sek1 war nicht korrekt, nun behoben
- Die Suche in der aktuellen Schülerauswahl wurde überarbeitet. Sie arbeitet nun auch dann flüssig, wenn der Karteireiter "Akt. Halbjahr" ausgewählt ist. Um die Suche nach Eingabe des Suchtextes zu aktivieren, muss die Eingabetaste gedrückt werden.
- Version SVWS-Server 1.0.11

## v3.1.15 vom 27.07.2025

- Anpassungen an die Version 1.0.10 des SVWS-Servers
- Versetzungsberechnung nun auch für vergangene Abschnitte möglich
- Versetzungsalgorithmen: Falls bei einem Fach keine Fachgruppe vom SVWS-Server geliefert wird, wird diese aus den Einstellungen beim jeweiligen Fach geholt
- Excel-/Text-Export: Feldlänge für Staatsangehörigkeiten und Verkehrssprachen erweitert
- GER-Berechnung überarbeitet
- Fehler bei Eingabe von ZP10-Noten behoben
- Gruppenprozess Abinoteneingabe: Lehrkraft bei Kursauswahl sichtbar
- Anzeige Abiturmeldungen überarbeitet
- Es erfolgt jetzt immer eine Berechnung des Abiturergebnisses (auch bei fehlenden Angaben, z.B. mdl. Noten)
- Anpassung am Bildschirmauflösung überarbeitet
- Fehler bei Filterung auf Abschlussoptionen behoben
- Auswahl Referenzniveaus an Änderung im SVWS-Server angepasst
- Katalog "Klassen/Versetzungstabelle": Sternchen bei statistik-relevanten Feldern nun vorhanden
- Schuljahreswechsel: Änderungen bei einzelnen SuS wurde nicht übernommen, nun korrigiert
- ZP10-Export bei WBK überarbeitet
- Filterung auf Vermerkarten überarbeitet
- Gruppenweise Kurse zuweisen: Sortieroption für Schüler hinzugefügt
- Bei den Versetzungsberechnungen wurde der Versetzungsvermerk nicht immer eingetragen, nun korrigiert. Wichtig: Der Versetzungsvermerk wird nur im 2. Hj. eingetragen (Ausnahme: WBK)
- Auf dem Karteireiter "Schulbesuch" werden die Abschlüsse an der eigenen Schule nun entsprechend dem Entlassdatum gefiltert.
- Bei mehrfacher Versendung von Report-Serienmails wurde die Signatur mehrfach ausgegeben, nun behoben.
- Anlegen eines neuen Kurses ohne Lehrkraft führt zu Fehlermeldung, nun behoben
- Neue Symbole für "Filter ausführen" und "Filter aufheben".
- Bei der gruppenweisen Zuweisung von Kursen gibt es nun die Möglichkeit, die Schüler entweder nach Jahrgang, Name und Klasse oder nach Jahrgang, Klasse und Name sortieren zu lassen.
- Wenn der Karteireiter "Aktuelles Halbjahr" ausgewählt war und in der Schülerliste über das Eingabefeld "Suche…" ein Schüler gesucht wurde, so wurden die Abschnittsdaten des gefundenen Schülers nicht automatisch aktualisiert. Dies ist nun behoben. Wichtig: Die Suche erfolgt sequentiell. Das hat zur Folge, dass derzeit für jeden durchlaufenen Schüler auch die "abhängigen Daten" (z.B. Leistungsdaten) geladen werden (sofern man sich auf einem Karteireiter befindet, auf dem diese Daten angezeigt werden). Das hat dann zur Folge, dass die Suche um so länger dauert, je weiter unten ein Schüler in der Liste steht. Es wird aber nach einer besseren Lösung gesucht.

## v3.1.14 vom 24.06.2025

- Suche nach Erziehernamen verlor Focus, behoben
- Rechteprüfung bei Teilleistungen angepasst
- Datum bei Sprachprüfung nicht eingebbar, korrigiert
- Fehler bei Abiturzulassung korrigiert (Prüfung auf Anzahl Grundkurse)
- Kopieren von markierten Fächern korrigiert
- Anpassung bei Planspielmodus für Prognoseberechnung
- Sprachenfolge WBK: Jahrgänge ergänzt
- Holen der Abiturdaten: Abitur-Jahr wird automatisch eingetragen
- Berechtigung bei Lehrerbearbeitung überarbeitet
- Anzeige ZP10-Reiter in WBK korrigiert
- Scrollbox im Fächerkatalog ergänzt
- Personengruppen: Bearbeitung und Reportausgabe überarbeitet/korrigiert
- Gruppenprozesse für Teilleistungen nun auch für Grundschulen verwendbar
- WBK: ZP10-Karteireiter auch für Jahrgänge S5 und S6 sichtbar
- Bei Gruppenprozess "Kurse zuweisen" wurden bei der Kursartauswahl die "allgemeinen Kursarten" zur Verfügung gestellt. Es werden nun die "schülerbezogenen Kursarten" zur Verfügung gestellt.
- BK: Gliederung B08, B09 und B10: Anpassung an Kursarten E, EWFA und EWF
- Neuaufnahme von Schüler: Bei der Ermittlung der Klassen im Zielabschnitt wurde noch das Feld "Sichtbar" verwendet, das mit der Version 1.0.8 des SVW-Servers weggefallen ist.
- Hochschreiben von Klassenlehrern: Wenn im Zielabschnitt schon bei einer Klasse Einträge für Klassenlehrer vorhanden sind, werden für diese Klasse keine KL hinzugefügt
- Anzeige der Vorgänger- und Folgeklassen bei der Klassenbearbeitung überarbeitet
- Weitere Optionen beim gruppenweisen Ändern von Versetzungsdaten im Rahmen des Schuljahreswechsels hinzugefügt (z.B. Prüfungsordnung)
- Fehler beim Erzeugen der Notendateien behoben
- Texte im Fenster für den Schuljahreswechsel/Halbjahreswechsel situations- und schulformbezogen angepasst
- Bei Filterung auf Lehrkräfte mit Statistikfehlern kam es zu einer Fehlermeldung, nun behoben.
- Bei der Neueingabe eines Schülers kam es zu einer Fehlermeldung, wenn gleichzeitig eine PLZ eingegeben wurde.
- Teilleistungen können jetzt gruppenweise für eine Fach/Kursart-Kombination gelöscht werden (Gruppenprozess "Teilleistungen fachbezogen löschen")
- Datenquelle "SchuelerAdressen" testweise so konfiguriert, dass sie als Hauptdatenquelle in einem Serienbrief an Betriebe genutzt werden kann (mit DQ Schueler als UnterDQ)

## v3.1.13 vom 03.03.2025

- EP-Jahre bei GS-Versetzung angepasst
- Fehler bei Filter auf "Status" bei SchILD3-Filterverfahren korrigiert
- Zwei Fehler bei Versetzungen korrigiert
- Import LehrkraefteSonderzeiten.dat korrigiert (es werden jetzt auch vorhandene Datensätze aktualisiert)
- ZP10-Ansicht beim WBK korrigiert (Anpassung an neue Statistik-Jahrgänge)
- Bei Schulen mit Primarstufe wird jetzt das EP-Jahr auch auf dem Karteireiter Individualdaten I" angezeigt (rechts oben, nur Ansicht)
- Gruppenprozess "Schulbesuchsjahre berechnen" ausgeblendet (Schulbesuchsjahre werden ja nicht mehr angezeigt)
- Schnittstellen-Import von Lehrerdaten, bei Neuimport wurde Fehler "MasernImpfnachweis" behoben
- Neue Felder in Datenquelle "SchildUmgebung" für verschiedene Formate von Schuljahr/Abschnitt

## v3.1.12 vom 03.03.2025

- BAN-Export ergänzt
- Actions und Gruppenprozesse an Benutzerrechte angepasst (noch ausstehend: "BK-Abschluss/ZP10")
- Personen einer Personengruppen: Excel-Export über rechte Maustaste
- Meister-Bafög und Online-Anmeldung mit "-" vorbelegt
- Gesamtschule: Zuweisungen überarbeitet
- Anzeige der bei Auswahl des Anmeldejahres gemachten Angaben (z.B. für Klasse) bei einem gerade im Insert-Modus befindlichen Schülerdatensatzes
- Optionale StopWatch für Zeitprotokollierung
- Korrektur Abschlussberechnung Gy.
- Feld "EPJahre" aus Tabelle "Schueler" entfernt
- EP-Jahre nun in Tabelle SchuelerLernabschnittsdaten und auf Karteireiter "Akt. Halbjahr"
- Feld "Schulbesuchsjahre" auf Karteireiter "Akt. Halbjahr" ausgeblendet (fällt demnächst weg)
- Filterung auf EPJahre (bei Grundschule) nun dort auf Karteireiter "Lernabschnitt/Leistungsdaten"
- Feld EPJahre in Report-Datenquelle Lernabschnitte
- Schulbesuchsjahre bei Gruppenprozess "Individualdaten ändern" ausgeblendet
- EPJahre nun bei Gruppenprozess "Individualdaten ändern" auf Karteireiter "Lernabschnitte" (bei Grundschule)
- Grundschulen: Jahrgangszuweisung bei Klassen angepasst
- Feld "Schulbesuchsjahre" auf Karteireiter "Individualdaten I" ausgeblendet
- Grundschuljahrgänge bei Floskeleingabe korrigiert
- Katalog "EP-Jahre" auf API umgestellt (bei Lernabschnittsdaten, Gruppenprozess "Individualdaten ändern", Schüler-Filter)
- RAP-Funktion "FilterLaufbahnJahr" korrigiert
- EP-Jahre bei Grundschulen in Auswahlliste für Schülercontainer
- Gruppenprozess "Versetzung/Übertragung ins neue Halbjahr oder Abschluss" überarbeitet für den Fall, dass alle SuS in den Abschluss kommen (z.B. frühzeitige Ausschulung der Q2)
- Datenquelle "Schueler" Feld "JahrgangsKrz" wird nun befüllt
- Datenquelle "Kursschueler_mit_Fotos" korrigiert
- Fehler bei Schuljahreswechsel behoben
- Überschriften "EP-Jahr" angepasst
- Bei Ausklappen des Kataloges für die EP-Jahre wird das Kürzel und der Klartext angezeigt
- Schuljahreswechsel: Problem mit nicht vorhandenen oder unsichtbaren Folgeklassen behoben
- Schüler-Abfrage angepasst, damit EPJahre korrekt erscheinen
- Sichtbarkeit der EP-Jahre hängt nun davon ab, on Primarjahrgänge vorhanden sind
- Feld "Sichtbar" in Tabelle "Klassen" entfernt
- Neue Datenquelle "LehrerDSVGOEinwilligungen"
- Neue berechnete Felder für die Reportausgabe in folgenden Datenquellen: Schueler, Schueler_der_Klasse, KursSchueler

*AlleVornamen*

*Rufname*

*NameAlleVornamen*

*NameRufname*

*AlleVornamenName*

*RufnameName*

- *istErsatzPflichtFS* bei Prüfung, ob ein Fach als Sprachprüfungsfach in Frage kommt, entfernt
- EP-Jahre bei Schnittstellenimport angepasst
- Versetzungsprozedur bei Grundschulen und weiteren Schulen mit Primarstufe (Primus) angepasst.
- Mahnung bei Schnittstellenexport und -import berücksichtigt
- Lauffähig mit dem SVWS-Server 1.0.7 und 1.0.8.

## v3.1.11 vom 16.03.2025

- Bugfixes
- Lauffähig mit SVWS-Server 1.0.4.

## v3.1.8 vom 07.02.2025

- Farben wieder einstellbar
- Bugfixes
- Jahrgänge 01 und 02 in der Schulform GS eingeführt (neue Statistik)
- Lauffähig mit SVWS-Server 1.0.4.

## v 3.1.7 vom 27.01.2025

- Behebt noch einen Bug bei der Hochschulung, wenn Fächer mitgenommen werden.

## v3.1.6 vom 24.01.2025

- Bugfixes bei der Hochschulung
- Bugfixing Auswahl
- Lauffähig mit SVWS-Server 1.0.2 und 1.0.3.

## v3.1.4 vom 17.01.2025

- Beim Speichern von Textfeldern werden Leerzeichen am Anfang und Ende des Textes entfernt. Felder mit leerem Inhalt werden als NULL gespeichert
- Diverse Issues aus Github bearbeitet
- Lauffähig mit dem SVWS-Server 1.0.2

## v3.1.3 vom 10.12.2024

- Über den folgenden Eintrag in der Datei ADMIN.INI kann nun der Proxy eingetragen werden:

\[Proxy\]

Server=

Port=

## v3.1.2 vom 09.12.2024

- Die Benutzerverwaltung erfolgt nun auch über die API des SVWS-Servers.
- Bugs wurden behoben
- Die Versionskontrolle zwischen SVWS-Server und SchILD-NRW3 ist nun bidirektional.
- unbenutzte Vorlagen wurden aus dem Installationsordner entfernt.
- die aktuellen Reports aus der Basis-Sammlung wurden eingebunden.
- Lauffähig mit SVWS-Server 1.0.2

## Version 3.1.0 vom 18.10.2024 - Erstveröffentlichung

- Eine öffentliche Beta-Version steht zum Download auf der Homepage zur Verfügung:

[https://www.svws.nrw.de/download/schild-nrw3](<https://www.svws.nrw.de/download/schild-nrw3>)

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Versionsgeschichte_von_SchILD-NRW_3) · Quellrevision 6234.
