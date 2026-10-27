---
title: "Die Gesamtprüfung für die Statistik durchführen"
---

# Die Gesamtprüfung für die Statistik durchführen

::: info Hinweis – Geltungsbereich: ASDPC-Verfahren

Dieser Artikel beschreibt die Vorbereitung beziehungsweise Nutzung des bisherigen ASDPC-Verfahrens. Für die amtliche Erhebung **ab dem Schuljahr 2027/2028** ist die Umstellung auf das Statistikmodul des SVWS-Servers angekündigt. Beachten Sie den [offiziellen Zeitplan](https://www.svws.nrw.de/statistik/asdpc-svws-server) und die Vorgaben der jeweiligen Erhebung.

:::

Prüfen Sie die gespeicherten Daten mit den Statistikmodulen und arbeiten Sie gefundene Fehler ab. Das PDF-Protokoll und die Auswahl betroffener Datensätze unterstützen die Korrektur.

## Durchführen der Prüfung

[![Stoßen Sie die Gesamtprüfung der Daten von SchILD-NRW an.](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung.png)

*Stoßen Sie die Gesamtprüfung der Daten von SchILD-NRW an.*

Die Option *Verwaltung ➜ Statistik für IT.NRW* ➜ **Gesamtprüfung der Daten** bewirkt zwei Abläufe in SchILD-NRW.  

[![Die benötigten Daten werden in ScHILD als der Datenbank gelesen und für die Prüfung bereitgstellt.](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-start-modul.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-start-modul.png)

*Die benötigten Daten werden in ScHILD als der Datenbank gelesen und für die Prüfung bereitgstellt.*

Zunächst werden alle relevanten Daten in die StatistikDB.mdb geladen. Danach werden die Module von IT.NRW aufgerufen, die eine erste Fehlerprüfung über die Daten laufen lassen.

Bestätigen Sie das Textfeld mit `OK`.  

Es öffnet sich ein weiteres Textfeld:

     Es wird jetzt die Gesamtprüfung aufgerufen

Bestätigen Sie ebenfalls mit `OK`.  

[![Prüfung der Daten im Statistikmodul.](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-pruefung-starten.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-pruefung-starten.png)

*Prüfung der Daten im Statistikmodul.*

Das folgende Fenster gehört zum Statistikmodul.

Hier wird die Prüfung mit `Prüfung starten` angestoßen.

Die Prüfung von SchILD-NRW findet nicht alle Fehler, die in ASDPC auftauchen können, wo diese Daten dann auch zusätzlich zueinander in Bezug gesetzt werden. Jedoch lassen sich viele grundsätzliche Fehleinträge schon in SchILD auflösen.  

## Arbeit mit den gefundenen Fehlern

### Das PDF-Fehlerprotokoll

::: tip Tipp

Fehler, die Sie in SchILD-NRW beheben, werden auch in den Folgejahren nicht mehr auftreten. Alle Probleme, die aus SchILD exportiert und nur in ASDPC für dieses Jahr bereinigt werden, werden im nächsten Jahr wieder zu lösen sein.

:::

[![Das Ergebnis zeigt die Zahl der gefundenen Fehler und bietet an, das Fehlerprotokoll anzeigen.](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-fehlerprotokoll.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-fehlerprotokoll.png)

*Das Ergebnis zeigt die Zahl der gefundenen Fehler und bietet an, das Fehlerprotokoll anzeigen.*

[![Auszug aus einem Fehlerprotokoll als .pdf.](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-fehlerprotokoll-pdf.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-fehlerprotokoll-pdf.png)

*Auszug aus einem Fehlerprotokoll als .pdf.*

Am Ende der Prüfung können Sie sich das Fehlerprotokoll als PDF ansehen.

Dieses Protokoll kann über den nachfolgenden Menüpunkt **Fehlerprotokoll anzeigen** jederzeit wieder aufgerufen werden.

Im pdf-Fehlerprotokoll ist die **ID** zu sehen, über welche die Schüler identifiziert werden. Weiterhin findet sich **Kürzel** und **Fehlertext**, die einmal technisch und einmal für Menschen lesbar den zu behebenden Fehler bestimmen.

Die **Fehlerart** gibt die Schwere des Fehlers an. Der Umgang mit den Fehlerarten wird in der Dokumentation der Statistik von IT.NRW besprochen.  

### Auswahl ➜ Schüler mit Statistikfehlern anzeigen

[![Befüllen Sie den Schülercontainer über Auswahl mit den Schülern mit Statistikfehlern.](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-auswahl.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-auswahl.png)

*Befüllen Sie den Schülercontainer über Auswahl mit den Schülern mit Statistikfehlern.*

Weiterhin lassen sich nach einer ausgeführten Gesamtprüfung über *Auswahl* alle gefundenen **Schüler mit Statistik-Fehlern** anzeigen und abarbeiten.  

[![Im schwebenden Fenster sind alle zu einem Schüler gehörenden Statistikfehler zu sehen. Markieren Sie bearbeitete Fehler als Erledigt. Verlassen Sie dieses Fenster über Standard-Auswahl.](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-auswahl-fehler-bearbeiten.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-auswahl-fehler-bearbeiten.png)

*Im schwebenden Fenster sind alle zu einem Schüler gehörenden Statistikfehler zu sehen. Markieren Sie bearbeitete Fehler als **Erledigt**. Verlassen Sie dieses Fenster über Standard-Auswahl.*

Im Schülercontainer finden sich nun alle Schüler mit Statistikfehlern.

Im schwebenden Fenster sind alle Fehler zu diesem Schüler zu sehen, diese können nun in SchILD behoben werden. Wurde ein Fehler bearbeitet, lässt sich der Haken bei **Erledigt** setzen.

Um diesen Modus, in dem die Statistikfehler bearbeitet werden, wieder zu verlassen, klicken Sie oben auf `Standard-Auswahl`.  

[![Sollen die als Erledigt markierten Fehler aus der Datenbank entfernt werden?](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-auswahl-verlassen.png)](/bilder/vorbereitung/verwaltung-statistik-gesamtpruefung-auswahl-verlassen.png)

*Sollen die als Erledigt markierten Fehler aus der Datenbank entfernt werden?*

Es öffnet sich nun die Frage, ob alle als *Erledigt* markierten Einträge gelöscht werden sollen. Diese Frage kann mit `Ja` bestätigt werden, denn die Fehler wurden ja *erledigt*.  
Öffnen Sie später wieder *Auswahl* ➜ **Schüler mit Statistikfehlern zeigen** kann die Arbeit nahtlos am letzten Stand fortgesetzt werden.

Es kann jederzeit über *Verwaltung ➜ Statistik für IT.NRW* ➜ **Gesamtprüfung der Daten** eine neue Prüfung angestoßen werden. Bereinigte Fehler werden damit nicht mehr gefunden, die alten Fehler erneut und neu hinzugekommene ebenfalls.

::: tip Richtig – Fertig

Wiederholen Sie den Vorgang des Prüfens und des Bereinigens der Fehler so oft wie notwendig.

:::

::: tip Tipp

Es kann sich empfehlen, zu unterschiedlichen Zeiten des Schuljahres die Gesamtprüfung laufen zu lassen, auch wenn die Statistik noch nicht anliegt. Ein guter Zeitpunkt wäre etwa nach dem Abschluss des jährlichen Neuaufnahmeprozesses kurz nach Beginn des neuen Schuljahres, um dann schon eventuell fehlende oder fehlerhafte Daten bei Schülern oder Lehrkräften aufzuspüren.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Gesamtpr%C3%BCfung_der_Daten_(Verwaltung_Statistik_f%C3%BCr_IT-NRW))
