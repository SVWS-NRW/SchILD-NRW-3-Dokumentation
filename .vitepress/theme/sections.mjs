// One set of decorative line icons for the home cards and section headings.
export const sections = [
  { path: 'einstieg', title: 'Einstieg', icon: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-6 7v6c3 3 9 3 12 0v-6M21 8v8"/>' },
  { path: 'schild3', title: 'Arbeiten mit SchILD', icon: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 10h18M8 10v10M8 3v4M16 3v4"/>' },
  { path: 'zeugnisse', title: 'Zeugnisse und Abschlüsse', icon: '<path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8M8 16h5"/>' },
  { path: 'reporting', title: 'Reporting', icon: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 16v-3M12 16V9M16 16v-5M8 6h8"/>' },
  { path: 'programmreferenz', title: 'Programmreferenz', icon: '<path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v15"/>' },
  { path: 'administration', title: 'Installation und Administration', icon: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5"/>' },
  { path: 'hilfe', title: 'Hilfe und Problemlösungen', icon: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"/>' }
]

export function sectionIcon(section) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${section.icon}</svg>`
}
