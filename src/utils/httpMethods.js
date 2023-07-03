import jwt_decode from 'jwt-decode'

export const postMethod = function (_email, _text, _number, _name) {
    fetch('http://46.138.244.100:3000/api/main', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ email: _email, text: _text, number: _number, name: _name })
    })
    //.then(txt => txt.text().then(obj => console.log(obj)))
}

//'Authorization': 'Bearer my-token'



export const registration = async (login, password) => {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:5035/register', {
            headers: {
                'Content-Type': 'application/json',

            },
            method: 'POST',


            mode: 'cors',
            body: JSON.stringify({ Login: login, Password: password })

        }).then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.token)

            //return jwt_decode(data.token)
            resolve(jwt_decode(response.data))
        })
    })


}

export const login = async (login, password) => {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:5035/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ Login: login, Password: password })
        }).then((response) => {
            //console.log(response.text())
            if (response.status == 200)
                response.text().then(txt => {
                    console.log(txt)
                    localStorage.setItem('login', login)
                    localStorage.setItem('token', txt)
                    console.log(jwt_decode(txt))
                    resolve(jwt_decode(txt))
                })
            else
                alert("Неверные логин или пароль")
            //return jwt_decode(data.token)

        })
            .catch(e => { console.log(e) })
    })
}



export const getTasks = async () => {
    try {
    console.log(jwt_decode(localStorage.getItem("token")))
    console.log("GETTASKS")
    }
    catch(e) {
        localStorage.setItem('token', "")
    }
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:5035/getTasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            mode: 'cors',
            body: JSON.stringify({ Login: jwt_decode(localStorage.getItem("token"))['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] })
        }).then((response) => {
            console.log(response)
            if (response.status == 401) {
                localStorage.setItem('token', "")
                resolve()
            }
                

            response.text().then(txt => {
                console.log(JSON.parse(txt))
                resolve(JSON.parse(txt).data)
                // localStorage.setItem('token', txt)
                // resolve(jwt_decode(txt))
            })

            //return jwt_decode(data.token)

        })

    })
}

export const addTask = async (task) => {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:5035/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            mode: 'cors',
            body: JSON.stringify({ Login: jwt_decode(localStorage.getItem("token"))['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'], Tasks: [task] })
        }).then((response) => {
            //console.log(response.text())
            if (response.status == 401)
                localStorage.setItem('token', '')
            response.text().then(txt => {
                console.log(JSON.parse(txt))
                resolve("Ok")
                // localStorage.setItem('token', txt)
                // resolve(jwt_decode(txt))
            })

            //return jwt_decode(data.token)

        })
            .catch(e => { console.log(e) })
    })
}




function saveByteArray(reportName, byte) {
    var blob = new Blob(byte, { type: "application/pdf" });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
};
export const getExample = async (fileName) => {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:5035/example?fileName=' + fileName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        //    body: JSON.stringify({ fileName: fileName })
        }).then((response) => {
            let data = []
            //console.log(response.text())
            const reader = response.body.getReader()

            function readStream({ done, value }) {
                if (done) {
                    console.log(data)
                    saveByteArray("name.svg", data)
                    return;
                }
                data.push(value)
                return reader.read().then(readStream);
            }
            reader.read().then(d => {
                readStream(d)
            })
        })
            .catch(e => { console.log(e) })
    })
}