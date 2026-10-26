---
title: "Daten über die SchILD-NRW-Schnittstelle austauschen"
source_pageid: 354
source_revision: 5871
---

# Daten über die SchILD-NRW-Schnittstelle austauschen

Exportieren und importieren Sie die unterstützten Daten als Schnittstellendateien. Wählen Sie Verzeichnisse und Datenarten bewusst und beachten Sie die Importoptionen sowie das Fehlerprotokoll.

## Export

[![Aufruf des Exportfensters.](/bilder/import-export-statistik/export-schnittstellendateien-1.png)](/bilder/import-export-statistik/export-schnittstellendateien-1.png)

*Aufruf des Exportfensters.*

[![Auswahl, welche Schnittstellendateien mit welchen optionalen Einstellungen erzeugt werden sollen.](/bilder/import-export-statistik/export-schnittstellendateien-2-auswahlfenster.png)](/bilder/import-export-statistik/export-schnittstellendateien-2-auswahlfenster.png)

*Auswahl, welche Schnittstellendateien mit welchen optionalen Einstellungen erzeugt werden sollen.*

Öffnen Sie **Export → Allgemeine Exporte → Schnittstelle SchILD-NRW**. Im Exportfenster wählen Sie aus, welche Daten in Schnittstellendateien gespeichert werden sollen.

Zuerst legen Sie ein **Ausgabeverzeichnis** fest.

::: tip Tipp

Nutzen Sie das *SVWS-Arbeitsverzeichnis* oder ein von mehreren Nutzern geteiltes Verzeichnis, ist es sehr wichtig, schon von Beginn an eine klare Ordnerstruktur abzusprechen.

:::

Hier im Beispiel sollen unsere Dateien im Arbeitsverzeichnis im Unterordner *Export\Schnittstellendateien* abgelegt werden.

- Über **Vorhandene Export-Dateien vorher löschen** ist festzulegen, ob im Ordner schon vorhandene Dateien gelöscht werden sollen. Diese Einstellung ist sinnvoll, wenn nur ein Teil der Daten exportiert wird. Würden existierende Dateien nicht gelöscht, könnten im Ordner zum einen die frisch exportierten Daten, aber auch andere, ältere Dateien zusammen existieren und im Laufe der nächsten Operationen zu Fehlern führen.

- Der Schalter **UTF8-kodierte Datei erzeugen** legt fest, ob die Dateien als *ANSI* oder *UTF8 (Unicode)* kodiert werden. Für moderne Systeme macht es Sinn, UTF8 zu nutzen, jedoch kann es sein, dass ein anderes, älteres Programm, mit dem die Daten verarbeitet werden sollen, Unicode nicht unterstützt.

Unter **Zu exportierende Schüler** stehen die Personen aus der aktuellen Schülerauswahl. Filtern Sie deshalb zuerst unter **Schüler** die gewünschte Gruppe und öffnen Sie danach den Export.

Im Fenster **Zu exportierende Daten** werden die Schnittstellendateien mit den gewünschten Inhalten ausgewählt.

::: tip Tipp

Sollen weniger als die Hälfte der Dateien erzeugt werden, hilft ein Klick auf **Alle aus** unter dem Auswahlfenster, so dass die gewünschten Dateien mit weniger Klicks einfach angewählt werden können.

:::

## Weitere Export-Optionen

Weiterhin werden weitere **Export-Optionen** angeboten.

- Über **Exportart für Schüler-Stammdaten** wird gesteuert, welche Schule als die *Zuletzt besuchte Schule* eingetragen ist.
  - **"Normaler" Export**: Hier werden die Daten wie in der Datenbank übernommen.
  - **Schulwechsel-Export**: Hier wird die eigene Schule als *Zuletzt besuchte Schule* eingetragen, da die Personen ja die eigene Schule mit dem Schulwechsel verlassen.

- Der Schalter **Nur "sichtbare" Einträge exportieren** beschränkt die betreffenden Katalogdaten auf sichtbare Einträge, soweit der jeweilige Katalog diese Eigenschaft unterstützt. Die frühere Sichtbarkeitssteuerung der Klassen- und Versetzungstabelle ist kein allgemeingültiges Beispiel für SchILD-NRW 3.

