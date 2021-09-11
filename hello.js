addEventListener('fetch', event => {
  const response = new Response('Hello Deno!', {
    headers: { 'content-type': 'text/plain' },
  })
  event.respondWith(response)
})
