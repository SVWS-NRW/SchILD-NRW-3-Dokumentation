---
title: "ReplaceTextEx"
---

# ReplaceTextEx

## Beschreibung

```pascal
function ReplaceTextEx(aSourceText, aSearchText,
                          aReplaceText: String): String;
```

Im Unterschied zu ReplaceText berücksichtigt ReplaceTextEx Groß- und Kleinschreibung.

## Parameter

| Parameter      | Bedeutung                                                                    |
|----------------|------------------------------------------------------------------------------|
| `aSourceText`  | Text, der den zu ersetzenden String (selbst definierter Platzhalter) enthält |
| `aSearchText`  | String, der ersetzt werden soll                                              |
| `aReplaceText` |                                                                              |

## Rückgabewert

Veränderter Quelltext

## Beispiel

```pascal
Memo1.Text:=ReplaceTextEx(Memo1.Text,'$VORNAME$',Schueler['Vorname']);
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ReplaceTextEx)
