---
title: "NurFaecherMitAufsZeugnisFlag"
---

# NurFaecherMitAufsZeugnisFlag

## Beschreibung

```pascal
Procedure NurFaecherMitAufsZeugnisFlag(aValue : Boolean);
```

Durch die Verwendung dieser Prozedur kann erreicht werden, dass bei den Schülerleistungsdaten auch Fächer mit ausgegeben werden, bei denen das Flag "Auf Zeugnis" nicht gesetzt ist. Voreinstellung für diesen Wert ist TRUE, d.h. es werden nur Fächer ausgegeben, bei denen dieses Flag gesetzt ist.

## Parameter

| Parameter | Bedeutung                                                                        |
|-----------|----------------------------------------------------------------------------------|
| `aValue`  | Boolscher Wert: FALSE schaltet die Überprüfung ab, TRUE schaltet sie wieder ein. |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  NurFaecherMitAufsZeugnisFlag(False)
end;
```

```pascal
procedure ReportAfterPrint;
begin
  NurFaecherMitAufsZeugnisFlag(True)
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=NurFaecherMitAufsZeugnisFlag)
