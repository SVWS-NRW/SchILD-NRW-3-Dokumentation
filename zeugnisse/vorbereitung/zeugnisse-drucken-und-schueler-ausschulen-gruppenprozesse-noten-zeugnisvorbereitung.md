---
title: "Zeugnisse drucken und eine Schülergruppe ausschulen"
source_pageid: 1183
source_revision: 6870
---

# Zeugnisse drucken und eine Schülergruppe ausschulen

Verbinden Sie Zeugnisdruck und Ausschulung für eine Schülergruppe mit gleichem Zeugnisformular. Prüfen Sie vor dem Start Auswahl, Daten und Reportvorschau.

[![Schüler per Gruppenprozess ausschulen und anschließend die passenden Zeugnisse drucken.](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken.png)](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken.png)

*Schüler per Gruppenprozess ausschulen und anschließend die passenden Zeugnisse drucken.*

Über *Gruppenprozesse ➜ Noten/Zeugnisvorbereitung ➜ Zeugnisse drucken und Schüler ausschulen* kann in SchILD-NRW 3 für Abschlussjahrgänge, Abgänger und Schulwechsler das Ausschulen und der Zeugnisdruck für eine Schülergruppe mit identischem Zeugnisformular effizient durchgeführt werden.

Die beiden Schritte – Ausschulen und Zeugnisdruck – können alternativ auch getrennt über andere Gruppenprozesse und den einzelnen Reportdruck erfolgen.

Wählen Sie zunächst eine Schülergruppe aus, die das gleiche Zeugnisformular erhalten soll, zum Beispiel alle Schülerinnen und Schüler mit dem gleichen Abschluss. In vielen Fällen ist hierfür der *Schülerfilter* erforderlich, da unterschiedliche Abschlüsse oder auch *kein Abschluss* vorkommen können.

Starten Sie anschließend den Gruppenprozess mit einem Klick auf `Zeugnisse drucken und Schüler ausschulen`.

::: tip Tipp

Es empfiehlt sich, die korrekte Konfiguration der Zeugnisformulare (über die INI-Datei) und die vollständige Erfassung aller relevanten Daten zunächst im Testlauf zu prüfen. Erzeugen Sie dazu vorab einige Zeugnisse testweise über die *Reportverwaltung* in der *Vorschau*.

Beachten Sie hierzu auch den Artikel *Zeugnisvorbereitungen und Zeugnisdruck*, insbesondere das Unterkapitel *Bekannte Fehler beim Zeugnisdruck*.

:::

[![Geben Sie die zur Schülergruppe passenden Daten ein.](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken-daten-eingeben.png)](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken-daten-eingeben.png)

*Geben Sie die zur Schülergruppe passenden Daten ein.*

Geben Sie im folgenden Dialog die zur Gruppe passenden Daten ein. Der Gruppenprozess erlaubt es, einzelne Felder leer zu lassen.

Dies kann eine Fehlerquelle darstellen, ist aber bewusst so vorgesehen, damit bereits geprüfte Einträge nicht überschrieben werden und bestehende Werte erhalten bleiben.  

::: example Beispiel

Beispiel: Für eine Gruppe werden Zeugnisse zum **Mittleren Schulabschluss (MSA)** gedruckt. Ob der Abschluss die Berechtigung zum Besuch der gymnasialen Oberstufe einschließt, ergibt sich aus dem bereits eingetragenen Abschluss. Das Zeugnisformular übernimmt diese Angabe. Im Gruppenprozess müssen Sie dann gegebenenfalls nur das Abschlussdatum setzen, nicht den Abschluss erneut zuweisen.

:::

Nach der Eingabe klicken Sie auf `Zeugnisse drucken`.

Ein Klick auf `Abbrechen` beendet den Vorgang, ohne Änderungen in der Datenbank vorzunehmen.

[![Bestätigen Sie die Meldung und fahren Sie direkt mit dem Zeugnisdruck fort.](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken-achtung-drucken.png)](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken-achtung-drucken.png)

*Bestätigen Sie die Meldung und fahren Sie direkt mit dem Zeugnisdruck fort.*

Bestätigen Sie die folgende Meldung mit `OK`.  

[![Wechseln Sie direkt in die Reportverwaltung zum Zeugnisdruck.](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken-reportverwaltung.png)](/bilder/vorbereitung/gruppenprozesse-ausschulen-und-zeugnisse-drucken-reportverwaltung.png)

*Wechseln Sie direkt in die Reportverwaltung zum Zeugnisdruck.*

::: danger Achtung

Die Schülerdaten wurden zu diesem Zeitpunkt bereits geändert (Ausschulung). Die Schülerinnen und Schüler befinden sich jedoch weiterhin im Auswahlcontainer und stehen direkt in der Reportverwaltung für den Zeugnisdruck zur Verfügung.

Wenn Sie die Auswahl verlassen, zum Beispiel durch Wechsel auf den Reiter *Schüler*, wird die Auswahl zurückgesetzt. Die ausgeschulten Schülerinnen und Schüler stehen dann nicht mehr als aktive Schüler zur Verfügung und müssen über den *Schülerfilter* erneut gesucht oder neu zusammengestellt werden.

:::

Führen Sie nun in der **Reportverwaltung** den Zeugnisdruck mit den vorbereiteten und getesteten Zeugnisformularen durch. Nutzen Sie bei Bedarf die weiterführenden Artikel zum Zeugnisdruck.

Bearbeiten Sie weitere Schülergruppen mit abweichenden Anforderungen in gleicher Weise.

::: tip Richtig – Fertig

Zeugnisdruck und Ausschulen sind abgeschlossen. Gegebenenfalls folgt noch die Bearbeitung einzelner Sonderfälle.

:::

::: info Hinweis – Siehe auch

- [Zeugnisformulare herunterladen und bereitstellen](/reporting/zeugnisformulare/zeugnisformulare-herunterladen-und-aktualisieren)

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Zeugnisse_drucken_und_Sch%C3%BCler_ausschulen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)) · Quellrevision 6870.
