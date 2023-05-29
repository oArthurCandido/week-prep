arr = [8,0,1,2,3,4,5,6,7]

def finTheMedian(arr):
    arr.sort()
    elem = int((len(arr) -1) / 2) 
    print(arr[elem])

finTheMedian(arr)    