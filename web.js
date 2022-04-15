const questions = [
    {
        question: "Which is india's first multi-brand sneaker store ?",
        optionA: "Sneaker Studio",
        optionB: "Veg Non Veg",
        optionC: "Myntra",
        optionD: "Ajio",
        correctOption: "optionB"
    },

    {
        question: "The first venture of CRED Founder was ____",
        optionA: "Mobikwik",
        optionB: "Just charge it",
        optionC: "Free charge",
        optionD: "Paytm",
        correctOption: "optionC"
    },

    {
        question: "Who is Founder of Paytm ?",
        optionA: "Kunal Shah",
        optionB: "Deepinder Goyal",
        optionC: "Ritesh Agarwal",
        optionD: "Vijay Shekhar Sharma",
        correctOption: "optionD"
    },

    {
        question: "which is India's Startup Capital ?",
        optionA: "Mumbai",
        optionB: "Delhi",
        optionC: "Bangalore",
        optionD: "Chennai",
        correctOption: "optionC"
    },

    {
        question: "Which company acquired Snapdeal",
        optionA: "Amazon",
        optionB: "AJIO",
        optionC: "Flipkart",
        optionD: "Tata",
        correctOption: "optionC"
    },

    {
        question: "______ is google's first direct investment in india?",
        optionA: "Dunzo",
        optionB: "Zerodha",
        optionC: "Swiggy",
        optionD: "Paytm",
        correctOption: "optionA"
    },

    {
        question: "Which is India's most valueble startup?",
        optionA: "Paytm",
        optionB: "Oyo",
        optionC: "Byju's",
        optionD: "Flipkart",
        correctOption: "optionC"
    },

    {
        question: "which country has most number of unicorn startups?",
        optionA: "Usa",
        optionB: "China",
        optionC: "India",
        optionD: "Uk",
        correctOption: "optionA"
    },

    {
        question: "Which Startup became india's fastest unicorn ?",
        optionA: "Udaan",
        optionB: "Flipkart",
        optionC: "Swiggy",
        optionD: "Apna",
        correctOption: "optionD"
    },

    {
        question: "Which startup allows you to create an online store ?",
        optionA: "Dukaan",
        optionB: "Meesho",
        optionC: "Flipkart",
        optionD: "Just Dial",
        correctOption: "optionA"
    },

    {
        question: "Which is india's most profitable startup ?",
        optionA: "Boat",
        optionB: "Car trade",
        optionC: "Zerodha",
        optionD: "Lenskart",
        correctOption: "optionC"
    },

    {
        question: "Which is India's First Unicorn Startup ?",
        optionA: "InMobi",
        optionB: "Flipkart",
        optionC: "Make My Trip",
        optionD: "Naukri.com",
        correctOption: "optionA"
    },


    {
        question: "Which is india's largest retail brokerage?",
        optionA: "Groww",
        optionB: "Zerodha",
        optionC: "Upstox",
        optionD: "Angel Broking",
        correctOption: "optionB"
    },

    {
        question: "Which  startup started as an youtube channel ?",
        optionA: "Byju's",
        optionB: "WhiteHat jr",
        optionC: "Vedantu",
        optionD: "Unacademy",
        correctOption: "optionD"
    },

    {
        question: "paytm  started in which city ?",
        optionA: "Noida",
        optionB: "Mumbai",
        optionC: "Bangalore",
        optionD: "Pune",
        correctOption: "optionA"
    },

    

]
let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let amountwon = 0  //holds the amount won
let indexNumber = 0 //will be used in displaying next question
let c= null //will be used to determine the option selected is correct or wrong or not selected

//display next question and the values of amount won and the question number
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("amount-won").innerHTML = amountwon * 1000
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}

//checks the answer
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in the radio inputs with name of 'option' 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        c=2 // c becomes 2 if no option is selected
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor =  "rgb(46, 218, 152)"
            c=1 // c becomes 1 if the option choosed is correct
            amountwon++ //adding to amount won
            indexNumber++ //adding 1 to index so has to display next question..
            //it delays question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wronganswer = option.labels[0].id
            document.getElementById(wronganswer).style.backgroundColor = "rgb(243, 76, 76)"
            document.getElementById(correctOption).style.backgroundColor = "rgb(46, 218, 152)"
            c=0 // c will remain 0  if the option choosed is wrong
            indexNumber++
            //it delays question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

//when they submit it validates 
function changeQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying 
    setTimeout(() => {
        //if the answer is correct it will change to next question
        if (c==1 && indexNumber <= 9) {
            NextQuestion(indexNumber)
            c=0
        }
        //if they do not select any option it will display to select an option 
        else if (c==2) {
            document.getElementById('no-option-box').style.display = "flex"
        } 
        //if they select wrong answer it will end the game
        else {
            EndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right or wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}
//it will uncheck the radio buttons
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// ends the game if the player selects wrong option
function EndGame() {
    //displays the score board
    document.getElementById('final-amount').innerHTML = amountwon *1000
    document.getElementById('end-box').style.display = "flex"

}

//closes score board, resets game and reshuffles questions
function closeEndBox() {
    questionNumber = 1
    amountwon = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('end-box').style.display = "none"
}

//function to close the no option box
function closeNoOptionBox() {
    document.getElementById('no-option-box').style.display = "none"
}