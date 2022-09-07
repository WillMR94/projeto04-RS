let numberOne=Number((prompt('Digite o primeiro número: ')))
let numberTwo=Number((prompt('Digite o segundo número: ')))
let add=(numberOne+numberTwo);
let subtraction=(numberOne-numberTwo);
let multiplication=(numberOne*numberTwo);
let division=(numberOne/numberTwo);
let rest=(numberOne%numberTwo);

alert('a soma dos números é: '+add);
alert('a subtração dos números é: '+subtraction);
alert('a multiplicação dos números é: '+multiplication);
alert('a divisão dos números é: '+division);
alert('o resto da divisão dos números é: '+rest);
if( add % 2 == 0){alert('O resultado da soma é '+ add + ', ou seja um número par.')}
else{alert('O resultado da soma é '+ add + ', ou seja um número  impar.')};
if( numberOne == numberTwo){alert('Os numeros digitados são iguais. ')}
else{alert('Os números digitados são diferentes um do outro. ')}

