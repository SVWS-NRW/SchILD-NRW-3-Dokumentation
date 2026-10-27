---
title: "Bescheinigungen für den bilingualen Bildungsgang erstellen"
---

# Bescheinigungen für den bilingualen Bildungsgang erstellen

Wählen Sie die Bescheinigung für die Sekundarstufe I oder II und passen Sie die Parameter an die Unterrichtssprache, Sachfächer und Stundenzahlen Ihrer Schule an.

## Bescheinigung für die Sekundarstufe I oder II wählen

[![Der Speicherort der Bescheinigungen für die SI und SII](/bilder/serienbriefe/bili-bescheinigungen-speicherort.png)](/bilder/serienbriefe/bili-bescheinigungen-speicherort.png)

*Der Speicherort der Bescheinigungen für die SI und SII*

In der Basisreportsammlung von SchILD-NRW 3 befinden sich Bescheinigungen des bilingualen Bildungsgangs für die Sekundarstufe I und II. Diese sind mit dem MSB abgestimmt und entsprechen den aktuellen Vorgaben. Sie finden diese Reports in den Unterordnern *Reports SI* und *Reports SII*.

Es gibt jeweils eine Bescheinigung in englischer und französischer Sprache. Jede Bescheinigung kann mit drei oder vier Sachfächern gedruckt werden. Werden nur drei Sachfächer angegeben, passt der Report automatisch die Anzahl der ausgegebenen Spalten an.

## Die Ausgabe über Parameter steuern

[![Passen Sie den Report über Parameter an und speichern Sie ihn anschließend.](/bilder/serienbriefe/bili-bescheinigungen-parameter-anpassen.png)](/bilder/serienbriefe/bili-bescheinigungen-parameter-anpassen.png)

*Passen Sie den Report über Parameter an und speichern Sie ihn anschließend.*

In der Standardeinstellung erfolgen beim Aufruf der Bescheinigungen mehrere Abfragen zu den Fächern und den unterrichteten Stundenzahlen. Die Reports können so bearbeitet werden, dass die Abfragen bereits die korrekten Bezeichnungen und Stundenzahlen Ihrer Schule enthalten oder dass der Report ohne Abfragen direkt gedruckt wird.

Anpassungen der Parameter werden mit dem `Speichern` des Reports dauerhaft übernommen.

### Manuell

Setzen Sie diesen Parameter auf `True`, wenn Sie die Textteile selbst vollständig ausfüllen und keine Platzhalter verwenden möchten. Beim Reportstart erscheinen dann keine Abfragen. Nur die Namen der Schülerinnen und Schüler werden weiterhin automatisch eingesetzt. Ersetzen Sie alle übrigen Platzhalter durch feste Texte. Der Standardwert ist `False`.

### Abfragen

Mit diesem Parameter schalten Sie die Fächerabfragen beim Reportstart ein oder aus. Abgefragt werden das Sprachenfach, die Sachfächer 1 bis 4 und in der Sekundarstufe II zusätzlich das `AbiSachfach`. Der Standardwert `True` schaltet die Abfragen ein. Die Auswahl richtet sich nach den `Values` der zugehörigen Parameter. So können Sie die Fächer vor dem Druck anpassen, ohne die Vorlage zu bearbeiten.

Wird der Parameter auf ***False*** gesetzt, erfolgen keine Abfragen. In diesem Fall verwendet der Report unmittelbar die in den Parametern gespeicherten `Values`.

### Sprachenfach

Dieser Parameter enthält Angaben zur bilingualen Unterrichtssprache sowie zu den in der Fremdsprache unterrichteten Wochenstunden von Klasse 5 bis 10 (SI) beziehungsweise von Klasse 5 bis Q2 (SII). Die Struktur lautet:

*"Deutsche Bezeichnung,Bezeichnung in der Fremdsprache,Stundenzahl Jahrgangsstufe 5,Stundenzahl Jahrgangsstufe 6,Stundenzahl Jahrgangsstufe 7,..."*

Ein typischer Eintrag für die SI ist beispielsweise: *"Englisch,English,4,4,4,4,4,4"* für vierstündigen Englischunterricht von Jahrgangsstufe 5 bis 10.

### Sachfach_1 bis Sachfach_4

Diese Parameter enthalten Angaben zu bilingual unterrichteten Sachfächern sowie zu den jeweiligen Wochenstundenzahlen von Klasse 5 bis 10 (SI) beziehungsweise von Klasse 5 bis Q2 (SII). Die Struktur entspricht der des Parameters Sprachenfach:

*"Deutsche Bezeichnung,Bezeichnung in der Fremdsprache,Stundenzahl Jahrgangsstufe 5,Stundenzahl Jahrgangsstufe 6,Stundenzahl Jahrgangsstufe 7,..."*

Ein typischer Eintrag für die SI ist beispielsweise: *"Erdkunde,Geography,,,3,3,3,3"* für bilingualen Erdkundeunterricht von Jahrgangsstufe 7 bis 10.

Wenn an Ihrer Schule kein viertes Sachfach bilingual angeboten wird, darf der Parameter Sachfach_4 keinen Eintrag enthalten. Der Wert der Parametereigenschaft `Value` kann nicht direkt gelöscht, sondern nur überschrieben werden. Das vollständige Löschen ist über die Parametereigenschaft `SearchExpression` möglich, indem Sie dort den Text markieren, mit `Entf` löschen und mit `Enter` bestätigen.

### AbiSachfach für die Sekundarstufe II

Dieser Parameter legt fest, welches der belegten bilingualen Sachfächer als drittes oder viertes Abiturfach gewählt wurde. Hinterlegen Sie hier die deutsche Bezeichnung eines belegten Sachfachs. Ein typischer Eintrag für die SII ist beispielsweise: *"Geschichte"*

## Ergebnis

Nachfolgend sehen Sie ein Beispiel der zweiten Seite einer englischsprachigen bilingualen Bescheinigung.

[![BiliBescheinigungen.png](/bilder/serienbriefe/bili-bescheinigungen.png)](/bilder/serienbriefe/bili-bescheinigungen.png)

::: info Hinweis – Siehe auch

- [Basisreports auswählen und verwenden](/reporting/basisreports/basisreports-downloads-themenuebersicht)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Bescheinigungen_des_Bilingualen_Bildungsgangs)
