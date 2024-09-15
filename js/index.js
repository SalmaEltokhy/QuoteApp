// function generateQuote(){
//    var name=['ssssssssssss','sssssss'];
//    var text=['nnnnnnnnnnnnnn','ffffffffffffffffff']
//    var x= Math.floor(Math.random()*name.length)
//    var x= Math.floor(Math.random()*text.length)
//    document.getElementById('quoteOutput').innerHTML=name[x];
//    document.getElementById('authorOutput').innerHTML=text[x]
// }

function generateQuote(){

var listQuote=[
    {
        Text:`"It's not what happens to you, but how you react to it that matters."`,
        userName:`--Epictetus`
    },
    {
        Text:`"Do not take life too seriously. You will not get out alive."`,
        userName:`--Elbert Hubbard`
    },
    {
        Text:`"Resentment is like drinking poison and waiting for your enemies to die."`,
        userName:`--Nelson Mandela`,
    },
    {
        Text:`"The best revenge is massive success."`,
        userName:`--Frank Sinatra`
    },
    {
        Text:`"You miss 100% of the shots you don't take."`,
        userName:`--Wayne Gretzy`
    },
    
];
var num= Math.floor(Math.random()*listQuote.length);
document.getElementById('quoteOutput').innerHTML=listQuote[num].Text;
document.getElementById('authorOutput').innerHTML=listQuote[num].userName;
}











