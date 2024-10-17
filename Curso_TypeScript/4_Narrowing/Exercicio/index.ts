function usuarioRewiew(nota: number | boolean) {

    if(nota === 1) {
        console.log("Não gostei muito")
    } else if(nota === 2) {
        console.log("Poderia ser Melhor")
    } else if(nota === 3) {
        console.log("Mediano")
    } else if(nota === 4) {
        console.log("Muito bom")
    } else if(nota === 5) {
        console.log("Perfeito")
    } else {
        console.log("Nota não informada")
    }

}
