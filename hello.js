addEventListener('fetch', event => {
  const msg = `${Object.keys(event).join(',')}`
  const response = new Response(msg, {
    headers: { 'content-type': 'text/plain' },
  })
  event.respondWith(response)
})
