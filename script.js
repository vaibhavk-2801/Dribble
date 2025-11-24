document.addEventListener('DOMContentLoaded', function() {

    // Select the elements for the login modal
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = loginModal.querySelector('.close-btn');

    // Check if all elements exist before adding listeners
    if (loginBtn && loginModal && closeModalBtn) {
        
        // Function to show the modal
        const showModal = () => {
            loginModal.style.display = 'flex'; // Change display to flex to enable centering
            // Use a tiny timeout to allow the display property to apply before adding the 'show' class for the transition
            setTimeout(() => { 
                loginModal.classList.add('show');
            }, 10);
        };

        // Function to hide the modal
        const hideModal = () => {
            loginModal.classList.remove('show');
            // Listen for the transition to end before setting display to none
            // This ensures the fade-out animation completes
            loginModal.addEventListener('transitionend', function handler() {
                loginModal.style.display = 'none';
                // Important: remove the event listener to prevent it from running multiple times
                loginModal.removeEventListener('transitionend', handler);
            });
        };

        // Event listener for the "Log in" button
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button behavior
            showModal();
        });

        // Event listener for the close 'X' button inside the modal
        closeModalBtn.addEventListener('click', hideModal);

        // Event listener to close the modal when clicking on the dark overlay
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                hideModal();
            }
        });
    } else {
        console.error('Login modal elements not found. Please check your HTML IDs and classes.');
    }

});