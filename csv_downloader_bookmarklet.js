/*

javascript:(function()%7B%2F*%0A%0Ajavascript%3A(function()%257Bfunction%2520main()%2520%257B%250A%2520%2520%2524('table').on('click'%252C%2520tableOnClick)%253B%250A%257D%250A%250A%252F%252F%2520downloadCSV%2520and%2520exportTableToCSV%2520originally%2520from%250A%252F%252F%2520https%253A%252F%252Fwww.codexworld.com%252Fexport-html-table-data-to-csv-using-javascript%252F%250Afunction%2520downloadCSV(csv%252C%2520filename)%2520%257B%250A%2520%2520var%2520csvFile%253B%250A%2520%2520var%2520downloadLink%253B%250A%250A%2520%2520%252F%252F%2520CSV%2520file%250A%2520%2520csvFile%2520%253D%2520new%2520Blob(%255Bcsv%255D%252C%2520%257Btype%253A%2520%2522text%252Fcsv%2522%257D)%253B%250A%250A%2520%2520%252F%252F%2520Download%2520link%250A%2520%2520downloadLink%2520%253D%2520document.createElement(%2522a%2522)%253B%250A%250A%2520%2520%252F%252F%2520File%2520name%250A%2520%2520downloadLink.download%2520%253D%2520filename%253B%250A%250A%2520%2520%252F%252F%2520Create%2520a%2520link%2520to%2520the%2520file%250A%2520%2520downloadLink.href%2520%253D%2520window.URL.createObjectURL(csvFile)%253B%250A%250A%2520%2520%252F%252F%2520Hide%2520download%2520link%250A%2520%2520downloadLink.style.display%2520%253D%2520%2522none%2522%253B%250A%250A%2520%2520%252F%252F%2520Add%2520the%2520link%2520to%2520DOM%250A%2520%2520document.body.appendChild(downloadLink)%253B%250A%250A%2520%2520%252F%252F%2520Click%2520download%2520link%250A%2520%2520downloadLink.click()%253B%250A%257D%250A%250Afunction%2520exportTableToCSV(table%252C%2520filename)%2520%257B%250A%2520%2520%2520%2520var%2520csv%2520%253D%2520%255B%255D%253B%250A%2520%2520%2520%2520var%2520rows%2520%253D%2520table.querySelectorAll(%2522table%2520tr%2522)%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520for%2520(var%2520i%2520%253D%25200%253B%2520i%2520%253C%2520rows.length%253B%2520i%252B%252B)%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520var%2520row%2520%253D%2520%255B%255D%252C%2520cols%2520%253D%2520rows%255Bi%255D.querySelectorAll(%2522td%252C%2520th%2522)%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520for%2520(var%2520j%2520%253D%25200%253B%2520j%2520%253C%2520cols.length%253B%2520j%252B%252B)%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520row.push(cols%255Bj%255D.innerText)%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520csv.push(row.join(%2522%252C%2522))%253B%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%252F%252F%2520Download%2520CSV%2520file%250A%2520%2520%2520%2520downloadCSV(csv.join(%2522%255Cn%2522)%252C%2520filename)%253B%250A%257D%250A%250Afunction%2520getFileName()%2520%257B%250A%2520%2520var%2520filename%2520%253D%2520window.prompt('Save%2520file%2520as%253A')%253B%250A%2520%2520filename%2520%253D%2520filename.trim()%253B%250A%2520%2520if%2520(filename.length%2520%253D%253D%253D%25200)%2520%257B%250A%2520%2520%2520%2520filename%2520%253D%2520%2522table.csv%2522%253B%250A%2520%2520%257D%2520else%2520if%2520(filename.substr(-4).toLowerCase()%2520!%253D%253D%2520'.csv')%2520%257B%250A%2520%2520%2520%2520filename%2520%253D%2520filename%2520%252B%2520'.csv'%253B%250A%2520%2520%257D%250A%2520%2520return%2520filename%253B%250A%257D%250A%250Afunction%2520tableOnClick()%2520%257B%250A%2520%2520var%2520table%2520%253D%2520%2524(this)%255B0%255D%253B%250A%2520%2520exportTableToCSV(table%252C%2520getFileName())%253B%250A%2520%2520%2524('table').off('click'%252C%2520tableOnClick)%253B%250A%257D%250A%250Amain()%253B%257D)()%253B%0A%0A*%2F%0A%0A%2F*%0A%20%20Install%3A%0A%20%20%20%20-%20copy%20the%20above%20bookmarklet%20text%20within%20the%20asterisks.%20Copy%20all%20the%20text%20inside%20the%20asterisks%2C%20including%20%22javascript%3A%22%0A%20%20%20%20-%20on%20any%20webpage%2C%20in%20Chrome%20click%20the%20%22star%22%20button%20to%20bring%20up%20the%20Add%20Bookmark%20dialog%0A%20%20%20%20-%20delete%20the%20name%20and%20replace%20with%20%22CSV%20Downloader%22%0A%20%20%20%20-%20delete%20the%20URL%20and%20replace%20it%20with%20the%20bookmarklet%20text%20(since%20you%20copied%20it%20already%2C%20just%20paste%20it)%0A%20%20%20%20-%20save%20the%20bookmark%0A%0A%20%20Usage%3A%0A%20%20%20%20-%20click%20the%20bookmarklet%20while%20on%20any%20Canopy%20page%20to%20prime%20it%0A%20%20%20%20-%20after%20priming%20it%2C%20click%20within%20any%20table%20on%20the%20page%0A%20%20%20%20-%20first%20it%20will%20prompt%20you%20for%20the%20filename.%20if%20you%20omit%20the%20.csv%20ending%2C%20it%20will%20be%20added%20automatically%0A%20%20%20%20-%20confirm%20the%20prompt%20and%20that%20table%20will%20be%20automatically%20downloaded%20as%20a%20CSV%0A*%2F%0A%0A%2F*%0A%20%20Notes%3A%0A%20%20-%20Only%20works%20on%20sites%20with%20jquery.%20Some%20bookmarklet%20generators%20will%20include%20jQuery%20but%20the%20bookmarklet%20in%20the%20comment%20above%20does%20not.%0A%20%20-%20Our%20more%20complex%20tables%20may%20be%20formatted%20somewhat%20strangely%2C%20but%20will%20still%20be%20useful%20for%20QA%20(not%20presenting%20to%20customers%20though)%0A*%2F%0A%0Afunction%20main()%20%7B%0A%20%20%24('table').on('click'%2C%20tableOnClick)%3B%0A%7D%0A%0A%2F%2F%20downloadCSV%20and%20exportTableToCSV%20originally%20from%0A%2F%2F%20https%3A%2F%2Fwww.codexworld.com%2Fexport-html-table-data-to-csv-using-javascript%2F%0Afunction%20downloadCSV(csv%2C%20filename)%20%7B%0A%20%20var%20csvFile%3B%0A%20%20var%20downloadLink%3B%0A%0A%20%20%2F%2F%20CSV%20file%0A%20%20csvFile%20%3D%20new%20Blob(%5Bcsv%5D%2C%20%7Btype%3A%20%22text%2Fcsv%22%7D)%3B%0A%0A%20%20%2F%2F%20Download%20link%0A%20%20downloadLink%20%3D%20document.createElement(%22a%22)%3B%0A%0A%20%20%2F%2F%20File%20name%0A%20%20downloadLink.download%20%3D%20filename%3B%0A%0A%20%20%2F%2F%20Create%20a%20link%20to%20the%20file%0A%20%20downloadLink.href%20%3D%20window.URL.createObjectURL(csvFile)%3B%0A%0A%20%20%2F%2F%20Hide%20download%20link%0A%20%20downloadLink.style.display%20%3D%20%22none%22%3B%0A%0A%20%20%2F%2F%20Add%20the%20link%20to%20DOM%0A%20%20document.body.appendChild(downloadLink)%3B%0A%0A%20%20%2F%2F%20Click%20download%20link%0A%20%20downloadLink.click()%3B%0A%7D%0A%0Afunction%20exportTableToCSV(table%2C%20filename)%20%7B%0A%20%20%20%20var%20csv%20%3D%20%5B%5D%3B%0A%20%20%20%20var%20rows%20%3D%20table.querySelectorAll(%22table%20tr%22)%3B%0A%0A%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20rows.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20var%20row%20%3D%20%5B%5D%2C%20cols%20%3D%20rows%5Bi%5D.querySelectorAll(%22td%2C%20th%22)%3B%0A%0A%20%20%20%20%20%20%20%20for%20(var%20j%20%3D%200%3B%20j%20%3C%20cols.length%3B%20j%2B%2B)%0A%20%20%20%20%20%20%20%20%20%20%20%20row.push(cols%5Bj%5D.innerText.replace(%2F%22%2Fg%2C%20'%22%22'))%3B%0A%0A%20%20%20%20%20%20%20%20csv.push('%22'%20%2B%20row.join('%22%2C%22')%20%2B%20'%22')%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Download%20CSV%20file%0A%20%20%20%20downloadCSV(csv.join(%22%5Cn%22)%2C%20filename)%3B%0A%7D%0A%0Afunction%20getFileName()%20%7B%0A%20%20var%20filename%20%3D%20window.prompt('Save%20file%20as%3A')%3B%0A%20%20filename%20%3D%20filename.trim()%3B%0A%20%20if%20(filename.length%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20filename%20%3D%20%22table.csv%22%3B%0A%20%20%7D%20else%20if%20(filename.substr(-4).toLowerCase()%20!%3D%3D%20'.csv')%20%7B%0A%20%20%20%20filename%20%3D%20filename%20%2B%20'.csv'%3B%0A%20%20%7D%0A%20%20return%20filename%3B%0A%7D%0A%0Afunction%20tableOnClick()%20%7B%0A%20%20var%20table%20%3D%20%24(this)%5B0%5D%3B%0A%20%20exportTableToCSV(table%2C%20getFileName())%3B%0A%20%20%24('table').off('click'%2C%20tableOnClick)%3B%0A%7D%0A%0Amain()%3B%7D)()%3B

*/

