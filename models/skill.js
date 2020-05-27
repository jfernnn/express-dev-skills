const skills = [
    {id: 123456, skill: 'coding', acquired: false},
    {id: 223456, skill: 'cleaning', acquired: true},
    {id: 333456, skill: 'driving', acquired: true},
    {id: 444456, skill: 'reading', acquired: true}
];

module.exports = {
    getAll, 
    getOne,
    create,
    delete: deleteSkill,
    update
};

function getAll() {
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.acquired = false;
    skills.push(skill);
}

function deleteSkill(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx , 1);
}


function update(id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill)
}