const messages = []
// Create a new broadcast channel named earth.
const channel = new BroadcastChannel('earth')
// Set onmessage event handler.
channel.onmessage = (event: MessageEvent) => {
  // Update the local state when other instances
  // send us a new message.
  messages.push(event.data)
}

addEventListener('fetch', (event: FetchEvent) => {
  const { pathname, searchParams } = new URL(event.request.url)

  // Handle /send?message=<message> endpoint.
  if (pathname.startsWith('/send')) {
    const message = searchParams.get('message')
    if (!message) {
      return event.respondWith(
        new Response('?message not provided', { status: 400 }),
      )
    }

    // Update local state.
    messages.push(message)
    // Inform all other active instances of the deployment
    // about the new message.
    channel.postMessage(message)
    return event.respondWith(new Response('message sent'))
  }

  // Handle /messages request.
  if (pathname.startsWith('/messages')) {
    return event.respondWith(
      new Response(JSON.stringify(messages), {
        'content-type': 'application/json',
      }),
    )
  }

  return event.respondWith(new Response('not found', { status: 404 }))
})
