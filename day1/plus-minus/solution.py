def plusMinus(arr):
    negative =0
    zero = 0
    positive =0
    length = len(arr)
    for value in arr:
        if value < 0:
            negative +=1
        elif value == 0:
            zero += 1
        else:
            positive += 1
    print(f'{positive/length:.6f}', '\n', f'{negative/length:.6f}', '\n', f'{zero/length:.6f}')