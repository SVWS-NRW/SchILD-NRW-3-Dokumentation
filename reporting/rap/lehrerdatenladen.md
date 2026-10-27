---
title: "LehrerDatenLaden"
---

# LehrerDatenLaden

## Beschreibung

```pascal
procedure LehrerDatenLaden(const Kuerzel: String; var Name, Vorname, Anrede, Titel, Amtsbez: String);
```

## Parameter

| Parameter | Bedeutung            |
|-----------|----------------------|
| `Name`    | Nachname des Lehrers |
| `Vorname` | ..des Lehrers        |
| `Anrede`  | ..des Lehrers        |
| `Titel`   | ..des Lehrers        |
| `Amtsbez` | ..des Lehrers        |

## Beispiel

```pascal
procedure Label4711OnGetText(var Text: String);
var
  lName, lVorname, lAnrede, lTitel, lAmtsbez: String;
begin
  LehrerdatenLaden(Schueler['Lehrer'],lName, lVorname, lAnrede, lTitel,lAmtsbez);
  Text:=lAnrede;
  if lAmtsBez <> '' then Text:=Text + lAmtsBez;
  if lTitel <> '' then Text:=Text +  lTitel;
  Text:=Text + lVorname +  lName;
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=LehrerDatenLaden)
