

function updateCardImg(fieldName){
    if (fieldName == "date"){
        let date = document.getElementById("expiry-month-input").value.padStart(2, '0') + "/" + document.getElementById("expiry-year-input").value;
        document.getElementById("card-img-date").innerHTML = date;
    } else{
        document.getElementById("card-img-" + fieldName).innerHTML = document.getElementById(fieldName + "-input").value;
    }
}

//remove letters from a number string
function removeTypedLetters(str){
    if (isNaN(str.charAt(str.length - 1))){
        str = str.slice(0, str.length - 1);
    }
    return str;
}


function updateName(){
    updateCardImg("name");
}

function updateCardNumber(){
    var cardNo = removeTypedLetters(document.getElementById("number-input").value)
    cardNo = cardNo.split(" ").join(""); // remove hyphens
    if (cardNo.length > 0) {
      cardNo = cardNo.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    document.getElementById("number-input").value = cardNo;

    updateCardImg("number");
}

function updateExpiryMonth(){
    var month = document.getElementById("expiry-month-input").value;

    month = removeTypedLetters(month);

    
    if ((parseInt(month) >= 10 && parseInt(month) <= 12) || (parseInt(month) >= 3)){ //if month is certainly fully entered:
        document.getElementById("expiry-year-input").focus(); //move onto year
    }

    document.getElementById("expiry-month-input").value = month;
    updateCardImg("date");
}

function updateExpiryYear(){
    var year = document.getElementById("expiry-year-input").value;

    year = removeTypedLetters(year);


    document.getElementById("expiry-year-input").value = year;
    updateCardImg("date");
}

function updateCVC(){
    var cvc = document.getElementById("cvc-input").value;
    cvc = removeTypedLetters(cvc);
    document.getElementById("cvc-input").value = cvc;
    updateCardImg("cvc");
}