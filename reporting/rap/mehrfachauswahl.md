---
title: "Mehrfachauswahl"
source_pageid: 68
source_revision: 496
---

# Mehrfachauswahl

## Beschreibung

```pascal
function Mehrfachauswahl(Prompt, Optionsliste: String; Trennzeichen: Char): TStringList;
```

Ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste

## Parameter

| Parameter      | Bedeutung                                    |
|----------------|----------------------------------------------|
| `Prompt`       | Eingabeaufforderung                          |
| `Optionsliste` | Liste der verfügbaren Optionen               |
| `Trennzeichen` | Trennt die Optionen in der Liste voneinander |

## Rückgabewert

Eine Stringliste mit den gewählten Optionen

## Beispiel

```pascal
procedure DetailBeforePrint;
begin
  Memo1.Lines:=MehrfachAuswahl('Bitte wählen Sie eine oder mehrere Optionen:',
    'Option 1;Option 2;Option 3',';');
end
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Mehrfachauswahl) · Quellrevision 496.
