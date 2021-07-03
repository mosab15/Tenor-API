const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const imageContainer = document.getElementById('imageContainer');

let SearchWord;
searchInput.addEventListener('keyup', (e) => (SearchWord = e.target.value));

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
      
    const response = JSON.parse(xhr.responseText);

    imageContainer.innerHTML=""
    response.results.map((element) => {
      const media = element.media;
      // console.log(media)
      media.map((element) => {
        // console.log(element.gif.url);
        const img = document.createElement("img")
        img.src=element.gif.url
        imageContainer.appendChild(img)        
      });

    });
  };
  xhr.open(
    'GET',
    `https://api.tenor.com/v1/search?q=${SearchWord}&key=DS8DYTGB2NYJ&limit=50`
  );
  xhr.send();
}
window.onload = function () {
  searchButton.onclick = function () {
    getData();
    
  };
};
