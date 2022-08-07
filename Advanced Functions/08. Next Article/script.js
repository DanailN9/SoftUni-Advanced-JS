function getArticleGenerator(articles) {
    const elem = document.getElementById('content'); 
    let arr = articles.slice(0, articles.length)
    
    return function () {
        let line = arr.shift()

        return elem.textContent = line
    }

}