/*
  Install:
    - copy the above bookmarklet text within the asterisks. Copy all the text inside the asterisks, including "javascript:"
    - on any webpage, in Chrome click the "star" button to bring up the Add Bookmark dialog
    - delete the name and replace with "CSV Downloader"
    - delete the URL and replace it with the bookmarklet text (since you copied it already, just paste it)
    - save the bookmark

  Usage:
    - click the bookmarklet while on any Canopy page to prime it
    - after priming it, click within any table on the page
    - first it will prompt you for the filename. if you omit the .csv ending, it will be added automatically
    - confirm the prompt and that table will be automatically downloaded as a CSV
*/

/*
  Notes:
  - Only works on sites with jquery. Some bookmarklet generators will include jQuery but the bookmarklet in the comment above does not.
  - Our more complex tables may be formatted somewhat strangely, but will still be useful for QA (not presenting to customers though)
*/

function main() {
  $('table').on('click', tableOnClick);
}

// downloadCSV and exportTableToCSV originally from
// https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  // CSV file
  csvFile = new Blob([csv], {type: "text/csv"});

  // Download link
  downloadLink = document.createElement("a");

  // File name
  downloadLink.download = filename;

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = "none";

  // Add the link to DOM
  document.body.appendChild(downloadLink);

  // Click download link
  downloadLink.click();
}

function exportTableToCSV(table, filename) {
    var csv = [];
    var rows = table.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText.replace(/"/g, '""'));

        csv.push('"' + row.join('","') + '"');
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

function getFileName() {
  var filename = window.prompt('Save file as:');
  filename = filename.trim();
  if (filename.length === 0) {
    filename = "table.csv";
  } else if (filename.substr(-4).toLowerCase() !== '.csv') {
    filename = filename + '.csv';
  }
  return filename;
}

function tableOnClick() {
  var table = $(this)[0];
  exportTableToCSV(table, getFileName());
  $('table').off('click', tableOnClick);
}

main();

