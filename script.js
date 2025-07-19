
let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.person');


const quotes = [
  {
    quote: "I do the very best I know how, the very best I can; and I mean to keep doing so until the end.",
    person: "Abraham Lincoln"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    person: "Ralph Waldo Emerson"
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: "Albert Einstein"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama"
  }
];


// function ahead

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

btn.addEventListener('click', function() {
  let randomQuote = getRandomQuote();
  quote.textContent = randomQuote.quote;
  author.textContent = randomQuote.person;
});
