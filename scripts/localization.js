$(document).ready(setlanguage);
function setlanguage(){
    const lang = getLanguage();
    $(".section-title").text(translations[lang].fleet);
    $(".Water h2").text(translations[lang].waterTours);
    $("#Language h2").text(translations[lang].language);
    $("#Land h2").text(translations[lang].land);
    $("#Bike h2").text(translations[lang].bike);
    $("#events h2").text(translations[lang].events);
    $("#accomodations h2").text(translations[lang].accomodations);
    $(".formbox h2").text(translations[lang].booking);
    $(".formbox h2").text(translations[lang].booking);  
    $("#intro").text(translations[lang].intro); 
    $(".header").text(translations[lang].header); 
    $(".topbar-left").text(translations[lang].topbar); 
    $("#fname").text(translations[lang].fname); 
    $("#lname").text(translations[lang].lname); 
    $("#email").text(translations[lang].Email); 
    $("#btype").text(translations[lang].biketype); 
    $("#quantity").text(translations[lang].Quantity); 
    $("#date").text(translations[lang].Date); 
    $("#bookbutton").text(translations[lang].Bookbutton); 
    $("#information").text(translations[lang].information); 
    $("#contact").text(translations[lang].contact); 
    $("#address span").text(translations[lang].address); 
    $("#phone span").text(translations[lang].phone); 
}
$(function () {
    const params = new URLSearchParams(window.location.search);
    const currentLang = params.get("lang") || "en";
    // Update button text
    $("#langToggle").text(currentLang === "es" ? "EN" : "ES");
    $("#langToggle").on("click", function () {
        const params = new URLSearchParams(window.location.search);
        if (params.get("lang") === "es") {
            params.set("lang", "en");
        } else {
            params.set("lang", "es");
        }
            params.set("Rainer", "winkler");
        window.location.search = params.toString();
    });
});
function getLanguage() {
    return new URLSearchParams(window.location.search).get("lang") || "en";
}