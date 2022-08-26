const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (obj1) => {
    const objMaiusculo = {...obj1, nome: objeto.nome.toUpperCase(), profissao: objeto.profissao.toUpperCase(), username: objeto.username.toUpperCase(), senha: objeto.senha.toUpperCase()}
    return objMaiusculo
}

const textoCorrido = (obj2) => {
    const objSemEspacos = {...obj2, juntaTudo: (objeto.nome + objeto.profissao + objeto.username + objeto.senha).replaceAll(" ", "").replaceAll("_", "")}
    return objSemEspacos.juntaTudo
}

const funcaoCall = (obj3, callback) => {
    const result = callback(obj3)
    console.log(result)
}

funcaoCall(objeto, caixaAlta);
funcaoCall(objeto, textoCorrido);