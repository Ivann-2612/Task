function passwordStrong(str) {
    let array= str.split('')
    if(array.length<8) return false
    var n=0
    var u=0
    var l=0
    var s = 0
    for(let i=0; i<array.length; i++){
      if(Number(array[i])==array[i]) ++n
      if(array[i]==array[i].toUpperCase()&&Number(array[i])!=array[i]&&array[i].toLowerCase()!=array[i].toUpperCase()) ++u
      if(array[i]==array[i].toLowerCase()&&Number(array[i])!=array[i]&&array[i].toLowerCase()!=array[i].toUpperCase()) ++l
      if(array[i].toUpperCase()==array[i].toLowerCase()&&Number(array[i])!=array[i]) ++s
    }
    if(n==0) return false
    if(u==0) return false
    if(l==0) return false
    if(s==0) return false
    return true
  }
  function passwordMedium(str){
    let array= str.split('')
    if(array.length>5 && array.length<8){
    var n=0
    var u=0
    var l=0
    var s = 0
    for(let i=0; i<array.length; i++){
     if(Number(array[i])==array[i]) ++n
      if(array[i]==array[i].toUpperCase()&&Number(array[i])!=array[i]&&array[i].toLowerCase()!=array[i].toUpperCase()) ++u
      if(array[i]==array[i].toLowerCase()&&Number(array[i])!=array[i]&&array[i].toLowerCase()!=array[i].toUpperCase()) ++l
      if(array[i].toUpperCase()==array[i].toLowerCase()&&Number(array[i])!=array[i]) ++s
    }
    if(u==0) return false
    if(l==0) return false
    if(s==0) return false
    if(n==0) return false
    return true
    }
    if(array.length>7){
        var u=0
        var l=0
        var s = 0
        for(let i=0; i<array.length; i++){
          if(array[i]==array[i].toUpperCase()&&Number(array[i])!=array[i]&&array[i].toLowerCase()!=array[i].toUpperCase()) ++u
          if(array[i]==array[i].toLowerCase()&&Number(array[i])!=array[i]&&array[i].toLowerCase()!=array[i].toUpperCase()) ++l
          if(array[i].toUpperCase()==array[i].toLowerCase()&&Number(array[i])!=array[i]) ++s
        }
        if(u==0) return false
        if(l==0) return false
        if(s==0) return false
        return true
    }
    return false
  }
  function passwordStrenght(str){
     if(passwordStrong(str)) return "password is strong"
     else if(passwordMedium(str))  return "password is medium"
     else return "password is weak"
  }
  console.log(passwordStrenght("Abc/d1234"))
  console.log(passwordStrenght('Aaaaa1234'))
  console.log(passwordStrenght('Aaa/aaaaa'))
  console.log(passwordStrenght('aaaa/'))
