function validParentheses(parens) {
    let split1 = parens.split('')
    let split = split1.filter(el => el == "(" || el == ")")
    let opened = split.filter(el => el == "(")
    let closed = split.filter(el => el == ")")
    if (opened.length != closed.length) return false
    for (let i = 0; i < opened.length; i++) {
        if (split[0] == "(" && split[split.length - 1] == ")") {
            split.shift() && split.pop()
        }
        else {
            return false
        }
        return true
    }
}
console.log(validParentheses("Lorem ((ipsum)(dolor)sit)"))
console.log(validParentheses("(Lorem (ipsum dolor)sit"))
