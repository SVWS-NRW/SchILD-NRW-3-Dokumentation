---
title: "SVWS-Server und SchILD-NRW 3 installieren"
---

# SVWS-Server und SchILD-NRW 3 installieren

Installieren Sie die Programmbausteine für einen Einzelplatz oder einen Windows-Server mit Clients. Die Anleitung behandelt auch Zertifikate, Verbindungsdateien, Updates und Deinstallation.

::: warning Wichtig

Die Versionen des SVWS-Servers und von SchILD-NRW 3 müssen zusammenpassen. Kontrollieren Sie vor Beginn der Installation, dass Sie die korrekten Installer vorliegen haben.

:::

Der folgende Artikel beinhaltet Hinweise zur Installation des SVWS-Servers und von SchILD-NRW 3.

## Übersicht über die Programmbausteine

![Auswahl des Ziel-Ordners](/bilder/installation/hinweise-it-dienstleister.png)

*Auswahl des Ziel-Ordners*

Für den Betrieb werden vier Bausteine benötigt: die Datenbank **MariaDB**, der **SVWS-Server**, der browserbasierte **SVWS-Client** und das Windows-Programm **SchILD-NRW 3**. Der SVWS-Server läuft als Dienst und übernimmt die Verarbeitung und Bereitstellung von Daten.

SchILD-NRW 3 dient als Anzeigeoberfläche der Datenbankdaten und übernimmt ebenfalls logische Aufgaben, die noch nicht im SVWS-Server implementiert wurden. SchILD-NRW 3 greift deshalb teilweise über den SVWS-Server und teilweise direkt auf die MariaDB zu.

Der SVWS-Client stellt die Technologie zur Anzeige der Datenbankdaten in einem Browserfenster zur Verfügung. Der SVWS-Client ist Bestandteil des SVWS-Servers und kann nur auf die logischen Aufgaben des SVWS-Servers zurückgreifen. Der SVWS-Server und SchILD-NRW 3 arbeiten ausschließlich mit einer MariaDB zusammen. Für den Zugriff auf die MariaDB ist kein ODBC-Treiber notwendig.

Es werden **zwei Installationsdateien** ausgeliefert:

- Das eine Installationsprogramm installiert den **SVWS-Server mit der MariaDB**, dem SVWS-Client und benötigten Komponenten. Während der Installation des SVWS-Clients können bestehende SchILD-NRW 2 Datenbanken (Access MDB, MariaDB, MySQL, Microsoft SQL-Server) in die neue MariaDB migriert werden. Zudem wird eine Zertifikatsdatei erzeugt, welche im Zertifikatsspeicher des Betriebssystems hinterlegt werden muss.
- Das andere Installationsprogramm installiert **SchILD-NRW 3** und stellt eine Verknüpfung zwischen SchILD-NRW 3 und der MariaDB her.

## Wichtige Begriffe und Konzepte

### Datenbank-Schema

Ein **Datenbankschema** bezeichnet hier die Datenbank einer Schule innerhalb der MariaDB. Es enthält die von SVWS benötigten Tabellen und kann leer, bereits befüllt oder aus SchILD-NRW 2 migriert sein. „Schema“ bedeutet daher nicht, dass noch keine Schuldaten vorhanden sind.

In einem MariaDB-Datenbankmanagementsystem können mehrere Datenbanken (Schemas) verwaltet werden, die dann jeweils die Daten einer Schule enthalten, auf die mit dem SchILD-Client gesondert zugegriffen werden kann.

In großen Systemen, etwa kommunalen Rechenzentren oder kommerziellen Rechenzentren, könnten noch weitere Schemata in der MariaDB laufen, die dann anderen Schulen gehören oder gar nichts mit Schulen zu tun haben.

### Die unterschiedlichen Nutzer

- Der **Root-Benutzer** verwaltet den gesamten MariaDB-Server. Er kann Datenbanken und weitere Datenbank-Benutzer anlegen oder löschen. Diese technischen Zugangsdaten gehören zur zuständigen IT. Ein vergessenes root-Kennwort muss administrativ wiederhergestellt werden; Ihr persönliches SchILD-Kennwort ersetzt diesen Zugang nicht.
- Der **Datenbank-Benutzer** verbindet SchILD-NRW 3 mit der Schuldatenbank. Diese einzelne Datenbank heißt auch **Schema**; deshalb wird der Zugang auch Schema-Benutzer genannt. Im beschriebenen Aufbau erhält er Administrationsrechte auf dieses Schema. Welche Datenbanken er tatsächlich verwenden oder löschen darf, legen die MariaDB-Berechtigungen fest. Derselbe Benutzername kann für mehrere Schemata berechtigt sein. In den Beispielen heißt dieser technische Zugang **svwsadmin**.
- Mit einem **SchILD-NRW-3-Benutzer** meldet sich eine Person zur täglichen Arbeit an. Die Benutzerverwaltung legt fest, welche Funktionen diese Person verwenden darf. Mit SchILD-Administrationsrechten stehen zusätzliche Funktionen der Programmoberfläche zur Verfügung. Diese Berechtigungen sind von den Rechten des technischen Datenbank-Zugangs zu unterscheiden.

### Die Ordnerstruktur

Um die Sicherheit des Betriebssystems zu gewährleisten, stattet Windows die unterschiedlichen Ordner mit unterschiedlichen Rechten aus. Der SVWS-Server und SchILD-NRW 3 fügen sich hier in diesem Sinne korrekt ein. Für die Benutzung des SVWS-Servers und SchILD-NRW werden vier unterschiedliche Verzeichnisse verwendet.

- Das Verzeichnis, in dem der SVWS-Server *installiert* wird. In diesem Verzeichnis sollen Nutzer nichts ablegen können und keinen Zugriff darauf haben.
- Das Verzeichnis, in dem der SVWS-Server die Datenbanken ablegt. In diesem Verzeichnis hat nur der Server Zugriff, Nutzer sollen hier nichts lesen oder verändern können.
- Das Verzeichnis, in dem das reine Programm SchILD-NRW3 installiert wird. Nutzer haben hier keine Schreibrechte und es werden hier keine Arbeitsdaten erstellt.
- Das SVWS-Arbeitverzeichnis, in dem die Daten der Nutzer liegen, zum Beispiel die Reports oder die Export- und Importdateien. Hier haben Nutzer für die tägliche Arbeit Zugriff.

## Vorbereitende Maßnahmen

Sofern Sie einen Wechsel von SchILD-NRW 2 nach SchILD-NRW 3 mit SVWS-Server durchführen wollen, empfehlen wir Ihnen einige vorbereitende Maßnahmen in SchILD-NRW 2:

