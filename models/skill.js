const skills = [
    {id: 1, skill: 'coding', acquired: false},
    {id: 2, skill: 'cleaning', acquired: true},
    {id: 3, skill: 'driving', acquired: true},
    {id: 4, skill: 'reading', acquired: true}
];

module.exports = {
    getAll, 
    getOne
};

function getAll() {
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}