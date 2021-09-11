type name = {
  name: string
}

addEventListener('fetch', event => {
  const name: name = { name: 'name' }
  // const msg = `${Object.keys(event).join(',')}` // isTrusted 하나 나옴,,
  // const msg = `${event.isTrusted}` // false
  const msg = `hello ${name.name}` // false
  const response = new Response(msg, {
    headers: { 'content-type': 'text/plain' },
  })
  event.respondWith(response)
})
