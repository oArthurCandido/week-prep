arr=[1,2,3,4,5]

def miniMaxSum(arr):
    arr.sort()
    min = slice(4)
    max = slice(-4, len(arr))
    # print(arr[min], arr[max])
    print(sum(arr[min]), sum(arr[max]))



miniMaxSum(arr)
