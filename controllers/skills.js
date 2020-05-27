const skillsDB = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', {
         skills: skillsDB.getAll()
    });
}

function show(req, res, next) {
    res.render('skills/show', {
        skill: skillsDB.getOne(req.params.id)
    });
}

function newSkill(req, res, next) {
    res.render('skills/new');
}

function create(req, res, next) {
    skillsDB.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res, next) {
    skillsDB.delete(req.body);
    res.redirect('/skills');
}

function edit(req, res, next) {
    const skill = skillsDB.getOne(req.params.id);
    res.render('skills/edit', {skill} );
}

function update(req, res, next) {
    req.body.aqcuired == !!req.body.aqcuired;
    skillsDB.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}