function createStudentManager()
{
    const students=[];

    return
    {
        //add student
        addStudent(student)
        {
            students.push(student);
        }

        //update the student score
        updatescore(score)
        {
           student.subject.score=score; 
        }

        //display details of a student
        displayDetails(id)
        {
            if(!students.includes(student(id)))
            {
                return "student not found";
            }
            else
            {
                return student(id);
            }
        }

        //add subject
        addSubject(subject)
        {
            student.subject=subject;
        }

    };

    //calculate the average score
    const avg1= students.score.reduce((acc,cur)=>(acc+cur)/navigator,0);

    //students with average above 85
    const avg85=students.filter(student=> student.avg1>85);

    //failed students
    const failed=stuents.filter(student=>student.subject.score<85);

    //frequency map of each subject.
    const frequencyMap=students.subjects.map(subject=> subject,number);

    //sorting of students
    function getStudents(sortBy)
    {
        if(sortBy=avgScore)
        {
            return students.sort((a,b)=>a.avgScore - b.avgScore);
        }

        else if(sortBy=name)
        {
            return students.sort((a,b)=>a.name.localCompare(b.name));
        }
    }


}