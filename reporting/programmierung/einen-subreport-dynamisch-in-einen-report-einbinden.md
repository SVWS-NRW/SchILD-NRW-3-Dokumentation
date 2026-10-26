---
title: "Einen Subreport dynamisch einbinden"
source_pageid: 1567
source_revision: 7224
---

# Einen Subreport dynamisch einbinden

Binden Sie einen wiederverwendbaren Schulkopf in einen bestehenden Report ein. Das Beispiel zeigt eine dynamische Verknüpfung und erläutert den Unterschied zum statisch eingefügten Subreport.

In diesem vertiefenden Beispiel wird ein **Schulkopf** in einen bestehenden Report eingebunden. Hierzu wird ein **Subreport** verwendet, der sich im Ordner **Header_Footer** befindet.

Ein **Subreport** ist ein eigener Report, der in einen anderen Report eingebunden wird. Dies ermöglicht es, wiederkehrende Elemente wie Briefköpfe, Schulköpfe oder Fußzeilen zentral zu pflegen.

## Statische und dynamische Subreports unterscheiden

[!["Dynamische Subreports" (links) und "statische Subreports" (rechts).](/bilder/programmierung/report-anpassen-17.png)](/bilder/programmierung/report-anpassen-17.png)

*"Dynamische Subreports" (links) und "statische Subreports" (rechts).*

Es gibt zwei Arten von Subreports:

- **Statischer Subreport**

```
 Ein statischer Subreport wird einmalig in den Hauptreport eingefügt und dort gespeichert.  
 Änderungen am Subreport wirken sich auf den Hauptreport nur aus, wenn dieser manuell angepasst wird.  
 (Im Bild rechts.)
```

- **Dynamisch ladbarer Subreport**

```
 Ein dynamischer Subreport wird nicht eingebettet, sondern verknüpft.  
 Beim Erzeugen des Hauptreports wird der Subreport jedes Mal neu geladen.  
 Änderungen im Subreport wirken daher automatisch in allen Reports, die ihn verwenden.  
 Dies eignet sich besonders für einheitliche oder institutionell gepflegte Elemente wie Schulköpfe.  
 (Im Bild links.)
```

::: danger Achtung

Wird ein dynamischer Subreport in seiner Höhe verändert, kann dies in anderen Reports zu unerwünschten Layoutverschiebungen führen.  

Ein dynamischer Subreport sollte nach der Erstkonfiguration nur vorsichtig in seinen Abmessungen verändert werden.

:::

[![Nutzen eines dynamischen Subreports.](/bilder/programmierung/report-anpassen-18.png)](/bilder/programmierung/report-anpassen-18.png)

*Nutzen eines dynamischen Subreports.*

## Den Schulkopf einbinden

Im Beispiel wird ein **dynamischer Subreport** im **Kopf** des aktuellen Reports platziert.

1. Wählen Sie in der Werkzeugleiste das Werkzeug für einen **Subreport** und platzieren Sie ihn an der gewünschten Stelle.
2. Klicken Sie mit der rechten Maustaste auf den eingefügten Subreport.
3. Wählen Sie **Subreport-Datei wählen…**.

::: info Hinweis

Im Kontextmenü sollte **Dehnen** aktiviert sein.  

Dies bedeutet, dass sich das Feld des Subreports automatisch an die Größe des Inhalts anpasst.

:::

[![Wahl des zu verwendenden Subreports als Kopf.](/bilder/programmierung/report-anpassen-19.png)](/bilder/programmierung/report-anpassen-19.png)

*Wahl des zu verwendenden Subreports als Kopf.*

Im Ordner **Header_Footer** wird nun der passende Kopf gewählt.

[![Der Kopf erscheint über der Klassenliste.](/bilder/programmierung/report-anpassen-20.png)](/bilder/programmierung/report-anpassen-20.png)

*Der Kopf erscheint über der Klassenliste.*

Der Schulkopf erscheint nun über dem aktuellen Report. Da er als **dynamischer Subreport** eingebunden ist, werden zukünftige Änderungen automatisch übernommen. So lassen sich Layout- oder Informationsanpassungen zentral pflegen, ohne jeden Report einzeln ändern zu müssen.

Dies ist insbesondere bei einheitlich zu haltenden Reports (z. B. Listen, Serienbriefe, Zeugnisse) sinnvoll.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Einen_Subreport_dynamisch_in_einen_Report_einbinden) · Quellrevision 7224.
