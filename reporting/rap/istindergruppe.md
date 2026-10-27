---
title: "IstInDerGruppe"
---

# IstInDerGruppe

## Beschreibung

```pascal
function IstInDerGruppe(const aLoginName, aGruppenName: String): Boolean;
```

Diese Funktion ermittelt, ob ein bestimmter Benutzer einer Gruppe angehört

## Parameter

| Parameter      | Bedeutung                          |
|----------------|------------------------------------|
| `aLoginname`   | der Schild-Loginname des Benutzers |
| `aGruppenname` | die zu überprüfende Gruppe         |

## Rückgabewert

TRUE, wenn der Benutzer der Gruppe angehört, FALSE sonst

## Beispiel

```pascal
procedure DetailBeforePrint;
begin
  Detail.Visible:=IstInDerGruppe('LEHRER',SchildUmgebung['Login_Name'])
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=IstInDerGruppe)
