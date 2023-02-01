let changeQuote =
    [
        'Gud er død! – Friedrich Nietzsche.',
        'Du må selv være den forandring, som du ønsker at se i verden – Mahatma Gandhi.',
        'Og til slut er det ikke mængden af år i dit liv, der tæller – det er mængden af liv i dine år – Abraham Lincoln.',
        'Der findes to ting, som er uendelige: Universet og den menneskelige dumhed. Og når det gælder universet, er jeg endda ikke sikker – Albert Einstein',
        'Små hjerter kan også føle store ting – Grisling',
        'En ven er én, der ved alt om dig og stadig elsker dig – Elbert Hubbart',
        'Folk er ligeså lykkelige, som de beslutter sig for at være – Abraham Lincoln',
        'Der findes tre trofaste venner: en gammel hustru, en gammel hund og rede penge – Benjamin Franklin',
        'Livet må leves forfra, men kan kun forstås bagfra – Søren Kierkegaard',
        'Når man bliver ved at gå, så går det nok – Søren Kierkegaard'
    ];


let newQuote = document.querySelector("#changeQuote")
let randomNumber = Math.floor(Math.random()*changeQuote.length)
    
newQuote.textContent = changeQuote[randomNumber]

console.log(randomNumber)