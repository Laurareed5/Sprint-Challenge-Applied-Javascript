// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardParent = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const articleInfo = Object.values(response.data.articles);
    console.log(articleInfo);
    articleInfo.map(item1 => {
      item1.map(item2 => {
        cardParent.appendChild(createArticleCard(item2));
      });
    });
  });

function createArticleCard(articleObj) {
  cardClass = document.createElement("div");
  cardClass.classList.add("card");

  headlineClass = document.createElement("div");
  headlineClass.classList.add("headline");

  authorClass = document.createElement("div");
  authorClass.classList.add("author");

  imgClass = document.createElement("div");
  imgClass.classList.add("img-container");

  imgSrc = document.createElement("img");

  authorName = document.createElement("span");

  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);
  authorClass.appendChild(imgClass);
  imgClass.appendChild(imgSrc);
  authorClass.appendChild(authorName);

  headlineClass.textContent = articleObj.headline;
  imgSrc.textContent = articleObj.authorPhoto;
  authorName.textContent = articleObj.authorName;

  return cardClass;
}
