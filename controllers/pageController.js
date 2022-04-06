'use strict';

const firebase = require('../db/db');
const firestore = firebase.firestore();
const Experience = require('../models/experience');
const Project = require('../models/project');
const Article = require('../models/article');

const homePage = async (req,res,next) => {
    try{

        const experiences = await firestore.collection('experience');
        const data = await experiences.get();
        const experiencesArray = [];

        const projects = await firestore.collection('projects').get();
        const projectsArray = [];

        const articles = await firestore.collection('articles').get();
        const articlesArray = [];

        if(data.empty) {
            res.status(404).send('No User record found');
        } else {
            data.forEach(doc => {
                const experience = new Experience(
                    doc.data().title,
                    doc.data().type,
                    setDate(doc.data().dateEnd),
                    setDate(doc.data().dateStart),
                    doc.data().skills,
                    doc.data().place,
                    doc.data().description
                );
                if(experiencesArray.length<3){
                    experiencesArray.push(experience);
                }
            });

            projects.forEach( doc => {
                const project = new Project(
                    doc.data().title,
                    doc.data().type,
                    doc.data().skills,
                    doc.data().link,
                    doc.data().img_url
                );
                if(projectsArray.length<4){
                    projectsArray.push(project);
                }
            });

            articles.forEach(doc => {
                const article = new Article(
                    doc.data().title,
                    doc.data().date,
                    doc.data().link,
                    doc.data().img_url
                );
                if(articlesArray.length<4){
                    articlesArray.push(article);
                }
            });
            res.render('homePage', {experiences: experiencesArray, projects: projectsArray, articles: articlesArray});
        }
    }catch(e) { 
        console.log('Erro ao renderizar pagina');
    }
}

const sendEmail = async(req, res, next) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject;
        const emailBody = req.body.emailBody;

        console.log(`name: ${name}, email: ${email}, subject: ${subject}, msg: ${emailBody}`);

    }catch(e) {

    }
}

const goToExperiences = async(req, res, next) => {
    try {
        const experiences = await firestore.collection('experience');
        const data = await experiences.get();
        const experiencesArray = [];
        if(data.empty) {
            res.status(404).send('No User record found');
        } else {
            data.forEach(doc => {
                const experience = new Experience(
                    doc.data().title,
                    doc.data().type,
                    setDate(doc.data().dateEnd),
                    setDate(doc.data().dateStart),
                    doc.data().skills,
                    doc.data().place,
                    doc.data().description
                );
                
                experiencesArray.push(experience);
            });
        }
        res.render('experiences', {experiences: experiencesArray});
    } catch(e) {    
        console.log("Erro ao renderizar página");
    }
}

const goToWorks = async(req, res, next) => {
    try {
        const projects = await firestore.collection('projects').get();
        const projectsArray = [];

        if(projects.empty) {
            res.status(404).send('No User record found');
        } else {
            projects.forEach( doc => {
                const project = new Project(
                    doc.data().title,
                    doc.data().type,
                    doc.data().skills,
                    doc.data().link,
                    doc.data().img_url
                );
                projectsArray.push(project);

            });
        }
        res.render('works', {projects: projectsArray});
    }catch(e) {
        console.log('Erro ao renderizar página');
    }
}

const setDate = (dataExclusao) => {
    var arrDataExclusao = dataExclusao.split('/');

    var stringFormatada = arrDataExclusao[1] + '-' + arrDataExclusao[0] + '-' +
    arrDataExclusao[2];
    var dataFormatada1 = new Date(stringFormatada);
    
    return dataFormatada1.toLocaleString('default', { month: 'long' }) +", "+ dataFormatada1.getFullYear()
    
}

module.exports = {
    homePage,
    sendEmail,
    goToExperiences,
    goToWorks
}