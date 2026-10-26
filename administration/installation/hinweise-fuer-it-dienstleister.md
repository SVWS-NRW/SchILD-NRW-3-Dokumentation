---
title: "Installation und Betrieb für IT-Dienstleister planen"
source_pageid: 730
source_revision: 6911
---

# Installation und Betrieb für IT-Dienstleister planen

Klären Sie vor der Installation Programmbausteine, Datenbankschemata, Ordnerstruktur und Benutzerrollen. Die Hinweise richten sich an die für Einrichtung und Betrieb verantwortlichen Personen.

Der folgenden Artikel beinhaltet Hinweise zur Installation der **S**chul**V**er**W**altungs**S**oftware, zu der auch SchILD-NRW 3 gehört. Die praktische Durchführung beschreibt [SVWS-Server und SchILD-NRW 3 installieren](/administration/installation/installation-svws-server-und-schild-nrw-3).

## Programmbausteine

[![Trennung von Frontend-Applikation, Logikserver und Datenbankserver](/bilder/installation/hinweise-it-dienstleister.png)](/bilder/installation/hinweise-it-dienstleister.png)

*Trennung von Frontend-Applikation, Logikserver und Datenbankserver*

Die neue SchILD-Version besteht nicht mehr aus zwei, sondern aus vier Programmbausteinen.

- Der SVWS-Server fungiert als Dienstprogramm, welches logische Aufgaben übernimmt und den Zugriff...
- ... auf die MariaDB-Datenbank regelt. Der Datenbankserver wird zusammen mit dem SVWS-Server installiert.
- SchILD-NRW 3 dient als Anzeigeoberfläche der Datenbankdaten und übernimmt ebenfalls logische Aufgaben, die noch nicht im SVWS-Server implementiert wurden. SchILD-NRW 3 greift deshalb teilweise über den SVWS-Server und teilweise direkt auf die MariaDB zu.
- Der SVWS-Client stellt die Technologie zur Anzeige der Datenbankdaten in einem Browserfenster zur Verfügung. Der SVWS-Client ist Bestandteil des SVWS-Servers und kann nur auf die logischen Aufgaben des SVWS-Servers zurückgreifen.

::: info Hinweis

Beachten Sie bitte unsere Videoanleitungen zur Installation des SVWS-Servers und von SchILD-NRW 3 in dieser Dokumentation.

:::

## Datenbank und Installation

### Datenbank-Schemata

Ein **Datenbankschema** bezeichnet hier die Datenbank einer Schule innerhalb der MariaDB. Es enthält die von SVWS benötigten Tabellen und kann leer, bereits befüllt oder aus SchILD-NRW 2 migriert sein. „Schema“ bedeutet daher nicht, dass noch keine Schuldaten vorhanden sind.

In einer MariaDB können mehrere Schemata liegen, die dann einer einzelnen SVWS-Datenbank einer Schule entsprechen, auf die dann mit dem SchILD-Client zugegriffen werden kann.

In großen Systemen, etwa kommunalen Rechenzentren oder kommerziellen Rechenzentren, könnten noch weitere Schemata in der MariaDB laufen, die dann anderen Schulen gehören oder gar nichts mit Schulen zu tun haben.

### Die unterschiedlichen Nutzer

- Der **Root-Benutzer** verwaltet den gesamten MariaDB-Server. Er kann Datenbanken und weitere Datenbank-Benutzer anlegen oder löschen. Diese technischen Zugangsdaten gehören zur zuständigen IT. Ein vergessenes root-Kennwort muss administrativ wiederhergestellt werden; Ihr persönliches SchILD-Kennwort ersetzt diesen Zugang nicht.
- Der **Datenbank-Benutzer** verbindet SchILD-NRW 3 mit der Schuldatenbank. Diese einzelne Datenbank heißt auch **Schema**; deshalb wird der Zugang auch Schema-Benutzer genannt. Im beschriebenen Aufbau erhält er Administrationsrechte auf dieses Schema. Welche Datenbanken er tatsächlich verwenden oder löschen darf, legen die MariaDB-Berechtigungen fest. Derselbe Benutzername kann für mehrere Schemata berechtigt sein. In den Beispielen heißt dieser technische Zugang **svwsadmin**.
- Mit einem **SchILD-NRW-3-Benutzer** meldet sich eine Person zur täglichen Arbeit an. Die Benutzerverwaltung legt fest, welche Funktionen diese Person verwenden darf. Mit SchILD-Administrationsrechten stehen zusätzliche Funktionen der Programmoberfläche zur Verfügung. Diese Berechtigungen sind von den Rechten des technischen Datenbank-Zugangs zu unterscheiden.

::: danger Achtung

Über SchILD-NRW lassen sich Benutzergruppen mit Rechten definieren und SchILD-Nutzern zuweisen. Hierüber lassen sich auch sehr hohe Rechte vergeben. Achten Sie bitte darauf, dass Sie auch über Benutzergruppen nur Rechte an Nutzer vergeben, die diese benötigen und haben sollen!

:::

### Die Ordnerstruktur

