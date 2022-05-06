let goals = [];
let counter = 0;

module.exports = {

    getCompliment: (req, res) => {
        const comp = require('./try');

        const compliments = comp.compliments();
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fort = require('./try');

        const fortune = fort.fortunes();
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },
    getAllGoals: (req, res) => {
        res.status(200).send(goals)
    },
    addGoal: (req, res) => {
        const body = req.body;
        console.log(body)
        // goals.push(body)
        res.status(200).send(goals)
    },
    deleteGoal: (req, res) => {
        console.log(req.body);

        goals = [];

        res.status(200).send(`this delete goal works`)
    },
    counter: (req, res) => {
        console.log(req.body)

        res.status(200).send(counter)
    }

}