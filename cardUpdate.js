

function updateCardImg(fieldName){
    if (fieldName == "date"){
        let date = document.getElementById("expiry-month-input").value + "/" + document.getElementById("expiry-year-input").value;
        document.getElementById("card-img-date").innerHTML = date;
    } else{
        document.getElementById("card-img-" + fieldName).innerHTML = document.getElementById(fieldName + "-input").value;
    }
}