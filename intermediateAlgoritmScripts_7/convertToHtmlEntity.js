// CONVERT CERTAIN CHARACTERS TO HTML ENTITY:
function convertHTML(str) {
  let htmlEntitties = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "\'":'&apos;'}
  let strList = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(htmlEntitties).includes(strList[i])) {
      strList[i] = htmlEntitties[strList[i]];
    }
  }
  return strList.join('');
}
convertHTML("Dolce & Gabbana");
convertHTML("Dolce & Gabbana"); // Dolce &amp; Gabbana
convertHTML("<>") // &lt;&gt;
convertHTML('Stuff in "quotation marks"'); // Stuff in &quot;quotation marks&quot;

// COMPLETE AND SUCCESSFUL