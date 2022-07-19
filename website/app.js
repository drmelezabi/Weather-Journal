/*Global variables*/
let { country, ciy, postcode, code } = "";
let { list, btns } = [];
let userDate = {};
let start;
/*Base URLs*/
let [weatherBaseURL, unsplashBaseURL] = [
  "https://api.openweathermap.org/data/2.5/weather",
  "https://api.unsplash.com/search/photos",
];
/*KEYs*/
let [weatherKEY, unsplashKEY] = [
  "99c7bbd234b0db3267c022b9790d5e6e",
  "RQzBMm4cmLme2b-qRTbMWSaj9Zje3Zj0FJrg2AtwPbs",
];

//local server
const server = "http://localhost:4000";

// get Date & format it
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const event = new Date().toLocaleDateString(undefined, options);

/*---------------------------------------------------------------------*/
/* Get Latitude & Longitud when loading website => need user permission*/
/*---------------------------------------------------------------------*/
window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      weatherOnLoad(position.coords.latitude, position.coords.longitude);
    });
  } else {
    console.log("geolocation is not support");
  }
};

// Get weather data from zip & code
async function locationWeather(postal, code, feelings) {
  async function fetchweatherUSER() {
    try {
      let data = await fetch(
        `${weatherBaseURL}?zip=${postal},${code}&appid=${weatherKEY}&units=metric`
      );
      // prepare response deta
      let res = await data.json();
      try {
        //create location weather object
        userDate = {
          feeling: feelings,
          temp: Math.round(res.main.temp),
          temp_min: Math.round(res.main.temp_min),
          temp_Max: Math.round(res.main.temp_max),
          skyType: res.weather[0].description,
          humidity: Math.round(res.main.humidity),
          wind: Math.round(res.wind.speed),
          city: res.name,
        };
        // show weather section & elements
        document
          .querySelector("#we-inf")
          .classList.replace("hidden", "visible");
        document.querySelector("#navi").classList.replace("hidden", "visible");
        //Call imgs GET function
        getimg(res.name);
        //Call POST function and pass (url & user_Date)
        postData(`${server}/add`, userDate);
      } catch {
        alerto(res.message);
      }
    } catch (reason) {
      alerto(reason);
    }
  }
  fetchweatherUSER();
}

/*------------------------------------------------------------------*/
/* --------------Get City imges list and create Nav bar-------------*/
/*------------------------------------------------------------------*/
async function getimg(cty) {
  // console.log(bgURL);
  async function fetchImg() {
    try {
      //get imgs list of Objects Json
      let data = await fetch(
        `${unsplashBaseURL}?page=1&per_page=5&query=${cty}&orienation=landscape&client_id=${unsplashKEY}`
      );
      let res = await data.json();
      let imgs = res.results;
      //rest list if there are an old list
      let bglist = [];
      // push new entries to the list
      for (img of imgs) {
        let imgData = {
          larg: img.urls.full,
          regular: img.urls.regular,
          width: img.width,
          height: img.height,
          desc: img.description,
          alt_desc: img.alt_description,
          color: img.color,
          date: event,
        };
        bglist.push(imgData);
      }
      // set imgs list Globally to be able to loop on it later
      list = bglist;
      /*------------------------------------------------------------------------------*/
      /* ------create nav bar based on list.legnth (some towns has $lt 5 imges)------ */
      /*------------------------------------------------------------------------------*/
      //Creater fragment element Document to reduce rebuild
      const element = document.getElementById("navi");
      const fragment = document.createDocumentFragment();
      // nest new divs and
      list.forEach(async () => {
        //create div for every img
        const div = document.createElement("div");
        div.className = "nav-btn";
        //nest every div to fragment
        fragment.appendChild(div);
      });
      //replace old divs with new fragment
      await element.replaceChildren(fragment);
      btns = document.querySelectorAll(".nav-btn");
      /*------------------------------------------------------------------------------*/
      // make Created Navigation response to clicks
      click();

      // start looping in imgs list
      sliderNav(0);
    } catch (reason) {
      alerto(reason);
    }
  }
  fetchImg();
}

