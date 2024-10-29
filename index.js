let movies = [
    {
      name: "3 Idiots",
      des:
        "While attending one of India's premier colleges, three miserable engineering students and best friends struggle to beat the school's draconian system.The story follows the friendship of three students at an Indian engineering college and is a satire about the social pressures under the Indian education system.",
      image: "3idiots2.jpg"
    },
    {
      name: "Intime",
      des:
        "In a future where time is money and the wealthy can live forever, Will Salas (Justin Timberlake) is a poor man who rarely has more than a day's worth of life on his time clock. When he saves Henry Hamilton (Matt Bomer) from time thieves, Will receives the gift of a century.",
      image: "intime.jpg"
    },
    {
      name: "Kabhi Khusi Kabhi gum",
      des:
        " The story of an Indian family, which faces troubles and misunderstandings over their adopted son's marriage to a girl belonging to a lower socio-economic group than them.",
      image: "kkkg.jpg"
    },
    {
      name: "Shadi mai zarur aana",
      des:
        "Satyendra Mishra IAS and Aarti Shukla and relates their journey from how they are brought together by a marriage proposal and fall in love with each other but on the night of their marriage, destiny, and individual decisions, takes the two of them in two different directions.",
      image: "shadimaizarurana.jpg"
    },
    {
      name: "Jab We Met",
      des:
        "Aditya Kashyap, heir to a wealthy but broken family, is depressed and suicidal as he walks out of an important company meeting. He wanders aimlessly and boards a random train where he meets another passenger, Geet Dhillon, a jovial and talkative young girl.",
      image: "jabwemet1.jpg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  