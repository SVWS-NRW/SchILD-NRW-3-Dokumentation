---
title: "Den passenden Import oder Export wählen"
---

# Den passenden Import oder Export wählen

Unterscheiden Sie Schnittstellendateien, Tabellenimporte und zielbezogene Exporte. Die Übersicht erläutert die grundlegenden Dateiformate und ihre Weiterverarbeitung.

[![Übersicht über die Importmöglichkeiten.](/bilder/import-export-statistik/import-uebersicht.png)](/bilder/import-export-statistik/import-uebersicht.png)

*Übersicht über die Importmöglichkeiten.*

[![Übersicht über die Exportmöglichkeiten.](/bilder/import-export-statistik/export-uebersicht.png)](/bilder/import-export-statistik/export-uebersicht.png)

*Übersicht über die Exportmöglichkeiten.*

SchILD-NRW 3 stellt sehr vielseitige und flexible Möglichkeiten für Import und Export zur Verfügung.

Das Dateiformat hängt vom gewählten Verfahren ab. Die SchILD-NRW-Dateischnittstelle verwendet Textdateien mit festgelegten Dateinamen und dem Pipe-Zeichen „\|“ als Trennzeichen. Daneben gibt es Tabellenimporte und zielbezogene Exporte, etwa als CSV, XML oder ZIP. Ein beliebiger CSV-Export ist daher noch keine passende Importdatei.

Bei den hier beschriebenen Textdateien benennt eine Kopfzeile die Felder. Halten Sie für den jeweiligen Import Dateiname, Feldbezeichnungen, Reihenfolge, Trennzeichen und Zeichenkodierung gemäß Schnittstellenbeschreibung ein.

Daten können auch in Tabellenkalkulationsprogramme wie MS Excel oder OpenOffice Calc exportiert werden, um sie dort weiterzuverarbeiten. Umgekehrt können Daten mit solchen Programmen auch für einen Import in SchILD-NRW 3 vorbereitet werden.

::: tip Tipp

Über die *Schnittstellendateien* in Verbindung mit soliden Kenntnissen einer Tabellenkalkulation können nahezu beliebige Daten für Import und Export aufbereitet werden, z.B. indem Sie alle Spalten als Text importieren.

:::

Eine Datei mit dem *Nachnamen*, dem *Vornamen* und den beiden *Telefonnummern* aus den *Individualdaten I* würde in einer Textdatei für Import oder Export über allgemeine Dateien zum Beispiel so aussehen:

    "Name";"Vorname";"Telefon";"Fax"
    "Altmann";"Sophia";"01234-186610";"0189-829408"
    "Bode";"Dieter";"01234-881962";"0189-435683"
    "Bohnenstengel";"Marco";"01234-971312";"0189-495767"
    "Büren";"Barbara";"01234-956645";"0189-921083"



::: danger Achtung

Manche Tabellenkalkulationsprogramme haben beim Import von CSV-Dateien die Eigenschaft, Felder, die *eventuell* ein Datum sein könnten, auch als solches zu interpretieren (z. B. die Klassenbezeichnung „051“ als „5. Januar“). Achten Sie daher unbedingt direkt nach dem Öffnen darauf, dass *alle* Daten korrekt dargestellt werden.

Eine nachträgliche Korrektur solcher automatischen Umdeutungen ist mitunter nicht mehr zuverlässig möglich.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Im-_und_Export_(Verwaltung))
