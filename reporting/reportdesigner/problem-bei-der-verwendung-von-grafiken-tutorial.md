---
title: "Grafikfehler in Reports beheben"
---

# Grafikfehler in Reports beheben

Wenn ein Report mit der Meldung „Ungültige Graphik“ abbricht, prüfen Sie das Bildformat und die Eigenschaft ParentDataPipeline des betroffenen Bildes.

## Fehlerbild

Die Reportausgabe kann mit folgender Meldung abbrechen:

     Fehler bei der Ausgabe:
     Kann den Bericht nicht generieren.
     
     Ungültige Graphik.

## Bildformat und Eigenschaft prüfen

[![Kommt es zu dem hier behandelten Fehler, kann bei dem betreffenden Bild, hier im Beispiel DBImage1 die ParentDataPipeline deaktiviert werden.](/bilder/reportdesigner/tutorials-reporting-fehler-grafik.png)](/bilder/reportdesigner/tutorials-reporting-fehler-grafik.png)

*Kommt es zu dem hier behandelten Fehler, kann bei dem betreffenden Bild, hier im Beispiel DBImage1 die ParentDataPipeline deaktiviert werden.*

1. Verwenden Sie Bilder im Format JPG oder PNG. Für Logos mit klaren Linien und Flächen eignet sich das verlustlose PNG-Format; Schülerbilder speichern Sie vorzugsweise als JPG.
2. Öffnen Sie den Report im Reportbaukasten und wählen Sie das betroffene Bild aus.
3. Entfernen Sie bei diesem Bild den Haken bei **ParentDataPipeline**.
4. Prüfen Sie die Reportausgabe erneut.

::: info Hinweis – Mehrere Bilder im Report
Bei mehreren Bildern kann die Einstellung für alle Bilder erforderlich sein. Prüfen Sie gegebenenfalls, welche Bilder beziehungsweise Bildkombinationen den Fehler auslösen.
:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Problem_bei_der_Verwendung_von_Grafiken_(Tutorial))
