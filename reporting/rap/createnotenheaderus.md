---
title: "CreateNotenHeaderUS"
---

# CreateNotenHeaderUS

## Beschreibung

```pascal
procedure CreateNotenHeaderUS(aFaecherListe: String);
```

US steht für unsortiert, d.h. der erzeugte Header entspricht der im Parameter übergebenen Fächerfolge.

Verwenden Sie die Prozedur für eine gemeinsame tabellarische Übersicht über die ausgewählten Schülerinnen und Schüler und ihre Leistungsdaten. Der Aufruf liest dazu die Leistungsdaten der gesamten Auswahl und stellt die vorkommenden Fächer in einer internen Tabelle zusammen. Für andere Ausgaben ist dieser zusätzliche Aufruf nicht nötig.

**Nach der Darstellung der Tabelle muss unbedingt die Prozedur `ResetFaechervorbelegung` aufgerufen werden!**

## Parameter

| Parameter       | Bedeutung                                                                         |
|-----------------|-----------------------------------------------------------------------------------|
| `aFaecherListe` | Kommaseparierte Liste der Fachkürzel, für die eine Übersicht erzeugt werden soll. |

## Beispiel

```pascal
CreateNotenHeaderUS('D,E,M,F,L');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=CreateNotenHeaderUS)
