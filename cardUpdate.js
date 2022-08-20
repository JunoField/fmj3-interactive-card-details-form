

function updateCardImg(fieldName){
    if (fieldName == "date"){
        let date = document.getElementById("expiry-month-input").value + "/" + document.getElementById("expiry-year-input").value;
        document.getElementById("card-img-date").innerHTML = date;
    } else{
        document.getElementById("card-img-" + fieldName).innerHTML = document.getElementById(fieldName + "-input").value;
    }
}

function updateCardNumber(){
    var foo = (document.getElementById("number-input").value).split(" ").join(""); // remove hyphens
    if (foo.length > 0) {
      foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    document.getElementById("number-input").value = foo;

    updateCardImg("number");
}

function updateExpiryMonth(){
    var month = document.getElementById("expiry-month-input").value;
    if (isNaN(month.charAt(month.length - 1))){
        document.getElementById("expiry-month-input").value = month.slice(0, month.length - 1);
    } else{
        if (month == ""){

        }
    }
}