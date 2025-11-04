      document.addEventListener("DOMContentLoaded", function () {
        const signInBtn = document.getElementById("signInBtn");
        const signUpModal = document.getElementById("signUpModal");
        const closeBtn = document.querySelector(".close");
        const signUpForm = document.getElementById('signUpForm');
        

        signUpBtn.addEventListener("click", function () {
            signUpModal.style.display = "block";
        });

        closeBtn.addEventListener('click', function () {
            document.getElementById("signUpModal").style.display = "none";
        });

        window.addEventListener('click', function (event) {
            if (event.target == signUpModal) {
                signUpModal.style.display = 'none';
            }
        });

        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (username && email && password) {
                alert('Registration successful!');
            } else {
                alert('Please fill in all fields.');
                return;
            }
            
            signUpForm.style.display = 'none';
            signUpForm.reset();
        });
    });
    