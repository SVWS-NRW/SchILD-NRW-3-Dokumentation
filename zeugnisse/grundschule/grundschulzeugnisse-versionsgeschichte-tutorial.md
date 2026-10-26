---
title: "Frühere Änderungen an Grundschulzeugnissen nachschlagen"
source_pageid: 1458
source_revision: 5860
---

# Frühere Änderungen an Grundschulzeugnissen nachschlagen

Lesen Sie die übernommene Versionsgeschichte der Grundschulformulare. Die Einträge dokumentieren frühere Änderungen an Reports und ihren Einstellungen.

## Version 12.12.2023

### GS-Textzeugnisse

- Für den Jahrgang 04 gibt es nun Option, im Halbjahreszeugnis die Übergangsempfehlung auf Seite 2 nach Anlage „Schulformempfehlung“ gemäß VVzAO-GS zu drucken.  
  Konkrete Angabe in der HybridzeugnisEinstellungen.ini-Datei: SFESeite2 (Durch Setzen eines Semikolons kann die Option deaktiviert werden).
- Der Abstand nach dem Notenblock kann nun über die HybridzeugnisEinstellungen.ini-Datei gesteuert werden. Dies ist vor allem für einseitige Zeugnisse der Jahrgangstufe 4.2 sinnvoll.  
  Konkrete Angabe in der Ini-Datei: AbstandNachNotenblock=15
- Die Fachbezeichnung „Deutsch“ wurde doppelt aufgelistet, sofern die Option „Auf Zeugnis“ bei den Fächern SG, LE und RS deaktiviert war. Dies ist nun behoben.
- über die HybridzeugnisEinstellungen.ini-Datei kann nun die Schriftart festgesetzt werden. Die Schriftart des Schulkopfes bleibt von der Einstellung unberührt.  
  Konkrete Angabe in der Ini-Datei: Schriftart=Calibri

### Anlage „Schulformempfehlung“

- Im Zeugnisordner der GS-Textzeugnisse wurde ein separater Report Anlage_Schulformempfehlung.rtm nach Anlage „Schulformempfehlung“ gemäß VVzAO-GS hinzugefügt.

### GS-Ankreuzzeugnis

- Die Überschrift „Bemerkung“ für den ASV-Bemerkungstext wurde nicht auf invisible gestellt, nachdem ein Schüler eine Bemerkung für das ASV auf dem Zeugnis hat. Dies ist nun behoben.

### Alle Zeugnisse

Die Floskel für SuS mit Förderschwerpunkt wurde angepasst: FSP: Lernen + zieldifferent: „… wurde im Förderschwerpunkt Lernen … im zieldifferenten Bildungsgang Lernen….“ FSP: geistige Entwicklung + zieldifferent: „… Förderschwerpunkt geistige Entwicklung … zieldifferenten Bildungsgang geistige Entwicklung….“ Sonst: „… Förderschwerpunkt xxx … im (zieldifferenten) Bildungsgang Grundschule….“ Hinweis: Lernen und geistige Entwicklung muss für den zieldifferenten Bildungsgang als FSP1 eingetragen sein.

### GS-AnkreuzZeugnis_mit_Notenblock.rtm

- Zeilenumbruch nach dem Bemerkungstext für ASV eingefügt.

## Version 15.05.2023

### Ini-Dateien

- Die Standard-Einstellungen wurden angepasst und um fehlende Einträge ergänzt.
- Das Layout der Ini-Dateien wurde überarbeitet. Es wurden Erläuterungen zu den einzelnen Optionen hinzugefügt.
- Ini-Dateien der Vorgängerversion können ebenso weiterhin verwendet werden.

### GS-AnkreuzZeugnis.rtm

- Eine Linie wurde für die Fächergruppe Deutsch ergänzt.

### Alle Zeugnisse

- Bug bezüglich der Schulformempfehlung für den Eintrag „keine Empfehlung“ behoben.
- Der Jahrgang wird je nach Angabe in der Ini-Datei nun auch für zieldifferente SuS ausgegeben.

