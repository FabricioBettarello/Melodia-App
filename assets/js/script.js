function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

document.getElementById('buscar-link').addEventListener('click', function(event) {
    event.preventDefault();
    const searchOverlay = document.getElementById('search-overlay');
    searchOverlay.style.display = searchOverlay.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('close-search').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('search-overlay').style.display = 'none';
});

document.getElementById('mobile-buscar-link').addEventListener('click', function(event) {
    event.preventDefault();
    const mobileSearchOverlay = document.getElementById('mobile-search-overlay');
    mobileSearchOverlay.style.display = mobileSearchOverlay.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('close-mobile-search').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mobile-search-overlay').style.display = 'none';
});

function copyToClipboard() {
    const emailLabel = document.querySelector('label[for="email"]');
    const emailText = emailLabel.innerText;

    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('E-mail copiado para a área de transferência!');
}