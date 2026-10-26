---
title: "Die Datenbankverbindung durch Pings aufrechterhalten"
source_pageid: 1497
source_revision: 6098
---

# Die Datenbankverbindung durch Pings aufrechterhalten

Legen Sie in Admin.ini das Zeitintervall für regelmäßige Pings fest, damit die Datenbankverbindung bei längerer Untätigkeit erhalten bleibt.

[![Setzen Sie den automatischen Ping, um die Datenbankverbindung durch SchILD-NRW-3 am Leben zu erhalten.](/bilder/datenbanken/tutorials-technisch-alive-ping.png)](/bilder/datenbanken/tutorials-technisch-alive-ping.png)

*Setzen Sie den automatischen Ping, um die Datenbankverbindung durch SchILD-NRW-3 am Leben zu erhalten.*

Ein **Ping** ist ein regelmäßig gesendetes Verbindungssignal. Sie können festlegen, in welchem Zeitabstand SchILD-NRW dieses Signal an den Datenbankserver sendet.

Dadurch wird verhindert, dass die Datenbankverbindung nach einer gewissen Zeit der Untätigkeit vom Datenbanktreiber gekappt wird.

Öffnen Sie die Datei `Admin.ini` im Installationsverzeichnis von SchILD-NRW 3. Der Eintrag im Abschnitt `Administration` lautet:

` [Administration] `

`KeepConnectionAliveInterval=5`

Der Wert gibt den Abstand zwischen den Pings in **Minuten** an. Im Beispiel wird alle fünf Minuten ein Signal gesendet.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Datenbankverbindung_durch_automatische_Pings_am_Leben_erhalten_(Tutorial)) · Quellrevision 6098.
