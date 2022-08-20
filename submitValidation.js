function isEmpty(str){
    return !str.value.trim().length
}

function beginValidation(){
    let isError = false;

    //check name is not empty:
    if (isEmpty(document.getElementById("name-input"))){
        document.getElementById("error-msg-name").classList.remove("hidden");
        isError = true;
    }

    //check card number is not empty and is the correct format:
    if (isEmpty(document.getElementById("number-input"))){
        document.getElementById("error-msg-number").innerHTML = "Can't be blank";
        document.getElementById("error-msg-number").classList.remove("hidden");
        isError = true;
    } else if(!document.getElementById("number-input").value.replace(/ /g,'').match(/\d{16}/) ){ //check for a 16 digit no
        document.getElementById("error-msg-number").innerHTML = "Wrong format, numbers only";
        document.getElementById("error-msg-number").classList.remove("hidden");
        isError = true;
    }

    //check expiry date is not empty and is not in the past:
    if (isEmpty(document.getElementById("expiry-month-input")) || isEmpty(document.getElementById("expiry-year-input"))){
        document.getElementById("error-msg-date").innerHTML = "Can't be blank";
        document.getElementById("error-msg-date").classList.remove("hidden");
        isError = true;
    } else{
        var currentDate = new Date();
        var currentMonth = currentDate.getUTCMonth() + 1;
        var currentYear = currentDate.getUTCFullYear() - 2000;
        /*"Get your great grandchlidren to fix this one day" - a user on stack overflow*/
        var month = parseInt(document.getElementById("expiry-month-input").value);
        var year = parseInt(document.getElementById("expiry-year-input").value);
        if (currentYear > year || (currentYear == year && currentMonth > month)){
            document.getElementById("error-msg-date").innerHTML = "Card expired";
            document.getElementById("error-msg-date").classList.remove("hidden");
            isError = true;
        }
    }

    //check cvc is valid:
    if (isEmpty(document.getElementById("cvc-input"))){
        document.getElementById("error-msg-cvc").innerHTML = "Can't be blank";
        document.getElementById("error-msg-cvc").classList.remove("hidden");
        isError = true;
    } else if (document.getElementById("cvc-input").length != 3 || isNaN(document.getElementById("cvc-input"))){
        document.getElementById("error-msg-cvc").innerHTML = "Must be 3 digits";
        document.getElementById("error-msg-cvc").classList.remove("hidden");
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