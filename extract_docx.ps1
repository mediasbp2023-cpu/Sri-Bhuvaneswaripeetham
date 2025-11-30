$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
    $doc = $word.Documents.Open((Resolve-Path 'Updated SBP_Menu_Template_GoogleDocs.docx').Path)
    $doc.Content.Text | Out-File -Encoding utf8 'document_content.txt'
    $doc.Close($false)
} finally {
    $word.Quit()
}

