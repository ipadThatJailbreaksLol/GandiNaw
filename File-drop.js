export function enableDragAndDrop(callback) {
    document.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    document.addEventListener("drop", function(event) {
        event.preventDefault();
        let file = event.dataTransfer.files[0];

        if (file && (file.type === "audio/mp3" || file.type === "audio/wav")) {
            let url = URL.createObjectURL(file);
            callback(url);
        } else {
            alert("Only MP3 and WAV files are supported!");
        }
    });
}
