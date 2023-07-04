// Fonctions natives
alert('Hello There !');

// Fonctions utilisateurs
// -- 

function addition(a,b)
{
    return a + b;
}
addition(21,21);


// Fonctions anonyme
const myFnc = function(){
    return "something";
}
myFnc();


const btn = document.querySelector('#my-btn');
btn.addEventListener('click', function(){
    // Do something
})

const btn2 = document.querySelector('#my-btn-2');
btn2.addEventListener('click', doSomething);

function doSomething(){
}


() => { /* doSometing */ }
(arg) => {console.log(arg)}
arg => console.log(arg);
(arg1, arg2) => {}


class MyAwesomeClass
{
    btn = document.querySelector('#my-btn');

    btn.addEventListener('click', function(){
        return this;
    })
    
    btn.addEventListener('dblclick', () => {
        return this;
    })
}