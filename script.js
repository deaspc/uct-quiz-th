// constant to store all the questions and answers
const questions = {
  question0: {
    question: "สถานที่ที่คุณจะเลือกอยู่?",
    image: "asset/ticket.png",
    option0: {
      type: "string",
      content: "ใต้ท้องทะเลลึก",
      personality: "Immortaljellyfish",
    },
    option1: {
      type: "string",
      content: "ที่ที่มีเรื่องน่าตื่นเต้นเกิดขึ้นได้ตลอด",
      personality: "Vogelkop",
    },
    option2: {
      type: "string",
      content: "อยู่ได้ทุกที่บนโลก",
      personality: "Axolotol",
    },
    option3: {
      type: "string",
      content: "ขอแค่เป็นที่ที่มีแสงแดดอบอุ่น",
      personality: "Sunfish",
    },
  },
  question1: {
    question: "ถ้ามีคนจะมาทำร้าย สิ่งที่คุณจะทำคือ?",
    image: "asset/ticket.png",
    option0: {
      type: "string",
      content: "โดนทำร้ายก่อนจะรู้ตัวเสียอีก",
      personality: "Immortaljellyfish",
    },
    option1: {
      type: "string",
      content: "พยายามหนีออกไปตามสัญชาติญาณ",
      personality: "Vogelkop",
    },
    option2: {
      type: "string",
      content: "ไม่กลัว ไม่มีอะไรทำร้ายเราได",
      personality: "Axolotol",
    },
    option3: {
      type: "string",
      content: "อยากจะหนี แต่ร่างกายดันขยับไม่ได",
      personality: "Sunfish",
    },
  },
  question2: {
    question: "โดยปกติแล้ว เป็นคนเข้าหาผู้อื่นเก่งหรือไม่?",
    image: "asset/cer.png",
    option0: {
      type: "string",
      content: "เข้าหาผู้อื่น เมื่อสถานการณ์พาไป",
      personality: "Immortaljellyfish",
    },
    option1: {
      type: "string",
      content: "มีคนอื่นเข้าหาตลอด",
      personality: "Sunfish",
    },
    option2: {
      type: "string",
      content: "เก่งมากถึงมากที่สุด",
      personality: "Vogelkop",
    },
    option3: {
      type: "string",
      content: "เข้าพอได้หาได้ ยังไงก็ได้ทั้งหมด",
      personality: "Axolotol",
    },
  },
  question3: {
    question: "พลังวิเศษที่คุณอยากมี?",
    image: "asset/cer.png",
    option0: {
      type: "string",
      content: "ฟื้นฟูอวัยวะ",
      personality: "Axolotol",
    },
    option1: {
      type: "string",
      content: "มีสเน่ห์เหลือล้น ใครเห็นก็ต้องหลงรัก",
      personality: "Vogelkop",
    },
    option2: {
      type: "string",
      content: "ร่างกายทนทาน",
      personality: "Sunfish",
    },
    option3: {
      type: "string",
      content: "เป็นอมตะ",
      personality: "Immortaljellyfish",
    },
  },
  question4: {
    question: "สุดท้ายนี้ ประโยคไหน ใช่คุณที่สุด?",
    image: "asset/cer.png",
    option0: {
      type: "string",
      content: "ถ้าไม่หนักหนาเกินไป ทุกอย่างแก้ไขได้เสมอ",
      personality: "Immortaljellyfish",
    },
    option1: {
      type: "string",
      content: "จะลงมือทำ เมื่อได้เวลาอันสมควร",
      personality: "Vogelkop",
    },
    option2: {
      type: "string",
      content: "ในเมื่อทำอะไรไม่ได้ ก็ต้องปล่อยไป",
      personality: "Sunfish",
    },
    option3: {
      type: "string",
      content: "ล้มแล้ว ลุกขึ้นได้เสมอ",
      personality: "Axolotol",
    },
  },
};

