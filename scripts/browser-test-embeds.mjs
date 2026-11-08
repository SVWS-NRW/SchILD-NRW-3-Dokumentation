// Exercise the documentation, not the changing scripts of external video players.
// Only embedded player documents are replaced. Site requests, top-level video
// visits, iframe dimensions and all browser error listeners remain unchanged.
const videoPlayer = /^https?:\/\/(?:(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/|player\.vimeo\.com\/video\/)/
const placeholder = '<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Videovorschau</title></head><body style="margin:0;background:#eee;color:#444;font:14px sans-serif;display:grid;place-items:center;min-height:100vh">Externer Videoplayer im automatisierten Test ersetzt.</body></html>'

export async function isolateVideoEmbeds(context) {
  await context.route(videoPlayer, async route => {
    const request = route.request()
    if (request.isNavigationRequest() && request.frame().parentFrame()) {
      await route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: placeholder })
    } else {
      await route.fallback()
    }
  })
}
