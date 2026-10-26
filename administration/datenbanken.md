# Datenbanken verbinden, sichern und wiederherstellen

Verbinden Sie SchILD-NRW mit einer vorhandenen Datenbank oder legen Sie ein neues Schema an. Unterscheiden Sie außerdem Arbeitssicherung, Wiederherstellung und Import in ein anderes Schema.

## Eine Datenbank bereitstellen

Datenbanken werden im [SVWS-AdminClient](https://doku.svws-nrw.de/adminclient/) angelegt, migriert und schemaübergreifend importiert. Diese root-pflichtigen Funktionen gehören nicht zur Oberfläche von SchILD-NRW 3.6.0.

Die Anleitung [Eine Datenbank migrieren und mit SchILD-NRW 3 verbinden](/administration/datenbanken/schild-nrw-daten-in-eine-andere-datenbank-uebertragen-migrieren-tutorial) beschreibt die anschließende Connection-Datei. Historische SchILD-Dialoge sind unter [Frühere Verfahren](/hilfe/fruehere-verfahren) zugänglich.

## Sichern und wiederherstellen

1. [Die Datenbank sichern](/administration/datenbanken/datenbank-sichern-verwaltung-datenbank) und ein für den Windows-Benutzer erreichbares Sicherungsverzeichnis wählen.
2. Bei Bedarf [Eine Datenbanksicherung wiederherstellen](/administration/datenbanken/datenbank-wiederherstellen-verwaltung-datenbank). Die aktuelle Datenbank wird überschrieben; andere Benutzer müssen sich abmelden.

Eine Arbeitssicherung in derselben Serverumgebung ersetzt kein unabhängiges Backup gegen Serverausfall oder Datenverlust. Die Abgrenzung ist in der Sicherungsanleitung erläutert.

## Die Verbindung erhalten

Die Anleitung [Die Datenbankverbindung durch Pings aufrechterhalten](/administration/datenbanken/datenbankverbindung-durch-automatische-pings-am-leben-erhalten-tutorial) beschreibt die entsprechende Einstellung in Admin.ini. Für die Begriffe und Rollen verwenden Sie [Datenbank, Benutzer und Ordner verstehen](/einstieg/grundlagen/faq).
