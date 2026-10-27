---
title: "Datenliste"
---

# Datenliste

## Beschreibung

```pascal
DatenListe(aDatapipeline: TppDBPipeline; aFeld, aSep: string; duplikate: boolean ): string;
```

Diese liefert eine Liste (getrennt durch ein wählbares Trennzeichen ) für ein Feld in einer Datenquelle, mit der Option, ob doppelt auftretende Werte ausgegeben werden sollen oder nicht.

## Parameter

Datenquelle, Datenfeld,Trennzeichen,true/false

## Rückgabewert

Datenliste z.B. 05a, 06a, 07a, 08a aus dem Beispiel

## Beispiel

```pascal
lblBesuchteKlassen.Caption := DatenListe( SchuelerLaufbahn, 'Klasse', ', ', false );
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Datenliste)
