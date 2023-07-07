def gridChallenge(grid):
    splitedSortedArray = []
    for arr in grid:
        arrList = list(arr)
        arrList.sort()
        splitedSortedArray.append(arrList)

    for i in range(len(splitedSortedArray[0])):
        prov = []
        for j in range(len(splitedSortedArray)):
            prov.append(splitedSortedArray[j][i])

        sortedProv = sorted(prov)
        joinedSortedProv = ''.join(sortedProv)
        if (joinedSortedProv != ''.join(prov)):
            return 'NO'

    return 'YES'
