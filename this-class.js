const classNMIT = {
    name: "SDV503",
    tutor: "Ali Kahwaji",
    tags: ["JavaScript", "TypeScript"],
    level: 5,
    qualification: "certificate",
    year: 2026
};

console.log(classNMIT.name);

const classes = [
    { name: "SDV503", tutor: "Ali Kahwaji", level: 5, qualification: "certificate", year: 2026},
    { name: "DES502", tutor: "Ali Kahwaji", level: 5, qualification: "certificate", year: 2026},
    { name: "CSA502", tutor: "Serge", level: 5, qualification: "diploman", year: 2026}
]

// const certificateQualification = classes.filter(c => c.qualification === "certificate");
// console.log(certificateQualification);
// console.log(classes[1].name);

// const findByName = name => classes.find(c => c.name === name);
// console.log(findByName("SDV503"));

function findByName(name){
    // const value = classes.find(function(c) {if (c.name === name) {return c}});
    const value = classes.find(c => c.name === name);
    
    return value
}

console.log(findByName("DES502"));

const ticket = {
    id: "U_001",
    user: "John Smith",
    title: "what happened roughly",
    description: "this happened",
    
}