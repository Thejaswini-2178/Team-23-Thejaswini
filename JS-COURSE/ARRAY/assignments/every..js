
        // <!-- "How can you check if all elements in the array `[5, 10, 15, 20]` are divisible by 5?"
        // "How can you determine if every string in the array `['apple', 'banana', 'cherry']` contains the letter 'a'?"
        // "How can you verify that all numbers in `[3, 6, 9]` are less than 10 -->
            var numbers=[5,10,15,20]
            var check=numbers.every((n) =>{
                return n%5==0;
            })
            console.log(check)


            var fruits=['apple', 'banana', 'cherry']
            var check1= fruits.every((str) =>{
                return str.includes('a')
                })
            console.log(check1)

            
            var list=[3, 6, 9]
            var element=list.every((num) =>{
                return num<10
            })
            console.log(element)
