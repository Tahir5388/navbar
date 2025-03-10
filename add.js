function toggleMenu() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
function toggleDropdown(event) {
    event.preventDefault();
    let dropdown = event.target.nextElementSibling;
    dropdown.classList.toggle('active');
}
document.querySelector('.contact-btn').addEventListener('click', function() {
    alert('Thank you for reaching out! We will contact you soon.');
});
document.querySelector('.newsletter button').addEventListener('click', function() {
    let email = document.querySelector('.newsletter input').value;
    if (email === '') {
        alert('Please enter your email.');
    } else {
        alert('Thank you for subscribing!');
    }
});
