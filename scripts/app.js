// javascript uses function scope

// scope refers to the rules that determine where within our program,
// variables and functions are accessible

/*start of global scope*/
var funct = function funct() {
    /*start of scope of funct*/
    var a = 2,
        b = 3;

    var funct2 = function funct2() {
        /*start of scope of funct2*/
        console.log(a + b);
        /*end of scope of funct2*/
    };

    // funct2();
    // using a callback, setTimeout
    // callbacks are functions that execute outside of the scope
    // calls funct2 after funct is executed but
    // you have to wait for one second to do so.
    setTimeout(funct2, 1000);
    /*end of scope of funct*/
};

var funct3 = function funct3() {
    /*start of scope of funct3*/
    console.log(a + b);
    /*start of scope of funct3*/
};
/*end of global scope*/

funct();

// funct3();


/*closure defined*/

// A closure is the local variables for a function
// kept alive after the function has returned(javascript.com)

// Closure is when a function is able to remember and access
// its lexical scope even when that function is executing outside
// its lexical scope(Kyle Simpson)

// A closure is a function having access to the parent scope, even after the parent
// function has closed(w3c schools)


// second example (does not work, since my html is not configured for it)
/*
(function counter() {
    var cnt = 0,
        item1 = document.querySelector("#item1");
        item2 = document.querySelector("#item2");

        var print = function print() {
            console.log(cnt);
        };

        item1.addEventListener("click", function count1() {
            cnt++;
        });

        item2.addEventListener("click", function count2() {
            cnt++;
        });
})();
*/


// count 1 and count2 has closure
// over the scope of counter

// another way to say it.
// count1() and count2() still
// retains a reference to the
// scope of counter,
// and will call that closure

// another way to explain
// closure is the module patter.

var APP = (function module() {
    var a = 3;

    var printIt = function printIt(val) {
        console.log(val);
    }

    var sumIt = function sumIt(b) {
        printIt(a + b);
    }

    var multiplyIt = function multiplyIt(b) {
        printIt(a * b);
    };

    return {
        sumIt: sumIt,
        multiplyIt: multiplyIt
    };

})();

