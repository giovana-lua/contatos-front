'use strict'

async function lercontatos()  {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch (url)
    const contatos = await response.json()

    console.log(contatos)
    return contatos
}

async function criarContato (contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options ={
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch (url, options)

    console.log(response.ok)
    return response.ok
}

async function atualizarContato (id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options ={
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch (url, options)

    console.log(response.ok)
    return response.ok
}


async function deleteContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options ={
        method: 'DELETE'
    }

    const response = await fetch (url, options)

    console.log(response.ok)
    return response.ok
}




const novoContato = {
    "nome": "anonimo",
    "celular": "11 9 xxxx-xxxx",
    "foto": "semfoto.jpg",
    "email": "anonimo@gmail.com",
    "endereco": "Av. desconhecida, 000",
    "cidade": "misterio"
    }