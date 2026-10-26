---
title: "MehrfachauswahlEx"
source_pageid: 69
source_revision: 497
---

# MehrfachauswahlEx

## Beschreibung

```pascal
function MehrfachauswahlEx(Prompt, Optionsliste: String; Trennzeichen: Char): String;
```

Ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste

## Parameter

| Parameter      | Bedeutung                                    |
|----------------|----------------------------------------------|
| `Prompt`    | Eingabeaufforderung                          |
| `Optionsliste` | Liste der verfügbaren Optionen               |
| `Trennzeichen` | Trennt die Optionen in der Liste voneinander |

## Rückgabewert

Ein String mit den durch Bindestriche begrenzeten Indizes der gewählten Optionen; Wenn keine Auswahl getroffen wurde, besteht der String nur aus einem Bindestrich.

## Beispiel

```pascal
procedure DetailBeforePrint;
var
  lResult : String;
begin
  lResult:=MehrfachAuswahlEx(Bitte wählen Sie eine oder mehrere Optionen:',
    'Option 1;Option 2;Option 3',';');
  if pos('-1-',lResult) > 0 then...
  if pos('-2-',lResult) > 0 then...
end
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=MehrfachauswahlEx) · Quellrevision 497.
