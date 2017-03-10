const people = [
    {
        id: 0,
        first_name: 'Jean-Luc',
        last_name: 'Picard',
        rank: 'Captain',
    },
    {
        id: 1,
        first_name: 'Will',
        last_name: 'Riker',
        rank: 'Commander',
    },
    {
        id: 2,
        first_name: 'Beverly',
        last_name: 'Crusher',
        rank: 'Commander',
    },
];

module.exports = {
    create: (req, res) => {
        const names = req.body.name.split(' ');
        const newPerson = {
            id: people.length,
            first_name: names[0],
            last_name: names[1],
        };
        people.push(newPerson);
        res.status(201).send(newPerson);
    },
    read: (req, res) => {
        // const person = people.find(function(pers) { return pers.id === +req.params.id)};
        const person = people.find(pers => pers.id === +req.params.id);
        if (person) {
            res.status(200).send(person);
        } else {
            res.status(404).send('Not found');
        }
    },
    readList: (req, res) => {
        res.status(200).send({results: people});
    },
    update: (req, res) => {},
    destroy: (req, res) => {},
}
