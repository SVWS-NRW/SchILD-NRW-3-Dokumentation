---
title: "Globale Programmeinstellungen festlegen"
---

# Globale Programmeinstellungen festlegen

Legen Sie als Administration Einstellungen fest, die für alle Benutzer gelten. Dazu gehören Anzeige, allgemeines Programmverhalten, Wiedervorlagen und Kennwortregeln.

[![Globale und Allgemeine Einstellungen.](/bilder/benutzer-einstellungen/einstellungen-globale-einstellungen-1-allgemein-einstellungen.png)](/bilder/benutzer-einstellungen/einstellungen-globale-einstellungen-1-allgemein-einstellungen.png)

*Globale und Allgemeine Einstellungen.*

Unter diesem Punkt finden sich Allgemeine Einstellungen zu SchILD, die global für alle Nutzer von der Administration eingestellt werden.

## Allgemeines

Hier finden sich gesammelte Einträge, die sofern sie selbsterklärend sind hier nicht weiter ausgeführt werden. Zu den weiteren Einträgen:

- Die **Automatische Plausibilitätsprüfung von Datumswerten** prüft zum Beispiel, ob Abmeldedaten vor Anmeldedaten liegen. In diesem Fall würde eine Warnung ausgegeben werden.
- **Telefonliste automatisch ergänzen** bedeutet, dass eingetragene Festnetz- oder Fax-/Mobilnummern automatisch auf dem Karteireiter *Schüler ➜ Erz.-Berechtigte ergänzt* bzw. aktualisiert werden.
- **Straße und Hausnummer bei Schülerdaten getrennt verwalten** steuert, ob für die Hausnummer in den *Individualdaten I* ein eigenes Feld für diese angeboten wird oder ob die Hausnummer direkt im Feld *Straße* angefügt wird.
- **Externe Schüler in Standardfilter wie Aktive behandeln** steuert, ob als *Extern* markierte Schüler standardmäßig im Container wie die Schüler enthalten sind oder ob die Externen explizit bei jeder Suche mit einbezogen werden müssen.
- `Statistik Datenbank (Statistik.MDB) benutzerbezogen speichern` legt die Datei `StatistikDB.mdb` im persönlichen Ordner **Eigene Dateien → Eigene Dokumente** ab. Verschiedene Personen können dann gleichzeitig Statistikdaten bereitstellen, ohne dieselbe Arbeitsdatei zu verwenden. Das ist zum Beispiel hilfreich, wenn Unterrichtsdaten (`UVD.txt`) und Schülerdaten (`SIM.txt`) von unterschiedlichen Personen bearbeitet werden.
- **Gruppenprozesse für Abitur gesperrt**: Sperrt Gruppenprozesse für das Abitur. Diese Einstellung kann zum Ende des Abiturprozesses sinnvoll sein, wenn alle automatischen Prozesse abgeschlossen sind und die Daten nur noch manuell bzw. auf individueller Ebene bearbeitet und eingetragen werden.

::: tip Tipp

Ein erneuter Aufruf von **Abiturfächer holen** kann bereits erfasste Prüfungsergebnisse entfernen. Auch eine automatisch neu ermittelte Sprachenfolge kann zuvor manuell korrigierte Angaben verändern. Bereiten Sie die Daten deshalb zunächst mit den benötigten automatischen Prozessen vor. Anschließend können Sie diese Prozesse sperren, um unbeabsichtigte Änderungen zu vermeiden.

:::

## Ansicht

[![Steuern Sie, welche optionale Funktionalität angezeigt wird und damit zur Verfügung steht.](/bilder/benutzer-einstellungen/einstellungen-globale-einstellungen-ansicht.png)](/bilder/benutzer-einstellungen/einstellungen-globale-einstellungen-ansicht.png)

*Steuern Sie, welche optionale Funktionalität angezeigt wird und damit zur Verfügung steht.*

Steuert, wie SchILD aussehen soll.

