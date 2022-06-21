function createNewContact() {
  newDescription = document.querySelector("#description").value;
  newLinkedin = document.querySelector("#linkedin").value;
  newName = document.querySelector("#name").value;
  newTwitter = document.querySelector("#twitter").value;
  console.log(newName);
  return {
    description: newDescription,
    linkedin: newLinkedin,
    name: newName,
    twitter: newTwitter,
  };
}
async function postRequest() {
  const response = await fetch("http://localhost:3000/contacts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(createNewContact()),
  });
}

const newContactbtn = document.querySelector("#submitContact");
newContactbtn.onclick = postRequest;

function createNewCategory() {
  newCategoryName = document.querySelector("#CategoryName").value;
  newTitle = document.querySelector("#title").value;
  newContent = document.querySelector("#content").value;
  newURL = document.querySelector("#url").value;
  newImg = document.querySelector("#img").value;
  return {
    catagory_name: newCategoryName,
    title: newTitle,
    content: newContent,
    url: newURL,
    img: newImg,
  };
}
async function postRequestCategory() {
  const response = await fetch("http://localhost:3000/category", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(createNewCategory()),
  });
}

const newCategorybtn = document.querySelector("#submitCategory");
newCategorybtn.onclick = postRequestCategory;
