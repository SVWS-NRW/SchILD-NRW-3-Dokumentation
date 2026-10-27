---
title: "AufFaecherFiltern"
---

# AufFaecherFiltern

## Beschreibung

```pascal
procedure AufFaecherFiltern( const fachliste: string);
```

Ermöglicht eine Filterung in der Datenquelle „SchuelerJahresuebersicht“ auf bestimmte Fächer. Der Aufruf erfolgt typischerweise im Ereignis „ReportBeforPrint“

Es ist aber geplante, die Filterung auch auf andere Datenquellen zu erweitern

## Parameter

| Parameter   | Bedeutung                                                               |
|-------------|-------------------------------------------------------------------------|
| `Fachliste` | Durch Komma oder Semikolon getrennte Liste der schulinternen Fachkürzel |

Hinweis: Komma oder Semikolon dürfen nicht vermischt werden, d.h. es dürfen nur Kommas oder nur Semikolons verwendet werden.

## Beispiel

```pascal
AufFaecherFiltern('D,E,M');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=AufFaecherFiltern)
