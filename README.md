## Install:
  - select the entire contents of  [csv_downloader_bookmarklet.txt](https://raw.githubusercontent.com/henrybryant/csv_downloader/master/csv_downloader_bookmarklet.txt) and copy to the clipboard (Windows: ctrl + c , Mac: ⌘ + c)
  - on any webpage, in Chrome click the "star" button to bring up the Add Bookmark dialog
  - delete the name and replace with "CSV Downloader"
  - delete the URL and replace it with the bookmarklet text (since you copied it already, just paste it)
  - save the bookmark

## Usage:
  - click the bookmarklet while on any Canopy page to prime it
  - after priming it, click within any table on the page
  - first it will prompt you for the filename. if you omit the .csv ending, it will be added automatically
  - confirm the prompt and that table will be automatically downloaded as a CSV

### Notes:
- Only works on sites with jquery. Some bookmarklet generators will include jQuery but the bookmarklet in the comment above does not.
- Our more complex tables may be formatted somewhat strangely, but will still be useful for QA (not presenting to customers though)
