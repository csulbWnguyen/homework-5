const studentList=[
    {
        firstName:"Allan",
        lastName:"Able",
        scores:[95,85,92,98]
    },
    {
        firstName:"Amy",
        lastName:"Alexander",
        scores:[80,88,100]
    },
    {
        firstName:"Betty",
        lastName:"Bones",
        scores:[75,85,95,85]
    },
    {
        firstName:"Cindy",
        lastName:"Chase",
        scores:[95,90,92,98]
    },
    {
        firstName:"Charles",
        lastName:"Chips",
        scores:[88,99,90]
    }
];

//requirement == Last name starts with "C". Filter information afterwards. Map lastNames to filter. 

const lastNames = studentList=>studentList.map(studentList=> studentList.lastName).filter(name=>name.startsWith("C"));
const scores = studentList => studentList.map(studentList=>studentList.scores);


console.log(lastNames(studentList));
console.log(averageScore);