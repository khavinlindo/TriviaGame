
//A variable with an array of objects. Each object represents a question
var questions = [{
  question: "What NBA player scored 100 points on March 2, 1962?",
  answers:["Kareem Abdul-Jabbar", "Elgin Baylor", "Wilt Chamberlain", "Bill Russell"],
  correctAnswer: "Wilt Chamberlain"
},

{
  question: "Who was the first player in NBA history to be elected league MVP by a unanimous vote?",
  answers:["Magic Johnson", "Michael Jordan", "LeBron James", "Stephan Curry"],
  correctAnswer: "Stephan Curry"
},

{
  question: "Who was the youngest player to score 10,000 points in the NBA?",
  answers:["Wilt Chamberlain", "Michael Jordan", "Kobe Bryant", "LeBron James"],
  correctAnswer: "LeBron James"
},

{
  question: "What team owns the longest winning streak in NBA history? ",
  answers:["Los Angeles Lakers", "Golden State Warriors", "Miami Heat", "Chicage Bulls"],
  correctAnswer: "Golden State Warriors"
},

{
  question: "What player won All-Star Game MVP, NBA MVP, and NBA Finals MVP awards in 2000?",
  answers:["Tim Duncan", "Michael Jordan", "Kobe Bryant", "Shaquille O'Neil"],
  correctAnswer: "Shaquille O'Neil"
},

{
  question: "Who was the first Chinese player to play in an NBA game?",
  answers:["Wang Zhizhi", "Mao Zedong",   "Hai Rui",   "Yao Ming"],
  correctAnswer: "Wang Zhizhi"
},

{
  question: "What NBA player has won the most league MVPs?",
  answers:["Lebron James", "Stephen Curry", "Kareem Abdul-Jabbar", "Michael Jordan"],
  correctAnswer: "Kareem Abdul-Jabbar"
},

{
  question: "Who was the shortest player in NBA history?",
  answers:["Earl Boykins", "Spud Webb", "Manute Bol", "Muggsy Bogues"],
  correctAnswer: "Muggsy Bogues"
}

];

function timeConverter(t) {

    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
    seconds = "0" + seconds;
     }

    if (minutes === 0) {
     minutes = "00";
    }

    else if (minutes < 10) {
    minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
    }





$(document).ready( function () {


$("#start").on("click", function() {
     game.start();
   });

$(document).on("click", "#end",  function() {
    game.done();
});

   var subMain = $("#sub-main");

   var game= {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countDown: function() {
        game.counter--;
        $('#counter').html("Time remaining: "+ timeConverter(game.counter));
        
        if(game.counter<=0) {
            console.log("time is up");
            game.done();
        }
    },

    start: function() {
        
        $("#main").css({"height":"1100px"});
        //var subMain = $("#sub-main");
        
        subMain.empty();
        subMain.append("<h1 id='counter'> Time remaining: 02:00 </h1>");
        timer= setInterval(game.countDown, 1000); //starts timer
        
        
         //Adds questions and selections to id 'sub-main'
        
        for (i=0;i<questions.length;i++) {
         subMain.append(" <hr><h5 class='questions'>" + questions[i].question + "</h5>");
          for (j=0;j<questions[j].answers.length;j++) {
              subMain.append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"' >"+questions[i].answers[j]);
          }
        }

        subMain.append("<br><button type='button' class='btn btn-info' id='end'>DONE</button>")
    },


    done: function() {
        $.each($("input[name='question-0']:checked"), function() {   //Looks at each element in parentheses
            if($(this).val()==questions[0].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 

        $.each($("input[name='question-1']:checked"), function() {   
            if($(this).val()==questions[1].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 

        $.each($("input[name='question-2']:checked"), function() {   
            if($(this).val()==questions[2].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 

        $.each($("input[name='question-3']:checked"), function() {   
            if($(this).val()==questions[3].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 

        $.each($("input[name='question-4']:checked"), function() {   
            if($(this).val()==questions[4].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 

        $.each($("input[name='question-5']:checked"), function() {   
            if($(this).val()==questions[5].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 

        $.each($("input[name='question-6']:checked"), function() {   
            if($(this).val()==questions[6].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 

        $.each($("input[name='question-7']:checked"), function() {   
            if($(this).val()==questions[7].correctAnswer) {
                game.correct++;
            }

            else {
               game.incorrect++;
            }
        }); 
        
        this.result();
     },

     result: function() {
        $("#main").css({"height":"500px"}); 
        clearInterval(timer);
         
         subMain.empty();
         
         subMain.append("<h1> All Done! </h1>").css({"font-family": "Copperplate, Copperplate Gothic Light, fantasy"});
         subMain.append("<h3> Correct Answers: "+this.correct+ "</h3>");
         subMain.append("<h3> Incorrect Answers: "+this.incorrect+ "</h3>");
         subMain.append("<h3> Unanswered: "+(questions.length-(this.correct+this.incorrect))+ "</h3>");
     }
   }

});



