function fib(n, memo = []){
    if(memo[n]!== undefined) return memo[n]
    if(n<=2)return 1;
    let res = fib(n-1, memo) + fib(n-2, memo)
    memo[n] =res
    return res
}

function fibTab(n){
    if(n<=2)return 1;
    let fibNums = [0,1,1]
    for (let i =3; i<=n; i++)
    {
        fibNums[i]= fibNums[i-1] + fibNums[i-2]
    }

    return fibNums[n]

}

console.log(fib(5))

console.log(fib(6))
console.log(fibTab(6))

