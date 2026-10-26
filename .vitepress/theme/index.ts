import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent } from 'vue'
import Layout from './Layout.vue'
import { updateReferenceSelection } from './reference-state'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('ImageCatalog', defineAsyncComponent(() => import('./ImageCatalog.vue')))
    if (typeof window === 'undefined') return
    updateReferenceSelection(window.location.href)
    const previous = router.onAfterRouteChanged
    router.onAfterRouteChanged = async (to) => {
      await previous?.(to)
      updateReferenceSelection(to)
    }
  }
}
