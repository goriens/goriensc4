async function apiCall(url) {


    //add api call logic here
    try {
        let res = await fetch(url);
        let data = await res.json();

        return data;
    } catch (error) {
        console.log("error:", error);
    }
}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(element => {
        let div = document.createElement("div");

        let h2 = document.createElement("h2")
        h2.innerText = element.title;

        let p = document.createElement("p")
        p.innerText = element.description;

        let image = document.createElement("img");
        image.src = element.urlToImage;

        let p2 = document.createElement("p");
        p2.innerText = element.content;
        p2.setAttribute("id", "content");

        div.append(h2, p, image, p2);
        div.onclick = () => {
            localStorage.setItem("article", JSON.stringify(element));
            window.location.href = "news.html";
            document.querySelector("#content").style.display = "block";
        }
        main.append(div);
    });


}

export { apiCall, appendArticles }