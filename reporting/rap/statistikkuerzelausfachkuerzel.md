---
title: "StatistikKuerzelAusFachKuerzel"
---

# StatistikKuerzelAusFachKuerzel

## Beschreibung

```pascal
Function StatistikKuerzelAusFachKuerzel ( const fach_krz: string): string;
```

Ermittelt das Statistik-Kürzel eines Faches aus dem internen Fachkürzel. Damit kann z.B. ermittelt werden, um was für ein Fach es sich im Einzelfall handelt (unabhängig von der jeweils internen Bezeichnung). Dadurch können Reports, die bestimmte Fächer auswerten, unabhängig von der internen Bezeichnung gemacht werden.

## Parameter

| Parameter  | Bedeutung              |
|------------|------------------------|
| `fach_krz` | Das interne Fachkürzel |

## Rückgabewert

Statistikkürzel als String

## Beispiel

```pascal
If StatistikKuerzelAusFachKuerzel(SchuelerLeistungen[’FachKrz’]) =’D’
then ShowMessage( ’Das Fach ist DEUTSCH’ );
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=StatistikKuerzelAusFachKuerzel)
