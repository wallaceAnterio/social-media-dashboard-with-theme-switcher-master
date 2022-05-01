const changeTheme = document.querySelector('#checkbox');

changeTheme.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('lightMode');
})
