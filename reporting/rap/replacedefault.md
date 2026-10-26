---
title: "ReplaceDefault"
source_pageid: 82
source_revision: 510
---

# ReplaceDefault

## Beschreibung

```pascal
function ReplaceDefault(aText: String): String;
```

| Platzhalter | Wird ersetzt durch |
| --- | --- |
| `$_NAME$` | `Schueler['Name']` |
| `$_VORNAME$` | `Schueler['Vorname']` |
| `$_NAME_VORNAME$` | `Schueler['NameVorname']` |
| `$_VORNAME_NAME$` | `Schueler['VornameName']` |
| `$_ANREDE$` | `Schueler['Anrede']` |
| `$_ER_ODER_SIE$` | `Schueler['ErSie']` |
| `$_SOHN_ODER_TOCHTER$` | `Schueler['SohnOderTochter']` |
| `$_ADRESSANREDE$` | `Schueler['AdressAnrede']` |
| `$_STRASSE$` | `Schueler['Strasse']` |
| `$_PLZ_ORT$` | `Schueler['PLZ + ' ' + Schueler['OrtAbk']` |
| `$_ERZ_ADRESSANREDE$` | `SchErzAdr['BriefAnrede']` |
| `$_ERZ_FORMALEANREDE$` | `SchErzAdr['FormaleAnrede']` |
| `$_ERZ_VORNAMEN_UND_NAME$` | `SchErzAdr['VornamenUndName']` |
| `$_ERZ_STRASSE$` | `SchErzAdr['ErzStrasse']` |
| `$_ERZ_PLZ_ORT$` | `SchErzAdr['ErzPLZ + ' ' + SchErzAdrOrt']` |

Zusätzlich werden im Text geschlechtsspezifische Umwandlungen nach dem Muster der Bemerkungsfelder vorgenommen: Aus `&Text_männlich%Text_weiblich&` wird abhängig vom Geschlecht des Schülerdatensatzes die korrekte Form gewählt.

## Parameter

`aText`: Text, in dem die Standard-Platzhalter ersetzt werden sollen.

## Beispiel

```pascal
Procedure DetailBeforePrint;
begin
  ...
  RichText1.Richtext:=ReplaceDefault(RichText1.Richtext);
  ...
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=ReplaceDefault) · Quellrevision 510.
