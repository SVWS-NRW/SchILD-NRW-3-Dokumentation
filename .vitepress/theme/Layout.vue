<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { dataSymbol } from 'vitepress/dist/client/app/data.js'
import { referenceSelection, articleIndexSelection } from './reference-state'
import { data as articles } from '../../hilfe/artikel.data.mjs'
import { articleIndexLink } from '../article-index.mjs'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import ReferenceSidebar from './ReferenceSidebar.vue'
import ArticlePrintIcon from './ArticlePrintIcon.vue'
import DocContext from './DocContext.vue'
import { sections, sectionIcon } from './sections.mjs'
import VPSidebarGroup from 'vitepress/dist/client/theme-default/components/VPSidebarGroup.vue'
import navigation from '../navigation.json'
import reference from '../program-reference.json'
import { referenceActiveId, referenceEntries } from '../reference-navigation.mjs'
const referenceAreas = navigation.sidebar['/programmreferenz/'].slice(1)
const referenceArticles = referenceEntries(reference)
const data = useData()
const { page, theme, frontmatter } = data
const portalRoutes = new Set(Object.values(navigation.sidebar).flatMap(groups => groups[0].items)
  .map(item => item.link).filter(link => !link.startsWith('/druck/'))
  .map(link => link.endsWith('/') ? `${link.slice(1)}index.md` : `${link.slice(1)}.md`))
const portalPage = computed(() => portalRoutes.has(page.value.relativePath))
const styledFrontmatter = computed(() => frontmatter.value.layout === 'home' ? {
  ...frontmatter.value,
  features: frontmatter.value.features?.map(feature => {
    const section = sections.find(item => feature.link === `/${item.path}/`)
    return section ? { ...feature, icon: sectionIcon(section), linkText: 'Zur Rubrik' } : feature
  })
} : frontmatter.value)
// Static HTML cannot know the query parameter. Switch after hydration on
// direct article visits so the server and client initially render alike.
const mounted = ref(false)
onMounted(() => { mounted.value = true })
const indexMode = computed(() => page.value.relativePath === 'hilfe/alle-artikel.md' || (mounted.value && articleIndexSelection.value))
const referenceMode = computed(() => !indexMode.value && (page.value.relativePath.startsWith('programmreferenz/') || page.value.relativePath === 'druck/programmreferenz.md' || (mounted.value && !!referenceSelection.value)))
const helpSidebar = computed(() => theme.value.sidebar['/hilfe/'].map(group => ({
  ...group,
  items: group.items.map(item => item.link === '/hilfe/alle-artikel'
    ? { ...item, collapsed: false, items: articles.map(article => ({ text: article.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'), link: articleIndexLink(article.url) })) }
    : item)
})))
// Supply the context menu to the default theme, including its active states,
// mobile navigation and previous/next links. Original page data stays intact.
const indexHome = computed(() => indexMode.value && frontmatter.value.layout === 'home')
const indexPosition = computed(() => articles.findIndex(article => article.url === '/' + page.value.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')))
function adjacentArticle(offset: number) {
  const article = indexPosition.value < 0 ? undefined : articles[indexPosition.value + offset]
  return article ? { text: article.title, link: articleIndexLink(article.url) } : false
}
const referencePosition = computed(() => {
  const route = '/' + page.value.relativePath.replace(/\.md$/, '')
  if (route === '/programmreferenz/index') return 0
  const id = referenceActiveId(reference, referenceSelection.value, route)
  return id ? referenceArticles.findIndex(article => article.id === id) : -1
})
function adjacentReference(offset: number) {
  const article = referencePosition.value < 0 ? undefined : referenceArticles[referencePosition.value + offset]
  return article ? { text: article.text, link: article.link } : false
}
provide(dataSymbol, {
  ...data,
  theme: computed(() => indexMode.value ? { ...theme.value, sidebar: helpSidebar.value } : theme.value),
  frontmatter: computed(() => indexMode.value ? {
    ...frontmatter.value,
    ...(indexHome.value ? { layout: 'doc', aside: false } : {}),
    prev: adjacentArticle(-1), next: adjacentArticle(1)
  } : referenceMode.value ? {
    ...frontmatter.value, prev: adjacentReference(-1), next: adjacentReference(1)
  } : styledFrontmatter.value)
})
</script>

<template>
  <div class="schild-site" :class="{ 'program-reference-view': referenceMode, 'section-portal': portalPage && !indexMode }">
    <DefaultTheme.Layout>
      <template #doc-before><VPHome v-if="indexHome" /><DocContext v-if="!indexHome" /><ArticlePrintIcon v-if="!page.relativePath.startsWith('druck/')" :key="page.relativePath" /></template>
      <template #home-features-before>
        <div class="home-section-heading"><h2>Wobei brauchen Sie Unterstützung?</h2><p>Wählen Sie die passende Rubrik für Ihre Aufgabe.</p></div>
      </template>
      <template #sidebar-nav-before>
        <ReferenceSidebar v-if="referenceMode" />
        <div v-if="referenceMode" class="reference-areas">
          <VPSidebarGroup :items="referenceAreas" />
        </div>
      </template>
    </DefaultTheme.Layout>
  </div>
</template>
