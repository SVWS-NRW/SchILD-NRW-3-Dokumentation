---
title: "RtfToPlaintext"
---

# RtfToPlaintext

## Beschreibung

```pascal
function RtfToPlaintext(aRtfText: String): String;
```

## Parameter

| Parameter  | Bedeutung                                                       |
|------------|-----------------------------------------------------------------|
| `aRtfText` | Richtext, aus dem alle Formatanweisungen entfernt werden sollen |

## Rückgabewert

Reiner Text ohne Formatierung

## Beispiel

```pascal
Memo1.Text:=RtfToPlaintext(SchuelerLernabschnitte['ZeugnisBem'])
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=RtfToPlaintext)
