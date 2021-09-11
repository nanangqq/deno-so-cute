addEventListener('fetch', event => {
  // Get the value of the header named `x-forwarded-for`.
  // The value can either be a IPv4 or IPv6 address.
  // const ip = event.request.headers.get('x-forwarded-for')
  const ip = event.request.headers.get('host')
  // 로컬에서 deployctl 로 실행시켜보면, ip주소 안나오고 null 로 나옴. 로컬로 요청 보낼때는 헤더에 `x-forwarded-for`값이 안들어가나봄. 'host'값은 제대로 찍힘
  const response = new Response(`Your IP address is <b>${ip}</b>`, {
    headers: { 'content-type': 'text/html' },
  })
  event.respondWith(response)
})
