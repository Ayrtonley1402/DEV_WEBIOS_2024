var exercicio = ["HTML", 1993, "CSS", 1996, "BootsTrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(exercicio)
console.log(`O texto tem ${exercicio.length} caracteres`)
console.log(exercicio[6])
var mudanca = exercicio.toString()
console.log(mudanca)
var mudanca1 = exercicio.join("/")
console.log(mudanca1)
var mudanca2 = exercicio.unshift("IOS")
console.log(mudanca2)
console.log(exercicio)

var bidimensional = [
    ["HTML", "1993", "CSS", "1996"],
    ["BootsTrap", "2011", "JS", "1995"],
    ["React", "2013", "Java", "1995"]
]
console.log(bidimensional)
console.log(bidimensional.length)
console.log(bidimensional[2][1])
bidimensional[1][2] = "JavaScript"
console.log(bidimensional)
delete bidimensional[2][2]
console.log(bidimensional)
var mudanca3 = bidimensional.push("pipoca")
console.log(bidimensional)

