class Requisicao{

    static async pegarDados(){

        const url = "https://kenzie-news-api.herokuapp.com/api/news"
        
        fetch(url)
        .then((response) => { 
           return response.json()
        })
        .then((response) =>{

            Template.secaoPrincipal(response[0])
            
            for(let i = 1; i < response.length; i++){
                const noticia = response[i]
                CardsNoticias.secaoCardsNoticias(noticia)
            }
        })
    }
}
Requisicao.pegarDados()


class Template{

    static secaoPrincipal(noticia){
        const main = document.querySelector("main") 

        const section = document.createElement("section") 
        section.classList.add("SectionNoticiaPrincipal")
        section.dataset.id = noticia.id

        const infoNoticias = Template.divSecaoPrincipal(noticia)
        const imgNoticias = Template.imgNoticia(noticia)
        
        section.append(infoNoticias,imgNoticias)
        main.append(section)
    }

    static divSecaoPrincipal(noticia){

        const divInfo = document.createElement("div")
        divInfo.classList.add("divInfoPrincipal")

        divInfo.style.backgroundImage = `url(${noticia.imagem}` 
        divInfo.style.backgroundRepeat = "no-repeat"
        divInfo.style.backgroundSize = "cover"

        const infoNoticia = Template.infoNoticias(noticia)
        divInfo.append(infoNoticia)
        return divInfo
    }

    static infoNoticias(noticia){
        const divInfo = document.createElement("div")

        const h3Info = document.createElement("button")
        const h1Info = document.createElement("h1")
        const pInfo = document.createElement("p")
        const spanInfo = document.createElement("span")
    
        h3Info.classList.add("tagH3")
        h1Info.classList.add("h1TituloNoticia")
        pInfo.classList.add("pInfoNoticia")
        spanInfo.classList.add("fonte")
    
        h3Info.innerText = noticia.categoria
        h1Info.innerText = noticia.titulo
        pInfo.innerText = noticia.resumo
        spanInfo.innerText = `Fonte: ${noticia.fonte}`
    
        divInfo.append(h3Info,h1Info,pInfo,spanInfo)
        return divInfo
    }

    static imgNoticia(noticia){
        const divImg = document.createElement("div")
        const img = document.createElement("img")
        
        img.src = noticia.imagem
    
        img.classList.add("imgNoticia")
        divImg.append(img)
        return divImg
    }
}






class CardsNoticias{

    static secaoCardsNoticias(noticia){

        const main = document.querySelector("main") 

        const section = document.querySelector(".noticiasSecundarias") 

        const cardsNoticias = CardsNoticias.noticiasSecundarias(noticia)

        section.append(cardsNoticias)
        main.append(section)
    }

    static noticiasSecundarias(noticia){

        const ul = document.querySelector(".listaNoticias")
        
        const li = document.createElement("li")
    
        const imgCard = CardsNoticias.imgCards(noticia)
        const infoCard = CardsNoticias.infoCards(noticia)
    
        li.append(imgCard,infoCard)
    
        ul.append(li)
    
        return ul
    }

    static imgCards(noticia){

        const divImg = document.createElement("div")
        const img = document.createElement("img")
    
        img.src = noticia.imagem
    
        img.classList.add("imgLi")
    
        divImg.append(img)
        return divImg
    }

    static infoCards(noticia){

        const divInfo = document.createElement("div")
        const h4Info = document.createElement("button")
        const h3Info = document.createElement("h1")
        const pInfo = document.createElement("p")
        const spanInfo = document.createElement("span")
        
        h4Info.innerText = noticia.categoria
        h3Info.innerText = noticia.titulo
        pInfo.innerText = noticia.resumo
        spanInfo.innerText = `Fonte: ${noticia.fonte}`
        
        divInfo.classList.add("divCardsInfo")
        h4Info.classList.add("tagH4")
        h3Info.classList.add("h3Noticia")
        pInfo.classList.add("pInfo")
        spanInfo.classList.add("fonteLi")
        
        divInfo.append(h4Info,h3Info,pInfo,spanInfo)
        return divInfo
    }
}