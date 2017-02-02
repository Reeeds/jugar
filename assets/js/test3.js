$ (document).ready(function() {
// generateBookingTable();

$("#calc").click(function(){

   $("tr.item").each(function(){
      var text = $(this).find("td:eq(2)").text();
      var categoryResult = evalCategories(text);

      var $tag = $('<span />').addClass(categoryResult).text(categoryResult);

      $(this).find(".item-category").empty().append($tag);
   });
});

$("#updateRow").click(function(){
  alert("Hoi");
});

function evalCategories(text) {
  var text = text.replace(/[^a-zA-Z\s]+/g,''); // regex only letters and spaces
  var textWords = text.split(" ");
  var category = "";
    $.each(categories, function(key, items) {
      for (i = 0; i < textWords.length; i++) {
        if (items.indexOf(textWords[i].toLowerCase()) !== -1) {
          category = key;
          return false;
        }
      }
  	});
  	if (category !== "") {
  	  return  category;
  	}
  	else {
  	  return "keineKategorie";
  	}

}

// function generateBookingTable() {
// //console.log("generateTable ausgeführt");
//   var options = { items: bookings, target: $("#item-table-body")};
//   $.each(options.items, function(idx,item) {
//     $('<tr class="item">' +
//         '<td>' + idx + '</td>' +
//         '<td>' + item.Valuta + '</td>' +
//         '<td>' + item.Buchungstext + '<br>' + item.Details + '</td>' +
//         '<td>' + item.Gutschrift + '</td>' +
//         '<td>' + item.Belastung + '</td>' +
//         '<td class="item-category"></td>' +
//       '</tr>').appendTo(options.target);
//
//   });
//
// }

});


/*
"Buchungsdatum": "24.01.2017",
    "Valuta": "23.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 761619994",
    "Details": "Bezugsort: VOCO AG\nTransaktionsdatum: 23.01.17 / 12:39:02\nKarten-Nr.: 76809406\nBetrag: CHF 37.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 37.1,
    "Saldo": 3462.9


    */
