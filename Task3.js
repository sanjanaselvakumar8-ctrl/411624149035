let messages = [];

const messageInput = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const charCount = document.getElementById("charCount");
const messagesDiv = document.getElementById("messages");
const status = document.getElementById("status");

// Update character count while typing
messageInput.addEventListener("input", () => {
    charCount.textContent = messageInput.value.length;
});

// Function to display all messages
function displayMessages() {
    messagesDiv.innerHTML = "";

    messages.forEach((message) => {
        const msg = document.createElement("div");
        msg.textContent = message;
        messagesDiv.appendChild(msg);
    });
}

// Add Message
addBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();

    const promise = new Promise((resolve, reject) => {
        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters.");
        }
    });

    promise
        .then((msg) => {
            messages.push(msg);
            displayMessages();

            status.style.color = "green";
            status.textContent = "Message Added Successfully!";

            messageInput.value = "";
            charCount.textContent = "0";

            // Remove the message after 10 seconds
            setTimeout(() => {
                const index = messages.indexOf(msg);

                if (index !== -1) {
                    messages.splice(index, 1);
                    displayMessages();

                    status.style.color = "orange";
                    status.textContent = "Message Expired!";
                }
            }, 10000);
        })
        .catch((error) => {
            status.style.color = "red";
            status.textContent = error;
        });
});

// Clear All Messages
clearBtn.addEventListener("click", () => {
    messages = [];
    displayMessages();

    messageInput.value = "";
    charCount.textContent = "0";

    status.style.color = "blue";
    status.textContent = "All Messages Cleared!";
});