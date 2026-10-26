---
title: "ReadDateTime"
source_pageid: 81
source_revision: 509
---

# ReadDateTime

## Beschreibung

```pascal
function ReadDateTime(aPrompt: String; var D,T1,T2: TDateTime; IsIntervall: Boolean): Boolean;
```

## Parameter

| Parameter     | Bedeutung                                                                  |
|---------------|----------------------------------------------------------------------------|
| `aPrompt`     | Hinweistext im Dialogtitel                                                 |
| `D`           | Datum)                                                                     |
| `T1`          | Uhrzeit (Beginn)                                                           |
| `T2`          | Uhrzeit(Ende                                                               |
| `IsIntervall` | Falls True, wird die Uhrzeit (Ende) eingeblendet und kann verändert werden |

## Rückgabewert

True: Dialog durch „Ok“ beendet, False sonst

## Beispiel

```pascal
Procedure Label1OnGetText(var Text: String);
 var
   D,T1,T2 : Datetime;
 begin
   If ReadDateTime('Sprechtag', D, T1, T2, True) then
     Text:='Elternsprechtag am ' + DateToStr(D)
     + ' von ' + TimeToStr(T1) + ' Uhr'
     + ' bis ' + TimeToStr(T2) + ' Uhr'
   else
     Text:='---';
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ReadDateTime) · Quellrevision 509.
