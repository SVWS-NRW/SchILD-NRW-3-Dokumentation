---
title: "Statistikdateien unter Windows registrieren"
source_pageid: 295
source_revision: 4108
---

# Statistikdateien unter Windows registrieren

Wenn die Statistikfunktionen wegen fehlender Programmteile scheitern, kann eine Registrierung unter Windows erforderlich sein. Prüfen Sie zunächst, ob dieser Artikel zu Ihrem Fehlerbild passt.

## Fehlerbild und Voraussetzungen prüfen

::: info Hinweis – Geltungsbereich: ASDPC-Verfahren

Dieser Artikel beschreibt die Vorbereitung beziehungsweise Nutzung des bisherigen ASDPC-Verfahrens. Für die amtliche Erhebung **ab dem Schuljahr 2027/2028** ist die Umstellung auf das Statistikmodul des SVWS-Servers angekündigt. Beachten Sie den [offiziellen Zeitplan](https://www.svws.nrw.de/statistik/asdpc-svws-server) und die Vorgaben der jeweiligen Erhebung.

:::

Registrieren Sie die benötigten Bibliotheken, wenn Statistikprüfung oder Export wegen fehlender Programmteile scheitern. Die Registrierung muss auf jedem dafür verwendeten Rechner erfolgen.

Über *Verwaltung ➜ Statistik für IT.NRW* erreichen Sie Funktionen, die bei der Vorbereitung und der Erstellung der amtlichen Statistik helfen können.

Der Punkt **Hilfe bei Problemen** dient dazu, das Betriebssystem MS Windows für die Statistik mit SchILD-NRW einzurichten.

Üblicherweise geschieht das bei der Installation von SchILD-NRW, jedoch kann es je nachdem, wie und auf welchem Rechner SchILD-Installiert wurde, dazu kommen, dass bestimmte Programmteile nicht korrekt registriert wurden.

::: info Hinweis

Dabei werden **DLL-Dateien** registriert. Diese Programmbibliotheken enthalten Funktionen für die Statistik.

:::

[![Hinweisfenster mit einer detaillierten Erklärung.](/bilder/probleme/hilfe-bei-problemen.jpg)](/bilder/probleme/hilfe-bei-problemen.jpg)

*Hinweisfenster mit einer detaillierten Erklärung.*

Wird dieser Menüpunkt aufgerufen, bietet das Fenster eine umfangreiche Erklärung.

Sollte beim Aufrufen der Gesamtprüfung von SchILD-NRW oder der Erstellung der Dateien für den Export zu ASDPC eine Fehlermeldung erscheinen, dann liegt das häufig an der fehlenden Registrierung bestimmter Dateien bei einer Neuinstallation von SchILD.

Diese Registrierung muss in einem Netzwerk auf jedem Rechner, der einen SchILD-Klienten *ausführt*, einzeln erfolgen. Es reicht nicht, wenn dies nur auf einem Rechner geschieht. Daher kann es dazu kommen, dass einige Computer der gleichen Serverumgebung problemlos eine Gesamtprüfung durchführen können und andere nicht.

Dies bedeutet auch: Rechner, mit denen die Statistik-Prüfung nicht ausgeführt wird, benötigen keine gesonderte Registrierung der Dateien.

Melden Sie sich dafür mit einem Windows-Benutzerkonto mit lokalen Administrationsrechten an. Gemeint sind die Rechte auf dem jeweiligen Rechner, nicht die Administrationsrechte innerhalb von SchILD-NRW.

Ohne lokale Admin-Rechte auf dem Windows-Rechner bleibt die Schaltfläche ausgegraut und kann nicht angeklickt werden.

[![Die notwendigen dynamischen Bibliotheken wurden registriert.](/bilder/probleme/dateien-registrieren.jpg)](/bilder/probleme/dateien-registrieren.jpg)

*Die notwendigen dynamischen Bibliotheken wurden registriert.*

Wird **Dateien registrieren** angeklickt, führt SchILD-NRW diese Operation aus.

Es öffnen sich mehrere Fenster, die jeweils mit **Ok** geschlossen werden können.  

## SchILD-NRW als Windows-Administrator starten

[![Starten von SchILD-NRW mit Administrationsrechten.](/bilder/probleme/verwaltung-statistik-dl-ls-registrieren-admin-win.png)](/bilder/probleme/verwaltung-statistik-dl-ls-registrieren-admin-win.png)

*Starten von SchILD-NRW mit Administrationsrechten.*

Das Starten von SchILD-NRW als Windows-Administrator erfolgt durch das Anklicken des SchILD-Icons der *SchILD30.exe* mit der *rechten Maustaste* und dem Anklicken von **Als Administrator ausführen**.

Öffnen Sie anschließend **Verwaltung → Statistik für IT.NRW → Hilfe bei Problemen** und klicken Sie auf **Dateien registrieren**.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Hilfe_bei_Problemen_(Verwaltung_Statistik_f%C3%BCr_IT-NRW)) · Quellrevision 4108.
