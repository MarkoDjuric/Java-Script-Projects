


    var quotes = [

        {
            quote:'Thinking: the talking of the soul with itself.',
            name:'Plato'
        },
        {
           quote:'We can\'t help everyone, but everyone can help someone.',
           name:'Ronald Regan'
       },
       {
           quote:'Each day provides its own gifts.',
           name:'Marcus Aurelius'
       },
       {
           quote:'I love those who yearn for the impossible.',
           name:'Gethe'
       },
       {
           quote:'No matter what people tell you, words and ideas can change the world.',
           name:'Robin Williams'
       }

         ];


var btn = document.getElementById('quoteBtn');
var forQuote = document.getElementById('quote');
var autor = document.getElementById('quoteAutor');

btn.addEventListener('click', () => {
   var randomQuote = Math.floor(Math.random()*quotes.length);
   forQuote.innerHTML = `"${quotes[randomQuote].quote}"` 
    autor.innerHTML = quotes[randomQuote].name;
})
