const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function changeToUpperCase(object) {
    const newObject = {}

    for (property in object) {
        newObject[property] = object[property].toUpperCase()
    }

    return newObject
}

function turnTextToRunning(object) {
    return `Olá ${object.nome} ${object.profissao}, ${object.username}, ${object.senha}`
}


const print = (object, callback) => console.log(callback(object))

print(objeto, changeToUpperCase)
print(objeto, turnTextToRunning)