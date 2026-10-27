---
title: "JSON-Dateien lesen und verstehen"
---

# JSON-Dateien lesen und verstehen

Lernen Sie die grundlegenden Elemente des JSON-Formats kennen, das unter anderem für Notendateien verwendet wird. Die Beispiele erläutern Werte, Zeichenketten, Arrays und verschachtelte Objekte.

Der SVWS-Server und SVWS-Client und damit auch Teile von SchILD-NRW nutzen die *JavaScript Object Notation*, kurz JSON, für Im- und Exportdateien. JSON wird verwendet, um strukturierte Daten zwischen Anwendungen auszutauschen.

Dieses Format ist kompakt und noch immer recht gut von Menschen zu lesen und im Bedarfsfall gut zu bearbeiten.

JSON-Dateien können beliebig verschachtelt werden und enthalten folgende Typen von Elementen:

- Den **Nullwert**, `null`. Dieser wird wie die Wahrheitswerte unten ohne Anführungszeichen eingetragen.
- **Wahrheitswerte:** `true` bedeutet wahr, `false` bedeutet falsch. Beide Werte stehen ohne Anführungszeichen.
- **Zahlen:** Positive und negative Zahlen werden ohne Anführungszeichen geschrieben, zum Beispiel `-42` oder `3.1415926`. Als Dezimaltrennzeichen dient ein Punkt statt des deutschen Kommas.
- **Zeichenketten**, diese werden durch doppelte Anführungszeichen " eingeschlossen: `"Dies ist ein Satz"`.
- **Arrays** sind Listen in eckigen Klammern **[** und **]**. Kommas trennen die einzelnen Elemente. Eine leere Liste ist ebenfalls zulässig.
- **Objekte** werden durch geschweifte Klammern, **{** und **}**, eingeschlossen und enthalten eine durch Kommata getrennte, ungeordnete Liste von Eigenschaften.
  - Die **Eigenschaften** bestehen aus einem *Schlüssel*, der eine Zeichenkette ist und dem zugehörigen Wert eines beliebigen Datentyps.

Beispiel: Kataloge ➜ Räume Die json-Datei enthält zum Beispiel die Informationen zu Räumen in folgender Weise:

      [{"id" : 2,"kuerzel" : "R2","beschreibung" : "Ein zweiter Raum","groesse" : 1},{"id" : 1,"kuerzel" : "R1","beschreibung" : "Ein erster Raum","groesse" : 2}]

Das gesamte Beispiel ist eine Liste (**Array**) in eckigen Klammern `[]`. Darin steht jeder Raum als eigenes **Objekt** in geschweiften Klammern `{}`. Kommas trennen die Räume voneinander.

Innerhalb eines Eintrags finden sich die Schlüssel mit den jeweils passenden Daten als Werte. Nach einem Doppelpunkt hinter dem Schlüssel : folgt der jeweilige Wert.

Zahlen werden direkt geschrieben. Text, also Zeichenfolgen, in Anführungszeichen "" eingefasst.

Jeder neue Eintrag ist ein neues Objekt, die mit einem Komma getrennt werden.

[![Eine JSON-Datei wird im Editor mit passendem Plugin lesbar angezeigt.](/bilder/schueler/svws-kataloge-raeume-json.png)](/bilder/schueler/svws-kataloge-raeume-json.png)

*Eine JSON-Datei wird im Editor mit passendem Plugin lesbar angezeigt.*

Manche Editoren erlauben das besser lesbare Anzeigen von json-Files:

Hier im Screenshot wurde das Programm Notepad++ mit dem Plugin JSON Viewer verwendet.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Das_JSON-Dateiformat_(Tutorial))
