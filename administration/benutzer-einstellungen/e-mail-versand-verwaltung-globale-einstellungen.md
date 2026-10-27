---
title: "Den E-Mail-Versand einrichten"
---

# Den E-Mail-Versand einrichten

SchILD-NRW 3 kann E-Mails über das in Windows eingestellte E-Mail-Programm oder direkt über einen Mailserver versenden. Für den direkten Versand wird **SMTP** verwendet, das Übertragungsverfahren zum Versenden von E-Mails. Prüfen Sie außerdem die Empfängeradressierung und die Auswahl schulischer oder privater E-Mail-Adressen.

Es besteht an mehreren Stellen in SchILD die Option, direkt E-Mails zu versenden. Ein Beispiel wäre der Versand von erzeugten Reports per E-Mail, mitunter bietet aber auch die Oberfläche von SchILD an diversen Stellen einen E-Mail-Versand an.

Hierzu muss SchILD für E-Mails vorbereitet werden.

[![Einstellungen zum Email-Versand.](/bilder/benutzer-einstellungen/verwaltung-email-versand-standard.png)](/bilder/benutzer-einstellungen/verwaltung-email-versand-standard.png)

*Einstellungen zum Email-Versand.*

Gehen Sie über *Verwaltung ➜ Einstellungen ➜ E-Mail-Versand*, um die notwendigen Konfigurationen vorzunehmen.

- **Simple MAPI verwenden** schaltet eine vereinfachte Anbindung an das E-Mail-Programm ein. Einige E-Mail-Programme benötigen diese Einstellung. Prüfen Sie in der Dokumentation Ihres Programms und mit einer Testnachricht, welche Einstellung für Ihre Installation funktioniert.
- **Bei Sammel-E-Mails Adressen als BCC eintragen** sorgt dafür, dass unterschiedliche Empfänger die E-Mail-Adressen aller anderen Teilnehmer nicht sehen können. **Es wird wegen modernem Datenschutz dringend empfohlen, diese Option zu aktivieren.**
- **Verwendung von schulischen/dienstlichen E-Mail-Adressen von SuS/Lehrkräften** legt fest, ob vorrangig die schulische beziehungsweise dienstliche oder die private Adresse verwendet wird. **SuS** steht hier für Schülerinnen und Schüler. Für die schulische Kommunikation werden schulische und dienstliche Adressen empfohlen.

## Aufruf des Standard-E-Mail-Programmes

Typische Mailprogramme sind z.B. Outlook oder Thunderbird. Bei diesem Eintrag sendet SchILD-NRW die Mails über das Mailprogramm, welches in Windows als Standard für das Kommando "mailto:" definiert wurde.

Wählen Sie in den Windows-Einstellungen das vorgesehene Standardprogramm für E-Mail beziehungsweise `mailto:` aus. Prüfen Sie den Aufruf mit einer Testnachricht ohne personenbezogene Daten.

Außerdem sollten Sie im verwendeten Standardbrowser kontrollieren, ob das gewünschte Mailprogramm eingetragen ist.  

## Direkt per SMTP

[![Konfiguration des SMPT-Servers.](/bilder/benutzer-einstellungen/verwaltung-email-versand-smtp.png)](/bilder/benutzer-einstellungen/verwaltung-email-versand-smtp.png)

*Konfiguration des SMPT-Servers.*

Wenn Sie diese Einstellung wählen, müssen Sie in den folgenden Feldern Ihre SMTP-Server-Daten eintragen.

SchILD-NRW sendet dann direkt die Mails über diesen Server. Bitte entnehmen Sie die Einstellungen zu **Server**, **Port** und der jeweiligen **SSL-Verschlüsselung** den Informationen Ihres Mailproviders. Durch Deaktivierung der Option "Konfiguration automatisch anpassen" kann erreicht werden, dass die „SMTP-DLL“ keine eigenständigen Anpassungen bei den SMTP-Parametern macht.

::: info Hinweis

Die Nachrichten werden nicht zwischengespeichert.

:::

Bei den individuellen Einstellungen wird dann die "SMTP-Schaltfläche" sichtbar und die Konto-Zugangsdaten des jeweiligen Users können eingetragen werden.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=E-Mail-Versand_(Verwaltung_Globale_Einstellungen))
