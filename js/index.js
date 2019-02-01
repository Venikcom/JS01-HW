const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter c'));

const result = sloveSquareEquat(a, b, c);
alert(result);

function sloveSquareEquat(a, b, c) {
    if (a===0) {
        return "Cannot to be solved!";
    }
    
    const d = calcDiscr(a, b, c);
    let x1;
    let x2;
   
    function calcDiscr(a, b, c) {
    return (b * b) - (4 * a * c);
}
    
     if (d > 0) {
        x1 = (-b - Math.sqrt(d))/( 2 * a );
        x2 = (-b + Math.sqrt(d))/( 2 * a );
        return 'x1 = ' + x1 + 'x2 ' + x2 + '' + d;
    } 
    
    else if (d===0) {
        x1 = b/(2*a);
        return 'x1 = ' + x1 + 'x2 ' + x2 + '' + d;
    } 
    
    else if (d < 0) {
        return d;
    }
}            
            