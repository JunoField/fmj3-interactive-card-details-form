document.onkeydown = (e => {
    e = e || window.event;
    if ((e.which || e.keyCode) == 13) {
        beginValidation();
    }
  })


function isEmpty(str){
    return !str.value.trim().length
}

function throwError(input, message){    
    document.getElementById("error-msg-" + input).innerHTML = message;
    document.getElementById("error-msg-" + input).classList.remove("hidden");
    if (input == "expiry"){
        document.getElementById("expiry-month-input").classList.add("input-error-state");
        document.getElementById("expiry-year-input").classList.add("input-error-state");
    } else{
        document.getElementById(input + "-input").classList.add("input-error-state");
    }

    
}

function resetErrors(){
    var standardInputs = ["name", "number", "cvc"];
    standardInputs.forEach((input) => {
        document.getElementById("error-msg-" + input).classList.add("hidden");
        document.getElementById(input + "-input").classList.remove("input-error-state");
    });

    document.getElementById("expiry-month-input").classList.remove("input-error-state");
    document.getElementById("expiry-year-input").classList.remove("input-error-state");
    document.getElementById("error-msg-expiry").classList.add("hidden");

}


function beginValidation(){
    let isError = false;
    resetErrors();

    //check name is not empty:
    if (isEmpty(document.getElementById("name-input"))){
        throwError("name", "Can't be blank");
        isError = true;
    }

    //check card number is not empty and is the correct format:
    if (isEmpty(document.getElementById("number-input"))){
        throwError("number", "Can't be blank");
        isError = true;
    } else if(!document.getElementById("number-input").value.replace(/ /g,'').match(/\d{16}/) ){ //check for a 16 digit number
        throwError("number", "Wrong format, numbers only");
        isError = true;
    }

    //check expiry date is not empty and is not in the past:
    if (isEmpty(document.getElementById("expiry-month-input")) || isEmpty(document.getElementById("expiry-year-input"))){
        throwError("expiry", "Can't be blank")
        isError = true;
    } else{
        var currentDate = new Date();
        var currentMonth = currentDate.getUTCMonth() + 1;
        var currentYear = currentDate.getUTCFullYear() - 2000;
        /*"Get your great grandchlidren to fix this one day" - a user on stack overflow*/

        var month = parseInt(document.getElementById("expiry-month-input").value);
        var year = parseInt(document.getElementById("expiry-year-input").value);
        if (currentYear > year || (currentYear == year && currentMonth > month)){
            throwError("expiry", "Card expired");
            isError = true;
        }
    }

    //check cvc is valid:
    if (isEmpty(document.getElementById("cvc-input"))){
        throwError("cvc", "Can't be blank");
        isError = true;
    } else if (document.getElementById("cvc-input").value.length != 3 || isNaN(document.getElementById("cvc-input").value)){
        throwError("cvc", "Must be 3 digits");
        isError = true;
    }

    if (!isError){
        openCompleteState();
    }

}



function openCompleteState(){
    document.getElementById("payment-form").classList.add("hidden");
    document.getElementById("complete-state").classList.remove("hidden");
}