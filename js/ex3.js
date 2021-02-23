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

const studentresults =[];
for (const student of studentList){
    if (student.lastName.startsWith("C")){
        let gradeSum = 0;
        let gradeMax = 0;
        let gradeMin = 100;
        //of the students that last name starts with C, iterate though their scores with a "for" loop.
        for (const grade of student.scores){
            gradeSum += grade;
            //get Max grade and min grade with grade of student list.
            //Set Grade to highest score iterated.
            if (gradeMax< grade){
                gradeMax = grade;
            //set grade to lowest score iterated.
            }
            if (gradeMin>grade){
                gradeMin = grade;
            }
        }
    const averageGrade = gradeSum/student.scores.length;
    studentresults.push({
        firstName: student.firstName,
        lastName:student.lastName,
        minScore: gradeMin,
        maxScore: gradeMax,
        avgGrade:averageGrade})
    }
};

console.log(studentresults);