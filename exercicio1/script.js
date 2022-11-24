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
    const newObject = {}
    let text = ''

    for (property in object) {

        text = object[property]
        console.log(text)
        text = text.replace(`${text[0]}`, `${text[0].toUpperCase()}`)

        for (index in text.substring(1)) {

            if (65 <= text.charAt(index) <= 90 || 97 <= text.charAt(index) <= 122) {
                text = text.substring(0, index) + ' ' + text.substring(index + 1)
            } else {
                text = text.replaceAll(`${text[index]}`, ' ')
            }
        }

        console.log(text)
    }
}

turnTextToRunning(objeto)