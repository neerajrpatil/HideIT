// // const generateRandomColor = () => {
// //   const letters = '0123456789ABCDEF';
// //   let color = '#';
// //   for (let i = 0; i < 6; i++) {
// //     color += letters[Math.floor(Math.random() * 16)];
// //   }
// //   return color;
// // };

// // const generateSTYLES = () => {
// //   const backgroundColor = generateRandomColor();
// //   const cloudColor = generateRandomColor();

// //   return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
// //     body {
// //       background:  ${backgroundColor} !important;
// //       color: #fff;
// //       font-family: "Open Sans", sans-serif;
// //       max-height: 700px;
// //       overflow: hidden;
// //     }
// //     .c {
// //       text-align: center;
// //       display: block;
// //       position: relative;
// //       width: 80%;
// //       margin: 100px auto;
// //     }
// //     ._404 {
// //       font-size: 220px;
// //       position: relative;
// //       display: inline-block;
// //       z-index: 2;
// //       height: 250px;
// //       letter-spacing: 15px;
// //     }
// //     ._1 {
// //       text-align: center;
// //       display: block;
// //       position: relative; 
// //       font-size: 4em;
// //       line-height: 100%;
// //       padding-top: 5%;
// //       padding-bottom: 5%;
// //     }
// //     ._2 {
// //       text-align: center;
// //       display: block;
// //       position: relative;
// //       font-size: 20px;
// //     }
// //     .text {
// //       font-size: 70px;
// //       text-align: center;
// //       position: relative;
// //       display: inline-block;
// //       margin: 19px 0px 0px 0px;
// //       /* top: 256.301px; */
// //       z-index: 3;
// //       width: 100%;
// //       line-height: 1.2em;
// //       display: inline-block;
// //     }


// //     .right {
// //       float: right;
// //       width: 60%;
// //     }

// //     hr {
// //       padding: 0;
// //       border: none;
// //       border-top: 5px solid #fff;
// //       color: #fff;
// //       text-align: center;
// //       margin: 0px auto;
// //       width: 420px;
// //       height: 10px;
// //       z-index: -10;
// //     }

// //     hr:after {
// //       display: inline-block;
// //       position: relative;
// //       top: -0.75em;
// //       font-size: 2em;
// //       padding: 0 0.2em;
// //       background: ${backgroundColor};
// //     }

// //     .cloud {
// //       width: 350px;
// //       height: 120px;
// //       background: ${cloudColor};
// //       background: linear-gradient(top, ${cloudColor} 100%);
// //       background: -webkit-linear-gradient(top, ${cloudColor} 100%);
// //       background: -moz-linear-gradient(top, ${cloudColor} 100%);
// //       background: -ms-linear-gradient(top, ${cloudColor} 100%);
// //       background: -o-linear-gradient(top, ${cloudColor} 100%);
// //       border-radius: 100px;
// //       -webkit-border-radius: 100px;
// //       -moz-border-radius: 100px;
// //       position: absolute;
// //       margin: 120px auto 20px;
// //       z-index: -1;
// //       transition: ease 1s;
// //     }

// //     .cloud:after,
// //     .cloud:before {
// //       content: "";
// //       position: absolute;
// //       background: ${cloudColor};
// //       z-index: -1;
// //     }

// //     .cloud:after {
// //       width: 100px;
// //       height: 100px;
// //       top: -50px;
// //       left: 50px;

// //       border-radius: 100px;
// //       -webkit-border-radius: 100px;
// //       -moz-border-radius: 100px;
// //     }

// //     .cloud:before {
// //       width: 180px;
// //       height: 180px;
// //       top: -90px;
// //       right: 50px;

// //       border-radius: 200px;
// //       -webkit-border-radius: 200px;
// //       -moz-border-radius: 200px;
// //     }

// //     .x1 {
// //       top: -50px;
// //       left: 100px;
// //       -webkit-transform: scale(0.3);
// //       -moz-transform: scale(0.3);
// //       transform: scale(0.3);
// //       opacity: 0.9;
// //       -webkit-animation: moveclouds 15s linear infinite;
// //       -moz-animation: moveclouds 15s linear infinite;
// //       -o-animation: moveclouds 15s linear infinite;
// //     }

// //     .x1_5 {
// //       top: -80px;
// //       left: 250px;
// //       -webkit-transform: scale(0.3);
// //       -moz-transform: scale(0.3);
// //       transform: scale(0.3);
// //       -webkit-animation: moveclouds 17s linear infinite;
// //       -moz-animation: moveclouds 17s linear infinite;
// //       -o-animation: moveclouds 17s linear infinite;
// //     }

