getStudent = () => {
    fetch('https://kit-crud-api.glitch.me/student?api-key=7646438070368')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        });
}
createStudent = () => {
    let data = {
        api_key: "7646438070368",
        new_data: {
            "121": {
                id: "121",
                name: "James Kollie",
                class: "Grade 3",
                academic_year: "2020/2021"
            },
            "112": {
                id: "112",
                name: "Kortu Sallay",
                class: "Grade 3",
                academic_year: "2020/2021"
            },
            "231": {
                id: "231",
                name: "Kpana Koinjay",
                class: "Grade 3",
                academic_year: "2020/2021"
            }
        }
    }
    fetch('https://kit-crud-api.glitch.me/student', {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        });
}
updateStudent = () => {

    let data = {
        api_key: "7646438070368",
        id: "121",
        new_data: {
            id: "121",
            name: "James Kollie",
            class: "Grade 4",
            academic_year: "2020/2021"
        }
    }
    fetch('https://kit-crud-api.glitch.me/student', {
            method: 'PUT',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        });
}
deleteStudent = () => {

    let data = {
        api_key: "7646438070368",
        id: "121"
    }
    fetch('https://kit-crud-api.glitch.me/student', {
            method: 'DELETE',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        });
}
deleteStudent();
updateStudent();
createStudent();