1.  **Datenbank sichern:** Sichern Sie zunächst die vorhandene Datenbank, bevor Sie die weiteren Schritte durchführen. Achten Sie darauf, dass keine weitere Person auf die Datenbank zugreift.
2.  **Papierkorb leeren:** Rufen Sie den Menüpunkt *Auswahl ➜ Papierkorb zeigen* auf. Löschen Sie alle Schüler im Papierkorb, um unvollständige Datensätze bei der Migration zu vermeiden.
3.  **Datensätze reduzieren:** Rufen Sie den Menüpunkt *Extras ➜ Löschfristen prüfen* auf. Löschen Sie alle Daten gemäß VO-DV I und VO-DV II um die Vorgaben einzuhalten und die Datenmenge zu reduzieren.
4.  **Datenbank automatisch prüfen:** Rufen Sie den Menüpunkt *Extras ➜ Automatische Prozesse ausführen* auf. Die Datenbank wird in der Folge auf grundlegende Konsistenzen überprüft. Fehlende Konsistenzen werden angelegt.
5.  **Datenbank komprimieren und reparieren:** Rufen Sie den Menüpunkt *Datei ➜ Datenbank komprimieren und reparieren* auf. Dieser Prozess entfernt unnötigen Ballast, der sich bei der Arbeit mit der Datenbank angesammelt hat.
6.  **Optional - Migrationstool verwenden:** Die Migration in eine neue SchILD-NRW 2 Datenbank kann hertnäckige Probleme beheben.

## Einzelplatzinstallation

Im Folgenden wird die Installation von SchILD-NRW 3 und dem SVWS-Server auf einem Einzelplatzrechner vorgestellt. In produktiven Schulumgebungen wird diese Form der Installation eher selten vorkommen.

