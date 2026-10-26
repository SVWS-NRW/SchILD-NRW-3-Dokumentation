---
title: "NurErzieherMitAnschreiben"
source_pageid: 72
source_revision: 500
---

# NurErzieherMitAnschreiben

## Beschreibung

```pascal
procedure NurErzieherMitAnschreiben(Filtern: Boolean);
```

## Parameter

| Parameter | Bedeutung                                                                                                   |
|-----------|-------------------------------------------------------------------------------------------------------------|
| `Filtern` | TRUE, falls nur Erzieher berücksichtigt werden sollen, bei denen das Flag „Erhält Anschreiben“ gesetzt ist. |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   NurErzieherMitAnschreiben(True);
 end;
```

```pascal
Procedure ReportAfterPrint;
begin
  NurErzieherMitAnschreiben(False);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=NurErzieherMitAnschreiben) · Quellrevision 500.
