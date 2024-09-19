const planHeaders = document.querySelectorAll('.plan');
const tableRows = document.querySelectorAll('tbody tr');


planHeaders.forEach((header, index) => {
    header.addEventListener('click', function() {
        planHeaders.forEach(h => h.classList.remove('highlight-column'));
        tableRows.forEach(row => {
            row.children[1].classList.remove('highlight-column', 'selected-column'); // Basic 열
            row.children[2].classList.remove('highlight-column', 'selected-column'); // Standard 열
            row.children[3].classList.remove('highlight-column', 'selected-column'); // Premium 열

            row.children[1].classList.add('deselected');
            row.children[2].classList.add('deselected');
            row.children[3].classList.add('deselected');
        });


        header.classList.add('highlight-column');
        tableRows.forEach(row => {
            row.children[index + 1].classList.add('highlight-column', 'selected-column');
            row.children[index + 1].classList.remove('deselected'); 
        });
    });
});