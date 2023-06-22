def caesarCipher(s, k):
    alphabet =list('abcdefghijklmnopqrstuvwxyz')
    rotated = alphabet[k%26: 26] + alphabet[0:k%26]
    result = []
    lista = list(s)
    for item in lista:
        if item.lower() in alphabet:
            if item.isupper():
              result.append(rotated[alphabet.index(item.lower())].upper())
            else:
              result.append(rotated[alphabet.index(item)])
        else:
           result.append(item)
    result = ''.join(result)      
    return result  


print(caesarCipher('middle-Outz', 2)) #'okffng-Qwvb' expected
print(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5))  #'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj' expected