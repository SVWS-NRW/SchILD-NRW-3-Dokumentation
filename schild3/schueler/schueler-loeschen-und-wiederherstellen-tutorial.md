---
title: "Schülerdatensätze löschen und wiederherstellen"
source_pageid: 1240
source_revision: 7219
---

# Schülerdatensätze löschen und wiederherstellen

Unterscheiden Sie den Löschvermerk vom endgültigen Entfernen eines Schülerdatensatzes. Mit Löschvermerk versehene Datensätze können aus dem Papierkorb wiederhergestellt werden.

## Schüler löschen

[![Löschen Sie Schüler mit einem Klick auf das "-". Dies setzt einen Löschvermerk auf diesen Schüler und zeigt ihn nicht mehr an.](/bilder/schueler/tutorials-schueler-loeschen.png)](/bilder/schueler/tutorials-schueler-loeschen.png)

*Löschen Sie Schüler mit einem Klick auf das "**-**". Dies setzt einen Löschvermerk auf diesen Schüler und zeigt ihn nicht mehr an.*

Schüler lassen sich in der *Schüler*-Übersicht mit dem "**-**" aus dem Container entfernen.

Damit sind diese aber noch nicht aus der Datenbank entfernt, sondern werden lediglich mit einem *Löschvermerk* versehen und durch diesen nicht mehr aufgeführt.

Stattdessen wird der Schüler nur noch unter *Auswahl* ➜ **Papierkorb zeigen** angezeigt.  

## Schüler wirklich löschen

[![Wählen Sie die Schüler mit Löschvermerk aus.](/bilder/suchen-gruppenprozesse/gruppenprozesse-schueler-loeschen-auswahl.png)](/bilder/suchen-gruppenprozesse/gruppenprozesse-schueler-loeschen-auswahl.png)

*Wählen Sie die Schüler mit Löschvermerk aus.*

Um eine tatsächliche Löschung aus der Datenbank vorzunehmen, sind erst alle Schüler mit Löschvermerk über *Auswahl* ➜ **Papierkorb zeigen** anzuwählen.  

[![Markieren Sie die zu löschenden Schüler oder löschen Sie den ganzen Papierkorb.](/bilder/suchen-gruppenprozesse/gruppenprozesse-schuelerdatensaetze-loeschenl.png)](/bilder/suchen-gruppenprozesse/gruppenprozesse-schuelerdatensaetze-loeschenl.png)

*Markieren Sie die zu löschenden Schüler oder löschen Sie den ganzen Papierkorb.*

Wechseln Sie auf den Reiter *Gruppenprozesse*.

Hier wählen Sie die Schüler aus, die tatsächlich gelöscht werden sollen - oder wenden Sie den Gruppenprozess auf die komplette Gruppe an.

Klicken Sie dann auf `Schüler-Datensätze löschen`.  

[![Bestätigen Sie den Löschvorgang mit Ja.](/bilder/suchen-gruppenprozesse/gruppenprozesse-schuelerdatensaetze-loeschen-ja.png)](/bilder/suchen-gruppenprozesse/gruppenprozesse-schuelerdatensaetze-loeschen-ja.png)

*Bestätigen Sie den Löschvorgang mit `Ja`.*

Bestätigen Sie den Löschvorgang mit `Ja`.

Die Löschaktion wird durchgeführt und die Schüler sind dauerhaft aus der Datenbank entfernt.  

[![Stellen Sie die Standardauswahl im Schülerfilter wieder her.](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-filter-aufheben.png)](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-filter-aufheben.png)

*Stellen Sie die Standardauswahl im Schülerfilter wieder her.*

Der Schülercontainer filtert aber noch immer auf den Papierkorb.

Klicken Sie auf das rote Filtersymbol, um die Standardeinstellung des Filters im Schülercontainer wiederherzustellen.  

## Schüler wiederherstellen

Sind Schüler noch im Papierkorb und nicht tatsächlich aus der Datenbank gelöscht, können diese wiederhergestellt werden, so dass sie wieder in der normalen Ansicht verfügbar sind.

Hierzu muss die *Löschmarkierung* wieder entfernt werden. Diese ist in den *Individualdaten* gespeichert, wird in den Masken *Individualdaten I* oder *Individualdaten II* nicht angezeigt.

[![Lassen Sie sich den Papierkorb anzeigen.](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-papierkorb.png)](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-papierkorb.png)

*Lassen Sie sich den Papierkorb anzeigen.*

Gehen Sie hierzu über *Auswahl* ➜ **Papierkorb zeigen**.

Sie bekommen alle Einträge mit Löschmarkierungen angezeigt.

[![Stellen Sie gelöschte Datensätze aus den Papierkorb wieder her.](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-individuell.png)](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-individuell.png)

*Stellen Sie gelöschte Datensätze aus den Papierkorb wieder her.*

Mit einem `Rechten Mausklick` wird ein Kontextmenü geöffnet, in welchem Sie `Löschmarkierung aufheben` auswählen und damit den Datensatz wieder so anzeigen lassen, wie es die Attribute - zum Beispiel der *Status* - vorgeben.

### Wiederherstellung über einen Gruppenprozess

[![Dsa Wiederherstellen eines Schüler aus dem Papierkorb geht über Gruppenprozesse ➜ Individualdaten ändern. Hier wird die Löschmarkierung auf Nein gesetzt.](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-ueber-gp.png)](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-ueber-gp.png)

*Dsa Wiederherstellen eines Schüler aus dem Papierkorb geht über Gruppenprozesse ➜ **Individualdaten ändern**. Hier wird die **Löschmarkierung** auf Nein gesetzt.*

Löschmarkierungen können weiterhin einzeln oder für Gruppen per Gruppenprozess entfernt werden.

Gehen Sie wie beim *Löschen aus der Datenbank* oben in *Auswahl* ➜ **Papierkorb zeigen**.

Wählen Sie den oder die wiederherzustellenden Schüler aus.

Gehen Sie nun über *Gruppenprozesse* ➜ **Individualdaten ändern** und setzen Sie unter *Allgemeine Angaben* die **Löschmarkierung** auf *Nein*.  

[![Klicken Sie dann auf Ausführen und bestätigen Sie anschließend mit Ja.](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-ausfuehren.png)](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-ausfuehren.png)

*Klicken Sie dann auf `Ausführen` und bestätigen Sie anschließend mit `Ja`.*

Klicken Sie auf `Ausführen` und dann bestätigen Sie mit `Ja` oder brechen Sie noch mit `Nein` ab.

Der Schüler ist nun wiederhergestellt.  

[![Stellen Sie die Standardauswahl im Schülerfilter wieder her.](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-filter-aufheben.png)](/bilder/schueler/tutorials-schueler-loeschen-wiederherstellen-filter-aufheben.png)

*Stellen Sie die Standardauswahl im Schülerfilter wieder her.*

Der Schülercontainer filtert aber noch immer auf den Papierkorb.

Klicken Sie auf das rote Filtersymbol, um die Standardeinstellung des Filters im Schülercontainer wiederherzustellen.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Sch%C3%BCler_l%C3%B6schen_und_wiederherstellen_(Tutorial)) · Quellrevision 7219.
