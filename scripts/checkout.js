// Validate that the user has filled in address and postal code in shipping
function validateAddress() {
    var address1 = document.getElementById("address-input-1").value;
    var postalcode = document.getElementById("address-input-postal-code").value;

    if( address1 == "") { 
        alert( "Please fill in your address.");
    } else if ( postalcode == "") {
        alert( "Please fill in your postal code.");
    } else {
        location.href = "[9]-checkout-shipping.html";
    }
}

// Validate that the user has filled in all areas in payment
function validatePayment() {
    var card1 = document.getElementById("card1").value;
    var card2 = document.getElementById("card2").value;
    var card3 = document.getElementById("card3").value;
    var card4 = document.getElementById("card4").value;
    var expirydate1 = document.getElementById("expirydate1").value;
    var expirydate2 = document.getElementById("expirydate2").value;
    var cvc = document.getElementById('cvc').value;

    if( card1 == "" || card2 == "" || card3 == "" || card4 == ""
     || expirydate1 == "" || expirydate2 == "" || cvc == "") {
         alert( "Please ensure you have entered all the required details.")
     } else {
        location.href = "[10]-checkout-success.html";
     }
}
