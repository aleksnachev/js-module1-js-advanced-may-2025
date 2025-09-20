function validaor (obj){

    const validMethod = ['GET', "POST", "DELETE" ,"CONNECT"]
    const uniPattern = /^[\w.]+$/g
    const validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1" , "HTTP/2.0" ]
    const invalidSymbol = ["<", ">", "\\", "&", "'", '"']

    if (!validMethod.includes(obj.method)){
        throw new Error ("Invalid request header: Invalid Method")
    }

    if (!obj.uri || !obj.uri === "*" || !obj.uri.match(uniPattern)){
        throw new Error("Invalid request header: Invalid URI")
    }

    if (!validVersion.includes(obj.version)){
        throw new Error ("Invalid request header: Invalid Version")
    }

    if (!obj.hasOwnProperty("message")){
        throw new Error ("Invalid request header: Invalid Message")
    }

    for (const el of obj.message) {
        if (invalidSymbol.includes(el)){
            throw new Error ("Invalid request header: Invalid Message")
        }
    }

    return obj

}
validaor