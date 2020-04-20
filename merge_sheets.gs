/*
Code for merging all sheets into one sheet.
https://docs.google.com/spreadsheets/d/1yAmq-NcgbmzEEn0oG7A1cUjRHuYkjs39OBlFUx2aNX4
copyright Eric Chow 2020

*/

function combineData(){
 var doc = SpreadsheetApp.getActiveSpreadsheet();
 var sheets = doc.getSheets(); // get all the sheets
 var outSheet = doc.getSheetByName("combined"); // set where we want to write the results

 var result = [];
 for (i in sheets){ // loop across all the sheets
//   if (sheets[i].getSheetName().substring(0,1) == "_"){ // if sheetname starts with 'follower' then
     var target = sheets[i].getSheetName(); // extract users name for target column
     var data = sheets[i].getRange("A1:G9").getValues(); // get data in rage
//   }

 }

  outSheet.getRange("A1:G9").setValues(result); // insert data in 'combined' sheet
}



/*
function insertData(out, in) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var values = sheet.getRange("A1:D4").getValues(); // Retrieve values

  var result = [];
  for (var i = 1; i < values.length; i++) {
    for (var j = 1; j < values[i].length; j++) {
      result.push([values[0][i], values[j][0], values[j][i]]);
    }
  }

  sheet.getRange("A6:C14").setValues(result); // Put result
}*/
