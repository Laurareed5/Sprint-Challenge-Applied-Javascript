// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const headerClass = document.createElement("div");
  headerClass.classList.add("header");

  const dateClass = document.createElement("span");
  dateClass.classList.add("date");

  const titleClass = document.createElement("h1");

  const tempClass = document.createElement("span");
  tempClass.classList.add("temp");

  headerClass.appendChild(dateClass);
  headerClass.appendChild(dateClass);
  headerClass.appendChild(tempClass);

  dateClass.textContent = "March 28, 2019";
  titleClass.textContent = "Lambda Times";
  tempClass.textContent = "98°";

  return headerClass;
}

const headerTop = document.querySelector(".header-container");

headerTop.appendChild(Header());
