---
title: "ReplaceText"
source_pageid: 84
source_revision: 512
---

# ReplaceText

## Beschreibung

```pascal
function ReplaceText(aSourceText, aSearchText,
                        aReplaceText: String): String;
```

## Parameter

| Parameter      | Bedeutung                                                                    |
|----------------|------------------------------------------------------------------------------|
| `aSourceText`  | Text, der den zu ersetzenden String (selbst definierter Platzhalter) enthält |
| `aSearchText`  | String, der ersetzt werden soll                                              |
| `aReplaceText` | String, der eingefügt werden soll                                            |

## Rückgabewert

Veränderter Quelltext

## Beispiel

```pascal
Memo1.Text:=ReplaceText(Memo1.Text,'$VORNAME$',Schueler['Vorname');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ReplaceText) · Quellrevision 512.
