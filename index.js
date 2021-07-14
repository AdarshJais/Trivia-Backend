var express = require("express");
var app = express();
app.use(express.json());

const questions = [
  {
    id: 1,
    questions: [
      {
        title: "Question 1 / 10",
        question: "What Pokemon does Pikachu evolve into?",
        image: "https://i.imgur.com/7QxoeOa.jpg",
        options: [
          "A    Squirtle",
          "B    Jolteon",
          "C    Raichu",
          "D    Electrivire",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 2 / 10",
        question: "Who is Spongebob’s best friend?",
        image: "https://i.imgur.com/cJeWVtN.png",
        options: [
          "A    Patrik Star",
          "B    Potato Head",
          "C    Olaf",
          "D    Flounder",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 3 / 10",
        question: "In Aladdin, what is Jasmine's tiger called?",
        image: "https://i.imgur.com/ZxFNlR0.jpg",
        options: ["A    Aluh", "B    Rajah", "C    laggo", "D    Tonny"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 4 / 10",
        question: "Which Pixar film came out first?",
        image: "https://i.imgur.com/cNcGj1o.jpg",
        options: [
          "A    The Bug's Life",
          "B    Monster Inc.",
          "C    Radhe",
          "D    Coco",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 5 / 10",
        question: "Where do Elsa and Anna live?",
        image: "https://i.imgur.com/yGDckrY.jpg",
        options: [
          "A    Winterfall",
          "B    Arendelle",
          "C    Emmerdale",
          "D    Dardanelles",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 6 / 10",
        question:
          "What is Simba’s childhood best friend called in the Lion King?",
        image: "https://i.imgur.com/OI1IBQ7.png",
        options: ["A    Tala", "B    Mala", "C    Nala", "D    Sala"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 7 / 10",
        question: "In the film Ratatouille, Remy the rat, was an excellent…?",
        image: "https://i.imgur.com/wr3Qwuj.jpg",
        options: ["A    Chef", "B    Sailor", "C    Pilot", "D    Detective"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 8 / 10",
        question: "Name the two characters with Woody and Buzz",
        image: "https://i.imgur.com/53D2IbA.jpg",
        options: [
          "A    Quack and Jumpy",
          "B    Flappy and Furry",
          "C    Ducky and Bunny",
          "D    Modi and Trump",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 9 / 10",
        question: "What is Wallace’s dog called?",
        image: "https://i.imgur.com/yVds5gC.jpg",
        options: ["A    Vomit", "B    Flobbit", "C    Gromit", "D    Comet"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 10 / 10",
        question: "What is the name of this Mystery Series?",
        image: "https://i.imgur.com/5UcFr7V.jpg",
        options: [
          "A    Cow and Chicken",
          "B    Scooby-Doo",
          "C    Johny Bravo",
          "D    The Super Friends",
        ],
        selected: null,
        correctIndex: null,
      },
    ],
  },
  {
    id: 2,
    questions: [
      {
        title: "Question 1 / 10",
        question:
          "What is Simba’s childhood best friend called in the Lion King?",
        image: "https://i.imgur.com/OI1IBQ7.png",
        options: ["A    Tala", "B    Mala", "C    Nala", "D    Sala"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 2 / 10",
        question: "In the film Ratatouille, Remy the rat, was an excellent…?",
        image: "https://i.imgur.com/wr3Qwuj.jpg",
        options: ["A    Chef", "B    Sailor", "C    Pilot", "D    Detective"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 3 / 10",
        question: "Name the two characters with Woody and Buzz",
        image: "https://i.imgur.com/53D2IbA.jpg",
        options: [
          "A    Quack and Jumpy",
          "B    Flappy and Furry",
          "C    Ducky and Bunny",
          "D    Modi and Trump",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 4 / 10",
        question: "What is Wallace’s dog called?",
        image: "https://i.imgur.com/yVds5gC.jpg",
        options: ["A    Vomit", "B    Flobbit", "C    Gromit", "D    Comet"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 5 / 10",
        question: "What is the name of this Mystery Series?",
        image: "https://i.imgur.com/5UcFr7V.jpg",
        options: [
          "A    Cow and Chicken",
          "B    Scooby-Doo",
          "C    Johny Bravo",
          "D    The Super Friends",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 6 / 10",
        question: "What Pokemon does Pikachu evolve into?",

        image: "https://i.imgur.com/7QxoeOa.jpg",
        options: [
          "A    Squirtle",
          "B    Jolteon",
          "C    Raichu",
          "D    Electrivire",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 7 / 10",
        question: "Who is Spongebob’s best friend?",
        image: "https://i.imgur.com/cJeWVtN.png",
        options: [
          "A    Patrik Star",
          "B    Potato Head",
          "C    Olaf",
          "D    Flounder",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 8 / 10",
        question: "In Aladdin, what is Jasmine's tiger called?",
        image: "https://i.imgur.com/ZxFNlR0.jpg",
        options: ["A    Aluh", "B    Rajah", "C    laggo", "D    Tonny"],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 9 / 10",
        question: "Which Pixar film came out first?",
        image: "https://i.imgur.com/cNcGj1o.jpg",
        options: [
          "A    The Bug's Life",
          "B    Monster Inc.",
          "C    Radhe",
          "D    Coco",
        ],
        selected: null,
        correctIndex: null,
      },
      {
        title: "Question 10 / 10",
        question: "Where do Elsa and Anna live?",
        image: "https://i.imgur.com/yGDckrY.jpg",
        options: [
          "A    Winterfall",
          "B    Arendelle",
          "C    Emmerdale",
          "D    Dardanelles",
        ],
        selected: null,
        correctIndex: null,
      },
    ],
  },
];

const answers = [
  {
    id: 1,
    answers: [2, 0, 1, 0, 1, 2, 0, 2, 2, 2],
  },
  {
    id: 2,
    answers: [2, 0, 2, 2, 2, 2, 0, 1, 0, 1],
  },
];

function mergeAnswers(ques) {
  //"ques" is the incoming questions:- an array of objects where objects has two field one is id and other is questions array
  console.error("ques", ques);
  console.log("answers", answers);
  //This is to find the answersSetObject of ques w.r.t. there id
  const answersSetObject = answers.find((answer) => {
    return answer.id == ques[0].id;
  });
  //get the answersSetArray
  const answerSetArray = answersSetObject.answers;

  //merge the answerSetArray to the ques
  ques[0].questions.forEach((ques, index) => {
    return (ques.correctIndex = answerSetArray[index]);
  });

  return ques;
}

app.get("/api/questions/:id", (req, res) => {
  res.send([questions[req.params.id - 1]]);
});

app.post("/api/answers", (req, res) => {
  const abc = mergeAnswers(req.body);
  res.send(abc);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
