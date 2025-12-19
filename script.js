const inputField = document.querySelector(".input_field");
const detailField = document.querySelector("textarea")
const addBtn = document.querySelector(".add_btn")
const noteBox = document.querySelector("ul")
addBtn.addEventListener("click", () => {
    const inputValue = inputField.value
    const detailValue = detailField.value

    if (inputValue === "" || detailValue === "") {
        alert("Please fill in both toic and details!")
    }

    else {
        const noteItem = document.createElement("li")

        const noteContent = document.createElement("div")
        noteContent.className = "note_text"
        noteContent.innerHTML = `
        <h4>${inputValue}</h4><p>${detailValue}</p>`

        const btnDiv = document.createElement("div")
        btnDiv.className = "btn_div"
        btnDiv.innerHTML = `<button class="edit_btn">Edit</button>
        <button class ="dlt_btn">X</button>`

        const editBtn = btnDiv.querySelector(".edit_btn")

        editBtn.addEventListener("click", () => {

        })
        const dltBtn = btnDiv.querySelector(".dlt_btn")

        dltBtn.addEventListener("click", () => {
            const isConfirm = confirm("Are you sure you want to delete the Note?")
            if (isConfirm) {
                noteItem.remove()
            }

        });

        noteItem.appendChild(noteContent)
        noteItem.appendChild(btnDiv)

        noteBox.appendChild(noteItem);

        inputField.value = ""
        detailField.value = ""
    }
})

inputField.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addBtn.click()
    }
})

detailField.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addBtn.click()
    }
});