Um die Sicherheit des Betriebssystems zu gewährleisten, stattet Windows die unterschiedlichen Ordner mit unterschiedlichen Rechten aus. Der SVWS-Server und SchILD-NRW 3 fügen sich hier in diesem Sinne korrekt ein. Für die Benutzung des SVWS-Servers und SchILD-NRW werden vier unterschiedliche Verzeichnisse verwendet.

- Das Verzeichnis, in dem der SVWS-Server *installiert* wird. In diesem Verzeichnis sollen Nutzer nichts ablegen können und **keinen Zugriff - auch nicht nur lesend!** - haben.
- Das Verzeichnis, in dem der SVWS-Server die Datenbanken ablegt. In diesem Verzeichnis hat nur der Server Zugriff, **Nutzer sollen hier nichts lesen** oder verändern können.
- Das Verzeichnis, in dem das reine Programm SchILD-NRW3 installiert wird. **Nutzer haben hier keine Schreibrechte** und es werden hier keine Arbeitsdaten erstellt.
- Das SVWS-Arbeitsverzeichnis, in dem die Daten der Nutzer liegen, zum Beispiel die Reports oder die Export- und Importdateien. Hier haben Nutzer für die tägliche Arbeit Zugriff. Soll dieses Verzeichnis nach der Installation verändert werden, lässt sich dies über die *Admin.ini* im SchILD-NRW-3-Installationsverzeichnis mit dem Eintrag `GroupDir=D:\SVWS-Arbeitsverzeichnis` umstellen.

## Systemvoraussetzungen

SchILD-NRW 3 benötigt einen Windows-Arbeitsplatz und eine dazu passende SVWS-Server-Version. Der SVWS-Server kann je nach gewähltem Installationsverfahren unter Windows oder Linux betrieben werden. Eine Windows-Server-Version wird nicht durch eine Windows-11-Versionsnummer beschrieben.

