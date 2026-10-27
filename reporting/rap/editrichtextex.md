---
title: "EditRichTextEx"
---

# EditRichTextEx

## Beschreibung

```pascal
function EditRichTextEx(const Default: String; const aCaption: String): String;
```

## Parameter

| Parameter  | Bedeutung                                                     |
|------------|---------------------------------------------------------------|
| `Default`  | Zu bearbeitender Richtext, kann auch leer sein                |
| `aCaption` | Überschrift, wird im Titelbalken des Editorfensters angezeigt |

## Rückgabewert

Veränderter Richtext

## Beispiel

```pascal
RichText1.RichText:=EditRichTextEx('','Zeugnisbemerkung');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=EditRichTextEx)
