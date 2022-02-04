import Student from "./Student";
import useStudents from "../hooks/useStudents";
import Search from "./Search";
import useForm from "../hooks/useForm";

export default function Home() {
  const [students, errors] = useStudents();
  const [query, handleChange] = useForm({ name: "", tag: "" });
  return (
    <div className="home">
        <Search query={query} handleChange={handleChange}/>
        <div className="display-container">
            {errors && <h5>Sorry, there was an error retrieving requested data</h5>}
            <div className="students">
                {students &&
                    students.map((student) => {
                        return (
                            <Student 
                                key={student.login.uuid} 
                                student={student} 
                                query={query}
                            />
                        )
                    })}
            </div>
        </div>
    </div>
  );
}
