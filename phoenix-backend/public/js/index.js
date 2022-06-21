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
      twitter: newTwitter
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
  