questionArea = document.getElementById("Question");
equationArea = document.getElementById("Equation");
translateArea = document.getElementById("translate");
equationShowing = ['','','','','',''];
currentQuestion = 0;

Questions = [
   {
    Question: "<p>The speed <button onclick='eq(0,1)'>limit</button>, <button onclick='eq(0,0)'>s </button>, is <button onclick='eq(0,2)'>55 miles per hour</button>.</p>",
   Equation: [' s ', ' < ', ' 55'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=The%20speed%20limit%2C%20s%2C%20is%2055%20miles%20per%20hour&op=translate"
  },
 
       {
    Question: "<p><button onclick='eq(1,0)'>A fever, f,</button> is a temperature <button onclick='eq(1,1)'>above</button> <button onclick='eq(1,2)'>98.6 degrees</button>",
   Equation: [' f ', ' > ',  ' 98.6 '],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=A%20fever%2C%20f%2C%20is%20a%20temperature%20above%2098.6%20degrees.&op=translate"
  },
     
         {
    Question: "<p><button onclick='eq(2,0)'>Bailey, b,</button> <button onclick='eq(2,1)'>must be at least</button> <button onclick='eq(2,2)'>5 feet tall</button> to ride the roller coaster.",
   Equation: [' b ', '  ≥ ',  ' 5 '],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Bailey%2C%20b%2C%20must%20be%20at%20least%205%20feet%20tall%20to%20ride%20the%20roller%20coaster.&op=translate"
  },
    
         {
    Question: "<p>If <button onclick='eq(3,0)'>the temperature, t,</button> is a temperature <button onclick='eq(3,1)'>is below</button> <button onclick='eq(3,2)'>40 degrees</button>, we practice inside.",
   Equation: [' t ', ' < ',  ' 40 '],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=If%20the%20temperature%2C%20t%2C%20is%20below%2040%20degrees%2C%20we%20practice%20inside.&op=translate"
  },
           {
    Question: "<p><button onclick='eq(4,1)'>Starting</button>  <button onclick='eq(4,0)'>pay at Chic-fil-A, p,</button> is <button onclick='eq(4,2)'>$9.00 per hour</button>.",
   Equation: [' p ', ' ≥ ',  ' 9 '],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Starting%20pay%20at%20Chic-fil-A%2C%20p%2C%20is%20%249.00%20per%20hour.&op=translate"
  },
  
  {
    Question: "<p>Students can work <button onclick='eq(5,1)'>no more than</button>  <button onclick='eq(5,2)'>20</button> <button onclick='eq(5,0)'>hours, h,</button>a week.",
   Equation: [' h ', ' ≤ ',  ' 20 '],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Students%20can%20work%20no%20more%20than%2020%20hours%2C%20h%2C%20a%20week.&op=translate"
  },
  
     {
    Question: "<p>Maria earns <button onclick='eq(6,0)'>$7.35</button> <button onclick='eq(6,1)'>an hour</button> at Sonic <button onclick='eq(6,2)'>plus</button> <button onclick='eq(6,3)'>an extra $20 every week</button>  for wearing roller skates for her shifts.</p>  <p>Hannah earns <button onclick='eq(6,5)'>$8.25</button> <button onclick='eq(6,6)'>per hour</button> at Whataburger, but she <button onclick='eq(6,7)'>must pay</button> <button onclick='eq(6,8)'>$16</button> for her uniform to be cleaned each week.<p> Write an inequality to find the number of hours, h, would Maria and Hannah work for <button onclick='eq(6,4)'>Maria to make more money for the week</button>?</p>",
   Equation: ['7.35', 'h', ' +', ' 20 ', ' > ', ' 8.25', 'h', ' - ', ' 16'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Maria%20earns%20%247.35%20an%20hour%20at%20Sonic%20plus%20an%20extra%20%2420%20every%20week%20for%20wearing%20roller%20skates%20for%20her%20shifts.%20Hannah%20earns%20%248.25%20per%20hour%20at%20Whataburger%2C%20but%20she%20must%20pay%20%2416%20for%20her%20uniform%20to%20be%20cleaned%20each%20week.%20For%20what%20number%20of%20hours%2C%20h%2C%20would%20Maria%20and%20Hannah%20work%20if%20they%20earned%20the%20same%20amount%20in%20a%20week%3F%20&op=translate"
  },
  {
    Question: "<p>Marcel’s mom gave him <button onclick='eq(7,5)'>$40</button> to go to an amusement park. If it <button onclick='eq(7,0)'>costs $10 to get in</button> <button onclick='eq(7,1)'>and</button> <button onclick='eq(7,3)'>games</button> are <button onclick='eq(7,2)'>$1.50 each</button>, <button onclick='eq(7,4)'>how many games, x, can Marcel play</button>?",
   Equation: ['10 ', ' + ', ' 1.5', 'x ',' ≤ ',' 40'],
  Translation:"https://translate.google.com/?sl=en&tl=es&text=Marcel%E2%80%99s%20mom%20gave%20him%20%2440%20to%20go%20to%20an%20amusement%20park.%20If%20it%20costs%20%2410%20to%20get%20in%20and%20games%20are%20%241.50%20each%2C%20how%20many%20games%2C%20x%2C%20can%20Marcel%20play%3F%20&op=translate"
  },
   {
    Question: "<p>David went to 7-11 and bought bags of hot fries for <button onclick='eq(8,0)'>$2.75</button> <button onclick='eq(8,1)'>each</button> and he had a coupon for <button onclick='eq(8,3)'>$5.00</button> <button onclick='eq(8,2)'>off</button>. Jazmin went to QT and bought bags of hot fries for <button onclick='eq(8,5)'>$2.25</button> <button onclick='eq(8,6)'>each</button> <button onclick='eq(8,7)'>and</button> a soda for <button onclick='eq(8,8)'>$1.50</button>. For what number of bags of hot fries, b, would <button onclick='eq(8,4)'>David spend no more than Jazmin</button>?</p></button>",
   Equation: ['2.75', 'b ', ' - ', ' 5 ', ' ≤ ', ' 2.25', 'b', ' + ', ' 1.5'],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=%20%20David%20went%20to%207-11%20and%20bought%20bags%20of%20hot%20fries%20for%20%242.75%20each%20and%20he%20had%20a%20coupon%20for%20%245.00%20off.%20Jazmin%20went%20to%20QT%20and%20bought%20bags%20of%20hot%20fries%20for%20%242.25%20each%20and%20a%20soda%20for%20%241.50.%20For%20what%20number%20of%20bags%20of%20hot%20fries%2C%20b%2C%20would%20David%20and%20Jazmin%20spend%20the%20same%20amount%3F%20&op=translate"
  },
  
     {
    Question: "<p>Jacob bought <button onclick='eq(9,0)'>a pizza for $11.95</button> <button onclick='eq(9,1)'>and</button> sodas for <button onclick='eq(9,2)'>$1.50</button> <button onclick='eq(9,3)'>each</button>. Isabella bought  <button onclick='eq(9,5)'>a pizza that was $15.79</button> <button onclick='eq(9,6)'>and</button> sodas for <button onclick='eq(9,7)'>$2</button> <button onclick='eq(9,8)'>each</button>. Write an inequality to find the number of sodas, x, bought if <button onclick='eq(9,4)'> Jacob spent at least what Isabella spent</button>.</p></button>",
   Equation: ['$11.95', ' +  ',  ' 1.5', 'x ', ' ≥ ', '$15.79', ' +  ',  ' 2', 'x ',],
   Translation: "https://translate.google.com/?sl=en&tl=es&text=Jacob%20bought%20a%20pizza%20for%20%2411.95%20and%20sodas%20for%20%241.50%20each.%20%20Isabella%20bought%20a%20pizza%20that%20was%20%2415.79%20and%20sodas%20for%20%242%20each.%20Write%20an%20inequality%20to%20find%20the%20number%20of%20sodas%2C%20x%2C%20bought%20if%20Jacob%20spent%20at%20least%20what%20Isabella%20spent.&op=translate"
  },
      {
    Question: "<p>A paddle boat company charges <button onclick='eq(10,0)'>$15 rental fee</button> <button onclick='eq(10,1)'>plus</button> <button onclick='eq(10,2)'>$12.75</button> <button onclick='eq(10,3)'>per hour</button> for rentals.</p> <p>A tubing company charges a <button onclick='eq(10,5)'>$20 rental fee</button> <button onclick='eq(10,6)'>plus</button> <button onclick='eq(10,7)'>$5</button> <button onclick='eq(10,8)'>per hour</button> for rentals.</p> Write an inequality to determine <button onclick='eq(10,4)'>how long Jimmy would have to go tubing for it to cost less than the same amount of time using a paddle boat</button>.",
   Equation: [' 15 ', ' + ', ' 12.75', 'x ',' > ',' 20 ', ' + ', ' 5', 'x'],
  Translation:"https://translate.google.com/?sl=en&tl=es&text=A%20paddle%20boat%20company%20charges%20%2415%20rental%20fee%20plus%20%2412.75%20per%20hour%20for%20rentals.%0A%0AA%20tubing%20company%20charges%20a%20%2420rental%20fee%20plus%20%245%20per%20hour%20for%20rentals.%0A%0AWrite%20an%20inequality%20to%20determine%20how%20long%20Jimmy%20would%20have%20to%20go%20tubing%20for%20it%20to%20cost%20less%20than%20the%20same%20amount%20of%20time%20using%20a%20paddle%20boat.&op=translate"
  },
        {
    Question: "The XStation, a video game console, costs <button onclick='eq(11,2)'>$450</button>. <button onclick='eq(11,1)'>Games</button> for the console cost <button onclick='eq(11,0)'>$59</button>. The PlayBox, another game console, costs <button onclick='eq(11,7)'>$400</button>, <button onclick='eq(11,6)'>and</button> the <button onclick='eq(11,5)'>games</button> cost <button onclick='eq(11,4)'>$69</button>. How many games does James need to buy for it to be <button onclick='eq(11,3)'>cheaper to buy the XStation</button>?",
   Equation: ['59', 'x ', ' + 450 ', ' < ', ' 69', 'x ', ' + ', ' 400' ],
  Translation:"https://translate.google.com/?sl=en&tl=es&text=The%20XStation%2C%20a%20video%20game%20console%20costs%20%24450.%20Games%20for%20the%20console%20cost%20%2459.%20The%20PlayBox%2C%20another%20game%20console%20costs%20%24400%20and%20the%20games%20cost%20%2469.%20How%20many%20games%20does%20James%20need%20to%20buy%20for%20it%20to%20be%20cheaper%20to%20buy%20the%20XStation%3F&op=translate"
  },
    {
    Question: "<p>Felicia has <button onclick='eq(12,0)'>12 buttons</button> in her collection. She will collect <button onclick='eq(12,2)'>29</button> <button onclick='eq(12,1)'>new buttons</button> <button onclick='eq(12,3)'>every year</button>.</p> <p>Felix has <button onclick='eq(12,5)'>29 buttons</button> in his collection. He will collect <button onclick='eq(12,7)'>12</button> <button onclick='eq(12,6)'>new buttons</button> <button onclick='eq(12,8)'>every year</button>. <p>Felicia and Felix collect buttons for k years. After how many years will Felicia have <button onclick='eq(12,4)'>more</button> buttons than Felix?</p>",
   Equation: ['12 ',' + ', ' 29', 'k', ' > ', ' 29 ',' + ', ' 12', 'k' ],
  Translation:"https://translate.google.com/?sl=en&tl=es&text=Felicia%20has%2012%20buttons%20in%20her%20collection.%20She%20will%20collect%2029%20new%20buttons%20every%20year.%0A%0AFelix%20has%2029%20buttons%20in%20his%20collection.%20He%20will%20collect%2012%20new%20buttons%20every%20year.%0A%0AFelicia%20and%20Felix%20collect%20buttons%20for%20k%20years.%20After%20how%20many%20years%20will%20Felicia%20have%20more%20buttons%20than%20Felix%3F&op=translate"
  }
];

function showQuestion(n) {
  questionArea.innerHTML = Questions[n].Question;
equationShowing = ['','','','','',''];
  equationArea.innerHTML = equationShowing.join('');
  translateArea.innerHTML = "<a href='" + Questions[n].Translation + "' target='_blank'>Translation and Text to Speech</a>"
}

function eq(q,n){
  equationShowing[n] = Questions[q].Equation[n];
  equationArea.innerHTML = equationShowing.join('');
}

function AFTER() {
  equationShowing[3] = '';
  equationShowing[4] = '';
  equationShowing[5] = '';
  equationArea.innerHTML = equationShowing.join('');
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion === Questions.length || currentQuestion > Questions.length ) {
    questionArea.innerHTML = "Questions Complete!";
    currentQuestion = -1;
  } else {
  showQuestion(currentQuestion);
  }
}

function previousQuestion() {
  if (currentQuestion > 0 ) {
    currentQuestion--;
    showQuestion(currentQuestion);
  } else if (currentQuestion === -1){
    currentQuestion = Questions.length - 1;
    showQuestion(currentQuestion);
  }
}

showQuestion(0);

