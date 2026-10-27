---
title: "Früheres Verfahren: Eine SQLite-Datenbank importieren"
---

# Früheres Verfahren: Eine SQLite-Datenbank importieren

::: info Hinweis – Zuständigkeit in SchILD-NRW 3.6.0

Datenbanken anlegen, migrieren und schemaübergreifend importieren: Verwenden Sie den [SVWS-AdminClient](https://doku.svws-nrw.de/adminclient/). Historische SchILD-Dialoge sind unter [Frühere Verfahren](/hilfe/fruehere-verfahren) eingeordnet.

:::

Importieren Sie eine SQLite-Datei in ein vorhandenes oder neues Datenbankschema. Verwenden Sie für das Anlegen beziehungsweise Befüllen eines Schemas den SVWS-AdminClient. Beim Import in eine vorhandene Datenbank wird deren Inhalt überschrieben.

Liegt eine SQLite-Datenbank für SchILD-NRW3 vor, kann diese in das aktuelle, ein anderes oder auch ein neues Schema importiert werden.

Hierzu wird das Root-Password des MariaDB-Servers benötigt. Diese Option erlaubt es zum Beispiel, eine existierende Datenbank auf in einen neuen MariaDB-Server einzuspielen oder ein System mit mehreren Datenbanken aufzusetzen.

::: info Hinweis

Nutzen Sie zum Wiederherstellen der aktiven Datenbank die Funktion Datenbank **Datenbank wiederherstellen**. Damit lässt sich eine Datenbank-Sicherung wieder in eine gleichbenannte Datenbank einspielen. Das Root-Kennwort der MariaDB wird hierbei nicht benötigt und somit ist ein SchILD-Nutzer mit SchILD-Administrationsrechten ausreichend.

:::

[![Wählen Sie Verwaltung ➜ Datenbank ➜ Datenbank importieren (aus SQlite), dann wird das Root-Passwort der MariaDB abgefragt.](/bilder/datenbanken/datenbank-importieren-root-passwort.png)](/bilder/datenbanken/datenbank-importieren-root-passwort.png)

*Wählen Sie Verwaltung ➜ Datenbank ➜ **Datenbank importieren (aus SQlite)**, dann wird das Root-Passwort der MariaDB abgefragt.*

## Früherer SchILD-Ablauf: 1. Den Import mit dem Root-Kennwort öffnen

Starten Sie den Prozess, indem Sie in *Verwaltung ➜ Datenbank* auf `Datenbank importieren (aus SQlite)` klicken.

Geben Sie das Root-Kennwort der MariaDB an.

Bestätigen Sie mit `OK`.  

[![Wählen Sie eine SQLite-Quelldatenbank und ein Ziel. Hier im Beispiel wird in eine neu angelegte Datenbank importiert.](/bilder/datenbanken/datenbank-importieren-datenbank-waehlen.png)](/bilder/datenbanken/datenbank-importieren-datenbank-waehlen.png)

*Wählen Sie eine SQLite-Quelldatenbank und ein Ziel. Hier im Beispiel wird in eine neu angelegte Datenbank importiert.*

## 2. Quelldatei und Zielschema festlegen

Im folgenden Fenster ist eine SQLlite-Quelldatenbank zu wählen.

Als Ziel kann eine existierende oder eine neue Datenbank angegeben werden.

Wird, wie im Beispiel auf dem Screenshot, eine neue Datenbank gewählt, ist weiterhin der neue Name, ein Datenbankadministrator und das Passwort für diesen Admin anzugeben.

Hier im Beispiel wird der existierende Admin für den Namen *svwsadmin* mit dessen existierendem Passwort gewählt. Es kann auch für die neue Datenbank ein neuer Admin mit neuem Passwort erstellt werden.

::: info Hinweis

In den FAQ findet sich eine Erläuterung zu dem Super-Administrator der MariaDB, dem Administrator für ein Datenbankschema und einem SchILD-NRW-Administrator.

:::

::: danger Achtung

**Wird eine existierende Datenbank gewählt, wird diese hierbei überschrieben!**

Klären Sie gegebenenfalls auch mit anderen möglichen Datenbanknutzern, dass nun die existierende Datenbank neu aufgesetzt wird.

:::

Klicken Sie auf `Übernehmen` um den Import zu starten.

Wollen Sie in eine existierende und laufende Datenbank importieren, werden Sie darauf hingewiesen, dass SchILD-NRW und eventuell noch andere laufende Prozesse zu schließen sind.  

[![Bitte warten...](/bilder/datenbanken/datenbank-importieren-import-laeuft.png)](/bilder/datenbanken/datenbank-importieren-import-laeuft.png)

*Bitte warten...*

Es erscheint eine Information, der Import laufe... Bitte warten.  

[![Es folgt die Erfolgsmeldung.](/bilder/datenbanken/datenbank-importieren-erfolg.png)](/bilder/datenbanken/datenbank-importieren-erfolg.png)

*Es folgt die Erfolgsmeldung.*

Bestätigen Sie die Erfolgsmeldung mit `OK`.  

[![Beenden von SchILD-NRW und Neustart, die neue Datenbank steht zur Verfügung.](/bilder/datenbanken/datenbank-importieren-beenden-und-neustart.png)](/bilder/datenbanken/datenbank-importieren-beenden-und-neustart.png)

*Beenden von SchILD-NRW und Neustart, die neue Datenbank steht zur Verfügung.*

Beenden Sie SchILD-NRW.

::: tip Richtig – Fertig

Nach einem Neustart des Programms steht die importierte Datenbank zur Auswahl.  Wurde keine neue Datenbank erzeugt, steht die importierte Datenbank unter dem gewählten Namen zur Verfügung.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Datenbank_importieren_(aus_SQLite)_(Verwaltung_Datenbank))