- **Nur aktuellen Abschnitt exportieren** beschränkt die Daten auf die des aktuellen Abschnitts.

- In dieser Dateischnittstelle erfolgt die Zuordnung der Schüler über *Name, Vorname und Geburtsdatum*. Mit **Klasse als zusätzliches Identifikationsmerkmal hinzufügen** wird dieses Merkmal bei schülerbasierten Einträgen zusätzlich zur Verfügung gestellt.

- Über **Schuljahr von... bis** lassen sich der für den Export relevante erste und letzte Abschnitt festlegen.

- Wählen nach Festlegung der gewünschten Einstellungen **Export starten**.

## Import

[![Auswahl der zu importierenden Daten.](/bilder/import-export-statistik/import-schnittstellendateien.png)](/bilder/import-export-statistik/import-schnittstellendateien.png)

*Auswahl der zu importierenden Daten.*

Über *Verwaltung ➜ Import ➜ Schnittstelle SchILD-NRW* wird der Importprozess gestartet.

Zuerst ist ein **Importverzeichnis** zu wählen, in dem sich mit Schnittstellendateien kompatible Dateien befinden.

::: info Hinweis

Dateinamen, Dateiformat und Datentypen der einzelnen Felder müssen der [Schnittstellenbeschreibung](/schild3/import-export-statistik/schnittstellenbeschreibung) entsprechen. Andernfalls können die Dateien nicht korrekt importiert werden.

:::

Nach der Verzeichnisauswahl zeigt **Zu importierende Daten** die gefundenen Dateien an. Im Beispiel enthält der Ordner nur einen Teil der möglichen Schnittstellendateien.

Wählen Sie per Haken die gewünschten Dateien an. Über **Alle aus** unter der Liste können alle Haken entfernt werden, um dann die gewünschten neu zu setzen.

- Unter **Importart** kann zwischen zwei Varianten gewählt werden:
  - **Normaler Import**: Es können alle Datenarten importiert werden, wobei fehlende Einträge in Katalogen automatisch angelegt werden.
  - **Schulwechsel-Import**: Es können nur Daten importiert werden, die bei einem Schulwechsel von Schülern anfallen können. Dies sind die Schüler-Stammdaten, Erzieherdaten, Telefonumern und Adressen.
- **Keine Schüler neu anlegen** verhindert, dass unerwartet neue Schüler erzeugt werden. Es werden nur vorhandene Daten aktualisiert.
- **Keine Änderungen an vorhandenen Datensätzen** verhindert das Überschreiben vorhandener Werte. Fehlende Datensätze beziehungsweise bislang leere Felder können laut Schnittstellenbeschreibung ergänzt werden. Unterscheiden Sie diese Option von **Keine Schüler neu anlegen** und beachten Sie die [Regeln für partielle beziehungsweise additive Importe](/schild3/import-export-statistik/schnittstelle-schild-vorbemerkungen#partielle-bzw-additive-importe). Prüfen Sie die gewählte Kombination vor einem umfangreichen Import an einem bekannten Datensatz.

**Importieren** startet den Import mit den gewählten Optionen.

## Fehlerprotokoll

[![Eventuell auftauchende Fehler werden im Fehlerprotokoll vermerkt.](/bilder/import-export-statistik/import-schnittstellendateien-fehlerprotokoll.png)](/bilder/import-export-statistik/import-schnittstellendateien-fehlerprotokoll.png)

*Eventuell auftauchende Fehler werden im Fehlerprotokoll vermerkt.*

Tauchen beim Import bei einzelnen Datensätzen Fehler auf, werden diese nun in einem Fehlerprotokoll angezeigt.

Dieses lässt sich *Drucken* oder als Textdatei *Speichern*.

Nach dem Import sind **Fehlerprotokoll und Stichprobe der Zieldaten** zu prüfen; ein abgeschlossener Lauf belegt nicht die vollständige Übernahme aller Datensätze.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Schnittstelle_SchILD-NRW_(Verwaltung_Export)) · Quellrevision 5871.
