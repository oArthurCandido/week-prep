def countingSort(arr):
    result =[]
    for i in range(0,100):
        result.append(0)
    
    for elem in arr:
        result[elem] += 1
        
    return result  