### GS-Lernstandsbericht_Hybridform.rtm, GS-Lernstandsbericht_Hybridform.rtm

- In dem Passus „xxx besucht seit dd.mm.jjjj eine deutsche Schule“ wurde das Datum auf das Aufnahmedatum gesetzt (zuvor: Anmeldedatum)

## Version 14.12.2022

### GS-Ankreuzzeugnisse

- Überflüssiger Seitenumbruch, der bei der Verwendung des Zeugnisses für Jahrgangsstufe 4 beim Auslassen des Begründungstextes für den Wechsel nach Sek1 auftrat, wurde entfernt

## Version 14.10.2022

### GS-Ankreuzzeugnisse

- Wenn für ASV keine Ankreuzkompetenzen vorhanden waren, sondern nur ein Bemerkungstext, so wurde die Überschrift für ASV nicht korrekt dargestellt. Das ist nun behoben.
- Es gibt Fälle, wo bei der Fachgruppe "Deutsch" (die ja aus mehreren Fächern bestehen kann) gewünscht wird, dass die "Einzelfächer" (Lesen, Rechtschreiben, Sprachgebrauch) zusammengehalten werden, nicht aber die Gruppe "Deutsch" insgesamt.
- Bisher war es möglich, jahrgangsbezogen das "Zusammenhalten" der Fachgruppen über folgende Einträge in der Konfigurationsdatei zu steuern:  
  ZusammenhaltenE1=  
  ZusammenhaltenE2=  
  Zusammenhalten03=  
  Zusammenhalten04=  
    
  Beispiel  
  ZusammenhaltenE2=Deutsch;Englisch;Mathematik  
  Dabei wurde aber die Gruppe "Deutsch" als Ganzes zusammengehalten, was z.B. zu Seitenumbrüchen führen konnte, obwohl noch genug Platz für eines der Teilfächer vorhanden war. Nun kann über einen Eintrag "Deutsch(einzeln)" gesteuert werden, dass die Einzelfächer zusammengehalten werden, nicht aber die Fachgruppe insgesamt.  
    
  Beispiel  
  ZusammenhaltenE2=Deutsch(einzeln);Englisch;Mathematik  
  Wichtig: Die funktioniert derzeit nur für die Fachgruppe "Deutsch"

## Version 23.01.2021

### GS-Lernstandsbericht_Hybridform.rtm

- Der zweispaltige "Notenblock" wurde komplett entfernt. Das hat zur Folge, dass die Bereiche \[Notenzeugnisreihenfolge_Links\] und \[Notenzeugnisreihenfolge_Rechts\] in der Konfigurationsdatei nicht mehr benötigt werden. Auch der Eintrag "Noten2SpaltigAbJahrgang=" im Bereich \[Optionen\] wird nicht mehr benötigt.

### GS-HybridZeugnis.rtm

- Einige kleiner Korrekturen/Anpassungen.

### GS-AnkreuzZeugnis.rtm

- Die Vorlage erkennt nun automatisch, ob ein zusätzlicher Subreport "Kompetenz_Erlaeuterung.rtm" (mit Erläuterungen zu den Kompetenzstufen) vorhanden ist und fügt diesen dann als zusätzliches Blatt an. Die Vorlage "GS-AnkreuzZeugnis_Mit_Erlaeuterung.rtm" wird nicht mehr benötigt.

## Version 15.6.2020

- Änderungen für Druck in Dokumentenverwaltung
- Anpassung der Rechtshilfebelehrung ("dehnen")
- Separate Vorlage "GS-AnkreuzZeugnis_Mit_Erlaeuterung.rtm" (für Ausgabe eines Erläuterungsblattes am Ende) wird nicht mehr benötigt. Falls eine Datei "Kompetenz_Erlaeuterung.rtm" im Verzeichnis der Reportvorlage gefunden wird, wird diese automatsich am Ende jedes Zeugnisses geladen.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Grundschulzeugnisse_Versionsgeschichte_(Tutorial)) · Quellrevision 5860.
