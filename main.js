[...document.getElementsByClassName('btn-next')].forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementsByClassName('nav-link active')[0].nextElementSibling.click();
    });
});