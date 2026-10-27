---
title: "StringListInDateiSpeichern"
---

# StringListInDateiSpeichern

## Beschreibung

```pascal
procedure StringListInDateiSpeichern(const aList:TStringList, aDir:String)
```

## Parameter

| Parameter | Bedeutung                                      |
|-----------|------------------------------------------------|
| `aList`   | TStringList (z.B. Inhalt eines Memofeldes)     |
| `aDir`    | Vollständiger Speicherpfad inklusive Dateiname |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  slT := TStringList.Create;
  slT.Add( 'TEST' );
  StringListInDateiSpeichern( slT, 'C:\Temp\Test.txt' );
  slT.Free;
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=StringListInDateiSpeichern)
