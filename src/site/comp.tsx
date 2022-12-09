type CompType = {
    //students:Array<StudentType>
    students: StudentsType[]
}

type StudentsType = {
    id: number,
    name: string,
    age: number,
}


const Comp = (props: CompType) => {
    return (
        <div> <ul>
            {props.students.map((objectFromStudentArray,index)=>{
            return (
                <li key={objectFromStudentArray.id}>
                    <span>{objectFromStudentArray.name}</span>
                    <span> age: {objectFromStudentArray.age}</span>

                </li>

            )

            })}
        </ul>

            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </div>
    )
}
export default Comp