

const Slider = () => {

    const slideRef = document.createElement("div");
    const loadingProgress = 0;

    const handleClickNext = () =>{
        let items = slideRef.querySelectorAll('.item');
        slideRef.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = slideRef.querySelectorAll(".item");
        slideRef.prepend(items[items.length - 1]);
    }

    const data = [
        {
            id: 1,
            imgUrl: "https://r4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-08869d3810a06c28a09cf1be487204ea.jpg",
            desc: "Styles come and go.Good design is a language, not a style.",
            name: "EXPLORE ART",
        },
        {
            id: 2,
            imgUrl: "https://r4.wallpaperflare.com/wallpaper/533/163/784/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-d6caac3492787d76e8e36b4298facda4.jpg",
            desc: "Styles come and go.Good design is a language, not a style.",
            name: "EXPLORE ART",
        },
        {
            id: 3,
            imgUrl: "https://r4.wallpaperflare.com/wallpaper/217/115/783/artwork-digital-art-neon-astronaut-wallpaper-442c6428ed0952b9146344b91941825d.jpg",
            desc: "Styles come and go.Good design is a language, not a style.",
            name: "EXPLORE ART",
        },
        {
            id: 4,
            imgUrl: "https://r4.wallpaperflare.com/wallpaper/444/19/627/sunrise-annapurna-massif-himalayas-minimal-wallpaper-28d62d6860d03c28a04c618e3892b4ba.jpg",
            desc: "Styles come and go.Good design is a language, not a style.",
            name: "EXPLORE ART",
        },
        {
            id: 5,
            imgUrl: "https://r4.wallpaperflare.com/wallpaper/376/330/356/digital-art-artwork-illustration-concept-art-environment-hd-wallpaper-88560d38f0807c28702c41be9862e47a.jpg",
            desc: "Styles come and go.Good design is a language, not a style.",
            name: "EXPLORE ART",
        },
        {
            id: 6,
            imgUrl: "https://r4.wallpaperflare.com/wallpaper/878/672/968/animals-artwork-clear-sky-deer-wallpaper-4846dd784040fc68602cc14e8832e4aa.jpg",
            desc: "Styles come and go.Good design is a language, not a style.",
            name: "EXPLORE ART",
        },
    ];
    const container = document.createElement("div");
    container.classList.add('container');

    const loadbar = document.createElement("div");
    loadbar.classList.add("loadbar");
    loadbar.style.width = `${loadingProgress}%`

    // Append Loadbar to container 
    container.appendChild(loadbar);
    
    // Append slide div to container
    container.appendChild(slideRef);

    data.forEach((item)=> {
        const slideItem = document.createElement("div");
        slideItem.classList.add("item");
        slideItem.style.backgroundImage = `url(${item.imgUrl})`;

        const content = document.createElement("div");
        content.classList.add("content");

        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = item.name;

        const des = document.createElement("div");
        des.classList.add("des");
        des.textContent = item.desc;

        const button = document.createElement("button");
        button.textContent = "See more";

        content.appendChild(name);
        content.appendChild(des);
        content.appendChild(button);
        slideItem.appendChild(content);
        slideRef.appendChild(slideItem);

        // Create the buttons div

        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        // Create the prev button

        const prevButton = document.createElement("button");
        prevButton.id = "prev";
        prevButton.addEventListener("click", handleClickPrev);
        
        const prevIcon = document.createElement("i");
        prevIcon.className = "fa fa-angle-left";
        prevButton.appendChild(prevIcon);

        // Create the next button

        const nextButton = document.createElement("button");
        nextButton.id = "next";
        nextButton.addEventListener("click", handleClickNext);

        const nextIcon = document.createElement("i");
        nextIcon.className = "fa fa-angle-right";
        nextButton.appendChild(nextIcon);

        // Append buttons to container 
        buttons.appendChild(prevButton)
        buttons.appendChild(nextButton)
        container.appendChild(buttons);



    });

   
    document.getElementById("root").appendChild(container);
};


Slider();