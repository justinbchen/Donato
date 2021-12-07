[...document.getElementsByClassName('btn-next')].forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementsByClassName('nav-link active')[0].nextElementSibling.click();
    });
});

document.getElementById('btn-pickup').addEventListener('click', () => {
    document.getElementById('pickup').classList.remove('d-none');
    document.getElementById('dropoff').classList.add('d-none');

    document.getElementById('btn-pickup').classList.add('active');
    document.getElementById('btn-dropoff').classList.remove('active');
});

document.getElementById('btn-dropoff').addEventListener('click', () => {
    document.getElementById('dropoff').classList.remove('d-none');
    document.getElementById('pickup').classList.add('d-none');

    document.getElementById('btn-dropoff').classList.add('active');
    document.getElementById('btn-pickup').classList.remove('active');
});

document.getElementById('addresses').addEventListener('change', () => {
    if (document.getElementById('addresses').value == 'new-address') {
        document.getElementById('enter-address').classList.remove('d-none');
    }
    else {
        document.getElementById('enter-address').classList.add('d-none');
    }
});