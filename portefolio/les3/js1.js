"use strict";
//oef 2.3, 2.4
//$(document).ready(function () {
//    $("#inhoud").addClass("titel");
//    $("#inhoud").html("Starten met JQuery!");
//    $("#inhoud").animate(
//        {fontSize: "90px"},
//        2500
//    );
//    $("p").show("slow"); 
//});

$(document).ready(function () {
    $('tbody tr:odd').css("background-color","#ccc");
    $('tbody tr:even').css("background-color", "#eee");
    
    $("#filter").change(function (){
        var tekst = $(this).val();
        $("tbody tr").hide();
        $("tbody tr td:contains('") + tekst + 
        "')").parent().show();
    });
    
});

                 
                 
                 
                 

