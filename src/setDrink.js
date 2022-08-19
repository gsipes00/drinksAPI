const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    // disable the image hyperlink
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON.stringify not need since id is already a string
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
