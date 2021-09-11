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

// Summary
// URL: https://kind-pig-46.deno.dev/
// Status: 200
// Source: Network
// Address: 34.120.54.55:443

// Request
// :method: GET
// :scheme: https
// :authority: kind-pig-46.deno.dev
// :path: /
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
// Accept-Language: en-us
// Connection: keep-alive
// Accept-Encoding: gzip, deflate, br
// Host: kind-pig-46.deno.dev

// Response
// :status: 200
// Content-Type: text/plain
// Content-Length: 10
// Date: Sat, 11 Sep 2021 06:45:57 GMT
// Server: deploy/asia-northeast3-b
// 아마도 구글 클라우드 사용하는 느낌?
