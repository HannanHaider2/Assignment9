const arr = [];

function add() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const phone = document.getElementById("phone").value;

    if (!fname || !lname || !email || !course || !phone) {
        alert("Please input data!!!");
        return;
    }

    let detail = {
        first: fname,
        last: lname,
        Email: email,
        Course: course,
        Phone: phone,
    };
    arr.push(detail);
    updateTable();
    clearForm();
}

function updateTable() {
    const tb = document.getElementById("tbody");
    tb.innerHTML = "";

    arr.forEach((item, index) => {
        const tr = document.createElement("tr");
        const tdFirst = document.createElement("td");
        tdFirst.innerText = item.first;
        tdFirst.style.padding = '3px 10px'
        const tdLast = document.createElement("td");
        tdLast.innerText = item.last;
        tdLast.style.padding = '3px 10px'
        const tdEmail = document.createElement("td");
        tdEmail.innerText = item.Email;
        tdEmail.style.padding = '3px 10px'
        const tdCourse = document.createElement("td");
        tdCourse.innerText = item.Course;
        tdCourse.style.padding = '3px 10px'
        const tdPhone = document.createElement("td");
        tdPhone.style.padding = '3px 10px'
        tdPhone.innerText = item.Phone;

        const tdActions = document.createElement("td");
        const btnEdit = document.createElement("button");
        btnEdit.innerText = "Edit";
        Object.assign(btnEdit.style, {
            padding: '7px 20px',
            margin: '3px',
            background: 'transparent',
            boxShadow: 'rgba(0, 0, 0, 0.288) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            border: 'none',
            borderRadius: '5px',
            color: ' white',
        });
        btnEdit.onclick = () => editRow(index);
        const btnDelete = document.createElement("button");
        btnDelete.innerText = "Delete";
        Object.assign(btnDelete.style, {
            padding: '7px 16px',
            margin: '3px',
            background: 'transparent',
            boxShadow: 'rgba(0, 0, 0, 0.288) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            border: 'none',
            borderRadius: '5px',
            color: ' white',
        });
        btnDelete.onclick = () => deleteRow(index);

        tdActions.appendChild(btnEdit);
        tdActions.appendChild(btnDelete);

        tr.appendChild(tdFirst);
        tr.appendChild(tdLast);
        tr.appendChild(tdEmail);
        tr.appendChild(tdCourse);
        tr.appendChild(tdPhone);
        tr.appendChild(tdActions);
        tb.appendChild(tr);
    });
    console.log(arr);
}
function deleteRow(index) {
    arr.splice(index, 1);
    updateTable();
}

function editRow(index) {
    const detail = arr[index];
    document.getElementById("fname").value = detail.first;
    document.getElementById("lname").value = detail.last;
    document.getElementById("email").value = detail.Email;
    document.getElementById("course").value = detail.Course;
    document.getElementById("phone").value = detail.Phone;

    const addButton = document.querySelector("button");
    addButton.innerText = "Update";
    addButton.onclick = function () {
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const course = document.getElementById("course").value;
        const phone = document.getElementById("phone").value;

        if (!fname || !lname || !email || !course || !phone) {
            alert("Please input data!!!");
            return;
        }

        arr[index] = {
            first: fname,
            last: lname,
            Email: email,
            Course: course,
            Phone: phone,
        };
        updateTable();
        clearForm();
    }
}

function clearForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("phone").value = "";
}
