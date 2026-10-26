// Keep bookmarks from the former Wiki portal useful after its consolidation.
function normalize(fragment) {
  return decodeURIComponent(fragment.replace(/^#/, '').replace(/\.([0-9a-f]{2})/gi, '%$1'))
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '')
}

const sections = [
  ['/einstieg/grundlagen/uebersicht-schild-nrw-3-einfuehrung', ['Das_Programm_SchILD-NRW_3']],
  ['/administration/installation', ['Installation_SchILD-NRW_3', 'Installation und Administration']],
  ['/einstieg/grundlagen', ['Einführung_in_wesentliche_Funktionen_von_SchILD-NRW_3', 'Grundlegende Arbeitsabläufe']],
  ['/programmreferenz/', ['Karteireiter', 'Funktionen nach Karteireiter']],
  ...['Verwaltung', 'Lehrkräfte', 'Schüler', 'Auswahl', 'Gruppenprozesse', 'Kataloge', 'Reportverwaltung']
    .map((label, i) => ['/programmreferenz/' + ['verwaltung', 'lehrkraefte', 'schueler', 'auswahl', 'gruppenprozesse', 'kataloge', 'reportverwaltung'][i], ['Karteireiter_' + label]]),
  ['/schild3/', ['Tutorials', 'Arbeitsanleitungen', 'Allgemeine_Tutorials', 'Allgemeine Arbeitsabläufe']],
  ['/zeugnisse/', ['Schulformenspezifische_Tutorials', 'Schulformspezifische Arbeitsabläufe', 'Versetzung,_Abschlüsse_und_Zeugnisdruck', 'Versetzung, Abschlüsse und Zeugnisdruck']],
  ['/schild3/unterricht-kataloge', ['Fächer_und_Leistungsdaten']]
]
const targets = new Map(sections.flatMap(([target, labels]) => labels.map(label => [normalize(label), target])))

export function legacyOverviewTarget(hash = '') {
  try {
    return targets.get(normalize(hash)) || '/einstieg/grundlagen'
  } catch {
    return '/einstieg/grundlagen'
  }
}
