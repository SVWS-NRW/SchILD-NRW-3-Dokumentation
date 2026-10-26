---
title: "Datenbank, Benutzer und Ordner verstehen"
source_pageid: 1121
source_revision: 5914
---

# Datenbank, Benutzer und Ordner verstehen

Klären Sie die Begriffe Datenbankschema, Benutzerrolle und Installationsordner. Die Antworten helfen dabei, die Zuständigkeiten von MariaDB, SVWS-Server und SchILD-NRW 3 zu unterscheiden.

## Datenbank und Installation

### Was ist ein Datenbank-Schema?

Ein **Datenbankschema** bezeichnet hier die Datenbank einer Schule innerhalb der MariaDB. Es enthält die von SVWS benötigten Tabellen und kann leer, bereits befüllt oder aus SchILD-NRW 2 migriert sein. „Schema“ bedeutet daher nicht, dass noch keine Schuldaten vorhanden sind.

In einer MariaDB können mehrere Schemata liegen, die dann einer einzelnen SVWS-Datenbank einer Schule entsprechen, auf die dann mit dem SchILD-Client zugegriffen werden kann.

In großen Systemen, etwa kommunalen Rechenzentren oder kommerziellen Rechenzentren, könnten noch weitere Schemata in der MariaDB laufen, die dann anderen Schulen gehören oder gar nichts mit Schulen zu tun haben, etwa die kommunale Führerscheinstelle oder die Datenbank eines Unternehmens.

### Was ist der Unterschied zwischen einem root-, Datenbank und SchILD-NRW 3-Benutzer?

- Der **Root-Benutzer** verwaltet den gesamten MariaDB-Server. Er kann Datenbanken und weitere Datenbank-Benutzer anlegen oder löschen. Diese technischen Zugangsdaten gehören zur zuständigen IT. Ein vergessenes root-Kennwort muss administrativ wiederhergestellt werden; Ihr persönliches SchILD-Kennwort ersetzt diesen Zugang nicht.
- Der **Datenbank-Benutzer** verbindet SchILD-NRW 3 mit der Schuldatenbank. Diese einzelne Datenbank heißt auch **Schema**; deshalb wird der Zugang auch Schema-Benutzer genannt. Im beschriebenen Aufbau erhält er Administrationsrechte auf dieses Schema. Welche Datenbanken er tatsächlich verwenden oder löschen darf, legen die MariaDB-Berechtigungen fest. Derselbe Benutzername kann für mehrere Schemata berechtigt sein. In den Beispielen heißt dieser technische Zugang **svwsadmin**.
- Mit einem **SchILD-NRW-3-Benutzer** meldet sich eine Person zur täglichen Arbeit an. Die Benutzerverwaltung legt fest, welche Funktionen diese Person verwenden darf. Mit SchILD-Administrationsrechten stehen zusätzliche Funktionen der Programmoberfläche zur Verfügung. Diese Berechtigungen sind von den Rechten des technischen Datenbank-Zugangs zu unterscheiden.

### Wieso wird in so viele unterschiedliche Ordner installiert?

Um die Sicherheit des Betriebssystems zu gewährleisten, stattet Windows die unterschiedlichen Ordner mit unterschiedlichen Rechten aus. Der SVWS-Server und SchILD-NRW 3 fügen sich hier in diesem Sinne korrekt ein.

Für die Benutzung des SVWS-Servers und SchILD-NRW werden vier unterschiedliche Verzeichnisse verwendet.

- Das Verzeichnis, in dem der SVWS-Server *installiert* wird. In diesem Verzeichnis sollen Nutzer nichts ablegen können und keinen Zugriff darauf haben.
- Das Verzeichnis, in dem der SVWS-Server die Datenbanken ablegt. In diesem Verzeichnis hat nur der Server Zugriff, Nutzer sollen hier nichts lesen oder verändern können.
- Das Verzeichnis, in dem das reine Programm SchILD-NRW3 installiert wird. Nutzer haben hier keine Schreibrechte und es werden hier keine Arbeitsdaten erstellt.
- Das Verzeichnis, in dem die SchILD-Daten liegen, zum Beispiel die Reports oder die Export- und Importdateien. Hier haben Nutzer für die tägliche Arbeit Zugriff.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=FAQ) · Quellrevision 5914.
