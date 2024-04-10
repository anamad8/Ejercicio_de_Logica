function findUniqueNumber() {
    var input = document.getElementById("inputNumbers").value;

    if (!isValidInput(input)) {
        document.getElementById("result").innerText = "Entrada inválida: solo se permiten números separados de comas.";
        return;
    }

    var numbers = input.split(',').map(Number);
    
    var uniqueNumber = findUnique(numbers);
    if (uniqueNumber === undefined) {
        
        document.getElementById("result").innerText = "No se pudo detectar el número";
    }else{
        document.getElementById("result").innerText = "El número único es: " + uniqueNumber;
    }
    
}

function isValidInput(input) {
    var regex = /^[0-9,]+$/;
    return regex.test(input);
}


function findUnique(numbers) {
    let seen = new Set();
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        if (seen.has(num)) {
            seen.delete(num);
        } else {
            seen.add(num);
        }
    }
    return [...seen][0];
}

function resetForm() {
    document.getElementById("inputNumbers").value = "";
    document.getElementById("result").innerText = "";
}

