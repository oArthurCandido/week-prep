from input import input


def minimumBribes(q):

    bribes = 0
    for i in range(len(q)):
        if q[i] - 3 > i:
            print("Too chaotic")
            return
        else:
            j = max(0, q[i]-2)
            while j < i:
                if q[j] > q[i]:
                    bribes += 1
                j += 1
    print(bribes)


q = input.split(' ')
q = [int(x) for x in q]


minimumBribes(q)
