type StudentProps = {
    student: String;
    degree: String;
    credits: number;
  }
  
  export default function Student(props: StudentProps) {
    const { student, degree, credits } = props;
    return (
      <h2>
        <p className="student-name">{student} {degree} {credits}</p>
      </h2>
    );
  };