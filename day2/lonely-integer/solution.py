a = [1,1,2,2,4,4,3]

def lonelyinteger(a):
    a.sort()
    for i in range(0,len(a),2):
        if i == len(a) - 1:
            return a[i]
        elif a[i] != a[i+1]:
            return a[i]
        
print(lonelyinteger(a))        