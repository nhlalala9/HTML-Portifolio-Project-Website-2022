/*Educational back ground*/
let academic = 'Educational Background';
let academicProgress=[
    'Matric','University','DynamicDNA'
];
let inputs =[
    'I finished grade 12 in 2016',
    'I recently completed my theory part now i left with practicals '+ 
        'so that i can complete my qualifications in Information Technology(Software Development) '+ 
    'I have completed a learnership hosted at company called DynamicDNA '+ 
        'with programming language called C# and microsoft AZ-900'+ 
        'I have learned the basic fundamentals of C# by coding',
];
let educationalbackgroud ='<h2>'+academic+'</h2>'; 
for(let i=0; i<academicProgress.length; i++){
    educationalbackgroud += '<h4>'+academicProgress[i]+'</h4><p>'+inputs[i]+'</p><br />';
}
document.getElementById('bio').innerHTML =edbackgroud;

/* Pogramming skills that i have*/
let skills=[
    'C++','C#','Oracle Databases(PL/SQL,MySQL)','HTML & CSS','RAD Studio C++','MS Office','Linux','Networks',
];
let skills_aquriad = '<h2>Skills</h2>' ;
skills_aquriad += '<ul>';
    for(s=0; s<skills.length; s++){
        skills_aquriad += '<li>'+skills[s]+'</li>'
    }
skills_aquriad +='</ul>';
console.log(skills_aquriad);
document.getElementById('skills').innerHTML = skills_aquriad;

/* Project that i  have completed */
document.getElementById('projectsHeader').innerHTML += '<b>Group Project</b>';

const projetcts = new Array('University Final Year Project','Group Project');
document.getElementById('card-header1').innerHTML += projetcts[0];


const projectsName = new Array('Home Remedies');
document.getElementById('card-title1').innerHTML = projectsName[0];

document.getElementById('card-text1').innerHTML = 'In my final studies i have completed project with my team,'+
                                        'the purpose of the system was to help people to book for a doctors '+
                                        ' when they have disease and it will give them a feedback after booking '+
                                        ' and you must write what disease you have and the doctor will return and feedback ';
                                        