Stimmen Sie die konkret unterstützten Betriebssystemversionen und Ressourcen mit der IT und den [aktuellen Installationsanleitungen des SVWS-Servers](https://doku.svws-nrw.de/deployment/) ab. Dort sind die Verfahren für Windows, Linux und Container getrennt dokumentiert. Diese Anleitung legt keine eigenen, davon abweichenden Mindestversionen fest.

## Datenbankstruktur

Die Datenbankstruktur für SchILD-NRW 3 wurde grundlegend geändert und zukunftsfähig aufgebaut. Während der Installation des SVWS-Servers können bestehende Access-, MariaDB, MySQL- und MSSQL-Datenbanken in die neue Struktur migriert werden, so dass ein Umstieg von SchILD-NRW 2 zu SchILD-NRW 3 nahtlos möglich ist.

## Nicht unterstützte Systeme

Die Installation auf einem NAS wird nicht unterstützt.

## Installationsübersicht

[![Installation innerhalb eines Verwaltungsnetzwerks.](/bilder/installation/serverinstallation-schule-svws-und-schild3.png)](/bilder/installation/serverinstallation-schule-svws-und-schild3.png)

*Installation innerhalb eines Verwaltungsnetzwerks.*

Der *SVWS-Server* ist innerhalb des *Verwaltungsnetzwerkes* der Schule zu installieren.

Der SVWS-Server selbst läuft er auf einer den - in Bezug auf Hardware und Software - Systemanforderungen entsprechenden MS-Windows- oder Linux-Umgebung.

Er stellt die *MariaDB* und eventuelle Dateifreigaben zur Verfügung. SchILD-NRW 3 kann zentral auf dem Server und per Dateifreigabe aufgerufen werden oder einzeln auf Klienten installiert werden.

Die Kommunikation mit den Klienten läuft über die REST API und ist über HTTPS auf Port 443 zu erreichen. Bei der Installation kann ein Zertifikat erstellt werden, welches in MS Windows hinzuzufügen ist.

Die Klienten greifen entweder über die Weboberfläche oder ein Klient-Programm wie SchILD-NRW 3 auf den Server zu.  

::: danger Achtung

Achten Sie darauf, dass der SVWS-Server weder vom *pädagogischen Netzwerk* der Schule noch direkt von außen über das Internet zu erreichen ist!

:::

In kleinen Schulen sind auch Einzelplatzinstallationen möglich, bei denen der SVWS-Server mit der MariaDB und der SchILD-NRW-3-Installation auf dem einzelnen Arbeitsplatzrechner laufen.

Für Dateiaustausche und Zugriffe, sind entsprechende Dateifreigaben einzurichten.

- Auf die Verzeichnisse des *SVWS-Servers* und das der *SVWS-Daten* hat niemand außer dem Server selbst Zugriff.
- Die Klienten im *Verwaltungsnetz*, die ein auf dem Server installiertes SchILD-NRW 3 starten sollen, benötigen Lese-Zugriff auf das *Installationsverzeichnis* von SchILD-NRW 3.
- Die Arbeitsplatzrechner im **Verwaltungsnetz** benötigen für die Arbeit mit SchILD-NRW 3 Lese- und Schreibrechte im **SVWS-Arbeitsverzeichnis**. Stimmen Sie die Freigaben mit den Rollen an der Schule ab. Nicht alle Personen benötigen Zugriff auf alle Reports. Zusätzlich verwendete Ordner, etwa für Dokumente, Zeugnisse, Im- und Exporte, Notendateien oder Sicherungen, müssen den jeweils berechtigten Personen und Rechnern zur Verfügung stehen.

Nur die Klienten haben hier als normale Rechner des *Verwaltungsnetzwerkes* Zugriff auf das Internet.

## Nutzer und Kennwörter

[![Das Verhältnis der Nutzer und Kennwörter der MariaDB, des Schemas und der SchILD-NRW-Nutzer.](/bilder/installation/kennwoerter-db-schema-schild.jpg)](/bilder/installation/kennwoerter-db-schema-schild.jpg)

*Das Verhältnis der Nutzer und Kennwörter der MariaDB, des Schemas und der SchILD-NRW-Nutzer.*

Das Konzept von SchILD-NRW 3 sieht vor, die Datenbanken von anderen Anwendungen oder Schulen abzuschotten, die ebenfalls auf der MariaDB laufen und auch innerhalb von SchILD-NRW Nutzerrechte vergeben zu können.

### MariaDB-root

Für die Datenbankverwaltung sind der **root-Zugang** und der **Datenbank-Benutzer** zu unterscheiden. Mit dem root-Zugang werden unter anderem Datenbanken angelegt und gelöscht. Ein **Schema** bezeichnet hier eine einzelne Schuldatenbank; es kann bereits Tabellen und Schuldaten enthalten.

Ein verlorenes root-Kennwort erfordert die Wiederherstellung des technischen Zugangs durch die zuständige IT. Das ist von einem Zurücksetzen persönlicher SchILD-Kennwörter zu unterscheiden.

Der weitere Nutzer ist der

### Schema-Admin

Der **Administrator-User von jedem dieser Schemas**, per Standard wird dieser Nutzer *svwsadmin* genannt, ist aber veränderbar. Für mehrere Schemas können unterschiedliche svws-Admins angelegt werden, es können aber auch mehrere Datenbanken von einem solchen Nutzer verwaltet werden.

Getrennte Datenbank-Benutzer begrenzen den Zugriff auf die jeweils zugeordneten Schemata. So können auf einem MariaDB-Server beispielsweise mehrere Schuldatenbanken oder Datenbanken anderer Dienste voneinander getrennt betrieben werden.

Die jeweiligen Zugangsdaten werden im Arbeitsverzeichnis von SchILD-NRW 3 im Ordner "Connection-Files" als *\[schema\].con* als Verbindungsinformationen hinterlegt und von SchILD-NRW genutzt, um technisch auf die Datenbank zuzugreifen.

Hinweise zu den unterschiedlichen Ordnern:

- Das Passwort ist in einer Konfigurationsdatei im *SVWS-Server-Datenverzeichnis* hinterlegt und daher ist darauf zu achten, dass normale Nutzer keinen Windows-Zugriff auf die Ordner der *SVWS-Server-Installation* und das *SVWS-Server-Datenverzeichnis* haben.
- Auf das *Installationsverzeichnis von SchILD-NRW 3* wird lediglich Lese-Zugriff benötigt, um den Klienten zu starten.
- Alle Nutzer-Zugriffe im Tagesgeschäft auf Dateiebene laufen über das *SVWS-Arbeitsverzeichnis*, das im Falle einer Neuinstallation (usw.) erhalten bleibt.

Über diesen Schema-Nutzer kann direkt auf die jeweilige SchILD-Datenbank (das Schema) zugegriffen werden, um im Bedarf ein SchILD-Administrator-Kennwort (SchILD-Nutzer) zurückzusetzen.  

::: warning Wichtig

Beachten Sie, dass für eigenmächtig veränderte Datenbanken unter Umständen kein Support mehr übernommen werden kann. Kontaktieren Sie bitte in einem solchen Fall unbedingt die Fachberatung der betroffenen Schule.

:::

### SchILD-Nutzer – Administrator

**SchILD-Nutzer mit ihren Rechten** sind für Schulträger/IT nur bedingt relevant. In der Regel dürfte sich die IT einen Administrator-Nutzer in SchILD-NRW anlegen, so dass im Zweifel Benutzer gesperrt oder neu angelegt und Kennwörter neu gesetzt werden können, ohne manuell in der Datenbank tätig zu werden.

Die konkreten Rollen mit ihren jeweiligen Rechten werden innerhalb von SchILD-NRW vergeben und sind schulintern zu organisieren. Der SVWS-Server verwaltet diese Nutzer mit ihren Rechten, daher gelten diese auch für die Zugriffssteuerung über Webinterfaces oder andere Client-Programme.

Die in den Schulen für die SchILD-Administration verantwortlichen Personen können hierzu die Artikel zum Benutzermanagement von SchILD-NRW konsultieren.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Hinweise_f%C3%BCr_IT-Dienstleister) · Quellrevision 6911.
