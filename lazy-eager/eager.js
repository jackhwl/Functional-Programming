function repeater(count){
    var str = "".padStart(count, "A")
    return function allTheAs(){
        return str
    }
}

var A = repeater(10)

console.log(A())
console.log(A())
