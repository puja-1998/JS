const toggleButton = document.getElementById('toggleButton');
    const buttonImage = document.getElementById('buttonImage');
    const body = document.body;
    const slider = document.getElementById('themeSlider');

    slider.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            toggleButton.style.left = '60px'; // Move button to the right
            buttonImage.src = 'https://cdn-icons-png.flaticon.com/128/7645/7645197.png'; // Change to your dark mode icon
            
        } else {
            toggleButton.style.left = '5px'; // Move button to the left
            buttonImage.src = 'https://media.istockphoto.com/id/1354219060/vector/sun-vector-cartoon-vector-logo-for-web-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=nBAAzTT-al6gqBfdQi4E3l6AUK1g_b0LG0rBo0QlGDU='; // Change to your light mode icon
           
        }
    });