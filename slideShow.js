'use strict';
const images = [
    {'id':'1','url':'https://cdn.ligadosgames.com/imagens/jogo-2-god-of-war-cke.jpg?class=article'},
    {'id':'2','url':'https://cdn.ligadosgames.com/imagens/hnv2a2a-1.jpg?class=article'},
    {'id':'3','url':'https://cdn.ligadosgames.com/imagens/jogo-7-it-take-two-cke.jpg?class=article'},
    {'id':'4','url':'https://cdn.ligadosgames.com/imagens/bxz9mzt-1.jpg?class=article'},
    {'id':'5','url':'https://cdn.ligadosgames.com/imagens/ecoobjv-1.jpg?class=article'},
    {'id':'6','url':'https://cdn.ligadosgames.com/imagens/jogo-37-ghostwire-cke.jpg?class=article'},
]

const containerItems = document.querySelector('#container-items')
const loadImages = (images,container) =>{
    images.forEach (images =>{
        container.innerHTML += `
            <div class='item'>
                <img src ='${images.url}'
            </div>
        `
    })
}



loadImages(images,containerItems)

let items = document.querySelectorAll('.item')

const previous =()=>{
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = ()=>{
    const lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem,items[0])
    items = document.querySelectorAll('.item')
}
document.querySelector('#previous').addEventListener('click',previous)
document.querySelector('#next').addEventListener('click',next)
