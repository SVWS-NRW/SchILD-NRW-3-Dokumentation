---
title: "Häufige Fehler vor dem Zeugnisdruck vermeiden"
source_pageid: 1426
source_revision: 7108
---

# Häufige Fehler vor dem Zeugnisdruck vermeiden

Kontrollieren Sie Datenaufbereitung, Reportkonfiguration und Druckeinstellungen. Die Sammlung hilft, typische Fehler vor der endgültigen Ausgabe zu erkennen.

## Datenaufbereitung

- **Daten**
  - **Fehlendes Versetzungs- und/oder Zeugnisdatum** (bei allen Daten verwendet SchILD-NRW *1899* als Standarddatum, um auf einen Fehler hinzuweisen).
  - **Kein Abgangs- oder Abschlussdatum** bei Abgangs- oder Abschlusszeugnissen gesetzt, so dass SchILD-NRW trotz korrektem Zeugnisdatum ein falsches Datum druckt.
  - Fehlerhafte Einstellung eines Datums (z.B. "Zeugnisdatum" statt "Abmeldedatum" beim Abgangszeugnis bei einem Schüler, der eigentlich in der EF versetzt wird, sich dann aber doch abmeldet und noch ein Abgangszeugnis ausgestellt bekommt).
- Die **Fehlstunden** wurden noch nicht erfasst.
- Die **Fehlstunden** wurden zwar **kursweise** eingetragen, aber es wurde der Gruppenprozess zur Berechnung der Fehlstundensummen nicht ausgeführt. Gleiches gilt nach der Änderung von fachbezogenen Fehlstunden.
- In der Zeugniskonferenz wurden Notenänderungen vorgenommen, es fand aber keine neue Berechnung von Versetzung und/oder Abschluss statt.
- Gleiches gilt für die Berechnung eines FHR-Schnitts usw.

- Bei einem ESA müssen **Lernbereichsnoten** eingegeben werden, die aufgrund einer besseren Prognose zuvor nicht eingetragen wurden.
- Fehlende **Sprachenfolge**/fehlendes **Sprachniveau**/Handeintragungen (z.B. Latinum) bei Abgangs- oder Abschlusszeugnissen.
- **Lernabschnitte** und deren Wertung
  - Lernabschnitte die gewertet sein sollten, sind *nicht als gewertet* angehakt.
  - Alternativ sind **Lernabschnitte**, die nicht gewertet sein sollen als *gewertet* markiert. Das passiert mitunter bei Wiederholern, wo der vorherige Durchgang noch immer gewertet ist. Dies führt zu fehlerhaften Berechnungen und Leistungsübersichten.
  - Mitunter sind damit zwei Lernabschnitte des gleichen Jahrgangs, zum Beispiel die Q1, als *gewertet* markiert.
  - Wiederholte Lernabschnitte sind nicht als *2. Durchgang* markiert.

## Druckvorbereitung

- Soll das Gemeinde- oder Stadtwappen mit auf das Zeugnis, muss es von Hand in die Formulare eingefügt werden
- Keine Anpassung der Zeugniseinstellungen.ini für ein "selten" gedrucktes Zeugnis
- Falsche Zeugniseinstellungen.ini-Einstellungen für die jeweils gewünschte Zeugnisanlage (es müssen alle Anlagen zu verwendenden eingestellt werden) - ein Fehler hier könnte sein, wer (Klassenleitung, Abteilungsleitung, Schulleitung, Beratungslehrer, ...) aber auch Namensnennung von 1. und/oder 2. Klassenlehrer mit welchen (Vor-)Namen/Amtsbezeichnungen etc. unterschreiben soll.
- Ein mit SchILD3 erstellter Report beziehungsweise ein Report aus SchILD2, der in SchILD3 geöffnet und neu gespeichert wurde, ist nicht mehr zu SchILD2 kompatibel. Dies gilt auch für zugeschickte oder heruntergeladene Reports.

::: info Hinweis

Wenn Sie einen Report aus SchILD-NRW 2 weiterverwenden, kann ein erneutes Speichern im Reportdesigner von SchILD-NRW 3 nötig sein. Öffnen Sie den Report dort und speichern Sie ihn ohne weitere Änderungen. Dadurch werden die gespeicherten technischen Angaben an die neuere Version des Reportdesigners angepasst.

Dies betrifft zum Beispiel die interne Verarbeitung von manchen Grafiken für Logos.

Beachten Sie, dass der Report im Anschluss nicht mehr zu SchILD-NRW2 kompatibel ist.

:::

## Druck

- Falsches Wenden beim Druck bei mehrseitigen Zeugnissen:
  - A4-Zeugnisse werden über die *lange* Seite des Blatts gewendet
  - A3-Zeugnisse über die *kurze* Seite des Blatts
- Farbdruck erzeugt, wenn das Zeugnis S/W sein soll oder umgekehrt
- wenn bei Abgängern von vor dem letzten Abschnittswechseln ein Halbjahr zu viel steht (ging 2023/24 1. Halbjahr, auf dem Zeugnis steht aber "bis 2023/24, 2. Halbjahr an der Schule", wurde in der Reportverwaltung aus dem aktuellen Abschnitt und nicht aus dem letzten heraus gedruckt
- Kein dickes Zeugnispapier verwendet (z.B. kein Papierfach im Drucker angegeben und das dicke Papier liegt nicht im Standardfach)
  - Variante: Jemand anderes druckt "normale" Erzeugnisse im Hunderterpack auf das im Drucker bereitliegende/vergessene Zeugnispapier
- Es wird keine vorgesehene Archivierung vorgenommen. Dies ist besonders bei Abgangs- oder Abschlusszeugnissen relevant; klären Sie bitte, welches Vorgehen in Ihrer Schule entsprechend des gültigen Rechtsrahmens vorgesehen ist
  - Es wird auf Papier gedruckt, aber es wird keine Ausgabe in die Dokumenten- oder die Zeugnisablage angestoßen
  - Es wird keine eigentlich vorgesehene Zeugniskopie (Papier) zur Archivierung in Ordnern durch die Abteilungsleitung angefertigt

::: tip Tipp

Drucken Sie die Zeugnisse erst auf Normalpapier und kontrollieren Sie, ob alles korrekt ist. Finden Sie einen Fehler, drucken Sie das korrigierte Zeugnis nach und kontrollieren Sie erneut. Wenn alle Zeugnisse in Ordnung sind, folgt anschließend der Druck auf Zeugnispapier. Der erste Satz auf Normalpapier kann nun direkt zur Archivierung dienen und wird nicht vergessen.

:::

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Beliebte_Fehler_beim_Zeugnisdruck_(Tutorial)) · Quellrevision 7108.
