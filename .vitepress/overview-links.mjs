// Mark only flat lists consisting entirely of individual links. The theme
// presents these as cards on portal pages; article lists keep their layout.
export function configureOverviewLinks(md) {
  md.core.ruler.after('inline', 'overview-links', state => {
    const tokens = state.tokens
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'bullet_list_open') continue
      let cursor = i + 1
      let count = 0
      while (tokens[cursor]?.type === 'list_item_open') {
        const item = tokens.slice(cursor, cursor + 5)
        if (item.map(token => token.type).join('|') !== 'list_item_open|paragraph_open|inline|paragraph_close|list_item_close') break
        const children = item[2].children || []
        if (children[0]?.type !== 'link_open' || children.at(-1)?.type !== 'link_close'
          || children.filter(token => token.type === 'link_open').length !== 1) break
        count++
        cursor += 5
      }
      if (count && tokens[cursor]?.type === 'bullet_list_close') tokens[i].attrJoin('class', 'topic-links')
    }
  })
}