// //     .x2 {
// //       left: 250px;
// //       top: 30px;
// //       -webkit-transform: scale(0.6);
// //       -moz-transform: scale(0.6);
// //       transform: scale(0.6);
// //       opacity: 0.6;
// //       -webkit-animation: moveclouds 25s linear infinite;
// //       -moz-animation: moveclouds 25s linear infinite;
// //       -o-animation: moveclouds 25s linear infinite;
// //     }

// //     .x3 {
// //       left: 250px;
// //       bottom: -70px;

// //       -webkit-transform: scale(0.6);
// //       -moz-transform: scale(0.6);
// //       transform: scale(0.6);
// //       opacity: 0.8;

// //       -webkit-animation: moveclouds 25s linear infinite;
// //       -moz-animation: moveclouds 25s linear infinite;
// //       -o-animation: moveclouds 25s linear infinite;
// //     }

// //     .x4 {
// //       left: 470px;
// //       botttom: 20px;

// //       -webkit-transform: scale(0.75);
// //       -moz-transform: scale(0.75);
// //       transform: scale(0.75);
// //       opacity: 0.75;

// //       -webkit-animation: moveclouds 18s linear infinite;
// //       -moz-animation: moveclouds 18s linear infinite;
// //       -o-animation: moveclouds 18s linear infinite;
// //     }

// //     .x5 {
// //       left: 200px;
// //       top: 300px;

// //       -webkit-transform: scale(0.5);
// //       -moz-transform: scale(0.5);
// //       transform: scale(0.5);
// //       opacity: 0.8;

// //       -webkit-animation: moveclouds 20s linear infinite;
// //       -moz-animation: moveclouds 20s linear infinite;
// //       -o-animation: moveclouds 20s linear infinite;
// //     }

// //     .author{
// //       font-size: 0.5em;
// //     }

// //     @-webkit-keyframes moveclouds {
// //       0% {
// //         margin-left: 1000px;
// //       }
// //       100% {
// //         margin-left: -1000px;
// //       }
// //     }
// //     @-moz-keyframes moveclouds {
// //       0% {
// //         margin-left: 1000px;
// //       }
// //       100% {
// //         margin-left: -1000px;
// //       }
// //     }
// //     @-o-keyframes moveclouds {
// //       0% {
// //         margin-left: 1000px;
// //       }
// //       100% {
// //         margin-left: -1000px;
// //       }
// //     }
// //      </style>`;
// // };

// // // const generateRandomQuote = async () => {
// // //   try {
// // //     const response = await fetch('https://api.quotable.io/random');
// // //     const data = await response.json();
// // //     return `${data.content} <span class="author"> ${data.author}</span>`;
// // //   } catch (error) {
// // //     console.error('Error fetching quote:', error);
// // //     return 'Stay inspired!';
// // //   }
// // // };

// // const generateRandomQuote = async () => {
// //   try {
// //     const response = await fetch('https://type.fit/api/quotes');
// //     const data = await response.json();
// //     const randomIndex = Math.floor(Math.random() * data.length);
// //     const quote = data[randomIndex];
// //     return `${quote.text} <span class="author"> ${quote.author}</span>`;
// //   } catch (error) {
// //     console.error('Error fetching quote:', error);
// //     return 'Stay inspired!';
// //   }
// // };

// // const generateHTML = async (pageName) => {
// //   const inspiringThought = await generateRandomQuote();

// //   return `
// //       <div class="overlay">
// //         <div id="clouds">
// //           <div class="cloud x1"></div>
// //           <div class="cloud x1_5"></div>
// //           <div class="cloud x2"></div>
// //           <div class="cloud x3"></div>
// //           <div class="cloud x4"></div>
// //           <div class="cloud x5"></div>
// //         </div>
// //         <div class='c'>
// //           <div class='_404'> Blocked </div> 
// //           <hr>
// //           <div class='_1'> ${inspiringThought} </div>  
// //           <p> </p> 
// //           <hr> 
// //           <div class='_2'>Blocked : ${pageName} , By Jitendra Zaa</div> 
// //         </div>
// //       </div>`;
// // };


// // const runExtension = async () => {
// //   const url = window.location.href.toLowerCase();

// //   const websites = {
// //     "facebook": "www.facebook.com",
// //     "twitter": "twitter",
// //     // Add more websites and their corresponding values as needed
// //   };

// //   for (const keyword in websites) {
// //     if (url.includes(keyword)) {
// //       document.head.innerHTML = generateSTYLES();
// //       document.body.innerHTML = await generateHTML(websites[keyword]);
// //       return; // Exit the loop if a match is found
// //     }
// //   }
// //   // If no match is found, you can add a default behavior here
// //   console.log("No matching website found in the URL to block.");
// // };

