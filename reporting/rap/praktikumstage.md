---
title: "Praktikumstage"
---

# Praktikumstage

## Beschreibung

```pascal
function PraktikumsTage( const nur_betriebspraktikum: boolean): integer;
```

Liefert die Anzahl der Praktikumstage eines Schülers (optional nur solche mit Kennung „Betriebspraktikum“). Voraussetzung ist, dass das Praktikum bei dem jeweiligen Betrieb als solches gekennzeichnet ist (mit Anfangs- und Enddatum)

## Rückgabewert

Anzahl der Tage.

## Beispiel

```pascal
procedure DetailBeforePrint;
 Begin
 {Alle Praktikumstage ausgeben}
 LblPraktikumstage.Text := IntToStr( Praktikumstage( false ) );
End;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Praktikumstage)
