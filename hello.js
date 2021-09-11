console.log('hi')
addEventListener('fetch', event => {
  const response = new Response('Hello Deno!', {
    headers: { 'content-type': 'text/plain' },
  })
  console.log(event)
  event.respondWith(response)
})