Insbesondere in der Entwicklungsphase bietet diese Installation eine einfache und schnelle Möglichkeit, das Programm zu testen. Die veröffentlichten Versionen finden Sie im [Release-Bereich von SchILD-NRW 3](https://github.com/SVWS-NRW/Schild-NRW-3/releases) und im unten verlinkten Release-Bereich des SVWS-Servers. Für die Installation der Komponenten sind Administrationsrechte am Arbeitsplatz-PC notwendig.

### Installationsanleitungen als Video-Tutorials

Das Video zeigt einen älteren Installationsstand. Die dort genannten Standardordner und der Name der Zugangsdatei stimmen nicht vollständig mit der schriftlichen Anleitung überein. Verwenden Sie für diese Angaben die schriftlichen Installationsschritte auf dieser Seite.

### Installationsumfang

Die neuste Version kann hier heruntergeladen werden: <https://github.com/SVWS-NRW/SVWS-Server/releases>

Installiert werden

1.  Ein Maria-Datenbankmanagementsystem
    - Das Datenbankmanagementsystem steuert den Multiuserzugriff auf die Datenbanken
    - Das Programm wird im Ordner `C:\Programme\SVWS-Server\db` gespeichert
    - Die Datenbankdateien werden im Verzeichnis `C:\ProgramData\SVWS-Server\data` gespeichert
    - Die Kennwörter für den Zugriff auf die Datenbanken werden in der Datei `C:\ProgramData\SVWS-Server\res\svwsconfig.json` gespeichert
2.  Eine Java-Laufzeitumgebung
    - Dieses Programm ist notwendig, um den SVWS-Server auszuführen.
    - Die Laufzeitumgebung wird im Ordner `C:\Programme\SVWS-Server\java` gespeichert
3.  Der SVWS-Server
    - Der SVWS-Server fungiert als Dienstprogramm, welches logische Aufgaben übernimmt und den Zugriff auf die MariaDB-Datenbank regelt.
    - Das Programm wird im Ordner `C:\Programme\SVWS-Server\svws-server` gespeichert.
    - Log-Dateien werden im Ordner `C:\ProgramData\SVWS-Server\logs` gespeichert. Die Log-Dateien enthalten Informationen zu Fehlern bei der Ein- und Ausgabe des SVWS-Servers.
4.  Der SVWS-Client
    - Der SVWS-Cient ermöglicht den browserbasierten Zugriff auf die Datenbanken und greift auf logische Aufgaben des SVWS-Servers zurück. Der SVWS-Client übernimmt die Aufgaben der Programme LuPO und Kurs42.
    - Der Client wird im Ordner `C:\ProgramData\SVWS-Server\client` installiert.
5.  Eine SSL-Zertifikatsdatei
    - Das Zertifikat muss später im System angemeldet werden, damit der SVWS-Client im Browser ohne Sicherheitswarnung gestartet werden kann.
    - Die SSL-Zertifikatsdatei wird im Ordner `C:\Users\<benutzername>\Dokumente\SVWS.cer` gespeichert.

### Installation des SVWS-Servers

![Auswahl des Zielordners](/bilder/installation/installation-svws-server-ziel-ordner.png)

*Auswahl des Zielordners*

Führen Sie die Datei win64-installer-version.exe aus.

Es folgt ein Hinweisfenster der Benutzerkontensteuerung, dass durch die Installation Änderungen am Gerät vorgenommen werden. Klicken Sie hier auf die Schaltfläche `Weiter`.

Im folgenden Fenster akzeptieren Sie die Lizenzvereinbarung für die Installation des SVWS-Servers.

Anschließend können Sie die Installationspfade für das Datenbanksystem und das Programmverzeichnis auswählen. Für die lokale Einzelplatzinstallation empfehlen wir dringend, die vorgeschlagenen Pfade nicht zu ändern.

![Konfigurieren der Installation](/bilder/installation/installation-svws-server-konfiguration.png)

*Konfigurieren der Installation*

Es folgen die Konfigurationsangaben der SVWS-Server-Installation. Aktivieren Sie hier das Auswahlfeld zu "Migriere aus einem Schild v2.x - Schema", damit während des Installationsprozesses die Daten einer SchILD-NRW 2 - Datenbank in die MariaDB migriert werden. Alle anderen Auswahlfelder sollten Sie so belassen.

Wenn die MariaDB installiert wird, wird automatisch ein Benutzer mit dem Namen "root" erzeugt. Dieser Benutzer hat als Super-Admin volle Zugriffsrechte auf alle Datenbanken, kann diese erzeugen und löschen. Legen Sie das root-Kennwort für diesen Benutzer fest und notieren Sie sich das Kennwort.

Der Installer schlägt Ihnen bereits ein sehr sicheres Kennwort vor, welches von einem Zufallsgenerator erzeugt wurde. Verwahren Sie dieses Kennwort an einem sichern Ort.

::: danger Achtung

**Bewahren Sie das root-Kennwort bei der zuständigen IT auf. Geht es verloren, muss diese den administrativen Zugang wiederherstellen; ein persönliches SchILD-Kennwort genügt dafür nicht.**

Jede Person mit Kenntnis des root-Kennworts kann sich als Super-Admin an allen Datenbanken anmelden.

:::

Sie können zudem den Port für den Zugriff auf die MariaDB eingeben. Der Port ergänzt den Datenbank-Host für den direkten MariaDB-Zugriff, etwa Host `localhost` mit Port `3306`. Hier wird **kein `https://`** vorangestellt. Die HTTPS-Adresse gehört zur getrennten Verbindung mit dem SVWS-Server.

Als Standard ist hier der Port 3306 eingetragen. Sie müssen die Portnummer nur dann ändern, wenn der Port 3306 bereits durch eine andere Anwendung belegt wird. Dies kann z.B. dann der Fall sein, wenn Sie ein anderes datenbankbasiertes Programm oder einen anderen datenbankbasierten Dienst installiert haben. Erhöhen Sie in einem solchen Fall die Portnummer z.B. auf 3307.

Vergeben Sie einen Namen für das Datenbank-Schema. Bei dem Datenbank-Schema handelt es sich um eine leere Datenbank, in der bereits alle Notwendigen Tabellen angelegt wurden. Im Gegensatz zu SchILD-NRW 2 gibt es keine Standarddatenbank. Jede Datenbank in SchILD-NRW 3 muss einen hier zu definierenden Namen erhalten.

Legen Sie einen **Datenbank-Benutzer** mit Kennwort an. Der Installer schlägt ein zufällig erzeugtes Kennwort vor. Dieser technische Zugang erhält Administrationsrechte auf die hier eingerichtete Schuldatenbank und wird von SchILD-NRW 3 für die Verbindung verwendet. Er gehört keiner bestimmten Person. Anders als der root-Zugang ist er im beschriebenen Aufbau auf diese eine Datenbank beschränkt.

Notieren Sie Benutzername und Kennwort für die Einrichtung der Verbindung und bewahren Sie die Angaben bei der zuständigen IT auf. Der root-Benutzer kann das Kennwort bei Bedarf zurücksetzen oder einen anderen Zugang für die Schuldatenbank einrichten.

Klicken Sie auf die Schaltfläche `Weiter`.

![Angaben zum SSL-Zertifikat](/bilder/installation/installation-svws-server-zertifikat.png)

*Angaben zum SSL-Zertifikat*

Im folgenden Fenster geben Sie den Zertifikatsnamen, den Schulnamen und den Schulort für die Zertifikatsdatei ein. Die Zertifikatsdatei wird während des Installationsprozesses erzeugt und muss in einem späteren Schritt im Betriebssystem installiert werden.

![Zu migrierende Datenbank wählen](/bilder/installation/installation-svws-server-migration.png)

*Zu migrierende Datenbank wählen*

Wenn Sie das Auswahlfeld "Migriere aus einem Schild v2.x - Schema" aktiviert hatten, folgt nun ein Fenster, in welchem Sie Angaben zur Migration einer SchILD-NRW 2 - Datenbank vornehmen müssen. Wählen Sie hier das Datenbankformat der SchILD-NRW 2-Datenbank aus (Access MDB, MariaDB, MySQL, Microsoft SQL-Server).

Bei der Migration einer Access MDB müssen Sie den Dateipfad zur Access MDB angeben (z.B. schild200n.mdb). Bei der Migration einer MariaDB, MySQL- oder Microsoft SQL-Server-Datenbank müssen Sie einen Benutzernamen mit vollen Zugriffsrechten auf die Datenbank angeben. Zudem das zugehörige Passwort, den Ort der Datenbank (z.B. localhost oder IP 192.168.1.x) und den Namen des Schemas der Datenbank.

![Info-Fenster während des Installationsprozesses](/bilder/installation/installation-svws-server-installationsprozess.png)

*Info-Fenster während des Installationsprozesses*

Im Anschluss können Sie die Installation starten. Während des Installationsprozesses wird die MariaDB installiert, der SVWS-Server installiert, die benötigte Java-Bibliothek installiert, die Konfigurationsdatei mit den Zugangsdaten auf die MariaDB gespeichert, die Zertifikatsdatei gespeichert und der SVWS-Server als Dienst gestartet. Im Anschluss wird noch die SchILD-NRW 2-Datenbank in das SchILD-NRW 3-Schema migriert.

Ein Anzeigefenster informiert Sie über den Fortschritt der Installation. Insbesondere die Migration der Datenbank kann einige Zeit in Anspruch nehmen.

### Installation des SSL-Zertifikats

![Zertifikat installieren](/bilder/installation/installation-svws-server-zertifikat-installieren-testkonfiguration.png)

*Zertifikat installieren*

Damit der SVWS-Client ohne störenden Sicherheitshinweis im Browser gestartet werden kann, muss das SSL-Zertifikat, welches während des Installationsprozesses des SVWS-Servers erzeugt und gespeichert wurde, im Zertifikatsspeicher des Betriebssystems abgespeichert werden.

Windows hält hierzu einen einfachen Zertifikatimport-Assistenten bereit, welcher das SSL-Zertifikat in den Zertifikatsspeicher kopiert und am System anmeldet.

Navigieren Sie zum Windows-Systemordner "Dokumente". Dort finden Sie eine Zertifikatsdatei mit dem Namen SVWS.cer. Führen Sie mit Hilfe eines Doppelklicks den Zertifikatimport-Assistenten aus.

Alternativ können Sie mit einem Rechtsklick den Kontextmenüeintrag "Zertifikat installieren" wählen. Es öffnet sich ein Informationsfenster mit Hinweisen zum Zertifikat. Klicken Sie auf die Schaltfläche `Zertifikat installieren`.

1. Wählen Sie als Speicherort **Lokaler Computer**. Dafür benötigen Sie Windows-Administrationsrechte.
2. Klicken Sie auf **Weiter** und wählen Sie **Alle Zertifikate in folgendem Speicher speichern**.
3. Klicken Sie auf **Durchsuchen…** und wählen Sie **Vertrauenswürdige Stammzertifizierungsstellen**.
4. Bestätigen Sie mit **OK** und anschließend mit **Weiter**.

Schließen Sie den Prozess mit Klick auf die Schaltfläche `Fertig stellen` ab. Ein Hinweisfenster informiert Sie über den erfolgreichen Import des Zertifikats.

### Start des SVWS-Client im Browser

Starten Sie einen Browser (Chrome, Edge, Firefox etc.). Rufen Sie in der Adresszeile den SVWS-Client auf, indem Sie die Adresse **<https://servername>** eingeben. Es empfiehlt sich, einen Favoriten für diesen Link anzulegen. Sie können alternativ einen Browserlink zu dieser Adresse auf dem Desktop des PCs ablegen.

### Installation von SchILD-NRW 3

![Auswahl des Zielordners](/bilder/installation/installationsverzeichnis.png)

*Auswahl des Zielordners*

Laden Sie das Installationspaket für den vorgesehenen Programmstand aus den [offiziellen SchILD-NRW-3-Releases](https://github.com/SVWS-NRW/Schild-NRW-3/releases) herunter. Achten Sie auf die dort genannte passende SVWS-Server-Version.

Installiert werden

1.  SchILD-NRW 3 im Ordner `C:\Programme (x86)\SchILD3.0`, auf das nur lesende Rechte notwendig sind
2.  ein Arbeitsverzeichnis im Ordner `C:\SVWS-Arbeitsverzeichnis`, auf welches lesende und schreibende Rechte notwendig sind. Dieser Ordner wird z.B. die Connection-Dateien zur MariaDB und die Reports aufnehmen.
3.  eine Connection-Datei schemaname.con im Ordner `C:\SVWS-Arbeitsverzeichnis\Connection-Files`. Die Connection-Datei (früher udl-Datei) ist eine Textdatei, welche Verbindungsdaten zur MariaDB enthält und in einem Texteditor geöffnet werden kann.

Führen Sie die Datei Setup_SchILD3_vXYZ.exe aus. Es folgt ein Hinweisfenster der Benutzerkontensteuerung, dass durch die Installation Änderungen am Gerät vorgenommen werden. Klicken Sie hier auf die Schaltfläche `Weiter`.

Wählen Sie im folgenden Fenster den Installationsordner des Programms. Wir empfehlen, für die Einzelplatzinstallation den Ordner nicht zu ändern. Klicken Sie hier auf die Schaltfläche `Weiter`.

![Auswahl des Zielordners](/bilder/installation/arbeitsverzeichnis.png)

*Auswahl des Zielordners*

Wählen Sie nun, wo das SVWS-Arbeitsverzeichnis erstellt werden soll. Für die Einzelplatzinstallation empfehlen wir den vorgegebenen Ordner im Hauptverzeichnis `C:\SVWS-Arbeitsverzeichnis` oder alternativ im Benutzerverzeichnis `Dokumente\SVWS-Arbeitsverzeichnis`. Klicken Sie hier auf die Schaltfläche `Weiter`.

Sie können nun angeben, unter welchem Programmnamen SchILD-NRW 3 im Startmenü und auf dem Desktop angezeigt werden soll. Wir empfehlen dringend, den vorgegebenen Namen nicht zu ändern. Klicken Sie hier auf die Schaltfläche `Weiter`.

SchILD-NRW 3 wird nun installiert. Ein Hinweisfenster informiert Sie über die erfolgreiche Installation und den Aufruf eines externen Programms zur Einrichtung der Konfigurationsdatei.

::: danger Achtung

Pfad des SVWS-Arbeitsverzeichnisses

Beachten Sie an dieser Stelle unbedingt die Pfade des SVWS-Arbeitsverzeichnisses und des SchILD-Installationsverzeichnisses. Zum Beispiel könnten diese auf dem **Server** auf Laufwerk D: installiert werden und würden dann zum Beispiel (!) auf `D:\Schulprogramme\SchILD-NRW3\` und `D:\Schulprogramme\SVWS-Arbeitsverzeichnis\` installiert werden.

**Im eigentlichen Netzwerk jedoch wären diese Ordner als Freigaben auf den Client-Rechnern** wieder einzubinden und hier können dann andere Namen verwendet werden, zum Beispiel als `S:\SchILD-NRW3` und `S:\SVWS-Arbeitsverzeichnis` oder auch als Pfade ohne Laufwerksbuchstaben.

Achten Sie darauf, dass die Datei *Admin.ini* im SchILD-NRW-3-Installationsverzeichnis NICHT auf den Serverpfad verweist, sondern auf den Pfad, den die Rechner im Netzwerk sehen!

:::

#### Die Verbindung mit SchILD_DBConfig.exe konfigurieren

![Konfiguration der Connection-Datei](/bilder/installation/con-standalone.png)

*Konfiguration der Connection-Datei*

Direkt nach der Installation öffnet sich das Konfigurationstool, mittels dem die Datei erstellt wird, die notwendig ist, damit SchILD3 auf das Datenbankschema zugreifen kann.

::: info Hinweis

Das Konfigurationstool kann bei Bedarf auch nachträglich aufgerufen werden, hierzu einfach die *SchILD_DBConfig.exe* im Installationsverzeichnis von SchILD3 als Windows-Administrator ausführen.

:::

Im folgenden Fenster können Sie nun alle voreingetragenen Angaben prüfen, welche zur Erstellung einer Konfigurationsdatei notwendig sind.

- Als **Server** einer Einzelplatzinstallation ist entweder `localhost` oder der `Computername` eingetragen. Beide Eintragungen sind gleichberechtigt korrekt
- Als **Port** ist der während der Installation des SVWS-Servers angegebene Port zur Datenbank eingetragen. Der Standard ist `3306`.
- Als **Datenbankschema** ist der während der Installation des SVWS-Servers angegebene Name des Datenbankschemas eingetragen. Der Standardname lautet `svwsdb`.
- Als **Benutzername** ist der während der Installation des SVWS-Servers angegebene Benutzername eingetragen. Der Standardbenutzer ist `svwsadmin`.
- Als **Benutzerpasswort** ist das während der Installation des SVWS-Servers angegebene Benutzerpasswort für den Zugriff auf die Datenbank eingetragen.
- Als **URL für SVWS-Server** ist die URL eingetragen, die im Browser zum Start des SVWS-Client eingetragen werden muss. Der Standard ist `https://Servername` oder `https://Server-IP-Adresse`. Beide Angaben sind gleichberechtigt korrekt.
- Als **Port** für den Zugriff des SVWS-Clients auf die Datenbank ist der Port `443` eingetragen. Dies ist der Standard-Port für den verschlüsselten Zugriff des SVWS-Clients auf die Datenbank.
- Durch das Auswahlfeld `Beim Verbindungstest berücksichtigen` kann dieser verschlüsselte SSL-Zugriff ebenfalls getestet werden, bevor die Konfigurationsdatei erzeugt wird. Die Aktivierung des Häkchens wird empfohlen.
- Optional: Angaben zum Proxy-Server
- Als **Verzeichnis für die Konfigurationsdatei** (Connection-File) wird standardmäßig ein Unterverzeichnis im SVWS-Arbeitsverzeichnis angeboten. Wir empfehlen die Einstellung unverändert zu übernehmen. Der Standardpfad lautet `C:\SVWS-Arbeitsverzeichnis\Connection-Files`
- Im letzten Feld können Sie einen **Namen für die Konfigurationsdatei** vergeben. Wir empfehlen hier den gleichen Namen zu verwenden, den auch das Schema trägt. So fällt eine Zuordnung der Konfigurationsdatei zum Schema leichter. Der Standardname ist `svwsdb`

Führen Sie die Verbindungstests für MariaDB und SVWS aus. Beide Tests müssen mit den eingetragenen Ports erfolgreich sein. Klicken Sie anschließend auf **Datei speichern**. Bestätigen Sie die Meldung über die gespeicherte Konfigurationsdatei und schließen Sie das Fenster mit **Schließen**.

### Start der Programme

SchILD-NRW 3 kann wie gewohnt über einen Doppelklick auf das Desktopsymbol oder über einen Einfachklick auf das Symbol im Startmenü gestartet werden.

Zum Start des SVWS-Clients öffnen Sie einen Browser. Tippen Sie dann in die Adresszeile die URL zum SVWS-Client ein (`https://localhost` oder `https://Computername`).

Für den Zugriff auf beide Programme müssen Sie sich als SchILD-Benutzer anmelden. Verwenden Sie hier die gleichen Zugangsdaten, die sie auch in SchILD-NRW 2 verwendet haben.

SchILD-NRW 3 und der SVWS-Client greifen gleichermaßen auf die MariaDB zu. Beide Programme verfügen über ebenbürtige Eintragungsmöglichkeiten, aber auch über unterschiedliche. So enthält der SVWS-Client die Funktionen von LuPO und Kurs42, während SchILD-NRW 3 Abiturberechnungen enthält.

In den kommenden Monaten werden die Fähigkeiten des SVWS-Clients stetig ausgebaut, so dass dieser später die gleichen Funktionalitäten enthalten wird, wie SchILD-NRW 3.

## Windows Server-Client-Installation

Im Folgenden wird die Installation von SchILD-NRW 3 und dem SVWS-Server in einer Server-Client-Umgebung vorgestellt. In produktiven Schulumgebungen wird diese Form der Installation der Standardfall sein.

Für die Installation der Komponenten sind Administrationsrechte an allen PCs notwendig.

### Installationsumfang

Installiert werden

1.  Ein Maria-Datenbankmanagementsystem
    - Das Datenbankmanagementsystem steuert den Multiuserzugriff auf die Datenbanken
    - Das Programm wird im Ordner `C:\Programme\SVWS-Server\db` gespeichert
    - Die Datenbankdateien werden im Verzeichnis `C:\ProgramData\SVWS-Server\data` gespeichert
    - Die Kennwörter für den Zugriff auf die Datenbanken werden in der Datei `C:\ProgramData\SVWS-Server\res\svwsconfig.json` gespeichert
2.  Eine Java-Laufzeitumgebung
    - Dieses Programm ist notwendig, um den SVWS-Server auszuführen.
    - Die Laufzeitumgebung wird im Ordner `C:\Programme\SVWS-Server\java` gespeichert
3.  Der SVWS-Server
    - Der SVWS-Server fungiert als Dienstprogramm, welches logische Aufgaben übernimmt und den Zugriff auf die MariaDB-Datenbank regelt.
    - Das Programm wird im Ordner `C:\Programme\SVWS-Server\svws-server` gespeichert.
    - Log-Dateien werden im Ordner `C:\ProgramData\SVWS-Server\logs` gespeichert. Die Log-Dateien enthalten Informationen zu Fehlern bei der Ein- und Ausgabe des SVWS-Servers.
4.  Der SVWS-Client
    - Der SVWS-Cient ermöglicht den browserbasierten Zugriff auf die Datenbanken und greift auf logische Aufgaben des SVWS-Servers zurück. Der SVWS-Client übernimmt die Aufgaben der Programme LuPO und Kurs42.
    - Der Client wird im Ordner `C:\ProgramData\SVWS-Server\client` installiert.
5.  Eine SSL-Zertifikatsdatei
    - Das Zertifikat muss später im System angemeldet werden, damit der SVWS-Client im Browser ohne Sicherheitswarnung gestartet werden kann.
    - Die SSL-Zertifikatsdatei wird im Ordner `C:\Users\<benutzername>\Dokumente\SVWS.cer` gespeichert.

### Installation des SVWS-Servers auf dem Windows-Server

![Auswahl des Zielordners](/bilder/installation/installation-svws-server-ziel-ordner.png)

*Auswahl des Zielordners*

Die neuste Version des SVWS-Servers kann hier heruntergeladen werden: <https://github.com/SVWS-NRW/SVWS-Server/releases>

Führen Sie die Datei win64-installer-version.exe aus.

Es folgt ein Hinweisfenster der Benutzerkontensteuerung, dass durch die Installation Änderungen am Gerät vorgenommen werden. Klicken Sie hier auf die Schaltfläche `Weiter`.

Im folgenden Fenster akzeptieren Sie die Lizenzvereinbarung für die Installation des SVWS-Servers.

Anschließend können Sie die Installationspfade für das Datenbanksystem und das Programmverzeichnis auswählen. Für die Installation auf einem Server empfehlen wir, die vorgeschlagenen Pfade nicht zu ändern.

![Konfigurieren der Installation](/bilder/installation/installation-svws-server-konfiguration.png)

*Konfigurieren der Installation*

Es folgen die Konfigurationsangaben der SVWS-Server-Installation. Aktivieren Sie hier das Auswahlfeld zu "Migriere aus einem Schild v2.x - Schema", damit während des Installationsprozesses die Daten einer SchILD-NRW 2 - Datenbank in die MariaDB migriert werden. Alle anderen Auswahlfelder sollten Sie so belassen.

Wenn die MariaDB installiert wird, wird automatisch ein Benutzer mit dem Namen "root" erzeugt. Dieser Benutzer hat als Super-Admin volle Zugriffsrechte auf alle Datenbanken, kann diese erzeugen und löschen. Legen Sie das root-Kennwort für diesen Benutzer fest und notieren Sie sich das Kennwort.

Der Installer schlägt Ihnen bereits ein sehr sicheres Kennwort vor, welches von einem Zufallsgenerator erzeugt wurde. Verwahren Sie dieses Kennwort an einem sichern Ort.

::: danger Achtung

**Bewahren Sie das root-Kennwort bei der zuständigen IT auf. Geht es verloren, muss diese den administrativen Zugang wiederherstellen; ein persönliches SchILD-Kennwort genügt dafür nicht.**

Jede Person mit Kenntnis des root-Kennworts kann sich als Super-Admin an allen Datenbanken anmelden.

:::

Sie können zudem den Port für den direkten Zugriff auf MariaDB eingeben. Geben Sie Datenbank-Host und Port in den dafür vorgesehenen Feldern an, beispielsweise Host `Servername` mit Port `3306`. Hier wird **kein `https://`** vorangestellt. Die HTTPS-Adresse gehört zur getrennten Verbindung mit dem SVWS-Server.

Als Standard ist hier der Port 3306 eingetragen. Sie müssen die Portnummer nur dann ändern, wenn der Port 3306 bereits durch eine andere Anwendung belegt wird. Dies kann z.B. dann der Fall sein, wenn Sie ein anderes datenbankbasiertes Programm oder einen anderen datenbankbasierten Dienst installiert haben. Erhöhen Sie in einem solchen Fall die Portnummer z.B. auf 3307.

Vergeben Sie einen Namen für das Datenbank-Schema. Bei dem Datenbank-Schema handelt es sich um eine leere Datenbank, in der bereits alle Notwendigen Tabellen angelegt wurden. Im Gegensatz zu SchILD-NRW 2 gibt es keine Standarddatenbank. Jede Datenbank in SchILD-NRW 3 muss einen hier zu definierenden Namen erhalten.

Legen Sie einen **Datenbank-Benutzer** mit Kennwort an. Der Installer schlägt ein zufällig erzeugtes Kennwort vor. Dieser technische Zugang erhält Administrationsrechte auf die hier eingerichtete Schuldatenbank und wird von SchILD-NRW 3 für die Verbindung verwendet. Er gehört keiner bestimmten Person. Anders als der root-Zugang ist er im beschriebenen Aufbau auf diese eine Datenbank beschränkt.

Notieren Sie Benutzername und Kennwort für die Einrichtung der Verbindung und bewahren Sie die Angaben bei der zuständigen IT auf. Der root-Benutzer kann das Kennwort bei Bedarf zurücksetzen oder einen anderen Zugang für die Schuldatenbank einrichten.

Klicken Sie auf die Schaltfläche `Weiter`.

![Angaben zum SSL-Zertifikat](/bilder/installation/installation-svws-server-zertifikat.png)

*Angaben zum SSL-Zertifikat*

Im folgenden Fenster geben Sie den Zertifikatsnamen, den Schulnamen und den Schulort für die Zertifikatsdatei ein. Die Zertifikatsdatei wird während des Installationsprozesses erzeugt und muss in einem späteren Schritt im Betriebssystem installiert werden.

![Zu migrierende Datenbank wählen](/bilder/installation/installation-svws-server-migration.png)

*Zu migrierende Datenbank wählen*

Wenn Sie das Auswahlfeld "Migriere aus einem Schild v2.x - Schema" aktiviert hatten, folgt nun ein Fenster, in welchem Sie Angaben zur Migration einer SchILD-NRW 2 - Datenbank vornehmen müssen. Wählen Sie hier das Datenbankformat der SchILD-NRW 2-Datenbank aus (Access MDB, MariaDB, MySQL, Microsoft SQL-Server).

Bei der Migration einer Access MDB müssen Sie den Dateipfad zur Access MDB angeben (z.B. schild200n.mdb). Bei der Migration einer MariaDB, MySQL- oder Microsoft SQL-Server-Datenbank müssen Sie einen Benutzernamen mit vollen Zugriffsrechten auf die Datenbank angeben. Zudem das zugehörige Passwort, den Ort der Datenbank (z.B. Servername oder Server-IP-Adresse 192.168.1.x) und den Namen des Schemas der Datenbank.

![Info-Fenster während des Installationsprozesses](/bilder/installation/installation-svws-server-installationsprozess.png)

*Info-Fenster während des Installationsprozesses*

Im Anschluss können Sie die Installation starten. Während des Installationsprozesses wird die MariaDB installiert, der SVWS-Server installiert, die benötigte Java-Bibliothek installiert, die Konfigurationsdatei mit den Zugangsdaten auf die MariaDB gespeichert, die Zertifikatsdatei gespeichert und der SVWS-Server als Dienst gestartet. Im Anschluss wird noch die SchILD-NRW 2-Datenbank in das SchILD-NRW 3-Schema migriert.

Ein Anzeigefenster informiert Sie über den Fortschritt der Installation. Insbesondere die Migration der Datenbank kann einige Zeit in Anspruch nehmen.

### Einrichten einer Datenpartition mit Ordnerstruktur

Es empfiehlt sich, eine Datenpartition einzurichten. Erzeugen Sie in dieser Partition die Ordner `Programme`, `Users` und `Gruppen`. Vergeben Sie für den Ordner Programme lesende Rechte. Vergeben Sie für den Ordner Users individuelle Benutzerrechte. Vergeben Sie für den Ordner Gruppen individuelle Gruppenrechte.

Richten Sie einen Netzlaufwerkspfad für den Ordner Programme ein (z.B. P:). Richten Sie ebenfalls einen Netzlaufwerkspfad für den Ordner Gruppen ein (z.B. G:)

### Installation von SchILD-NRW 3

![Auswahl des Zielordners](/bilder/installation/installationsverzeichnis-server.png)

*Auswahl des Zielordners*

Laden Sie das Installationspaket für den vorgesehenen Programmstand aus den [offiziellen SchILD-NRW-3-Releases](https://github.com/SVWS-NRW/Schild-NRW-3/releases) herunter. Achten Sie auf die dort genannte passende SVWS-Server-Version.

Installiert werden

1.  SchILD-NRW 3 im Ordner `P:\SchILD-NRW3`, auf das nur lesende Rechte notwendig sind
2.  ein Arbeitsverzeichnis im Ordner `G:\SVWS-Arbeitsverzeichnis`, auf welches lesende und schreibende Rechte notwendig sind. Dieser Ordner wird z.B. die Connection-Dateien zur MariaDB und die Reports aufnehmen.
3.  eine Connection-Datei schemaname.con im Ordner `G:\SVWS-Arbeitsverzeichnis\Connection-Files`. Die Connection-Datei (früher udl-Datei) ist eine Textdatei, welche Verbindungsdaten zur MariaDB enthält und in einem Texteditor geöffnet werden kann.

Führen Sie die Datei Setup_SchILD3_vXYZ.exe aus. Es folgt ein Hinweisfenster der Benutzerkontensteuerung, dass durch die Installation Änderungen am Gerät vorgenommen werden. Klicken Sie hier auf die Schaltfläche `Weiter`.

Wählen Sie im folgenden Fenster den Installationsordner des Programms. Wir empfehlen, für die Server-Client-Installation den Ordner `P:\SchILD-NRW3`. Klicken Sie hier auf die Schaltfläche `Weiter`.

![Auswahl des Zielordners](/bilder/installation/arbeitsverzeichnis-server.png)

*Auswahl des Zielordners*

Wählen Sie nun, wo das SVWS-Arbeitsverzeichnis erstellt werden soll. Für die Server-Client-Installation empfehlen wir den Ordner `G:\SVWS-Arbeitsverzeichnis`. Klicken Sie hier auf die Schaltfläche `Weiter`.

Sie können nun angeben, unter welchem Programmnamen SchILD-NRW 3 im Startmenü und auf dem Desktop angezeigt werden soll. Wir empfehlen dringend, den vorgegebenen Namen nicht zu ändern. Klicken Sie hier auf die Schaltfläche `Weiter`.

SchILD-NRW 3 wird nun installiert. Ein Hinweisfenster informiert Sie über die erfolgreiche Installation und den Aufruf eines externen Programms zur Einrichtung der Konfigurationsdatei.

#### Die Verbindung mit SchILD_DBConfig.exe konfigurieren

![Konfiguration der Connection-Datei](/bilder/installation/con-server-client.png)

*Konfiguration der Connection-Datei*

Direkt nach der Installation öffnet sich das Konfigurationstool, mittels dem die Datei erstellt wird, die notwendig ist, damit SchILD3 auf das Datenbankschema zugreifen kann.

::: info Hinweis

Das Konfigurationstool kann bei Bedarf auch nachträglich aufgerufen werden, hierzu einfach die *SchILD_DBConfig.exe* im Installationsverzeichnis von SchILD3 als Windows-Administrator ausführen.

:::

Im folgenden Fenster können Sie nun alle voreingetragenen Angaben prüfen, welche zur Erstellung einer Konfigurationsdatei notwendig sind.

- Als **Server** einer Server-Client-Installation ist entweder `Servername` oder die `IP-Adresse` einzutragen. Wir empfehlen die Eintragung des Servernamens.
- Als **Port** ist der während der Installation des SVWS-Servers angegebene Port zur Datenbank eingetragen. Der Standard ist `3306`.
- Als **Datenbankschema** ist der während der Installation des SVWS-Servers angegebene Name des Datenbankschemas eingetragen. Der Standardname lautet `svwsdb`.
- Als **Benutzername** ist der während der Installation des SVWS-Servers angegebene Benutzername eingetragen. Der Standardbenutzer ist `svwsadmin`.
- Als **Benutzerpasswort** ist das während der Installation des SVWS-Servers angegebene Benutzerpasswort für den Zugriff auf die Datenbank eingetragen.
- Als **URL für SVWS-Server** ist die URL eingetragen, die im Browser zum Start des SVWS-Client eingetragen werden muss. Der Standard ist `https://Servername` oder `https://IP-Adresse`. Wir empfehlen den Servernamen.
- Als **Port** für den Zugriff des SVWS-Clients auf die Datenbank ist der Port `443` eingetragen. Dies ist der Standard-Port für den verschlüsselten Zugriff des SVWS-Clients auf die Datenbank.
- Durch das Auswahlfeld `Beim Verbindungstest berücksichtigen` kann dieser verschlüsselte SSL-Zugriff ebenfalls getestet werden, bevor die Konfigurationsdatei erzeugt wird. Die Aktivierung des Häkchens wird empfohlen.
- Optional: Angaben zum Proxy-Server
- Als **Verzeichnis für die Konfigurationsdatei** (Connection-File) wird standardmäßig ein Unterverzeichnis im SVWS-Arbeitsverzeichnis angeboten. Wir empfehlen die Einstellung unverändert zu übernehmen. Der Standardpfad lautet `C:\SVWS-Arbeitsverzeichnis\Connection-Files`
- Im letzten Feld können Sie einen **Namen für die Konfigurationsdatei** vergeben. Wir empfehlen hier den gleichen Namen zu verwenden, den auch das Schema trägt. So fällt eine Zuordnung der Konfigurationsdatei zum Schema leichter. Der Standardname ist `svwsdb`

Führen Sie die Verbindungstests für MariaDB und SVWS aus. Beide Tests müssen mit den eingetragenen Ports erfolgreich sein. Klicken Sie anschließend auf **Datei speichern**. Bestätigen Sie die Meldung über die gespeicherte Konfigurationsdatei und schließen Sie das Fenster mit **Schließen**.

### Installation des SSL-Zertifikats

![Zertifikat installieren](/bilder/installation/installation-svws-server-zertifikat-installieren.png)

*Zertifikat installieren*

Damit der SVWS-Client auf den Windows-Clients ohne störenden Sicherheitshinweis im Browser gestartet werden können, muss das SSL-Zertifikat, welches während des Installationsprozesses des SVWS-Servers erzeugt und gespeichert wurde, im Zertifikatsspeicher des jeweiligen Betriebssystems abgespeichert werden.

Windows übernimmt das Zertifikat mit dem Zertifikatimport-Assistenten in seinen Zertifikatsspeicher. Führen Sie diesen Schritt auf jedem Windows-Rechner aus, der als Client verwendet wird.

Navigieren Sie zum Windows-Systemordner "Dokumente". Dort finden Sie eine Zertifikatsdatei mit dem Namen SVWS.cer. Führen Sie mit Hilfe eines Doppelklicks den Zertifikatimport-Assistenten aus.

Alternativ können Sie mit einem Rechtsklick den Kontextmenüeintrag "Zertifikat installieren" wählen. Es öffnet sich ein Informationsfenster mit Hinweisen zum Zertifikat. Klicken Sie auf die Schaltfläche `Zertifikat installieren`.

1. Wählen Sie als Speicherort **Lokaler Computer**. Dafür benötigen Sie Windows-Administrationsrechte.
2. Klicken Sie auf **Weiter** und wählen Sie **Alle Zertifikate in folgendem Speicher speichern**.
3. Klicken Sie auf **Durchsuchen…** und wählen Sie **Vertrauenswürdige Stammzertifizierungsstellen**.
4. Bestätigen Sie mit **OK** und anschließend mit **Weiter**.

Schließen Sie den Prozess mit Klick auf die Schaltfläche `Fertig stellen` ab. Ein Hinweisfenster informiert Sie über den erfolgreichen Import des Zertifikats.

### Start der Programme

Wir empfehlen, auf jedem Client eine Desktop-Verknüpfung auf `P:\SchILD-NRW3\SchILD30.exe` anzulegen.

SchILD-NRW 3 kann wie gewohnt über einen Doppelklick auf das Desktopsymbol oder über einen Einfachklick auf das Symbol im Startmenü gestartet werden.

Zum Start des SVWS-Clients öffnen Sie einen Browser. Tippen Sie dann in die Adresszeile die URL zum SVWS-Client ein (`https://Servername` oder `https://Server-IP-Adresse`) Es empfiehlt sich, einen Favoriten für diesen Link anzulegen. Sie können alternativ einen Browserlink zu dieser Adresse auf dem Desktop des PCs ablegen.

Für den Zugriff auf beide Programme müssen Sie sich als SchILD-Benutzer anmelden. Verwenden Sie hier die gleichen Zugangsdaten, die sie auch in SchILD-NRW 2 verwendet haben.

SchILD-NRW 3 und der SVWS-Client greifen gleichermaßen auf die MariaDB zu. Beide Programme verfügen über ebenbürtige Eintragungsmöglichkeiten, aber auch über unterschiedliche. So enthält der SVWS-Client die Funktionen von LuPO und Kurs42, während SchILD-NRW 3 Abiturberechnungen enthält.

In den kommenden Monaten werden die Fähigkeiten des SVWS-Clients stetig ausgebaut, so dass dieser später die gleichen Funktionalitäten enthalten wird, wie SchILD-NRW 3.

## Update der Programme

![Update ausgewählter Komponenten](/bilder/installation/svws-server-installation-update.png)

*Update ausgewählter Komponenten*

Für ein Update mit dem ZIP-Paket entpacken Sie dessen Inhalt in das bestehende Installationsverzeichnis von SchILD-NRW 3. Dabei werden die vorhandenen Programmdateien überschrieben.

Starten Sie für ein Update des SVWS-Servers den Installer. Wählen Sie im Konfigurationsfenster nur die zu aktualisierenden Komponenten aus. Lassen Sie **Erstelle ein neues Schema** und **Migriere aus einem Schild v2.x - Schema** ausgeschaltet. So aktualisieren Sie die Programmdateien, ohne eine neue Schuldatenbank anzulegen oder eine Migration zu starten.

## Admin.ini

In der Datei `Admin.ini` im Installationsverzeichnis von SchILD-NRW 3 können Administratorinnen und Administratoren Voreinstellungen festlegen. Öffnen und bearbeiten Sie die Datei mit einem Texteditor.

### Parameter

Folgende Parameter können hinterlegt werden:

```ini
[Administration]
GroupDir={Pfad zum SVWS-Arbeitsverzeichnis}
```

```ini
[Email]
MaxEmails={max. Anzahl Empfänger}
```

```ini
[Email]
SMTPServer=
SMTPPort=
SMTPLogin={0 oder 1; bei 1 wird ein explizites Login verwendet. Die Benutzer müssen dann ihre Zugangsdaten in SchILD-NRW 3 hinterlegen.}
SMTPSSL={0 oder 1}
SMTPStartTLS={0 oder 1}
```

### Erläuterung

#### GroupDir

Die Pfadangabe zum SVWS-Arbeitsverzeichnis muss für den Zugriff auf Verbindungsdateien (Connections) und Reports zwingend angegeben werden. Der Eintrag wird während des Installationsprozesses von SchILD-NRW 3 automatisch vorgenommen.

Es können alle von Windows unterstützten Pfadangaben verwendet werden. Hierzu gehören auch UNC-Pfade.

#### KeepConnectionAlive

Energiesparmodi können die Verbindung zwischen dem Arbeitsplatzrechner und dem Server unterbrechen. Mit diesem Parameter kann SchILD-NRW 3 regelmäßig ein Verbindungssignal (Ping) an den Server senden, um die Verbindung aufrechtzuerhalten.

#### MaxE-Mails

Die meisten E-Mail-Provider beschränken die Anzahl der Empfänger pro E-Mail in den Feldern `An`, `Cc` und `Bcc`.

Hier können Sie die maximale Anzahl von Empfängern pro E-Mail hinterlegen. Überschreitet die Anzahl der Empfänger einer SchILD-NRW 3-Massen-E-Mail diesen Wert, teilt SchILD-NRW 3 die Empfänger automatisch auf mehrere E-Mails auf.

#### SMTP-Angaben

SMTPServer, SMTPPort, SMTPLogin, SMTPSSL, SMTPStartTLS

Anstatt die SMTP-Einstellungen in den globalen Einstellungen von SchILD-NRW 3 vorzunehmen, können diese Angaben zentral über die Datei *Admin.ini* bereitgestellt werden.

Dies kann beispielsweise sinnvoll sein, wenn ein Schulträger oder kommunaler IT-Dienstleister einen gemeinsamen E-Mail-Provider für mehrere Schulen zur Verfügung stellt.

## Deinstallieren der Programme

### Deinstallation über die Einstellungen von Windows

Sie können den SVWS-Server und SchILD-NRW 3 auf einem PC mit Windows-Betriebssystem wie gewohnt unter *Einstellungen ➜ Apps ➜ Installierte Apps'* deinstallieren. Sichern Sie vorab alle Datenbankdaten, welche Sie behalten möchten.

Nach der Deinstallation verbleiben einige Ordner auf dem System, die vor einer Neuinstallation manuell gelöscht werden sollten, da es andernfalls zu Problemen bei einer Neuinstallation kommen wird. Bedenken Sie jedoch, dass nach dem Löschen auch alle Datenbank-Daten im SVWS-Datenbank Ordner gelöscht werden:

- Der SchILD-NRW 3 Programmordner `C:\Programme (x86)\SchILD3.0` oder `C:\Program Files (x86)\SchILD3.0`
- Der SVWS-Server Ordner `C:\Programme\SVWS-Server` oder `C:\Program Files\SVWS-Server`
- Der SVWS-Datenbank Ordner `C:\ProgramData\SVWS-Server`
- Den Unterordner Connection-Files im SVWS-Arbeitsverzeichnis unter `C:\SVWS-Arbeitsverzeichnis\Connection-Files`

Der Ordner `ProgramData` ist als Systemordner standardmäßig unsichtbar. Sie können entweder den Pfad in die Adressleiste des Datei-Explorers eintippen, oder in der Ansicht des Datei-Explorers ausgeblendete Elemente anzeigen lassen. Um die Ordner im Verzeichnis `ProgramData` und `Programme` bzw. `Program Files` löschen zu können sind Admin-Rechte notwendig.

### Batch-Datei als Alternative

Sie können hier eine Batch-Datei als ZIP-Datei herunterladen, welche den gesamten Deinstallationsprozess übernimmt.

- Die Datei löscht auf Wunsch den Schild-Installationsordner und zugehörige Einträge in der Registry.
- Die Datei stoppt und löscht auf Wunsch alle SVWS-Dienste, den SVWS-Installationsordner, den Maria-DB Installationsordner und zugehörige Einträge in der Registry.
- Die Datei löscht auf Wunsch alle Connection-Dateien im SVWS-Arbeitsverzeichnis.

**Bedienung**

1.  Laden Sie die ZIP-Datei herunter
2.  Entpacken Sie die ZIP-Datei
3.  Öffnen Sie die BAT-Datei in einem Editor
4.  Passen Sie bei Bedarf die Pfade an und speichern Sie die Datei
5.  Führen Sie die Datei über das Kontextmenü als Administrator aus

**Die Batch-Datei wird sie durch den Deinstallations-Prozess führen.**

::: info Hinweis – ⬇️Download

[Delete SVWS-Server and SchILD-NRW 3.zip](/dateien/installation/delete-svws-server-and-schild-nrw-3.zip)

:::

Vertrauen Sie nur BAT-Dateien aus sicheren Quellen, da diese Schaden im System anrichten können

## Testen und melden von Fehlern in SchILD-NRW 3

Fehler können Sie im GitHub-Ticketsystem melden. Ein solcher Eintrag heißt dort **Issue**. Wenn Sie unsicher sind, ob ein Programmfehler oder eine Bedienungsfrage vorliegt, beschreiben Sie das Problem zunächst im [Anwenderforum](https://schulverwaltungsinfos.nrw.de/svws/forum/index.php):

<https://github.com/SVWS-NRW/Schild-NRW-3/issues>

Um Fehlerbilder (Issues) zu melden oder zu kommentieren benötigen Sie einen kostenlosen GitHub-Account.

Bitte beachten Sie, dass Sie zunächst die bestehenden Issues sichten, bevor Issues doppelt angelegt werden. Benutzen Sie hierzu auch gerne die Suchfunktion.

Beschreiben Sie den Fehler bitte so genau, wie möglich. Präzise Angaben zur Versionsnummer des Programms, des Workflows und des Fehlerbildes helfen, die Ursache ausfindig zu machen.

::: danger Achtung

Bitte schreiben Sie alle Fehlermeldungen in das Ticketsystem bei Github, es sei denn, es handelt sich um sensible sicherheitsrelevante oder datenschutz-technische Probleme. Melden Sie solche Probleme bitte unbedingt per E-Mail an die Support-Adresse.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Installation_SVWS-Server_und_SchILD-NRW_3)

