const btn = document.getElementById("btn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

btn.addEventListener("click", () => {

    usersDiv.innerHTML = "";
    status.textContent = "Loading...";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {

            let output = "";

            for (let i = 0; i < data.length; i++) {
                output += `
                    <div class="user-card">
                        <h3>${data[i].name}</h3>
                        <p>Email: ${data[i].email}</p>
                        <p>Phone: ${data[i].phone}</p>
                    </div>
                `;
            }

            usersDiv.innerHTML = output;
            status.textContent = "Loaded successfully";

        })
        .catch(error => {
            status.textContent = "Error loading data";
            console.log(error);
        });

    }, 2000);
});