document.querySelector('#upper-case').addEventListener('click', () => {
    let a = document.querySelector('.textArea').value;
    document.querySelector('.textArea').value = a.toUpperCase()
})

document.querySelector('#lower-case').addEventListener('click', () => {
    let a = document.querySelector('.textArea').value;
    document.querySelector('.textArea').value = a.toLowerCase()
})

document.querySelector('#proper-case').addEventListener('click', () => {
    let a = document.querySelector('.textArea').value;
    document.querySelector('.textArea').value = a.toLowerCase().replace(/(^|\s|-|\()\S/g, L => L.toUpperCase());
})

document.querySelector('#sentence-case').addEventListener('click', () => {
    let a = document.querySelector('.textArea').value;
    document.querySelector('.textArea').value = a.toLowerCase().replace(/(^|\.\s|\?\s|!\s|\.)\S/g, L => L.toUpperCase());
})

document.querySelector('#save-text-file').addEventListener('click', () => {
    let a = document.querySelector('.textArea').value;
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    download('text.txt', a.slice(0))
})