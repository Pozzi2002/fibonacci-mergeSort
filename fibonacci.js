const fibonacci = (n) => {
    let arr = [0, 1]
    for (let i = n; i > 2; i--) {
        let [nextToLast, last] = arr.slice(-2)
        arr.push(nextToLast + last)
    }
    return arr
}
//console.log(fibonacci(8))

const fibonacciRecursive = (n, arr = [0, 1]) => {
    if (n <= 2) return arr;
    let [nextToLast, last] = arr.slice(-2);
    return fibonacciRecursive(n-1, [...arr, nextToLast + last])
  }

//console.log(fibonacciRecursive(8))

