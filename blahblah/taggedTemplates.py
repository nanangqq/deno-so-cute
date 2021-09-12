# https://gist.github.com/jongwony/7c9af218a8b93555124194b660add97d
"""
javascript tagged template literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
"""
import re


def comment(string):
    return string.replace('{{', '{').replace('}}', '}')


def ttl(func, literal):
    regex = re.compile(r'(?<!{){(?!{)(.*?)(?<!\})}(?!\})')
    m = regex.search(literal)
    l = []
    s = []
    if m and m.start() > 0:
        s.append(comment(literal[0:m.start()]))
    while m:
        l.append(eval(m.group(1)))
        start, end = m.span()
        m = regex.search(literal, pos=start + 1)
        tail_str = literal[end:m.start() if m else None]
        if tail_str:
            s.append(comment(tail_str))
    return func(s, *l)


# Example
person = 'Mike'
age = 28


def my_tag(s, person_exp, age_exp):
    s0, s1 = s  # 'That ', ' is a '
    age_str = 'centenarian' if age_exp > 99 else 'youngster'
    return f'{s0}{person_exp}{s1}{age_str}'


output1 = ttl(my_tag, 'That {person} is a {age}')
output2 = ttl(my_tag, 'That {{person}} {person} is a ${age}')

print(output1)
print(output2)


a = [1,2,3,4]

def bb(x,y,z):
    print(x, y, z)

bb(*a)