// constant to store the description for each type of traveller
const result = {
  Immortaljellyfish: [
    "<h1>Immortal jellyfish</h1>",
    "<img src='asset/cer.png' id='imageToSave'/>",
    "Here is your result",
  ],
  Axolotol: [
    "<h1>Axolotol</h1>",
    "<img src='asset/cer.png' id='imageToSave'/>",
    "Here is your result",
  ],
  Vogelkop: [
    "<h1>Vogelkop superb bird-of-paradise</h1>",
    "<img src='asset/cer.png' id='imageToSave'/>",
    "Here is your result",
  ],
  Sunfish: [
    "<h1>Sunfish</h1>",
    "<img src='asset/cer.png' id='imageToSave'/>",
    "Here is your result",
  ],
};

// for keeping track of the score
var score = {
  Immortaljellyfish: 0,
  Axolotol: 0,
  Vogelkop: 0,
  Sunfish: 0,
};

// for keep track of the current question
var currentQn = 0;

// for setting up each of the questions
function setupQuestion() {
  // find out the current percentage of completion and updates the css
  var progress = 20 + currentQn * 20;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/5";

  // get the current questions content
  var qn = questions["question" + currentQn];
  var qnText = document.getElementById("question");
  qnText.innerText = qn.question;
  var imgElement = document.getElementById("question-img");
  imgElement.src = qn.image;

  // updates each of the options for the current question
  for (var i = 0; i < 4; i++) {
    var option = document.getElementById("option" + i);
    var content = option.getElementsByClassName("content")[0];
    var qnOption = qn["option" + i];
    if (qnOption.type == "image") {
      var htmlStr = "<img src='" + qnOption.content + "'>";
      content.innerHTML = htmlStr;
    } else {
      var htmlStr = "<p>" + qnOption.content + "</p>";
      content.innerHTML = htmlStr;
    }
  }
}

// to unselect all of the options
function resetOptions() {
  var btn = document.getElementsByTagName("input");
  btn[0].checked = false;
  btn[1].checked = false;
  btn[2].checked = false;
  btn[3].checked = false;
}

// to select the option that is clicked
function select(element) {
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  next();
}

// get the next questions, or display result if all questions were answered
function next() {
  // get the current select option
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];
  // get the personality type for the option selected
  var personality = qn["option" + ans].personality;
  // increase the score of the personality by one
  score[personality]++;
  // increase the question count by 1
  currentQn = currentQn + 1;
  // unselect all options
  resetOptions();
  // check if quiz is completed
  if (currentQn < 5) {
    // if quiz not completed, setup the next question
    setupQuestion();
  } else {
    // else quiz is completed
    // assume that the highest score is the Immortaljellyfish personality
    // and go through each of the personality type, and update the highest score and personality
    var highestScore = score["Immortaljellyfish"];
    var highestPersonality = "Immortaljellyfish";
    if (highestScore < score["Vogelkop"]) {
      highestScore = score["Vogelkop"];
      highestPersonality = "Vogelkop";
    }
    if (highestScore < score["Axolotol"]) {
      highestScore = score["Axolotol"];
      highestPersonality = "Axolotol";
    }
    if (highestScore < score["Sunfish"]) {
      highestScore = score["Sunfish"];
      highestPersonality = "Sunfish";
    }

    // get the description of the personality and update the result page
    var personalityResult = result[highestPersonality];
    document.getElementById("personality-type").innerHTML =
      personalityResult[0];
    document.getElementById("personality-part-2").innerHTML =
      personalityResult[1];
    document.getElementById("personality-recommended").innerHTML =
      personalityResult[2];
    // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
    currentQn = 0;
    showPage(1);
  }
}

// bring the particular page into view.
// page 0: start page
// page 1: result page
// page 2: quiz
function showPage(num) {
  var pages = document.getElementsByClassName("container");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[num].style.display = "block";
}

function saveImage() {
  // var imgElement = document.getElementById("imageToSave");
  // var imgSrc = imgElement.src;

  // var link = document.createElement("a");
  // link.href = imgSrc;
  // link.download = "image.jpg"; // Set the desired file name here
  // link.click();

  var imgElement = document.getElementById("imageToSave");
  var imgSrc = imgElement.src;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", imgSrc, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);

    var link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg"; // Set the desired file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  xhr.send();
}
