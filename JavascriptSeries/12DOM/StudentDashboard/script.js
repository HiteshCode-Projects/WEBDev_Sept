const students = [

      {
        name: "Manthan Patel",
        course: "Web Development",
        skill: "HTML & CSS",
        status: "Learning"
      },


      {
        name:"Keerti",
        course:"Javascript",
        skill:"DOM Manipulation",
        status:"Completed"
      },


      {
        name:"Rajdip",
        course:"Frontend Development",
        skill:"Javascrpt",
        status:"Learning"
      },


];



//1. Select HTML Elemtn Tag
const title = document.getElementById("pageTitle")
const subtitle = document.getElementById("subtitle")

const count = document.getElementById("studentCount")
const container = document.getElementById("profileContainer")

const noticeTitle = document.getElementById("noticeTitle")
const noticeText  = document.getElementById("noticeText")



//2. Change Existing Text using 
title.textContent = "Welcome to our Student Hub"
subtitle.textContent = "Meet our Learner and explore their skills"


//3. Update the student ount
count.textContent = "Total Students :" + students.length;


//4. Create Profile Card Dynamically 

students.forEach(  function(student){

//create a new HTML Element(Tag)
const card = document.createElement("div")

//Assign a CSS class
card.className = "profile-card";

//Create a heading
const name = document.createElement("h3")
name.textContent = student.name;

//Create course Information
const course = document.createElement("p")
course.textContent = "Course : " + student.course;


//Create Skill Informatiom
const skill = document.createElement("span")
skill.className = "skill"
skill.textContent = student.skill;

//Student Status
const status = document.createElement("p")
status.textContent = "Status : " + student.status





})






//7. Change The Notice Section
noticeTitle.textContent = "Learning Progess"
noticeText.textContent = "Keerti has completed her current learning module"






