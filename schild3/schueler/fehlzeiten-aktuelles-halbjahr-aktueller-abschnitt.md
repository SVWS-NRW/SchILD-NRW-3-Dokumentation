---
title: "Fehlzeiten tagesbezogen erfassen und auswerten"
source_pageid: 531
source_revision: 5321
---

# Fehlzeiten tagesbezogen erfassen und auswerten

Erfassen Sie Fehlzeiten mit Datum, Stunden, Fach und Lehrkraft. Prüfen Sie zuvor den für Ihre Schule eingestellten Erfassungsmodus.

## Fehlzeiten tagesbezogen verwalten

Im Reiter *Fehlzeiten* können beliebige Fehlzeiten, die Option hier ist *"tagesbezogen"*, erfasst werden. Die Erfassung erfolgt aufgrund der entsprechenden Daten auch konkreten Stunden, Fächern und Lehrkräften zugeordnet.

[![Anlegen einer Zeile für Fehlzeiten.](/bilder/schueler/akt-halbj-fehlstunden-1.png)](/bilder/schueler/akt-halbj-fehlstunden-1.png)

*Anlegen einer Zeile für Fehlzeiten.*

Eine neue Zeile wird über das **+** angelegt und mit dem Haken bestätigt.

In jeder Zeile werden ein **Datum**, ein **Fach** und eine **Lehrkraft**. Um die konkrete Fehlzeit festzuhalten, wird ein Intervall **Von Stunde** bis **Bis Stunde** angelegt, dann wird eingetragen, wie viele konkrete **Fehlstunden** dieser Eintrag beinhaltet.

Weiterhin wird erfasst, ob diese Fehlzeit als **Entschuldigt** gilt (*"Ja"*) oder nicht (*"Nein"*).  

## Einstellen der Fehlzeitenverwaltungsart

[![Fehlzeitenmodus für die Sekundarstufe I und II getrennt einstellen.](/bilder/schueler/akt-halbj-fehlstunden-2.png)](/bilder/schueler/akt-halbj-fehlstunden-2.png)

*Fehlzeitenmodus für die Sekundarstufe I und II getrennt einstellen.*

Wie Fehlzeiten erfasst werden, lässt sich über *"Verwaltung"* ➜ *"Einstellungen"* ➜ *"Fächer, Noten"* im Feld *"Eingabemodus"* jeweils für die Sekundarstufe I und II getrennt einstellen.

Jeder der beiden Einträge lässt zwischen folgenden Arten wählen:

- **Aus den fachbezogenen Fehlstunden berechnen**: Die Fehlstunden werden in den Leistungsdaten in der Zeile für jedes Fach beziehungsweise jeden Kurs erfasst.
- **Aus den tagesbezogenen Fehlzeiten berechnen**: Die Fehlstunden werden im *"Akt. Halbjahr"* über *"Fehlzeiten"* erfasst.
- **Eingabe der Gesamt-Fehlzeiten**: Die Fehlzeiten werden in ihrer Gesamtheit im *"Akt. Halbjahr"* in den *"Allgemeinen Angaben"* direkt eingetragen.

Die Notenerfassung mit GradeHub und WeNoM ist dem SVWS-Server zugeordnet. Einrichtung und Bedienung sind in der [SVWS-Dokumentation](https://doku.svws-nrw.de/) beschrieben; siehe auch [Noten mit GradeHub und WeNoM erfassen](/zeugnisse/noteneingabe).

## Auswerten von Fehlzeiten

::: tip Tipp

Je nach von der jeweiligen Prüfungsordnung vorgesehenem Umgang mit Fehlzeiten kann ein systematischer Umgang mit diesen Feldern empfehlenswert sein.

:::

In den *Allgemeinen Angaben* lässt sich auch das Feld "**Max.Fehlstd.**" mit einem Wert für maximale Fehlstunden befüllen. Überschreiten die **Fehlstunden** den hier gesetzten Wert, wird er fett gedruckt.

::: example Beispiel

Relevant kann das systematische Verarbeiten von "Maximalen Gesamtfehlstunden" werden, wenn eine Prüfungsordnung die Versendung von Mahnungen oder Entlassungen für das Überschreiten bestimmter Grenzen bei Personen vorsieht, welche ihre Schulpflicht erfüllt haben. Dies trifft etwa für BKs zu.

:::

### Der Schülerfilter

[![Felder im Schülerfilter zu Fehlstunden.](/bilder/schueler/akt-halbj-allgemein-6.png)](/bilder/schueler/akt-halbj-allgemein-6.png)

*Felder im Schülerfilter zu Fehlstunden.*

Mit dem *Filter I* kann auf die Fehlstunden beziehungsweise die unentschuldigten Fehlstunden gefiltert werden, um die Funde dann entsprechend weiter zu nutzen. Der Filter I erlaubt auch eine Angabe von positiven ("Überschreitung") oder negativen Werten ("nahe dran"), um auf eine *Abweichung vom Grenzwert* zu filtern.  

### Datenquellen im Reportbaukasten

Auf Fehlzeiten kann im Reportbaukasten mit den entsprechenden Datenquellen zugegriffen werden.

- *SchuelerFehlzeiten*: Diese *schüler*bezogene Datenquelle gibt für den Schüler die im jeweiligen Lernabschnitt angefallenen Fehlzeiten aus. Der Report muss hierzu also ein Element der Datenquelle *"Lernabschnitte"* enthalten.
- **FehlzeitenUebersicht** gibt Fehlzeiten für die ausgewählte Schülergruppe aus. Damit lassen sich zum Beispiel eine Tagesmeldung oder die Fehlzeiten ab Monatsbeginn erstellen.

---

[Originalartikel im Wiki](<https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Fehlzeiten_(Aktuelles_Halbjahr_/_Aktueller_Abschnitt>) · Quellrevision 5321.

