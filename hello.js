addEventListener('fetch', event => {
  // const msg = `${Object.keys(event).join(',')}` // isTrusted 하나 나옴,,
  const msg = `${event.isTrusted}`
  const response = new Response(msg, {
    headers: { 'content-type': 'text/plain' },
  })
  event.respondWith(response)
})
