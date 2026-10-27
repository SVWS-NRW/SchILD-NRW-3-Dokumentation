---
title: "Schriftarten und Sonderzeichen in PDF-Ausgaben"
---

# Schriftarten und Sonderzeichen in PDF-Ausgaben

Konfigurieren Sie die PDF-Ausgabe so, dass Sonderzeichen erhalten bleiben und Schriftarten eingebettet werden. Die Einstellungstabelle zeigt die Auswirkungen auf Darstellung und Dateigröße.

## PDF-Einstellungen prüfen

[![Einstellungen pdf-Settings.](/bilder/reportdesigner/tutorials-reporting-schriftart-einbetten.png)](/bilder/reportdesigner/tutorials-reporting-schriftart-einbetten.png)

*Einstellungen pdf-Settings.*

Eine fehlerhafte PDF-Darstellung kann durch die Zeichencodierung oder durch fehlende Schriftarten auf dem Anzeigesystem entstehen.

1. Öffnen Sie **PDFSettings** und setzen Sie `FontEncoding = feUnicode`. Damit bleiben auch Sonderzeichen wie `ĉ` erhalten, die beispielsweise in Namen vorkommen können.
2. Verwenden Sie `EmbedFontOptions = efUseSubset`, um nur die tatsächlich benötigten Zeichen einzubetten.
3. Erzeugen Sie die PDF-Ausgabe erneut und kontrollieren Sie Schrift und Sonderzeichen.

Mit `feUnicode` wird zugleich das Einbetten der Schriftarten aktiviert. Dadurch kann die PDF-Datei auch auf einem System mit der vorgesehenen Schrift dargestellt werden, auf dem diese Schrift nicht installiert ist. Die Beschränkung auf verwendete Zeichen verringert die Dateigröße.

## Auswirkungen der Einstellungen

Die folgende Tabelle enthält die beschriebenen Kombinationen und ihre Auswirkungen:

| Einstellung FontEncoding | Einstellung EmbedFontOptions | Auswirkung Sonderzeichen | Auswirkung Einbettung | Auswirkung Dateigröße |
| --- | --- | --- | --- | --- |
| feAnsi | \[\] | nein | nein | klein |
| feAnsi | \[efAllFonts\] | nein | ja | groß |
| feAnsi | \[efAllFonts, efUseSubset\] | nein | ja | mittel |
| feAnsi | \[efUseSubset\] | nein | nein | klein |
| feUnicode | \[\] | ja | ja | groß |
| feUnicode | \[efAllFonts\] | ja | ja | groß |
| feUnicode | \[efAllFonts, efUseSubset\] | ja | ja | mittel |
| feUnicode | \[efUseSubset\] | ja | ja | mittel |

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Probleme_mit_fehlenden_Schriftarten_im_pdf-Dokument_(Tutorial))
