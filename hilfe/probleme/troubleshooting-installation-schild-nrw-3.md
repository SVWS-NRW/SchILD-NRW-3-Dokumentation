---
title: "Installations- und Verbindungsprobleme beheben"
---

# Installations- und Verbindungsprobleme beheben

Grenzen Sie Fehler bei Migration, Reportverzeichnissen, Statistikbibliotheken und Connection-Dateien ein. Die Abschnitte sind nach dem jeweils beobachteten Problem gegliedert.

## Die Migration von SchILD-NRW 2 zum SVWS-Server scheitert

Wurden vor der Migration die [vorbereitenden Maßnahmen](/administration/installation/installation-svws-server-und-schild-nrw-3#vorbereitende-maßnahmen) durchgeführt?

Sichten Sie die Log-Datei, welche bei der Migration angefertigt wurde. Sind hier fehlerhafte Prozesse zu finden?

Handelt es sich um eine Migration einer SQL-Datenbank eines Linux-Systems? Dann vergleichen Sie die Groß- und Kleinschreibung der SQL-Tabellen mit der erwarteten Groß- und Kleinschreibung der schild2000n.mdb im Unterverzeichnis Vorlagen. Passen Sie abweichende Schreibweisen an.

Ist die Access-MDB zu alt? Dann führen Sie zunächst mit dem Migrationstool für SchILD-NRW 2 eine Migration in eine leere schild2000n.mdb durch. Sie finden die Vorlage im Unterverzeichnis Vorlagen von SchILD-NRW 2.

Die Migration scheitert, ohne die Fehlerursache eingrenzen zu können. Führen Sie in diesem Fall zunächst eine Migration der SchILD-NRW 2 Datenbank in eine leere schild2000n.mdb durch. Hierdurch werden fehlende Primärschlüssel neu gesetzt und inkonsistente Datensätze herausgefiltert und protokolliert.

## Reports erscheinen nicht in SchILD-NRW 3

Reports tauchen in SchILD-NRW 3 nicht auf, obwohl sie im Report-Verzeichnis *SchILD-Reports* abgelegt wurden.

Das Verzeichnis SchILD-Reports gehört nicht wie bei SchILD-NRW 2 in das *SchILD-Installationsverzeichnis* (z.B. `C:\SchILD-NRW3\`) sondern in das SVWS-Arbeitsverzeichnis (z.B. `S:\SVWS-Arbeitsverzeichnis\`). Der Pfad zum SVWS-Arbeitsverzeichnis wird in der admin.ini im SchILD-NRW 3 Installationsverzeichnis gespeichert.

## Statistikbibliotheken registrieren

Wurden die Statistik-dlls nicht korrekt auf dem Windows-Klienten registriert, kann es zu Fehlern mit ASDPC und den Statistikprüfungen in SchILD-NRW kommen.

Konsultieren Sie den Artikel zur [Hilfe bei Problemen zur Statistik](/hilfe/probleme/hilfe-bei-problemen-verwaltung-statistik-fuer-it-nrw), um die Dateien einer SchILD-NRW-Installation nachträglich zu registrieren.

## Statistik.dll-Konflikte bei paralleler Installation von SchILD-NRW 2

Werden mehrere Installationen von SchILD-NRW 2 und/oder SchILD-NRW 3 parallel betrieben, kann es zu Problemen mit der Statistik.dll kommen, da ein Windows-Klient nur die jeweils zuletzt registrierte Datei verwendet.

Konsultieren Sie den Artikel zur [Hilfe bei Problemen zur Statistik](/hilfe/probleme/hilfe-bei-problemen-verwaltung-statistik-fuer-it-nrw), um die Dateien einer SchILD-NRW-Installation nachträglich zu registrieren.

Nehmen Sie für weitere Ausführungen hierzu das Tutorial zur [Fehler bei der Statistikvorbereitung und Abgabe beheben](/hilfe/probleme/fehleranalyse-zur-statistik-tutorial) zur Kenntnis.

## Erstellen der .con-Datei

Wenn der Datenbankserver läuft, SchILD-NRW 3 aber keine Verbindung herstellen kann, prüfen Sie die Verbindungsdateien (**Connection-Files**). Möglicherweise wurden sie nicht korrekt erstellt.

Zum nachträglichen Erstellen starten Sie `SchILD_DBConfig.exe` aus dem Installationsverzeichnis von SchILD-NRW 3 als Windows-Administrator. Tragen Sie die Verbindungsdaten ein. Im Bereich **Datenbank** steht vor der Adresse kein `https://`; im Bereich **SVWS-Server** ist dieser Zusatz erforderlich.

Entscheidend ist das von SchILD verwendete **Arbeitsverzeichnis**: Die `.con`-Datei muss dort im Unterordner `Connection-Files` liegen. Bei einem gemeinsamen Arbeitsverzeichnis verwenden die Clients dieselbe Datei. Prüfen Sie außerdem die UTF-8-Kodierung und die exakte Groß- und Kleinschreibung des Schemanamens; siehe [Verbindungskonfiguration in der SVWS-Dokumentation](https://doku.svws-nrw.de/deployment/Schild-NRW3/).

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Troubleshooting_Installation_SchILD-NRW_3)
