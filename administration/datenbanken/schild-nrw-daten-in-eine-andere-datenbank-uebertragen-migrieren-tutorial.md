---
title: "Eine Datenbank migrieren und mit SchILD-NRW 3 verbinden"
---

# Eine Datenbank migrieren und mit SchILD-NRW 3 verbinden

::: info Hinweis – Zuständigkeit in SchILD-NRW 3.6.0

Datenbanken anlegen, migrieren und schemaübergreifend importieren: Verwenden Sie den [SVWS-AdminClient](https://doku.svws-nrw.de/adminclient/). Historische SchILD-Dialoge sind unter [Frühere Verfahren](/hilfe/fruehere-verfahren) eingeordnet.

:::

Übertragen Sie eine vorhandene SchILD-NRW-Datenbank und erstellen Sie anschließend die passende Connection-Datei. Die Migration erfolgt im SVWS-AdminClient; die frühere Durchführung in SchILD-NRW ist als historischer Ablauf erhalten.

::: warning Wichtig

Starten Sie die SchILD-NRW-2-Datenbank vor einer Migration mit einer aktuellen Version von SchILD2, damit das technische Datenbankschema bei Bedarf auf den aktuellsten Stand gebracht werden kann.

**Der empfohlene und von der Fachberatung unterstützte Weg zur Migration wird über den *SVWS-AdminClient* vorgenommen. Dessen Dokumentation und eine Anleitung zur Migration finden Sie auf [https://doku.svws-nrw.de](<https://doku.svws-nrw.de>).**

**Um eine Datenbank in SchILD-NRW 3 verwenden zu können, ist im Anschluss die Connection-Datei (.con) zu generieren. Sie finden diese Anleitung hier weiter unten.**

:::

::: info Hinweis

Eine Migration dauert je nach verwendeter CPU und Umfang der Datenbank "einige mitunter lange Minuten". Wenn Sie eine Schule migrieren, die sich bisher im Quartalsbetrieb befand, werden die alten Quartale in Halbjahre und Quartalsnoten umgeschrieben. Dieser Prozess kann im Vergleich zu anderen Migrationen viel länger dauern und je nach Datenbank und CPU mitunter 30 bis ~60 Minuten zusätzlich in Anspruch nehmen.

In diesem Kontext wäre eventuell darüber nachzudenken, die Datenbank noch in SchILD2 auf abgelaufene Löschfristen zu prüfen und nicht mehr aufzubewahrende Schuljahre mit den Leistungsdaten löschen zu lassen.

Über die Datei *svws_server_service.out.log* im *SVWS-Daten-Verzeichnis\logs\* lässt sich die Migration nachvollziehen. In diesem Verzeichnis finden sich noch weitere logs, z.B. zu Fehlern des Servers.

:::

## Erzeugen einer Connection-Datei für SchILD-NRW 3

[![Das Verzeichnis für die Verbindungsdateien im SVWS-Arbeitsverzeichnis.](/bilder/datenbanken/tutorials-migration-con-svws-av.png)](/bilder/datenbanken/tutorials-migration-con-svws-av.png)

*Das Verzeichnis für die Verbindungsdateien im SVWS-Arbeitsverzeichnis.*

Eine migrierte Schul-Datenbank kann direkt im SVWS-Client verwendet werden.

Damit SchILD-NRW 3 eine Schuldatenbank auf dem SVWS-Server öffnen kann, benötigt es eine **Verbindungsdatei** mit der Endung `.con`. Diese wird auch **Connection-Datei** genannt und liegt im Unterordner `Connection-Files` des SVWS-Arbeitsverzeichnisses.

[![Starten Sie die Datei DBConfig.exe.](/bilder/datenbanken/tutorials-migration-con-db-config.png)](/bilder/datenbanken/tutorials-migration-con-db-config.png)

*Starten Sie die Datei DBConfig.exe.*

Das Programm zum Erstellen der `.con`-Dateien liegt im Installationsverzeichnis von SchILD-NRW 3. Starten Sie die in der Abbildung gezeigte Datei.

Beachten Sie hier, dass MS Windows als Standard die Dateiendung *.exe* ausblendet.

Wenn Sie die Datei als Windows-Administrator auf dem Rechner starten, auf dem SchILD-NRW-3 installiert ist, kann es sein, dass viele Daten zum Schema schon ausgefüllt sind.

[![Starten Sie die DBConfig.exe, um mit den Verbindungsdaten eine Verbindungsdatei zu erzeugen.](/bilder/datenbanken/tutorials-migration-con-db-config-beispiel.png)](/bilder/datenbanken/tutorials-migration-con-db-config-beispiel.png)

*Starten Sie die DBConfig.exe, um mit den Verbindungsdaten eine Verbindungsdatei zu erzeugen.*

Sofern die Daten noch nicht ausgefüllt sind, füllen Sie die Maske korrekt aus.

Im Bereich **Datenbank**:

- **Server** bezieht sich auf den Netzwerkpfad oder die IP-Adresse, unter der das Schema im Netzwerk erreicht wird. Hier im Beispiel wird ein lokaler Rechner verwendet. Nutzen Sie in diesem Falle den Rechnernamen oder *localhost*. Beim Server wird **kein** *https://* vor der Adresse eingetragen.
- **Port** bezieht sich auf den Port. Der Standardwert ist 3306, abweichende Werte erhalten Sie von Ihrer IT.
- Das **Datenbankschema** ist der Name Ihrer "Datenbank" im SVWS-Server.
- Der **Benutzername** bezeichnet den technischen MariaDB-Benutzer mit Zugriff auf das gewählte Schema, häufig `svwsadmin`. Gemeint ist weder ein persönlicher SchILD-Benutzer noch der root-Zugang des Datenbankservers. Name und Kennwort müssen zur eingerichteten Datenbankverbindung passen.
- Beim **Kennwort** handelt es sich um das zugehörige Kennwort des SVWS-Administrator, der für dieses Schema eingerichtet wurde.

Im Bereich **SVWS-Server** geben Sie an, unter welcher **URL** oder **IP-Adresse** und auf welchem **Port** in ihrem Netzwerk der SVWS-Server erreicht werden kann. Der Standard hier ist *443*. Hiervon abweichende Ports erhalten Sie von Ihrer IT.

Für eine lokale Installation können Sie die Adresse *[https://localhost](<https://localhost>)* verwenden.

Setzen Sie auch den Haken **Beim Verbindungstest berücksichtigen**, um mögliche Fehler schon hier abzufangen und zu korrigieren.

Es ist zwingend ein **https://** vor der Server-Adresse zu verwenden.

Falls Ihr Netzwerk einen **Proxy-Server** verwendet, tragen Sie hier dessen Verbindungsdaten ein. Ein Proxy-Server vermittelt Netzwerkzugriffe; die passenden Angaben erhalten Sie von Ihrer IT. Ohne Proxy-Server sind hier keine Angaben nötig.

Geben Sie abschließend im Bereich **Konfigurationsdatei** den Pfad des SVWS-Arbeitsverzeichnisses mit dem Verzeichnis der Verbindungsdateien an. Per Standard liegen diese im Unterordner *Connection-Files* im SVWS-Arbeitsverzeichnis.

Bennen Sie Ihre **Konfigurationsdatei**. Es empfiehlt sich, diese Datei nach dem Schemanamen zu benennen. Geben Sie die Dateiendung *.con* **nicht** mit an.

Klicken Sie auf `Verbindungstest`. War dieser erfolgreich, klicken Sie auf `Datei speichern`.

::: tip Richtig – Fertig

Die Konfiguration für SchILD-NRW 3 ist abgeschlossen. Sie können diesen Artikel nun schließen.

:::

Um eine vorhandene Con-Datei zu bearbeiten, können Sie deren Daten mit **Datei öffnen** laden.

## Früherer Ablauf: Migration in SchILD-NRW 3 über *Verwaltung ➜ Datenbank*

:::: details Früheres Verfahren: Migration im SchILD-Dialog

Diese Form der Migration erlaubt es, in einer schon vorhandenen SchILD-NRW-3-Umgebung weitere Datenbanken zu migrieren. Hier kann auch die existierende Datenbank mit einer Neumigration überschrieben werden.

::: info Hinweis

Beachten Sie, dass dennoch die Migration über den SVWS-AdminClient empfohlen wird.

:::

Navigieren Sie zu *Verwaltung ➜ Datenbank* und klicken Sie auf `Datenbank migrieren`.

[![Es muss das Root-Kennwort des Super-Admins für den Datenbankserver eingeben werden.](/bilder/datenbanken/datenbank-root-passwort.png)](/bilder/datenbanken/datenbank-root-passwort.png)

*Es muss das Root-Kennwort des Super-Admins für den Datenbankserver eingeben werden.*

::: danger Achtung

An dieser Stelle ist nun zwingend das *Root-Kennwort des Datenbankservers* anzugeben. Es handelt sich hier nicht um ein Admin-Kennwort von SchILD oder das Kennwort als Schema-Admin.

:::

[![Wälen Sie, in welches Datenbankschema migriert werden soll. Hier wird ein neues Schema angelegt.](/bilder/datenbanken/datenbank-migrieren-einstellungen.png)](/bilder/datenbanken/datenbank-migrieren-einstellungen.png)

*Wälen Sie, in welches Datenbankschema migriert werden soll. Hier wird ein neues Schema angelegt.*

Nun ist die SchILD2-Quelldatenbank, eine MS Access .mdb-Datei zu wählen. Weiterhin sind die Daten für das neue Schema anzugeben. Hier im Beispiel wird als **Datenbankname** das Schema *svwsdb_GS* für eine zusätzliche Grundschuldatenbank gewählt.

Als **Benutzername** wird hier im Beispiel der hier für alle Datenbanken verwendete *svwsadmin* genutzt mit dem existierenden Kennwort genutzt. Sie können auch für jedes Schema, also für jede Datenbank, einen neuen Namen mit neuen Kennwörtern vergeben.

::: info Hinweis

**Zur Erklärung**

SchILD und der SVWS-Server kennen drei Typen von Kennwörtern: Zuerst der Root-Zugriff auf den kompletten Datenbankserver. Zweitens wird jedes Schema von einem Admin-Zugang gesteuert, der für den technischen Zugriff des SchILD-NRW-Programms hinterlegt wird. Schlussendlich gibt es die unterschiedlichen Nutzer in SchILD-NRW selbst mit ihren jeweiligen Berechtigungen.

:::

Klicken sie anschließend auf `Übernehmen`.

::: warning Wichtig

Migrieren Sie in ein existierendes Schema, wird die dort vorhandene Datenbank überschrieben!

:::

[![Bitte warten...](/bilder/datenbanken/datenbank-migrieren-warten.png)](/bilder/datenbanken/datenbank-migrieren-warten.png)

*Bitte warten...*

Es erscheint während der Migration ein Fenster, in dem zum Warten angehalten wird.

[![Bei Erfolg wird diese Meldung angezeigt.](/bilder/datenbanken/datenbank-migrieren-erfolg.png)](/bilder/datenbanken/datenbank-migrieren-erfolg.png)

*Bei Erfolg wird diese Meldung angezeigt.*

Bei Erfolg der Migration werden Sie benachrichtigt.

[![Nach einem Neustart von SchILD-NRW steht die neue Datenbank zur Auswahl bereit.](/bilder/datenbanken/datenbank-migrieren-neustart.png)](/bilder/datenbanken/datenbank-migrieren-neustart.png)

*Nach einem Neustart von SchILD-NRW steht die neue Datenbank zur Auswahl bereit.*

Nach einem Neustart von SchILD-NRW steht die migrierte Datenbank zur Verfügung.

::: tip Richtig – Fertig

Die Migration ist abgeschlossen

:::

::: info Hinweis

Beachten Sie, dass in diesem Modus kein Fenster mit weiteren Informationen und eventuellen Fehlern zum Migrationsprozess anzeigt wird.

:::

::::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Schild-NRW-Daten_in_eine_andere_Datenbank_%C3%BCbertragen_(migrieren)_(Tutorial))
