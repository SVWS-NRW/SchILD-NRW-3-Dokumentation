---
title: "GruppenDesBenutzers"
source_pageid: 50
source_revision: 343
---

# GruppenDesBenutzers

## Beschreibung

```pascal
function GruppenDesBenutzers(const aLoginName: String): String;
```

Ermittelt die Benutzergruppen, denen ein Benutzer angehört

## Parameter

| Parameter    | Bedeutung               |
|--------------|-------------------------|
| `aLoginName` | Loginname des Benutzers |

## Rückgabewert

Gruppen, denen der Benutzer angehört

## Beispiel

```pascal
procedure DetailBeforePrint;
var
  lGruppen : String;
begin
  lGruppen:=GruppenDesBenutzers(SchildUmgebung['Login_Name']);
  Detail.Visible:=pos('LEHRER',lGruppen) > 0
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=GruppenDesBenutzers) · Quellrevision 343.
