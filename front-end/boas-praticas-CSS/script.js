// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('accordion').addEventListener('click', () => {

//     })
    
// })


document.addEventListener('DOMContentLoaded', function () {
    const accordionElement = document.getElementById('accordion');
    if (accordionElement) {
        accordionElement.addEventListener('click', function (e) {
            console.log(e);
        });
    } else {
        console.error('Elemento com ID "accordion" não encontrado.');
    }
});