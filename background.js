const generateSTYLES = () => {
  // Define fixed pastel colors
  const backgroundColor = '#2f32bf'; // Light pink pastel
  const cloudColor = '#B3E5FC'; // Light blue pastel

  return `<style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);

    body {
      background: ${backgroundColor} !important;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      height: 100vh;
      overflow: hidden;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      text-align: center;
      display: block;
      width: 80%;
      margin: auto;
    }

    .error-code {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }

    .message {
      font-size: 4em;
      line-height: 1.2;
      padding: 20px 0;
    }

    .sub-message {
      font-size: 20px;
    }

    .quote {
      font-size: 70px;
      margin: 20px 0;
      line-height: 1.2em;
    }

    hr {
      border: none;
      border-top: 5px solid #fff;
      margin: 20px auto;
      width: 420px;
      height: 10px;
      background: ${backgroundColor};
      position: relative;
      z-index: -10;
    }

    .cloud {
      width: 350px;
      height: 120px;
      background: ${cloudColor};
      border-radius: 100px;
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }

    .cloud:after, .cloud:before {
      content: "";
      position: absolute;
      background: ${cloudColor};
      z-index: -1;
    }

    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
      border-radius: 100px;
    }

    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
      border-radius: 200px;
    }

    .cloud.x1 { top: -50px; left: 100px; transform: scale(0.3); opacity: 0.9; animation: moveclouds 15s linear infinite; }
    .cloud.x1_5 { top: -80px; left: 250px; transform: scale(0.3); animation: moveclouds 17s linear infinite; }
    .cloud.x2 { left: 250px; top: 30px; transform: scale(0.6); opacity: 0.6; animation: moveclouds 25s linear infinite; }
    .cloud.x3 { left: 250px; bottom: -70px; transform: scale(0.6); opacity: 0.8; animation: moveclouds 25s linear infinite; }
    .cloud.x4 { left: 470px; bottom: 20px; transform: scale(0.75); opacity: 0.75; animation: moveclouds 18s linear infinite; }
    .cloud.x5 { left: 200px; top: 300px; transform: scale(0.5); opacity: 0.8; animation: moveclouds 20s linear infinite; }

    .author { font-size: 0.5em; }

    @keyframes moveclouds {
      0% { margin-left: 1000px; }
      100% { margin-left: -1000px; }
    }
  </style>`;
};

const generateRandomQuote = async () => {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];
    return `${quote.text} <span class="author"></span>`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return 'Stay inspired!';
  }
};

const generateHTML = async (pageName) => {
  const inspiringThought = await generateRandomQuote();

  return `
      <div class="overlay">
        <div id="clouds">
          <div class="cloud x1"></div>
          <div class="cloud x1_5"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
        </div>
        <div class="container">
          <div class="error-code">Blocked</div> 
          <hr>
          <div class="message">${inspiringThought}</div>  
          <hr> 
          <div class="sub-message">Blocked: ${pageName}, Extension By Neeraj Patil</div> 
        </div>
      </div>`;
};

const runExtension = async () => {
  const url = window.location.href.toLowerCase();

  const websites = {
    "facebook": "www.facebook.com",
    "twitter": "twitter",
    // Add more websites and their corresponding values as needed
  };

  for (const keyword in websites) {
    if (url.includes(keyword)) {
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = await generateHTML(websites[keyword]);
      return;
    }
  }

  console.log("No matching website found in the URL to block.");
};

runExtension();
