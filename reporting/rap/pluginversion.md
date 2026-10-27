---
title: "PluginVersion"
---

# PluginVersion

## Beschreibung

```pascal
function PluginVersion: string;
```

Liefert die Version der Reporting.dll

## Beispiel

```pascal
procedure ReportBeforePrint;
 var
  vers: string;
 begin
  vers := PluginVersion;
  if vers >= ‘2’ then
  begin
  end;
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=PluginVersion)
