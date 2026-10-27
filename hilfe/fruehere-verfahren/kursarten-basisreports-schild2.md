---
title: "Kursarten in Basisreports für SchILD-NRW 2"
---

# Kursarten in Basisreports für SchILD-NRW 2

Dieser Artikel beschreibt eine Einschränkung der **Basisreportsammlung für SchILD-NRW 2**. Für die aktuelle Sammlung verwenden Sie [Leistungsübersichten für ein Halbjahr](/reporting/basisreports/basisreportsammlung-leistungsuebersichten-halbjahr).

## Bedeutung des Parameters

Der Parameter `UeberspringeFaecherMitDiesenKursarten` steuert, welche allgemeinen Kursarten nicht in der Fächertabelle, sondern gesondert darunter ausgegeben werden. Die im Wiki genannte Standardeinstellung ist `AGGT,ZUV`; mehrere Kursarten werden durch Kommas ohne Leerzeichen getrennt.

## Einschränkung in SchILD-NRW 2

Der frühere Wiki-Hinweis empfiehlt, diesen Parameter bei Verwendung der Basisreportsammlung für **SchILD-NRW 2 leer zu lassen**. Der damalige Reportdesigner hatte Probleme bei der Darstellung, wenn Kurse übersprungen wurden.

Als Alternative wurde die Fächertabelle so sortiert, dass die betreffenden Kurse am Ende standen. Dadurch mussten keine ausgeblendeten Fächer übersprungen werden. Anschließend mussten die Fächer auch in den Leistungsdaten der Schülerinnen und Schüler neu sortiert werden.

Diese Einschränkung bezieht sich auf die frühere Sammlung und den Reportdesigner von SchILD-NRW 2; sie ist keine allgemeine Vorgabe für die aktuelle Basisreportsammlung.

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Basisreportsammlung:_Leistungs%C3%BCbersichten_Halbjahr)
