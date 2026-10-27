---
title: "Reportausgaben als Serien-E-Mail versenden"
---

# Reportausgaben als Serien-E-Mail versenden

Ein passend eingerichteter Report kann pro Gruppenwechsel eine PDF-Datei erzeugen und an die zugehörige Zielperson versenden. Prüfen Sie dafür die Gruppeneinstellungen und die für die jeweilige Zielgruppe beschriebenen Voraussetzungen.

## Voraussetzungen

Der Report muss eine **Gruppe** enthalten. Eine Gruppe fasst zum Beispiel die Daten einer Person oder einer Klasse zusammen. Ändert sich der Wert des Gruppierungsfeldes, etwa `Schueler.ID`, beginnt die nächste Gruppe. Dies heißt **Gruppenwechsel**. Für jede Gruppe wird eine eigene PDF-Datei erzeugt und automatisch an den zugehörigen Empfänger gesendet.

In dieser Gruppe muss das Auswahlfeld "Neue Seite beginnen", "Neue Datei erzeugen" und "Neue Datei als E-Mail versenden" aktiviert sein. Nur mit diesen Einstellungen erzeugt der Reportdesigner nach jedem Gruppenwechsel ein neues PDF-Dokument und hängt dieses einer E-Mail an die Zielgruppe an.  

[![Serien-E-Mail-Versand](/bilder/reportdesigner/serien-e-mail.png)](/bilder/reportdesigner/serien-e-mail.png)

*Serien-E-Mail-Versand*

In Abhängigkeit des Designs eines Reports können diese als Serien-E-Mail versendet werden. Hierbei wird der Report nicht gedruckt, sondern als PDF-Anhang an die jeweilige Zielperson per E-Mail versendet.  

[![Betreff und Nachrichtentext erstellen](/bilder/reportdesigner/serien-e-mail-betreff.png)](/bilder/reportdesigner/serien-e-mail-betreff.png)

*Betreff und Nachrichtentext erstellen*

Wenn Sie die Option "als Serien-E-Mail versenden" aktivieren, öffnet sich nach kurzer Zeit ein E-Mail-Fenster, in welchem Sie Betreff und E-Mail-Text anpassen können. Nach der Bestätigung dieses Standards werden alle folgenden E-Mails mit dem soeben definierten Betreff und dem E-Mail-Text an die jeweiligen Zielpersonen versendet.  

[![Gruppe als Voraussetzung](/bilder/reportdesigner/serien-e-mail-gruppen.png)](/bilder/reportdesigner/serien-e-mail-gruppen.png)

*Gruppe als Voraussetzung*

## Gruppierung und Empfänger zuordnen

### Gruppe Schueler.ID

Bei der Gruppierung nach `Schueler.ID` erhält jede Schülerin oder jeder Schüler eine eigene E-Mail. In den Programmeinstellungen legen Sie fest, ob die private oder die schulische Adresse verwendet wird. Jede Seite beziehungsweise Gruppe darf nur Daten der empfangenden Person enthalten. Passende Vorlagen der Basisreportsammlung tragen den Zusatz **@SuS**.

### Gruppe Erzieher.ID

Bei der Gruppierung nach `Erzieher.ID` geht die E-Mail an die jeweiligen Erziehungsberechtigten. Dafür müssen eine gültige E-Mail-Adresse und **Erhält Anschreiben** hinterlegt sein. Jede Seite beziehungsweise Gruppe darf nur Daten des zugehörigen Kindes enthalten. Passende Vorlagen der Basisreportsammlung tragen den Zusatz **@Erzieher**.

### Gruppe Schueler.Klasse

Bei der Gruppierung nach `Schueler.Klasse` erhält die jeweilige Klassenleitung die E-Mail. Die Programmeinstellungen bestimmen, ob die private oder die schulische Adresse verwendet wird. Jede Seite beziehungsweise Gruppe darf nur Daten der zugehörigen Klasse enthalten. Passende Vorlagen der Basisreportsammlung tragen den Zusatz **@KL**.

### Gruppe Kurse.ID

Reports mit Gruppenwechsel Kurse.ID werden per E-Mail an die jeweilige Kursleitung versendet. In den Einstellungen von SchILD-NRW 3 kann festgelegt werden, ob die E-Mail an die private oder die schulische E-Mail-Adresse der Kursleitung versendet wird. Ein so versendeter Report darf pro Seite bzw. Gruppe nur Informationen zu Schülern des Kurses enthalten.

### Gruppe Lehrer.ID

Bei der Gruppierung nach `Lehrer.ID` erhält jede Lehrkraft eine eigene E-Mail. In den Programmeinstellungen legen Sie fest, ob die private oder die schulische Adresse verwendet wird. Jede Seite beziehungsweise Gruppe darf nur Daten der empfangenden Lehrkraft enthalten. Passende Vorlagen der Basisreportsammlung tragen den Zusatz **@LuL**.

### Gruppe Schueler.SchulwechselNr

Reports mit Gruppenwechsel LSchueler.SchulwechselNr werden per E-Mail an die jeweilige aufnehmende Schule versendet. Ein so versendeter Report darf pro Seite bzw. Gruppe nur Informationen zu Schülern enthalten, welche von der aufnehmenden Schule aufgenommen werden. In der Basisreportsammlung sind solche Reports mit dem Zusatz @aufnehmende Schule gekennzeichnet.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Serien-E-Mail-Versand)
