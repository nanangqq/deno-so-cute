addEventListener('fetch', event => {
  const msg = `${event}`
  const response = new Response(msg, {
    headers: { 'content-type': 'text/plain' },
  })
  event.respondWith(response)
})
