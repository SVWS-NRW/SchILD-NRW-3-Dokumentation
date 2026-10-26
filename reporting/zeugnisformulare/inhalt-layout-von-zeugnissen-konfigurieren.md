---
title: "Inhalt und Layout von Zeugnissen konfigurieren"
pageClass: zeugnisoptionen
source_pageid: 1618
source_revision: 6791
---

# Inhalt und Layout von Zeugnissen konfigurieren

Passen Sie die Datei Zeugniseinstellungen.ini für die verwendeten Zeugnisanlagen an. Die Einstellungen gelten jeweils für die zugehörige Anlage und müssen nicht in jedem Formular verfügbar sein.

## Die Einstellungsdatei vorbereiten

Nun sollte noch die Einstellungsdatei *Zeugniseinstellungen.ini* konfiguriert werden und dann sind die Zeugnisse verwendbar.

### Aufbau der INI-Datei

[![Die Zeugniseinstellungen.ini kann direkt aus dem Reportexplorer geöffnet werden.](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini.png)](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini.png)

*Die Zeugniseinstellungen.ini kann direkt aus dem Reportexplorer geöffnet werden.*

Die Zeugnisse können - und müssen - über Einstellungen in der Datei *Zeugniseinstellungen.ini* konfiguriert werden. Es öffnet sich der in Ihrem Windows eingestellte Texteditor.  

::: info Hinweis

Die *Zeugniseinstellungen.ini* muss im gleichen Verzeichnis liegen wie die Zeugnisformulare, die sie steuert.

:::

[![Die Zeugniseinstellungen.ini im Windows-Editor.](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini-editor.png)](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini-editor.png)

*Die Zeugniseinstellungen.ini im Windows-Editor.*

Die Datei ist wie folgt aufgebaut: Alle Zeilen, die mit einem "**;**" beginnen, sind *Kommentare* und werden damit nicht maschinell verarbeitet, sondern sind Erklärungen für den Menschen.

Beispiel:

> ; Zeilen, die mit einem Semikolon beginnen sind Kommentare und werden ignoriert.

Zeilen, die einen Block mit einem Wort in \[Eckigen Klammern\] einleiten, gelten für eine bestimmte Zeugnisanlage. Typischerweise befindet sich darüber eine Zeile mit einem Kommentar, die erläutert, um was für eine Anlage es sich handelt.

Beispiel:

> ; Anlage 03: Regulares Halbjahres- und Versetzungszeugnis EF
> 
> [Anlage03]

Die folgenden Zeilen steuern das Verhalten des Zeugnisformulars. Jede Zeile hat den Aufbau **Option=Wert**. **J** bedeutet „Ja“, **N** bedeutet „Nein“. Wenn das Zeugnis ohne Rand gedruckt werden soll, setzen Sie die Option **ZeugnisMitRand** in der INI-Datei wie folgt:

> ZeugnisMitRand=N

Für ein Zeugnis *mit* Rand wäre somit zu setzen:

> ZeugnisMitRand=J

Am Ende der Datei, unter den Einstellungen für alle von ihr gesteuerten Zeugnisformulare, folgt eine Erklärung aller möglichen *Optionen* (vor dem "=") und der jeweils zugelassenen Konfiguration (nach dem "="). Die Konfiguration ist oftmals nur ein *Buchstabe*, kann aber auch *Texte* enthalten.  

::: danger Achtung

Diese Eintragungen sind für jedes Zeugnisformular - z.B. jede *Anlage*, gesondert einzustellen!

:::

::: example Beispiel

Sollen also alle Zeugnisse mit Rand gedruckt werden, wäre für alle von einer *Zeugniseinstellungen.ini* verwalteten Formulare jeweils die Option *ZeugnisMitRand* das *N* zu einem *J* zu ändern.

:::

### Zeugnisoptionen und ihre Einstellmöglichkeiten

::: info Hinweis

Nicht alle möglichen Optionen werden in allen Zeugnisformularen genutzt.

:::

::: tip Tipp

