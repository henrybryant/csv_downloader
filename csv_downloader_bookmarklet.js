/*

javascript:(function()%7Bfunction%20main()%20%7B%0A%20%20%24('table').on('click'%2C%20tableOnClick)%3B%0A%7D%0A%0A%2F%2F%20downloadCSV%20and%20exportTableToCSV%20originally%20from%0A%2F%2F%20https%3A%2F%2Fwww.codexworld.com%2Fexport-html-table-data-to-csv-using-javascript%2F%0Afunction%20downloadCSV(csv%2C%20filename)%20%7B%0A%20%20var%20csvFile%3B%0A%20%20var%20downloadLink%3B%0A%0A%20%20%2F%2F%20CSV%20file%0A%20%20csvFile%20%3D%20new%20Blob(%5Bcsv%5D%2C%20%7Btype%3A%20%22text%2Fcsv%22%7D)%3B%0A%0A%20%20%2F%2F%20Download%20link%0A%20%20downloadLink%20%3D%20document.createElement(%22a%22)%3B%0A%0A%20%20%2F%2F%20File%20name%0A%20%20downloadLink.download%20%3D%20filename%3B%0A%0A%20%20%2F%2F%20Create%20a%20link%20to%20the%20file%0A%20%20downloadLink.href%20%3D%20window.URL.createObjectURL(csvFile)%3B%0A%0A%20%20%2F%2F%20Hide%20download%20link%0A%20%20downloadLink.style.display%20%3D%20%22none%22%3B%0A%0A%20%20%2F%2F%20Add%20the%20link%20to%20DOM%0A%20%20document.body.appendChild(downloadLink)%3B%0A%0A%20%20%2F%2F%20Click%20download%20link%0A%20%20downloadLink.click()%3B%0A%7D%0A%0Afunction%20exportTableToCSV(table%2C%20filename)%20%7B%0A%20%20%20%20var%20csv%20%3D%20%5B%5D%3B%0A%20%20%20%20var%20rows%20%3D%20table.querySelectorAll(%22table%20tr%22)%3B%0A%20%20%20%20%0A%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20rows.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20var%20row%20%3D%20%5B%5D%2C%20cols%20%3D%20rows%5Bi%5D.querySelectorAll(%22td%2C%20th%22)%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20for%20(var%20j%20%3D%200%3B%20j%20%3C%20cols.length%3B%20j%2B%2B)%20%0A%20%20%20%20%20%20%20%20%20%20%20%20row.push(cols%5Bj%5D.innerText)%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20csv.push(row.join(%22%2C%22))%3B%20%20%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Download%20CSV%20file%0A%20%20%20%20downloadCSV(csv.join(%22%5Cn%22)%2C%20filename)%3B%0A%7D%0A%0Afunction%20getFileName()%20%7B%0A%20%20var%20filename%20%3D%20window.prompt('Save%20file%20as%3A')%3B%0A%20%20filename%20%3D%20filename.trim()%3B%0A%20%20if%20(filename.length%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20filename%20%3D%20%22table.csv%22%3B%0A%20%20%7D%20else%20if%20(filename.substr(-4).toLowerCase()%20!%3D%3D%20'.csv')%20%7B%0A%20%20%20%20filename%20%3D%20filename%20%2B%20'.csv'%3B%0A%20%20%7D%0A%20%20return%20filename%3B%0A%7D%0A%0Afunction%20tableOnClick()%20%7B%0A%20%20var%20table%20%3D%20%24(this)%5B0%5D%3B%0A%20%20exportTableToCSV(table%2C%20getFileName())%3B%0A%20%20%24('table').off('click'%2C%20tableOnClick)%3B%0A%7D%0A%0Amain()%3B%7D)()%3B

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
            row.push(cols[j].innerText);

        csv.push(row.join(","));
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

