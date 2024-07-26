function togglePickupAdress(){
//wenn Abholung ausgewählt --> Adresseingabe einblenden & enablen
//sonst --> Adresseingabe ausblenden & disablen
    if(document.getElementById("rb_pickup").checked){
        document.getElementById("pickupAdressFieldset").classList.remove("d-none");
        document.getElementById("pickupAdressFieldset").disabled = false;
        document.getElementById("in_postcode").required = true; 
        document.getElementById("in_city").required = true; 
        document.getElementById("in_street").required = true; 
    }else{
        document.getElementById("pickupAdressFieldset").classList.add("d-none");
        document.getElementById("pickupAdressFieldset").disabled = true;
        document.getElementById("in_postcode").required = false; 
        document.getElementById("in_city").required = false; 
        document.getElementById("in_street").required = false; 
    }
}