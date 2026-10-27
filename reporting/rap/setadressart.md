---
title: "SetAdressArt"
---

# SetAdressArt

## Beschreibung

```pascal
procedure SetAdressArt(aZiel, aAdressArt: String);
```

## Parameter

| Parameter    | Bedeutung                                                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `aZiel`      | ALLEADRESSEN' setzt den Filter für die Datenquelle „AllgAdresseUndSchueler“, 'KLASSENADRESSEN' auf die Datenquelle „AllgAdresseZurLKlasse“ |
| `aAdressArt` | Gewünschte Adressart, entweder über SelectAdressArt auswählen oder als Stringliteral (z.B. „Betrieb“) eingeben                             |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetAdressArt('ALLEADRESSEN','Betrieb');
 end
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=SetAdressArt)
