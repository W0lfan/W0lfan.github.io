export function DownLoad(t, name) {
    // content = {type:"link/code",content:""}
    if (t.type === "link") {
        fetch(t.content)
        .then(response => response.text())
        .then(data => {
            var fileContent;
            if (t.beautify) {
                fileContent = js_beautify(data, { indent: 2 });
            } else {
                fileContent = data;
            }
    
                    
            var fileBlob = new Blob([fileContent], { type: 'text' });
    
            var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(fileBlob);
            downloadLink.download = name;
            downloadLink.click();
    
            URL.revokeObjectURL(downloadLink.href);
        })
        .catch(error => {
            console.error('Error fetching file:', error);
            alert('An error occured. Please join the Discord server in order to report it.')
        });
    } else if (t.type == "code") {
        var fileContent;
        if (t.beautify) {
            fileContent = js_beautify(t.content, { indent: 2 });
        } else {
            fileContent = t.content;
        }
                
        var fileBlob = new Blob([fileContent], { type: 'text' });

        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(fileBlob);
        downloadLink.download = name;
        downloadLink.click();

        URL.revokeObjectURL(downloadLink.href);
    }
}
