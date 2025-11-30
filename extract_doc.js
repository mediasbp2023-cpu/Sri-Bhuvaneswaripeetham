const mammoth = require("mammoth");
const fs = require("fs");

mammoth.extractRawText({ path: "Updated SBP_Menu_Template_GoogleDocs.docx" })
  .then(function(result){
    const text = result.value;
    fs.writeFileSync("document_content.txt", text, "utf8");
    console.log("Extracted text successfully!");
    console.log("\n--- Preview (first 1000 chars) ---\n");
    console.log(text.substring(0, 1000));
  })
  .catch(function(error) {
    console.error("Error:", error);
  });