/*-----------------------------------------------------------------------*/
/*--- Get weather data automatic on load Based on longitude & Latitude---*/
/*-----------------------------------------------------------------------*/
async function weatherOnLoad(lat, lon) {
  async function fetchweatherAUTO() {
    try {
      let data = await fetch(
        `${weatherBaseURL}?lat=${lat}&lon=${lon}&appid=${weatherKEY}&units=metric`
      );
      // prepare response deta
      let res = await data.json();
      //create location weather object
      try {
        userDate = {
          feeling: "Welcome",
          temp: Math.round(res.main.temp),
          temp_min: Math.round(res.main.temp_min),
          temp_Max: Math.round(res.main.temp_max),
          skyType: res.weather[0].description,
          humidity: Math.round(res.main.humidity),
          wind: Math.round(res.wind.speed),
          city: res.name,
        };
        // show weather section & elements
        document
          .querySelector("#we-inf")
          .classList.replace("hidden", "visible");
        document.querySelector("#navi").classList.replace("hidden", "visible");
        //Call imgs GET function
        getimg(res.name);
        //call POST function
        postData(`${server}/add`, userDate);
      } catch {
        alerto(res.message);
      }
    } catch (reason) {
      alerto(reason);
    }
  }
  fetchweatherAUTO();
}

/*------------------------------------------------------------------*/
/* -----------------POST API to store Data on server----------------*/
/*------------------------------------------------------------------*/
const postData = async (url = "", object = {}) => {
  //post request
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  try {
    const freshData = await res.json();
    //Call Get Function to update UI with new Data
    getToUI();
  } catch (error) {
    alerto(error);
  }
};

/*------------------------------------------------------------------*/
/* ---------------Update UI Function using GET Request--------------*/
/*------------------------------------------------------------------*/
const getToUI = async () => {
  const res = await fetch(`${server}/all`);
  try {
    const returnedData = await res.json();
    //Update page elements with server data
    // document.querySelector("#date").innerHTML = event;
    document.querySelector("#manh").innerHTML = returnedData.temp;
    document.querySelector("#minh").innerHTML = returnedData.temp_min;
    document.querySelector("#maxh").innerHTML = returnedData.temp_Max;
    document.querySelector("#sky").innerHTML = returnedData.skyType;
    document.querySelector("#hm").innerHTML = returnedData.humidity;
    document.querySelector("#wnd").innerHTML = returnedData.wind;
    document.querySelector("#cit").innerHTML = returnedData.city;
    document.getElementById("feeln").innerHTML =
      "꧁" + `${returnedData.feeling}`.toUpperCase() + "꧂";
  } catch (error) {
    alerto(error);
  }
};

/*----------------------------------------------------------------------------*/
/*-Get Function to Check "Country_name_validation" and get its "Alpha‑2" code-*/
/*----------------------------------------------------------------------------*/
const countryCheck = async (postal, country, feelings) => {
  // reset any previous country code
  code = "";
  // fetch Country_name_validation API
  const res = await fetch(country);
  try {
    //prepare response
    const returnedData = await res.json();
    code = await returnedData.code;
    //check response
    if (code != "none") {
      // Get town weather based on (Postal code and Country Code) and pass feeling as a param
      locationWeather(postal, code, feelings);
      // stop gallery looping
      clearTimeout(start);
    } else {
      alerto(`Country name in not correct`);
    }
  } catch (error) {
    alerto(error);
  }
};

