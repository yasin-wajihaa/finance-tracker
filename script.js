lucide.createIcons();

const drawer = document.getElementById("transaction-adding-drawer")
const addBtn = document.querySelector(".add-btn") 
const form = document.getElementById("transaction-form")

//  open drawer

addBtn.addEventListener("click", () => {
    drawer.classList.add("open");
});

// Handle form submission

form.addEventListener("submit", (e) => {
    e.preventDefault();


    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    // Example transaction object

    const transaction = {desc, amount, type, date: new Date() };

    // Push into transaction list andd update ui

    drawer.classList.remove("open"); 
    form.reset();
});