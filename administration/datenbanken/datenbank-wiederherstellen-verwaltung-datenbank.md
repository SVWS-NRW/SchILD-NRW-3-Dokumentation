---
title: "Eine Datenbanksicherung wiederherstellen"
source_pageid: 1140
source_revision: 5200
---

# Eine Datenbanksicherung wiederherstellen

Lesen Sie eine zuvor erstellte Sicherung in die aktuell geöffnete Datenbank ein. Dabei wird deren Inhalt überschrieben; andere Benutzer müssen sich vorher abmelden.

Öffnen Sie **Verwaltung → Datenbank → Datenbank wiederherstellen**, um eine zuvor angelegte Sicherung einzulesen.

::: danger Achtung

**Hierbei wird die aktuelle Datenbank überschrieben.**

## 1. Benutzer abmelden und Berechtigung prüfen

Bitten Sie alle anderen Benutzer, SchILD-NRW zu schließen. Wer noch angemeldet ist, sehen Sie unter **Verwaltung → Benutzer → Aktuelle Datenbanknutzer zeigen**.

:::

Für diese Funktion genügt ein SchILD-NRW-Benutzer mit Administrationsrechten. Das root-Kennwort der Datenbank wird an dieser Stelle nicht benötigt.  

[![Wählen Sie die Quelldatei zur Wiederherstellung.](/bilder/datenbanken/datenbank-wiederherstellen-quelldatei.png)](/bilder/datenbanken/datenbank-wiederherstellen-quelldatei.png)

*Wählen Sie die Quelldatei zur Wiederherstellung.*

Wählen Sie die gewünschte **Sicherungsdatei**. Den Sicherungsordner finden Sie unter **Verwaltung → Einstellungen → Globale Einstellungen → Sonstiges**.

Der aktuelle Windows-Nutzer benötigt Zugriff auf dieses Verzeichnis.

::: tip Tipp

Wählen Sie im SVWS-Arbeitsverzeichnis einen Ordner *Sicherungen*. Somit lässt sich über die Windows-Freigaben auch einstellen, welcher Nutzer Zugriff auf die Dateien hat.

:::

Der **Dateiname** hilft, die korrekte Datenbank auszuwählen, da diese nach dem Schema

     Datenbankname_TagMonatJahr_Uhrzeit.sqlite

angelegt werden. Nutzen Sie zur Kontrolle das **Änderungsdatum**, um wirklich die korrekte Datenbank auszuwählen.

## 2. Die Wiederherstellung starten

Klicken Sie nach der Wahl der korrekten Datei auf `Öffnen`.  

[![SchILD-NRW muss geschlossen werden, um in die aktuelle Datenbank wiederherzustellen.](/bilder/datenbanken/datenbank-wiederherstellen-aktuell-offen.png)](/bilder/datenbanken/datenbank-wiederherstellen-aktuell-offen.png)

*SchILD-NRW muss geschlossen werden, um in die aktuelle Datenbank wiederherzustellen.*

Die Sicherung wird in die aktuell geöffnete Schuldatenbank eingespielt. Bestätigen Sie im folgenden Fenster mit **OK**, um SchILD-NRW dafür zu schließen.

Die Sicherung wird nun vom Datenbankserver eingelesen... bitte warten Sie einen Moment.

::: tip Richtig – Fertig

Öffnen Sie SchILD-NRW erneut.

:::

::: info Hinweis

**Technische Hintergrundinformation:** Bei den Funktionen *Datenbank sichern* und *Datenbank wiederherstellen* handelt es sich technisch um eine Migration, nicht um einen reinen Datenbankdump. Daher kann der Prozess auch ein paar Minuten dauern, anstatt wie bei einem reinen DB-Dump in Sekunden abzulaufen. Haben Sie einen Moment Geduld.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Datenbank_wiederherstellen_(Verwaltung_Datenbank)) · Quellrevision 5200.
