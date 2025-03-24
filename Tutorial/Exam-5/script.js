let HomePageShow = JSON.parse(localStorage.getItem("HomePageShow")) || [];

const Uimaker = (HomePageShow) => {
  document.getElementById("UIShow").innerHTML = "";
  HomePageShow.map((ele, i) => {
    let title = document.createElement("h4");
    title.innerHTML = ele.title;
    let content = document.createElement("p");
    content.innerHTML = ele.content;
    let category = document.createElement("p");
    category.innerHTML = ele.category;
    let img = document.createElement("img");
    img.src = ele.img;
    // deleted btn
    let btn = document.createElement("button");
    btn.innerHTML = `Deleted Product `;
    btn.addEventListener("click", () => {
      HomePageShow.splice(i, 1);
      localStorage.setItem("HomePageShow", JSON.stringify(HomePageShow));
      Uimaker(HomePageShow)
    });
    let div = document.createElement("div");
    div.append(img, title, content, category, btn);
    let show = document.createElement("p");
    show.append(div);
    document.getElementById("UIShow").append(show);
  });
};

Uimaker(HomePageShow);
