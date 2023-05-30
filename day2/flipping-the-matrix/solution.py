matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
];
# matrix = [
#   [1, 2],
#   [3, 4]
# ];
# matrix = [
#   [1, 2, 3, 4],
#   [5, 6, 7, 8],
#   [9, 10, 11, 12],
#   [13, 14, 15, 16]
# ];

def flipping_the_matrix(matrix):
    last = int(len(matrix) -1)
    size = int(len(matrix)) // 2
    maximun = 0

    for i in range(0,size ):
        
        for j in range(0,size):
           
            maximun += max(matrix[i][j], matrix[i][last - j], matrix[last - i][j], matrix[last - i][last - j])
            
    
    
    return maximun

print(flipping_the_matrix(matrix))        