- **Schuljahr korrekt**: Diese Option führt dazu, dass SchILD-NRW ab dem 1.2. (Halbjahr) oder dem 1.8. (Schuljahr) prüft, ob sich die Datenbank im richtigen Schuljahr befindet. Ist die Versetzung noch nicht gemacht, gibt es einen Warnhinweis am oberen Rand des Fensters.
- **Individuelle Gestaltung der Schüler-Übersichtstabelle ermöglichen** schaltet die Auswahl zusätzlicher Spalten in der linken Namensliste frei, etwa Jahrgang oder Klassenleitung. Starten Sie SchILD-NRW 3 nach dem Aktivieren neu. Klicken Sie anschließend mit der rechten Maustaste in die Namensliste und wählen Sie **Sichtbare Spalten auswählen**. Passen Sie bei Bedarf die Spaltenbreiten an: Bewegen Sie den Mauszeiger auf eine Trennlinie zwischen den Spaltenüberschriften. Sobald der Doppelpfeil erscheint, ziehen Sie die Linie mit gedrückter linker Maustaste.
- **Fachbezogenes Bemerkungsfeld zeigen**: Blendet das Datenfeld unter Akt. Halbjahr in den Leistungsdaten der Fächer im Schülerdatensatz ein. Hier können Texte und Bemerkungen zu jedem einzelnen Fach in einem Memofeld verwaltet werden. Dieses Feld wird häufig für Textzeugnisse genutzt.

::: example Beispiel

In der gymnasialen Oberstufe sollte hier z.B. das Projektkursthema eingetragen werden.

:::

- Diverse **Karteireiter**: Hier lassen sich Karteireiter ein- und ausblenden, etwa, wenn die Anschlusslebenswege und Orientierungsmaßnahmen der entlassenen Schüler nicht unter "Kein Abschluss ohne Anschluss" über SchILD erfasst werden sollen.
- **Quartalsnoten zeigen** erzeugt in den Leistungsdaten im *Akt. Abschnitt* eine weitere Spalte, in die Quartalsnoten eingetragen werden können.

## Sonstige

- **Fotos skalieren auf** legt fest, auf wie viele Pixel die eingelesenen Fotos umgewandelt werden sollen. Bitte beachten Sie, dass eine hohe Pixelzahl die Größe der Datenbank erheblich beeinflusst.
- **Vorwahl für die Telefonanlage**: SchILD-NRW unterstützt die Funktionen von MS Windows für Telefonanlagen. Dadurch kann mit der rechten Maustaste eine Telefonnummer direkt zur Anlage gesendet werden, wenn dies unterstützt wird. An dieser Stelle wird eine eventuell erforderliche Vorwahl eingegeben.
- **Beginn Nummernbereich für Ausweisnummern**: Hier wird eingestellt, mit welcher ID die Nummerierung der Schülerausweise beginnt.

::: example Beispiel

Denkbar wäre z.B., nicht bei "1", sondern bei "200000" zu beginnen, um alle Nummern sechsstellig zu halten oder Schülerausweise (20xxxx), Lehrerausweise (10xxxx) und andere Ausweise (50xxxxx) durch einen vorgestellten Nummernbereich schon über die ID zu kennzeichnen.

:::

::: info Hinweis

Ausweisnummern werden über einen entsprechenden Gruppenprozess generiert.

Über *Verwaltung ➜ Werkzeuge* gibt es die Möglichkeit, *Ausweisnummern löschen* auszuwählen, um so alle Ausweisnummern anschließend erneut generieren zu können.

:::

- **Sicherungsverzeichnis** legt das Verzeichnis fest, in das über *Datenbank ➜ Datenbank sichern* die Datenbankdateien gelegt werden. Hier im Beispiel wurde im Ordner des *SVWS-Arbeitsverzeichnises der Ordner "Sicherungen"* gewählt. Um Sicherungen einzulesen muss der Windows-Nutzer Zugriff auf dieses Verzeichnis haben.

## Wiedervorlage

Hier lässt sich steuern, ob die Wiedervorlage beim Programmstart für alle Nutzer prüft, ob den Nutzer betreffende Wiedervorlagen anliegen.

Stellen Sie ebenfalls gewünschte Verfallszeiten für erledigte und überfällige Einträge ein.

::: info Hinweis

Denken Sie beim Verfalls von *unerledigten Einträgen* an mögliche Schulferien.

:::

## Kennwortregeln

Hier lassen sich Regeln für von Nutzern vergebene Kennwörter festlegen. Achten Sie auf zeitgemäße Sicherheitsstandards.

- **Minimale Länge** gibt die minimale Länge des Passworts in Zeichen an.
- **Komplexität** gibt an, aus was für Zeichentypen das Passwort bestehen muss. Komplexität "2" bedeutet, dass Groß- und Kleinbuchstaben enthalten sein müssen, Komplexität "4" bedeutet, dass Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen angegeben sein müssen. Wird ein Passwort vergeben, das der Komplexität nicht entspricht, wird bei der Passwortänderung ein Fehler ausgegeben.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Globale_Einstellungen_(Verwaltung_Einstellungen))
