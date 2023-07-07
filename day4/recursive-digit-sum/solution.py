def superDigit(n, k=1):
    if (len(n) == 1):
        return n
    return superDigit(str(sum(list(map(int, n))) * k))
