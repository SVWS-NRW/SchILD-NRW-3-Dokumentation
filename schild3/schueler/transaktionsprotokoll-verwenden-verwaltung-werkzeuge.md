---
title: "Fehler von Gruppenprozessen im Transaktionsprotokoll prüfen"
source_pageid: 917
source_revision: 5297
---

# Fehler von Gruppenprozessen im Transaktionsprotokoll prüfen

Aktivieren Sie bei der Fehlersuche das Transaktionsprotokoll, um intern abgefangene Datenbankfehler sichtbar zu machen.

[![Aktivieren des Transaktionsprotokolls.](/bilder/schueler/verwaltung-werkzeuge-transaktionsprotokoll-aktivieren.png)](/bilder/schueler/verwaltung-werkzeuge-transaktionsprotokoll-aktivieren.png)

*Aktivieren des Transaktionsprotokolls.*

Bei Gruppenprozessen werden i.d.R. SQL-Befehle an die Datenbank geschickt.

Wenn die aus irgendeinem Grunde nicht erfolgreich ausgeführt werden können, z.B. wegen eines defekten Index, so wird die Fehlermeldung intern abgefangen, damit der Benutzer nicht zahlreiche einzelne Fehlermeldungen erhält.

Wenn ein Gruppenprozess scheinbar nichts tut, prüfen Sie zuerst **Filter, Markierungen, Bearbeitungsauswahl, Zielabschnitt und Optionen**. Stimmen diese, kann das Transaktionsprotokoll intern abgefangene Datenbankfehler sichtbar machen.

Wurde das "*Transaktionsprotokoll* über *Verwaltung ➜ Werkzeuge ➜ Transaktionsprotokoll verwenden ➜* **Transaktionsprotokoll aktivieren**" eingeschaltet, werden diese Fehlermeldungen intern gespeichert und können über "Transaktionsprotokoll zeigen" sichtbar gemacht werden.  

[![Hier wurde das Protokoll aktiviert.](/bilder/schueler/verwaltung-werkzeuge-transaktionsprotokoll-ist-aktiviert.png)](/bilder/schueler/verwaltung-werkzeuge-transaktionsprotokoll-ist-aktiviert.png)

*Hier wurde das Protokoll aktiviert.*

Dass das Transaktionsprotokoll aktiviert wurde, ist daran ersichtlich, dass vor *Transaktionsprotokoll* nun ein "**+**" steht.

Weiterhin wird nun *Transaktionsprotokoll zeigen* zur Verfügung gestellt, in dem nun eventuell erzeugte Fehler abgelegt werden.

::: info Hinweis

Bei einem Aufruf von "Transaktionsprotokoll zeigen", wird anschließend das Transaktionsprotokoll automatisch gelöscht, damit der Speicher nicht irgendwann überläuft.

Ein Protokoll kann nur einmal angezeigt werden. Wenn Sie es später erneut benötigen, speichern Sie es vor dem Schließen separat aus dem Protokollfenster.

Es kann bei einem reprodzierbar auftretenden Fehler über diesen ein neues Protokoll erzeugt werden.

:::

Soll ein weiteres Transaktionsprotokoll erzeugt werden, muss die Protokollierung erneut aktiviert werden.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Transaktionsprotokoll_verwenden_(Verwaltung_Werkzeuge)) · Quellrevision 5297.
