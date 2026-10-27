---
title: "Daten für LOGINEO NRW als XML exportieren"
---

# Daten für LOGINEO NRW als XML exportieren

Wählen Sie die zu exportierenden Personen und Datenarten für LOGINEO NRW. Prüfen Sie insbesondere die Optionen für externe Schülerinnen und Schüler sowie Personengruppen.

Über diese Auswahl lassen sich Daten der Personen der Schule und Unterrichtsdaten so exportieren, dass sie anschließend in Logineo NRW importiert werden können.  

## Export aus SchILD

[![Exportfenster unter Verwaltung ➜ Export ➜ Logineo NRW (XML).](/bilder/import-export-statistik/verwaltung-export-logineo-xml-01.png)](/bilder/import-export-statistik/verwaltung-export-logineo-xml-01.png)

*Exportfenster unter Verwaltung ➜ Export ➜ Logineo NRW (XML).*

Bei Aufruf des Exportfensters können einige Auswahlen vorgenommen werden:

- **Aktuelle Auswahl für Export verwenden**: Hier werden nur Daten der Schülerinnen und Schüler im Container, d. h. der aktuellen Auswahl, exportiert. Ansonsten werden alle Schülerinnen und Schüler exportiert.
- **Schüler mit Status "Extern" in Export einbeziehen**: Hier werden auch Schülerinnen und Schüler anderer Schulen, die an der eigenen Schule unterrichtet werden (sog. Externe), exportiert.
- **Nur Daten für Schüler und Lehrer ausgeben**: Hier werden nur Daten der Schülerinnen und Schüler und Lehrerinnen und Lehrer ausgegeben. Ist dieser Haken nicht gesetzt, werden z. B. auch Ausbilderinnen und Ausbilder an Berufsschulen exportiert.
- **Nur Personengruppen mit E-Mail-Verteiler exportieren**: Logineo kann auch Personengruppen verwalten, ähnlich wie SchILD. Hier kann gesteuert werden, ob Personengruppen mit oder ohne eingerichteten E-Mail-Verteilern ebenfalls exportiert werden sollen.
- **Schüler mit Status "Beurlaubt" in Export einbeziehen**: Hier wird gesteuert, ob auch Schülerinnen und Schüler mit Status "Beurlaubt" in den Export einbezogen werden.

Zusätzlich kann das Schuljahr und der Abschnitt für den Export festgelegt werden.

Die Daten der Exportdatei sind verschlüsselt. In diesem Exportfenster muss daher das Kennwort eingegeben und wiederholt werden.

Verwenden Sie beim Import in LOGINEO NRW dasselbe Kennwort, um die Exportdatei zu entschlüsseln.

[![Umgang mit Fehlern während des Exports.](/bilder/import-export-statistik/verwaltung-export-logineo-xml-02.png)](/bilder/import-export-statistik/verwaltung-export-logineo-xml-02.png)

*Umgang mit Fehlern während des Exports.*

Während des Exports kann es unter Umständen zu Fehlern kommen, beispielsweise auf Grund von nicht oder falsch angelegter E-Mail-Adressen der Personen der Schule

Das dann erscheinende Fenster kann durch einen Klick auf `Schließen` geschlossen werden, worauf ausgewählt werden kann, ob der Export fortgesetzt werden kann. Prüfen Sie zuerst die gemeldeten Datensätze. Setzen Sie den Export nur fort, wenn die ausgelassenen oder fehlerhaften Angaben für den geplanten Import geklärt sind; korrigieren Sie die Ausgangsdaten andernfalls in SchILD und exportieren Sie erneut.

Nach dem Export findet sich im angegebenen Exportverzeichnis eine Zip-Datei. Deren Inhalt, eine XML-Datei, kann nicht geöffnet oder entpackt werden. Logineo NRW verwendet die Zip-Datei direkt, ohne dass diese entpackt werden muss.  

::: info Hinweis

Beachten Sie den Unterschied von *Logineo NRW LMS* und *Logineo NRW*. Diese Angebote lesen jeweils unterschiedliche Exportdaten von SchILD-NRW ein.

:::

## Import in Logineo NRW

[![Import in Logineo NRW (Schritt 1).](/bilder/import-export-statistik/verwaltung-export-logineo-xml-03.png)](/bilder/import-export-statistik/verwaltung-export-logineo-xml-03.png)

*Import in Logineo NRW (Schritt 1).*

Nach dem Login muss in der Sidebar die Schaltfläche **Administration** ausgewählt werden.  

[![Import in Logineo NRW (Schritt 2).](/bilder/import-export-statistik/verwaltung-export-logineo-xml-04.png)](/bilder/import-export-statistik/verwaltung-export-logineo-xml-04.png)

*Import in Logineo NRW (Schritt 2).*

Im folgenden Fenster kann durch Klick auf den Werkzeugkoffer der **Import** ausgewählt werden.  

[![Import in Logineo NRW (Schritt 3).](/bilder/import-export-statistik/verwaltung-export-logineo-xml-05.png)](/bilder/import-export-statistik/verwaltung-export-logineo-xml-05.png)

*Import in Logineo NRW (Schritt 3).*

Für den Import in Logineo NRW ist ein Administratorzugang erforderlich.

Klicken Sie auf **Datei auswählen**, wählen Sie die zuvor exportierte ZIP-Datei und geben Sie das beim Export festgelegte **Kennwort** ein.
Es folgt der Importprozess, bei dem durch Logineo NRW auch Lösungen für auftretende Importkonflikte vorgeschlagen werden.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Export_f%C3%BCr_Logineo_NRW_(XML)_(Verwaltung_Export))
