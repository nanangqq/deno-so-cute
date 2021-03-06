let person = 'Mike'
let age = 28

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0] // "That "
  let str1 = strings[1] // " is a "
  let str2 = strings[2] // "."

  let ageStr
  if (ageExp > 99) {
    ageStr = 'centenarian'
  } else {
    ageStr = 'youngster'
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`
}

let output = myTag`That ${person} is a ${age}.${1}`

console.log(output)
// That Mike is a youngster.

function tt(strings, ...params) {
  console.log(strings)
  console.log(params)
}

tt`a${1}b${2}`
