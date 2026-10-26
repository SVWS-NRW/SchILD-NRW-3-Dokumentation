---
title: "AufzaehlungRTF"
source_pageid: 21
source_revision: 312
---

# AufzaehlungRTF

## Beschreibung

```pascal
function AufzaehlungRTF(aRichtext: String; const Label: String;aListe: TStrings): String;
```

Fügt eine Aufzählung (ungeordnete Liste) in einen RTF-Text ein.

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aRichtext` | Der Richtext, in den die Aufzählung eingefügt werden soll |
| `aLabel` | Positionsmarke, an der die Aufzählung eingefügt werden soll, eingeschlossen von `<ul>..</ul>` für eine ungeordnete Liste bzw. `<ol>..</ol>` für eine geordnete (nummerierte) Liste. |
| `aListe` | Stringliste, die die einzufügenden Zeilen enthält |

## Rückgabewert

Der veränderte Richtext

## Beispiel

Die Liste muss global deklariert werden:

```pascal
var
   lListe : TStringList;
```

Muss in diesem Ereignis erzeugt werden:

```pascal
procedure ReportBeforePrint;
 Begin
  lListe:=TStringList.Create;
```

Wird hier befüllt:

```pascal
procedure DetailBeforePrint;
begin
  lListe.Clear;
  lListe.Add('Zeile 1');
  lListe.Add('Zeile 2');
  Richtext1.Richtext:=AufzaehlungRTF(Richtext1.Richtext,'$LISTE$',lListe);
  lListe:=TStringList.Free;
end;
// Im Richtext muss dann <ul>$LISTE$</ul> oder <ol>$LISTE$</ol> eingefügt werden.
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=AufzaehlungRTF) · Quellrevision 312.
