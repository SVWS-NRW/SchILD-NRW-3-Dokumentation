<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { sections, sectionIcon } from './sections.mjs'
const { page } = useData()
const section = computed(() => sections.find(item => item.path === page.value.relativePath.split('/')[0])
  || (page.value.relativePath.startsWith('bilder/') ? sections.find(item => item.path === 'hilfe') : undefined))
const isSectionHome = computed(() => section.value && page.value.relativePath === `${section.value.path}/index.md`)
</script>

<template>
  <nav v-if="section" class="doc-context" aria-label="Brotkrumennavigation">
    <a :href="withBase('/')">Dokumentation</a>
    <span aria-hidden="true" class="context-separator">/</span>
    <span v-if="isSectionHome" class="context-current" aria-current="page">
      <span class="section-icon" v-html="sectionIcon(section)" />{{ section.title }}
    </span>
    <a v-else :href="withBase(`/${section.path}/`)" class="context-current">
      <span class="section-icon" v-html="sectionIcon(section)" />{{ section.title }}
    </a>
  </nav>
</template>
