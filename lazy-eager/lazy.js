function repeater(count){
    return function allTheAs(){
        return "".padStart(count, "A")
    }
}

var A = repeater(10)

console.log(A())
console.log(A())
