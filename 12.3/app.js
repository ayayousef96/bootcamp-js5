const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
};

function m1(type,id){
    let obj = new Object();
    if(type == 'teachers'){
        obj = school.teachers.find(t => t.id == id);
    }
    if(type == 'students'){
        obj = school.students.find(s => s.id == id);
    }

    return obj;
}
 school.findPerson=m1;

 //console.log(school.findPerson('students',10));
 function m2(id,subject){
    let teacher = school.teachers.find(t => (t.subjects.find(s => s==subject) && t.capacityLeft>0));
    if(!teacher){
        console.log("Sorry, no available teachers left.");
    }
    else{
        let st=new Object();
        st=school.students.find(s => s.id==id);
        teacher.students.push(st);
        teacher.capacityLeft -=1;
        console.log(teacher.students);
    }
 }
school.assignStudent=m2;
//school.assignStudent(10,"physics");
//console.log(school.teachers);

function m3(id,newSubject){
    let teacher = school.teachers.find(i => i.id == id);
    if(!teacher.subjects.includes(newSubject)){
        teacher.subjects.push(newSubject);
    }
    //console.log(teacher.subjects);
}
school.assignTeachersSubject=m3;
//school.assignTeachersSubject(1,"Arabic");


///new mwthod
//returns teachers who teaches more than one subject
function m4(){
    let tech = school.teachers.filter(t => t.subjects.length>1)
    console.log(tech);
}

school.teach_more_than_1=m4;
school.teach_more_than_1();


