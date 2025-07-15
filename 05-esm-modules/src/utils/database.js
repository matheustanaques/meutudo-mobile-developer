const databaseType = {
    type: "type"
}

async function connectToDataBase(dataBaseName) {
    // lógica de conexao
    console.log("conectado ao banco " + dataBaseName)
}

async function desconnectDataBase() {
    // lógica de desconexão
    console.log("desconectado")
}

export {
    connectToDataBase,
    desconnectDataBase,
    databaseType
}