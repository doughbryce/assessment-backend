const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const bucketBtn = document.querySelector(`#bucket-button`)
const bucketInput = document.querySelector(`#bucket-input`)
const bucketList = document.querySelector(`#bucket-list`)
const bucketSection = document.querySelector(`#bucket-list-section`)
const deleteBtn = document.querySelector(`#delete-button`)

const counterSection = document.querySelector(`#counter-section`)
const counterValue = document.querySelector(`#counter-value`)
const plusBtn = document.querySelector(`#plus`)
const minusBtn = document.querySelector(`#minus`)

const baseURL = `http://localhost:4000/api/`;

const getAllGoals = () => {
    axios.get(baseURL)
        .then(res => {
            displayGoals(res.data);
        })
        .catch(err => {
            console.log(err)
        })
}

const getCompliment = () => {
    axios.get(`${baseURL}compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(err => {
            console.log(err)
        })
};

const getFortune = () => {
    axios.get(`${baseURL}fortune/`)
        .then (res => {
            const data = res.data;
            alert(data)
        })
        .catch(err => {
            console.log(err)
        })
}

const addGoal = (body) => {
    body = bucketInput.value;
    axios.post(`${baseURL}goal/`, body)
        .then((res => {
            console.log(body)
            console.log(res.data);
            displayGoals(res.data);
        }))
        .catch(err => {
            console.log(err)
        });
}
    
const displayGoals = (input) => {
    let addLi = document.createElement(`li`)
    addLi.textContent = input.value;
    bucketList.appendChild(addLi);
}

const deleteGoal = (id) => {
    axios.delete(`${baseURL}delete/`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

const counter = (body) => {
    axios.put(`${baseURL}counter/${body}`, body)
        .then(res => {
            displayCounter(res.data)
        })
        .catch(err => {
            console.log(err);
        })
}

const displayCounter = (input) => {
    let addCounter = document.createElement(`h1`)
    addCounter.textContent = input;
    counterValue.appendChild(addCounter);
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
bucketBtn.addEventListener(`click`, addGoal)
deleteBtn.addEventListener(`click`, deleteGoal)
minusBtn.addEventListener(`click`, counter)
plusBtn.addEventListener(`click`, counter)

getAllGoals();