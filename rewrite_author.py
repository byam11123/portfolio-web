import sys
import re

def replace_author_and_committer(name, email, new_name, new_email):
    if name.lower() in [
        'priyanshu gupta',
        'https://github.com/priyanshugupta28',
    ] or email.lower() in [
        '28priyanshu2001@gmail.com',
        '112753528+priyanshugupta28@users.noreply.github.com',
    ]:
        return (new_name, new_email)
    return (name, email)

def main():
    old_name1 = 'Priyanshu Gupta'
    old_name2 = 'https://github.com/PriyanshuGupta28'
    old_email1 = '28priyanshu2001@gmail.com'
    old_email2 = '112753528+PriyanshuGupta28@users.noreply.github.com'
    new_name = 'byam11123'
    new_email = 'kaiwartyabyamkesh7@gmai.com'

    for line in sys.stdin:
        if line.startswith('author '):
            m = re.match(r'author (.*) <(.*)> (.*)', line)
            if m:
                name, email, rest = m.group(1), m.group(2), m.group(3)
                name, email = replace_author_and_committer(name, email, new_name, new_email)
                print(f'author {name} <{email}> {rest}')
                continue
        if line.startswith('committer '):
            m = re.match(r'committer (.*) <(.*)> (.*)', line)
            if m:
                name, email, rest = m.group(1), m.group(2), m.group(3)
                name, email = replace_author_and_committer(name, email, new_name, new_email)
                print(f'committer {name} <{email}> {rest}')
                continue
        print(line, end='')

if __name__ == '__main__':
    main()
