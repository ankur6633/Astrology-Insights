

// Based on Month  Size is 12
const ZodiacSigns = [
  "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", 
  "Cancer", "Leo", "Vigro", "Libra", "Scorpio", "Sagittarius"
];

          //Based on month 31 days
const compliments = [
  "You have a radiant smile!",
  "Your positivity is infectious.",
  "You're a great listener.",
  "You light up the room.",
  "Your energy is amazing!",
  "You're incredibly thoughtful.",
  "You bring out the best in people.",
  "You're a true original.",
  "You have a heart of gold.",
  "You inspire those around you.",
  "You make people feel seen.",
  "You're so creative!",
  "You are full of wisdom.",
  "You handle challenges gracefully.",
  "Your sense of humor is wonderful.",
  "You have a calming presence.",
  "You're always growing.",
  "You spread kindness like confetti.",
  "You're strong and resilient.",
  "You have great style!",
  "Your mind is brilliant.",
  "You make the world better.",
  "You're an amazing friend.",
  "You are pure sunshine!",
  "You're full of good ideas.",
  "You're brave and bold.",
  "You're a problem solver.",
  "You always see the bright side.",
  "You're emotionally intelligent.",
  "You're worthy of all good things.",
  "You are loved just the way you are."
];


          // Size 20  Based on date 
const victimCompliments = [
  "You always go out of my way for others, but no one ever notices.",
  "You give my best to everyone, but somehow I'm always left behind.",
  "You care deeply, even when people don’t care back.",
  "You listen to everyone’s problems, but no one asks about mine.",
  "You never expect anything, yet I end up disappointed every time.",
  "You support others through everything, but when I need help, there’s silence.",
  "You forgive easily, even when people don’t deserve it.",
  "You stay loyal to people who forget me easily.",
  "You put others before myself, and still get taken for granted.",
  "You’m always there for people who wouldn’t do the same for me.",
  "You understand everyone’s silence, but no one hears mine.",
  "You hide my pain just to keep others smiling.",
  "You keep giving, even when I’m running on empty.",
  "You never complain, but that doesn’t mean I’m okay.",
  "You love hard, even when I get hurt in return.",
  "You try to see the good in people, even when they only show me the bad.",
  "You stay kind, even when life’s been cruel to me.",
  "You protect everyone’s peace, but lose my own in the process.",
  "You say I’m fine because I know no one really wants to hear the truth.",
  "You smile for everyone, even when I’m breaking inside."
];


    // Size 30 
const lifeRecommendations = [
  "Feed a street dog or stray animal today.",
  "Call your parents or loved ones and tell them you love them.",
  "Drink enough water and stay hydrated.",
  "Help someone without expecting anything in return.",
  "Declutter one corner of your room or desk.",
  "Smile at a stranger — it costs nothing.",
  "Plant a tree or take care of a plant.",
  "Write down three things you're grateful for.",
  "Spend 10 minutes in silence and reflect.",
  "Donate old clothes to someone in need.",
  "Give a genuine compliment to someone today.",
  "Read a few pages of a good book.",
  "Practice deep breathing for 5 minutes.",
  "Walk barefoot on grass or sand for grounding.",
  "Support a local small business.",
  "Forgive someone and let go of old grudges.",
  "Say 'thank you' more often and mean it.",
  "Limit your screen time for a day.",
  "Give food or water to birds or animals.",
  "Meditate or try yoga for relaxation.",
  "Avoid gossip and speak kindly today.",
  "Pick up trash you see on the street.",
  "Cook something healthy for yourself.",
  "Volunteer your time or skills, even briefly.",
  "Reconnect with an old friend.",
  "Practice random acts of kindness.",
  "Write a handwritten note to someone special.",
  "Help a child with their studies.",
  "Compliment your reflection in the mirror.",
  "End the day by forgiving yourself for mistakes."
];

     // size 20 
const futurePredictions = [
  "You will become a crorepati sooner than you think.",
  "A dream you've held for years will finally come true.",
  "You will receive unexpected money or a gift.",
  "Your name will be known for something great.",
  "You will soon meet someone who changes your life.",
  "An opportunity you've been waiting for is just around the corner.",
  "Your hard work will pay off beyond your imagination.",
  "A long-awaited trip will become reality.",
  "You will build a life you once only dreamed of.",
  "Someone special will enter your life very soon.",
  "You are destined to be a leader in your field.",
  "Success will find you in the most unexpected way.",
  "You will inspire people with your story.",
  "You are going to achieve something historic.",
  "Your happiness is going to multiply rapidly.",
  "You will overcome your biggest fear and become stronger.",
  "A life-changing opportunity will knock on your door.",
  "The coming year will bring immense joy and growth.",
  "You will soon attract wealth, health, and wisdom.",
  "Your zodiac favors great fortune and endless possibilities."
];


const form = document.getElementById("astroform");

form.addEventListener('submit',(event) => {
  event.preventDefault();

  const Name = document.getElementById('name').value;

  const Surname = document.getElementById('surname').value;

  const Day = Number(document.getElementById('day').value);

  const Month = Number(document.getElementById('month').value);
  
  const Year = Number(document.getElementById('year').value);



  const result = document.getElementById('result');
   
  const first_message = `Hello ${Name} ${Surname}`;
  const second_message = `Your Zodiac Sign is ${ZodiacSigns[Month-1]}`;
  const third_message = compliments[Day-1];

  let index = Math.floor(Math.random()*20);
  const fourth_message = victimCompliments[index];

  index = (Name.length * Surname.length * Year) % 30; 
  const fifth_message = lifeRecommendations[index];

  index = (Day * Month * Year) % 20;
  const sixth_message = futurePredictions[index];



  result.innerText = `${first_message}, \n  ${second_message}. \n ${third_message} \n ${fourth_message} \n ${fifth_message} \n ${sixth_message}
`;


})
