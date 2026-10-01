function checkActivePage() {
    let navLinks = document.querySelectorAll('.nav-link');
    console.log(navLinks);
    navLinks.forEach(link => {
        if (window.location.href === link.firstChild.href) {
            link.classList.add('active');
        }
        else {
            link.classList.remove('active');
        }
    });
}

function toggleNavbar() {
    const collapsedBtn = document.querySelector('.navbar-collapse-btn');
    if (collapsedBtn) {
        let isClicked = collapsedBtn.getAttribute('data-active') === 'true';
        if (!isClicked) {
            document.querySelector('.collapsed-navbar').classList.add('show');
            collapsedBtn.setAttribute('data-active', 'true')

        }
        else {
            document.querySelector('.collapsed-navbar').classList.remove('show');
            collapsedBtn.setAttribute('data-active', 'false');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkActivePage();
    document.querySelector('.navbar-collapse-btn').addEventListener('click', toggleNavbar);
});