// // // Example usage
// // runExtension();
// const generateRandomColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// const generateSTYLES = () => {
//   const backgroundColor = generateRandomColor();
//   const cloudColor = generateRandomColor();

//   return `<style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);

//     body {
//       background: ${backgroundColor} !important;
//       color: #fff;
//       font-family: 'Open Sans', sans-serif;
//       height: 100vh;
//       overflow: hidden;
//       margin: 0;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }

//     .container {
//       text-align: center;
//       display: block;
//       width: 80%;
//       margin: auto;
//     }

//     .error-code {
//       font-size: 220px;
//       position: relative;
//       display: inline-block;
//       z-index: 2;
//       height: 250px;
//       letter-spacing: 15px;
//     }

//     .message {
//       font-size: 4em;
//       line-height: 1.2;
//       padding: 20px 0;
//     }

//     .sub-message {
//       font-size: 20px;
//     }

//     .quote {
//       font-size: 70px;
//       margin: 20px 0;
//       line-height: 1.2em;
//     }

//     hr {
//       border: none;
//       border-top: 5px solid #fff;
//       margin: 20px auto;
//       width: 420px;
//       height: 10px;
//       background: ${backgroundColor};
//       position: relative;
//       z-index: -10;
//     }

//     .cloud {
//       width: 350px;
//       height: 120px;
//       background: ${cloudColor};
//       border-radius: 100px;
//       position: absolute;
//       margin: 120px auto 20px;
//       z-index: -1;
//       transition: ease 1s;
//     }

//     .cloud:after, .cloud:before {
//       content: "";
//       position: absolute;
//       background: ${cloudColor};
//       z-index: -1;
//     }

//     .cloud:after {
//       width: 100px;
//       height: 100px;
//       top: -50px;
//       left: 50px;
//       border-radius: 100px;
//     }

//     .cloud:before {
//       width: 180px;
//       height: 180px;
//       top: -90px;
//       right: 50px;
//       border-radius: 200px;
//     }

//     .cloud.x1 { top: -50px; left: 100px; transform: scale(0.3); opacity: 0.9; animation: moveclouds 15s linear infinite; }
//     .cloud.x1_5 { top: -80px; left: 250px; transform: scale(0.3); animation: moveclouds 17s linear infinite; }
//     .cloud.x2 { left: 250px; top: 30px; transform: scale(0.6); opacity: 0.6; animation: moveclouds 25s linear infinite; }
//     .cloud.x3 { left: 250px; bottom: -70px; transform: scale(0.6); opacity: 0.8; animation: moveclouds 25s linear infinite; }
//     .cloud.x4 { left: 470px; bottom: 20px; transform: scale(0.75); opacity: 0.75; animation: moveclouds 18s linear infinite; }
//     .cloud.x5 { left: 200px; top: 300px; transform: scale(0.5); opacity: 0.8; animation: moveclouds 20s linear infinite; }

//     .author { font-size: 0.5em; }

//     @keyframes moveclouds {
//       0% { margin-left: 1000px; }
//       100% { margin-left: -1000px; }
//     }
//   </style>`;
// };

// const generateRandomQuote = async () => {
//   try {
//     const response = await fetch('https://type.fit/api/quotes');
//     const data = await response.json();
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const quote = data[randomIndex];
//     return `${quote.text} <span class="author"> </span>`;
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//     return 'Stay inspired!';
//   }
// };

// const generateHTML = async (pageName) => {
//   const inspiringThought = await generateRandomQuote();

//   return `
//       <div class="overlay">
//         <div id="clouds">
//           <div class="cloud x1"></div>
//           <div class="cloud x1_5"></div>
//           <div class="cloud x2"></div>
//           <div class="cloud x3"></div>
//           <div class="cloud x4"></div>
//           <div class="cloud x5"></div>
//         </div>
//         <div class="container">
//           <div class="error-code">Blocked</div> 
//           <hr>
//           <div class="message">${inspiringThought}</div>  
//           <hr> 
//           <div class="sub-message">Blocked: ${pageName}, By Neeraj Patil</div> 
//         </div>
//       </div>`;
// };

// const runExtension = async () => {
//   const url = window.location.href.toLowerCase();

//   const websites = {
//     "facebook": "www.facebook.com",
//     "twitter": "twitter",
//     // Add more websites and their corresponding values as needed
//   };

//   for (const keyword in websites) {
//     if (url.includes(keyword)) {
//       document.head.innerHTML = generateSTYLES();
//       document.body.innerHTML = await generateHTML(websites[keyword]);
//       return;
//     }
//   }

//   console.log("No matching website found in the URL to block.");
// };

// runExtension();


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
