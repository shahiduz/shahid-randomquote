
const nqBtn=document.querySelector('#load-quote');
const autoBtn=document.querySelector('#load-quote-auto');
const div123=document.querySelector('.container');

let exevalue=0;


const quote1 ={
    quoteno: 1,
    quote: `Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.`,
    authore:'Nelson Mandela',
    socialm:'Messanger',
    year:2012,
    color:'#ffff0054'
};

const quote2 ={
    quoteno: 2,
    quote: `The way to get started is to quit talking and begin doing.`,
    authore:'Walt Disney',
    socialm:'Whatsapp',
    year:2013,
    color:'#b3a30d54'
};


const quote3 ={
    quoteno: 3,
    quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
    authore:'Steve Jobs',
    socialm:'Twitter',
    year:2014,
    color:'#99126c54'
};

const quote4 ={
    quoteno: 4,
    quote: `If life were predictable it would cease to be life, and be without flavor.`,
    authore :'Eleanor Roosevelt',
    socialm :'Youtube',
    year:2015,
    color:'#ad508e94'
};

const quote5 ={
    quoteno: 5,
    quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.` ,
    authore:'Oprah Winfrey',
    socialm:'facebook',
    year:2016,
    color:'#5050ad94'
};

const quote6 ={
    quoteno: 6,
    quote: `The future belongs to those who believe in the beauty of their dreams` ,
    authore:'Eleanor Roosevelt',
    socialm:'facebook',
    year:2016,
    color:'#5050ad94'
};




const quote7 ={
    quoteno: 7,
    quote: `Tell me and I forget. Teach me and I remember. Involve me and I learn.` ,
    authore:'Benjamin Franklin',
    socialm:'facebook',
    year:2016,
    color:'#5050ad94'
};


const quote8 ={
    quoteno: 8,
    quote: `Do not go where the path may lead, go instead where there is no path and leave a trail.` ,
    authore:'Ralph Waldo Emerson',
    socialm:'facebook',
    year:2016,
    color:'#5050ad94'
};




const quote9 ={
    quoteno: 9,
    quote: `It is during our darkest moments that we must focus to see the light.` ,
    authore:'Aristotle',
    socialm:'facebook',
    year:2016,
    color:'#5050ad94'
};



const quote10 ={
    quoteno: 10,
    quote: `The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.` ,
    authore:'Helen Keller',
    socialm:'facebook',
    year:2016,
    color:'#5050ad94'
};

 
const rquote=[quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9,quote10];



let  range=rquote.length;
// let maxValue=range-1;
let maxValue=range;
// console.log(maxValue);

function getRandomQuote(maxValue){

   let quotes=Math.random()*maxValue;
    quotes=Math.floor(quotes);
// console.log(quotes);


   while(exevalue==quotes){
    let quotes=Math.random()*maxValue;
    return quotes=Math.floor(quotes);
   }

   console.log(quotes);
   exevalue=quotes;

   return quotes;

}





// function diceRoll(min, max){
//     return Math.floor(Math.random() * (max - min)) + min;  
// }

// let result=diceRoll(0,5);
// // console.log(result);
// console.log(rquote[randomnumber].quote);


nqBtn.addEventListener('click', function(e){

    autoBtn.textContent="Run Auto Mode";
    let randomnumber= getRandomQuote(maxValue);
const randomQuote=document.querySelector('p.quote');

randomQuote.style.backgroundColor=rquote[randomnumber].color; 
randomQuote.innerHTML=rquote[randomnumber].quote;

div123.style.backgroundColor=rquote[randomnumber].color; 

const refer=document.querySelector('p.source');
refer.querySelector('span.author').innerText=rquote[randomnumber].authore;


const sos=document.querySelector('p.source').querySelector('span.citation');
sos.innerText=rquote[randomnumber].socialm;
refer.appendChild(sos);


const yearr=document.querySelector('p.source').querySelector('span.year');
yearr.innerText=rquote[randomnumber].year;
refer.appendChild(yearr);
// refer.insertBefore(sos,refer);



});




autoBtn.addEventListener('click', function(e){

    
    if(autoBtn.textContent=="Stop Auto Run"){
        autoBtn.textContent="Run Auto Mode";
    }else{
        autoBtn.textContent="Stop Auto Run";
    }
    

});

function rendomQuoteGeneration(){
    let randomnumber= getRandomQuote(maxValue);
const randomQuote=document.querySelector('p.quote');

randomQuote.style.backgroundColor=rquote[randomnumber].color; 
randomQuote.innerHTML=rquote[randomnumber].quote;

div123.style.backgroundColor=rquote[randomnumber].color; 

const refer=document.querySelector('p.source');
refer.querySelector('span.author').innerText=rquote[randomnumber].authore;


const sos=document.querySelector('p.source').querySelector('span.citation');
sos.innerText=rquote[randomnumber].socialm;
refer.appendChild(sos);


const yearr=document.querySelector('p.source').querySelector('span.year');
yearr.innerText=rquote[randomnumber].year;
refer.appendChild(yearr);
}




function printQuote() {

    // console.log('Here i am!');
    if(autoBtn.textContent=="Stop Auto Run"){
        rendomQuoteGeneration();
    }else{
       //nothing  
    }

}

setInterval(function () { printQuote(); }, 3000);


// prepared By: Md. Shahiduzzaman, 01556335332 , Batch-SSB-364
