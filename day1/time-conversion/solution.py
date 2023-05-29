s = '12:05:45AM';

def timeConversion(s):
    splited = list(s)
    hora = int(''.join(splited[0:2]))
    ampm = splited[-2]

    if(ampm == 'A'):
        if(hora == 12):
            hora = 0
        if(hora < 10):
            hora = f'0{hora}'
    if(ampm == 'P'):
        if hora < 12:
            hora = hora+12
    result = ''.join(splited[2:-2])        
    print (f'{hora}{result}')
    return f'{hora}{result}'
timeConversion(s)   