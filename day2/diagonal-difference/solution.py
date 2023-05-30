def diagonalDifference(arr):
    primary = []
    secondary =[]
    size = len(arr)
    for i in range(0,size):
        primary.append(arr[i][i])
        secondary.append(arr[size-i-1][i])
    primary = sum(primary)
    secondary =sum(secondary)
    
    return abs(primary - secondary)