Nutzen Sie in Ihrem Texteditor die Funktion "Suchen und Ersetzen", um alle Einträge in einer Datei zu ändern. Wollen Sie zum Beispiel alle Zeugnisse ohne Amtsbezeichnungen drucken, suchen Sie nach *UnterschriftenMitAmtsbezeichnungen=J* und ersetzen Sie alle Vorkommnisse durch *UnterschriftenMitAmtsbezeichnungen=N*.

:::

Diese Tabelle dient der Übersichtlichkeit, möglicherweise bietet ein bestimmtes Zeugnisformular noch weitere Optionen an. Diese wären dann dem Fuß der jeweiligen *Zeugniseinstellungen.ini* zu entnehmen.

**Einstellen von Zeugnisformularen**

Jede Zeile zeigt eine vollständige Einstellung und ihre Wirkung. Bei frei wählbaren Werten sind Beispiele oder Platzhalter wie `Text`, `Angabe` und `R,G,B` angegeben. Ersetzen Sie diese durch die benötigten Angaben. Ein Eintrag, der direkt nach dem Gleichheitszeichen endet, steht für einen leeren Wert.

| Einstellung | Wirkung |
| --- | --- |
| `ZeugnisMitRand=J` | Druckt das Zeugnis mit Rand. |
| `ZeugnisMitRand=N` | Druckt das Zeugnis ohne Rand. |
| `A3ZeugnisSeiten14Ausblenden=J` | Druckt bei einem A3-Zeugnis nur die inneren Seiten 2 und 3. Die Seiten 1 und 4 werden ausgeblendet; gleichzeitig wird der Duplexdruck deaktiviert. |
| `A3ZeugnisSeiten14Ausblenden=N` | Druckt alle Seiten des A3-Zeugnisses im Duplexdruck. |
| `FarbeNotenfeld=R,G,B` | Legt die Hintergrundfarbe der Notenfelder mit den Farbanteilen Rot, Grün und Blau fest. Jeder Wert muss eine ganze Zahl von 0 bis 255 sein, zum Beispiel `255,20,170`. Der Standardwert `192,192,192` ergibt Grau. |
| `ZeugnisVorname=V` | Verwendet für den Zeugnisvornamen nur das Feld „Vorname“. |
| `ZeugnisVorname=W` | Verwendet das Feld „Vorname“ und hängt den Inhalt von „Weitere Vornamen“ an. Ist „Weitere Vornamen“ leer, wird nur „Vorname“ verwendet. |
| `ZeugnisVorname=A` | Verwendet nur „Weitere Vornamen“; dieses Feld muss dann alle gewünschten Vornamen enthalten. Ist es leer, wird stattdessen „Vorname“ verwendet. |
| `ZeugnisDatumQuelle=Z` | Verwendet das Zeugnisdatum des aktuellen Lernabschnitts als Zeugnisdatum. |
| `ZeugnisDatumQuelle=K` | Verwendet das Konferenzdatum des aktuellen Lernabschnitts als Zeugnisdatum. |
| `ZeugnisDatumQuelle=V` | Verwendet normalerweise das Zeugnisdatum des aktuellen Lernabschnitts. Bei nicht versetzten Schülerinnen und Schülern im zweiten Halbjahr wird stattdessen das Konferenzdatum verwendet. |
| `ZeugnisDatumQuelle=E` | Verwendet das in SchILD hinterlegte Entlassdatum als Zeugnisdatum. |
| `ZeugnisDatumQuelle=S` | Verwendet das in SchILD hinterlegte Schulwechseldatum als Zeugnisdatum. |
| `ZeugnisDatumQuelle=A` | Verwendet das aktuelle Tagesdatum als Zeugnisdatum. |
| `ZeugnisDatumQuelle=I` | Verwendet das Datum, das in derselben INI-Datei unter `ZeugnisDatumAngabe` eingetragen ist. |
| `ZeugnisDatumQuelle=F` | Öffnet beim Aufruf des Formulars ein Eingabefenster, in dem das Zeugnisdatum angegeben wird. |
| `ZeugnisDatumQuelle=` | Ein leerer Wert öffnet einen Auswahldialog zur Ermittlung des Zeugnisdatums. |
| `ZeugnisDatumAngabe=28.07.24` | Gibt das Zeugnisdatum im Kurzformat vor, hier beispielhaft den 28. Juli 2024. Diese Angabe wird nur bei `ZeugnisDatumQuelle=I` verwendet. |
| `ZeugnisInformationenQuelle=F` | Fragt die Angaben zum Wiederanfang des Unterrichts und zum Elternsprechtag beim Aufruf des Formulars ab. |
| `ZeugnisInformationenQuelle=I` | Liest die Angaben zum Wiederanfang des Unterrichts und zum Elternsprechtag aus der INI-Datei. Für den Wiederanfang dient `ZeugnisInformationenWiederanfangAngabe`. |
| `ZeugnisInformationenQuelle=D` | Sieht vor, die Angaben zum Wiederanfang des Unterrichts und zum Elternsprechtag aus der Datenbank zu lesen. Die übernommene Beschreibung kennzeichnet diese Funktion als noch nicht implementiert. |
| `ZeugnisInformationenQuelle=` | Ein leerer Wert bewirkt, dass die Informationen zum Wiederanfang des Unterrichts und zum Elternsprechtag ignoriert werden. |
| `ZeugnisInformationenWiederanfangAngabe=1. August 2024 um 08:00 Uhr` | Gibt den Text mit Datum und Uhrzeit für den Wiederanfang des Unterrichts vor. Die Angabe wird nur bei `ZeugnisInformationenQuelle=I` verwendet. |
| `UnterschriftenSLAL=S` | Verwendet die Daten der Schulleitung aus der Datenbank für das Unterschriftenfeld der Schul- oder Abteilungsleitung. |
| `UnterschriftenSLAL=V` | Verwendet die Daten der stellvertretenden Schulleitung aus der Datenbank für das Unterschriftenfeld der Schul- oder Abteilungsleitung. |
| `UnterschriftenSLAL=A` | Verwendet die Daten der Abteilungsleitung aus der Datenbank für das Unterschriftenfeld der Schul- oder Abteilungsleitung. |
| `UnterschriftenSLAL=I` | Übernimmt den unter `UnterschriftenSLALText` hinterlegten Text ohne Rückfrage beim Zeugnisdruck. |
| `UnterschriftenSLAL=T` | Fragt den Text beim Zeugnisdruck ab. Der unter `UnterschriftenSLALText` hinterlegte Text ist vorbelegt und kann bei der Zeugnisgenerierung geändert werden. |
| `UnterschriftenSLALText=MUST,(Schulleiterin)` | Verwendet die Lehrkraft mit dem Kürzel `MUST` und ergänzt die Funktionsbezeichnung „Schulleiterin“. Allgemeines Format: `KÜRZEL,(mein Text)`; der Zusatz ist optional. Der Name wird gemäß den Namenseinstellungen ausgegeben. Der Eintrag wird bei `UnterschriftenSLAL=I` direkt verwendet und bei `UnterschriftenSLAL=T` zur Änderung vorbelegt. Ein senkrechter Strich (`\|`, „Pipe“) im Text erzeugt einen Zeilenumbruch. |
| `UnterschriftenSLALText=Marie Musterfrau, Stv. Konrektorin` | Druckt diesen frei gewählten Text wörtlich unter die Unterschriftenlinie der Schul- oder Abteilungsleitung. Er wird bei `UnterschriftenSLAL=I` direkt verwendet und bei `UnterschriftenSLAL=T` zur Änderung vorbelegt. Ein senkrechter Strich (`\|`, „Pipe“) im Text erzeugt einen Zeilenumbruch. |
| `UnterschriftenKL=K` | Verwendet die Klassenleitung aus der Datenbank für das Unterschriftenfeld der Klassenleitung. |
| `UnterschriftenKL=I` | Übernimmt den unter `UnterschriftenKLText` hinterlegten Text ohne Rückfrage beim Zeugnisdruck. |
| `UnterschriftenKL=T` | Fragt den Text für die Klassenleitungsunterschrift beim Aufruf des Zeugnisses ab. `UnterschriftenKLText` legt die Vorbelegung fest. |
| `UnterschriftenKLText=MUST,(Beratungslehrer)` | Verwendet die Lehrkraft mit dem Kürzel `MUST` und dem optionalen Zusatz „Beratungslehrer“; ein weiteres Beispiel ist `MUST,(Koordinator SII)`. Der Name wird gemäß den Namenseinstellungen ausgegeben. Der Eintrag wird bei `UnterschriftenKL=I` direkt verwendet und bei `UnterschriftenKL=T` zur Änderung vorbelegt. |
| `UnterschriftenKLText=Text` | Verwendet einen frei gewählten Text wörtlich für das Unterschriftenfeld der Klassenleitung. Er wird bei `UnterschriftenKL=I` direkt verwendet und bei `UnterschriftenKL=T` zur Änderung vorbelegt. |
| `UnterschriftenVorsitzZAA=S` | Verwendet die Schulleitung aus der Datenbank für die Unterschrift des Vorsitzes des Zentralen Abiturausschusses. |
| `UnterschriftenVorsitzZAA=V` | Verwendet die stellvertretende Schulleitung aus der Datenbank für die Unterschrift des Vorsitzes des Zentralen Abiturausschusses. |
| `UnterschriftenVorsitzZAA=I` | Übernimmt den in der INI-Datei hinterlegten Text für den ZAA-Vorsitz ohne Rückfrage beim Zeugnisdruck; siehe `UnterschriftenVorsitzZAAText`. |
| `UnterschriftenVorsitzZAA=T` | Fragt den Text für die Unterschrift des ZAA-Vorsitzes beim Aufruf des Zeugnisses ab. `UnterschriftenVorsitzZAAText` legt die Vorbelegung fest. |
| `UnterschriftenVorsitzZAAText=MUST,(Vorsitz ZAA)` | Verwendet die Lehrkraft mit dem Kürzel `MUST` und dem optionalen Zusatz „Vorsitz ZAA“. Der Name wird gemäß den Namenseinstellungen ausgegeben. Der Eintrag wird bei `UnterschriftenVorsitzZAA=I` direkt verwendet und bei `UnterschriftenVorsitzZAA=T` zur Änderung vorbelegt. Ein senkrechter Strich (`\|`, „Pipe“) im Text erzeugt einen Zeilenumbruch. |
| `UnterschriftenVorsitzZAAText=i.V. Maxi Muster (GeD)` | Verwendet diesen frei gewählten Text wörtlich für die Unterschrift des ZAA-Vorsitzes. Er wird bei `UnterschriftenVorsitzZAA=I` direkt verwendet und bei `UnterschriftenVorsitzZAA=T` zur Änderung vorbelegt. Ein senkrechter Strich (`\|`, „Pipe“) im Text erzeugt einen Zeilenumbruch. |
| `UnterschriftenSchultraegerText=Dr. Glitzerfee, Gemeinde Einhornlichtung` | Verwendet diesen frei gewählten Text als Unterschriftenbezeichnung der Vertretung des Schulträgers auf dem Abiturzeugnis. Ein senkrechter Strich (`\|`, „Pipe“) im Text erzeugt einen Zeilenumbruch. |
| `UnterschriftenFunktionZeilenumbruch=J` | Setzt die Funktionsbezeichnung bei Unterschriften in eine neue Zeile: beispielsweise „Meier,“ und darunter „Abteilungsleiter“. Gilt nicht bei der Ausgabe des stellvertretenden Beratungslehrers; bei `UnterschriftenMitStvKlassenlehrer=J` wird diese Einstellung ebenfalls nicht beachtet. |
| `UnterschriftenFunktionZeilenumbruch=N` | Setzt Name und Funktionsbezeichnung in dieselbe Zeile, beispielsweise „Meier, Abteilungsleiter“. Gilt nicht bei der Ausgabe des stellvertretenden Beratungslehrers; bei `UnterschriftenMitStvKlassenlehrer=J` wird diese Einstellung ebenfalls nicht beachtet. |
| `UnterschriftenMitNachnamen=J` | Verwendet die Nachnamen der betreffenden Personen anstelle allgemeiner Bezeichnungen der Unterschriftenfelder. |
| `UnterschriftenMitNachnamen=N` | Verwendet allgemeine Bezeichnungen der Unterschriftenfelder. Vornamen, Titel und Amtsbezeichnungen werden ebenfalls nicht ausgegeben; die zugehörigen Namensoptionen werden ignoriert. |
| `UnterschriftenMitAmtsbezeichnungen=J` | Ergänzt die Amtsbezeichnung bei Unterschriften, sofern `UnterschriftenMitNachnamen=J` gesetzt ist. |
| `UnterschriftenMitAmtsbezeichnungen=N` | Ergänzt keine Amtsbezeichnung bei Unterschriften. |
| `UnterschriftenMitVornamen=J` | Ergänzt die Anfangsbuchstaben der Vornamen bei Unterschriften, sofern `UnterschriftenMitNachnamen=J` gesetzt ist. |
| `UnterschriftenMitVornamen=N` | Ergänzt keine Anfangsbuchstaben der Vornamen bei Unterschriften. |
| `UnterschriftenMitVornamenNurErster=J` | Berücksichtigt bei `UnterschriftenMitVornamen=J` nur den ersten Vornamen. Die Namensausgabe setzt außerdem `UnterschriftenMitNachnamen=J` voraus. |
| `UnterschriftenMitVornamenNurErster=N` | Beschränkt die Anfangsbuchstaben bei `UnterschriftenMitVornamen=J` nicht auf den ersten Vornamen. Die Namensausgabe setzt außerdem `UnterschriftenMitNachnamen=J` voraus. |
| `UnterschriftenMitTitel=J` | Ergänzt einen Titel bei Unterschriften, typischerweise einen Doktortitel, sofern `UnterschriftenMitNachnamen=J` gesetzt ist. |
| `UnterschriftenMitTitel=N` | Ergänzt keinen Titel bei Unterschriften. |
| `UnterschriftenMitStvKlassenlehrer=J` | Gibt auch den stellvertretenden Klassenlehrer im Unterschriftenbereich aus. Die Einstellung `UnterschriftenFunktionZeilenumbruch` wird dabei nicht beachtet. |
| `UnterschriftenMitStvKlassenlehrer=N` | Gibt den stellvertretenden Klassenlehrer nicht zusätzlich im Unterschriftenbereich aus. |
| `AnschreibenRuecksendeangaben=Text` | Nur für Anschreiben: Gibt eigene Rücksendeangaben vor. |
| `AnschreibenRuecksendeangaben=` | Nur für Anschreiben: Bei leerem Wert werden die Angaben aus der Datenbank verwendet, sofern der Report keine feste Eintragung enthält. |
| `AnschreibenVermerkzone=Text` | Nur für Anschreiben: Gibt einen eigenen Text für die Vermerkzone vor. |
| `AnschreibenVermerkzone=` | Nur für Anschreiben: Bei leerem Wert werden die Angaben aus dem Report verwendet. |
| `AnschreibenInfoblockNameFunktionQuelle=U` | Nur für Anschreiben: Übernimmt Name und Funktion im rechten Infoblock von der Person des Unterschriftenfeldes. |
| `AnschreibenInfoblockNameFunktionQuelle=I` | Nur für Anschreiben: Übernimmt Name und Funktion im rechten Infoblock aus den entsprechenden Einträgen der INI-Datei. |
| `AnschreibenInfoblockNameFunktionQuelle=K` | Nur für Anschreiben: Blendet den Infoblock aus. |
| `AnschreibenInfoblockName=Text` | Nur für Anschreiben: Hinterlegt den Namen für den Infoblock. Die Verwendung wird durch `AnschreibenInfoblockNameFunktionQuelle` gesteuert. |
| `AnschreibenInfoblockFunktion=Text` | Nur für Anschreiben: Hinterlegt die Funktionsbezeichnung für den Infoblock. Die Verwendung wird durch `AnschreibenInfoblockNameFunktionQuelle` gesteuert. |
| `AnschreibenInfoblockTelefon=Text` | Nur für Anschreiben: Hinterlegt die Telefonnummer für den Infoblock. Die Verwendung wird durch `AnschreibenInfoblockNameFunktionQuelle` gesteuert. |
| `AnschreibenInfoblockFax=Text` | Nur für Anschreiben: Hinterlegt die Faxnummer für den Infoblock. Die Verwendung wird durch `AnschreibenInfoblockNameFunktionQuelle` gesteuert. |
| `AnschreibenInfoblockWeb=Text` | Nur für Anschreiben: Hinterlegt die Webadresse für den Infoblock. Die Verwendung wird durch `AnschreibenInfoblockNameFunktionQuelle` gesteuert. |
| `AnschreibenInfoblockEMail=Text` | Nur für Anschreiben: Hinterlegt die E-Mail-Adresse für den Infoblock. Die Verwendung wird durch `AnschreibenInfoblockNameFunktionQuelle` gesteuert. |
| `AnschreibenDatumsangabe1=Angabe` | Nur für Anschreiben: Hinterlegt die erste dynamische Datumsangabe. |
| `AnschreibenDatumsangabe2=Angabe` | Nur für Anschreiben: Hinterlegt die zweite dynamische Datumsangabe. |
| `AnschreibenFreitext=Text` | Nur für Anschreiben: Hinterlegt dynamischen Freitext. |
| `SchulabschlussQuelle=H` | Verwendet für das Abschlusszeugnis den Eintrag des Schulabschlusses im aktuellen Halbjahr. |
| `SchulabschlussQuelle=L` | Sieht vor, den Schulabschluss aus der Liste der Abschlüsse in SchILD zu übernehmen. Die übernommene Beschreibung kennzeichnet diese Liste als noch nicht implementiert. |
| `SchulabschlussQuelle=F` | Fragt den Schulabschluss beim Aufruf des Formulars ab. |
| `AlteAbschluesseErfragen=J` | Fragt beim Druck eines Abgangszeugnisses nach früheren Abschlüssen, wenn der zugehörige Abschluss nicht gefunden wurde. Das kann zum Beispiel Personen betreffen, die bereits mit einem Abschluss aufgenommen wurden und die Schule ohne einen höherwertigen Abschluss verlassen. |
| `AlteAbschluesseErfragen=N` | Fragt beim Druck eines Abgangszeugnisses nicht nach früheren Abschlüssen, wenn der zugehörige Abschluss nicht gefunden wurde. |
| `SchriftenInPDFEinbetten=J` | Bettet die verwendete Schrift in die erzeugte PDF-Datei ein. Eine einzelne Zeugnis-PDF-Datei kann dadurch mehrere MB groß werden. |
| `SchriftenInPDFEinbetten=N` | Bettet die verwendete Schrift nicht in die erzeugte PDF-Datei ein. |
| `UnicodeInPDFVerwenden=J` | Verwendet Unicode-Codierung für Texte in erzeugten PDF-Dateien. Eine einzelne Zeugnis-PDF-Datei kann dadurch mehrere MB groß werden. |
| `UnicodeInPDFVerwenden=N` | Verwendet für Texte in erzeugten PDF-Dateien keine Unicode-Codierung. |

Ein Lehrerkürzel wie `MUST` wird bei den Unterschriften gemäß den Namensoptionen aufgelöst und kann beispielsweise als „Dr. M. Mustermann, StR“ erscheinen. Ein optionaler Funktionszusatz folgt durch Komma getrennt in Klammern, zum Beispiel `MUST,(Schulleiterin)`.

Die bisherige Beschreibung nennt bei `UnterschriftenVorsitzZAA=I` außerdem die abweichende Bezeichnung `UnterschriftenZAAText`. Prüfen Sie die tatsächlich verwendete Bezeichnung in der mitgelieferten INI-Datei.


---

[Originalartikel im Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Inhalt_%26_Layout_von_Zeugnissen_konfigurieren) · Quellrevision 6791.