/*-------------------------------------------------------------*/
/* -----------------gallery slide show looping-----------------*/
/*-------------------------------------------------------------*/
const sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slide = manual == list.length ? 0 : manual;

  btns[slide].classList.add("active");
  //update Background img and description
  document.querySelector(".img-slide").src = list[slide].regular;
  document.querySelector("#des").innerHTML = list[slide].alt_desc;
  document.querySelector("#alt-des").innerHTML = list[slide].desc;
  //call text color detection
  textColor(list[slide].color);
  start = setTimeout(() => sliderNav(++slide), 10000);
};
/*-------------------------------------------------------------*/
/* -------Navigation click on gallery slide navigation---------*/
/*-------------------------------------------------------------*/
let click = async () => {
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      // stop previous looping
      clearTimeout(start);
      // start new slideshow looping start from selected one
      sliderNav(i);
    });
  });
};

/*--------------------------------------------------------------*/
/* Check if inputs is not empty after click on (Generate) Button*/
/*--------------------------------------------------------------*/
let generat = async () => {
  // catch (Generate) Button and make Event Listener
  document.getElementById("press").addEventListener("click", () => {
    // catch inputs value
    let postalCode = document.getElementById("pst").value;
    let country = document.getElementById("cn").value;
    let feelings = document.getElementById("fs").value;

    // if user choose to enter country name
    if (postalCode != "" && (country != "") & (feelings != "")) {
      //prepare country input value to be ready for
      //make all charachters in low Case for compare on DB
      c = `${country}`.toLowerCase();
      // remove spaces for API link
      let mes = `${country}`.split(" ").join("");
      // Call Country_Validation_Check Function
      countryCheck(postalCode, `${server}/countries/${mes}`, feelings);

      // if user choose to not entre Country name "USA" will be default country
    } else if ((postalCode != "") & (feelings != "")) {
      // stop gallery looping
      clearTimeout(start);
      // Get town weather based on (Postal code and Country Code) and pass feeling as a param
      locationWeather(postalCode, "us", feelings);

      // if user forgot to entre Postal Code $ Feelings
    } else if (postalCode === "" && feelings === "") {
      // if country is entered
      if (country != "") {
        alerto("Please enter zip code & your feelings");
        // if all inputs are empty
      } else {
        alerto("Please atleast enter zip code & your feelings");
      }

      // if country is Postal Code is empty but feelings is filled
    } else if (feelings != "") {
      alerto("Please atleast enter zip code");

      // if feeling field is not entered
    } else {
      alerto("Please enter feelings");
    }
  });
};
generat();

/*-------------------------------------------------------------*/
/*-----------------* Show "Alert messages" --------------------*/
/*-------------------------------------------------------------*/
const alerto = async (message) => {
  // Catch alert message alement and set message to it
  document.getElementById("alert").innerHTML = message;
  //show message (with fade effect)
  document.querySelector("#alert").classList.replace("hidden", "visible");
  setTimeout(() => {
    //hide message element after 5 seconds
    document.querySelector("#alert").classList.replace("visible", "hidden");
  }, 5000);
};

/*--------------------------------------------------------------*/
/*---------*Set Colors based on background brightness"----------*/
/*--------------------------------------------------------------*/
const textColor = (hexaCode) => {
  //algorithm convert hexaCode to rgb (function)
  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  const color = hexToRgb(hexaCode);

  //algorithm setect color brightness
  const brightness = Math.round(
    (parseInt(color[0]) * 299 +
      parseInt(color[1]) * 587 +
      parseInt(color[2]) * 114) /
      1000
  );

  let root = document.documentElement;

  let blackWhite = brightness > 125 ? "black" : "white";
  let backcolor =
    brightness > 125 ? "rgba(91, 91, 91, 0.45)" : "rgba(120, 120, 120, 0.362)";
  //set css variables
  root.style.setProperty("--color", blackWhite);
  root.style.setProperty("--backcolor", backcolor);
};

//hover over country name <input> INFO
const overctry = () => {
  document.getElementById("cn").addEventListener("mouseover", () => {
    alerto("it's USA if you let it empty");
  });
};
overctry();

//active country name <input> INFO
const fucasctry = () => {
  document.getElementById("cn").addEventListener("focus", () => {
    alerto("Type full name like => France, Jaban, China ..etc");
  });
};
fucasctry();
