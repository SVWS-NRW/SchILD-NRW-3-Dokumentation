---
title: "Die Datenbank sichern"
source_pageid: 1136
source_revision: 5199
---

# Die Datenbank sichern

Eine Datenbanksicherung hält den aktuellen Bearbeitungsstand für eine spätere Wiederherstellung fest. Prüfen Sie zunächst die Voraussetzungen und legen Sie dann das Sicherungsverzeichnis fest.

## Sicherungsdatei und Wiederherstellung einordnen

Erstellen Sie eine Sicherungsdatei der aktuellen Datenbank. Legen Sie zuvor ein erreichbares Sicherungsverzeichnis fest und unterscheiden Sie diese Arbeitssicherung von einem unabhängigen Backup.

[![Über Verwaltung ➜ Einstellungen lässt sich in den Globalen Einstellungen das Verzeichnis für die Sicherungen einstellen.](/bilder/datenbanken/datenbank-sichern-einstellungen.png)](/bilder/datenbanken/datenbank-sichern-einstellungen.png)

*Über Verwaltung ➜ Einstellungen lässt sich in den Globalen Einstellungen das Verzeichnis für die Sicherungen einstellen.*

## 1. Das Sicherungsverzeichnis festlegen

Stellen Sie das Sicherungsverzeichnis über *Verwaltung ➜ Einstellungen* in den *Globalen Einstellungen* unter *Sonstiges* ein. Da der Windows-Nutzer zum Einlesen Zugriff auf dieses Verzeichnis benötigt, bieten sich die Verzeichnisse des SVWS-Servers nicht an.

Hier im Beispiel wurde der Ordner *"Sicherungen"* im *SVWS-Arbeitsverzeichnis* gewählt, so dass Nutzer die Sicherungsdateien verwalten und einlesen können.  

Ein Klick auf *Verwaltung ➜ Datenbank* ➜ **Datenbank sichern** stößt den Prozess an, der eine SQLite-Sicherung der aktuellen Datenbank im eingestellten Sicherungsverzeichnis erzeugt. Prüfen Sie anschließend, ob dort eine neue Sicherungsdatei mit passendem Zeitpunkt entstanden ist.

Hierbei werden die Dateien mit einem Dateinamen nach dem Schema

     [DB Name]_TTMMJJJ_HHMM.slite 

gespeichert. Eine Datei aus der Datenbank *svwsdb*, die am 23.11.2024 um 12:03 gespeichert wird, hieße also

     svwsdb_23112024_1203.sqlite

Diese Kopien können dann im Menüpunkt *Datenbank wiederherstellen* erneut eingelesen werden.

::: info Hinweis

Hierbei wird die aktuelle Datenbank überschrieben.

:::

::: danger Achtung

Eine Sicherung auf demselben Datenträger oder Server wie die produktiven Daten ist **kein unabhängiges Backup**. Ein Schaden kann Original und Sicherung gleichzeitig treffen. Dazu gehören Brand, Diebstahl, Überspannung, Wasser, Hardware- und Konfigurationsfehler sowie absichtliches oder versehentliches Löschen. Auch eine Verschlüsselung durch Schadsoftware kann beide Datenbestände unbrauchbar machen.

Es empfiehlt sich darüber nachzudenken, mit den IT-Verantwortlichen eine modernen Standards entsprechende Backup-Strategie für die verwendete IT-Infrastruktur zu klären.

:::

::: info Hinweis

**Technische Hintergrundinformation:** Bei den Funktionen *Datenbank sichern* und *Datenbank wiederherstellen* handelt es sich technisch um eine Migration, nicht um einen reinen Datenbankdump. Daher kann der Prozess auch ein paar Minuten dauern, anstatt wie bei einem reinen DB-Dump in Sekunden abzulaufen. Haben Sie einen Moment Geduld.

:::

Die SVWS-Dokumentation beschreibt zusätzlich [manuelle und automatisierte Datensicherungen](https://doku.svws-nrw.de/deployment/Datensicherung/). SQLite-Sicherungen können dort auch über den AdminClient erzeugt werden.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Datenbank_sichern_(Verwaltung_Datenbank)) · Quellrevision 5199.
