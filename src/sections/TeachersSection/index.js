import { teachers } from '../../teachers';
import TeacherCard from '../../components/TeacherCard';

function TeachersSection() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Professores</h3>
          <p>Nossos professores são especialistas nas tecnologias mais novas do mercado!</p>
        </div>

        <div className="row">

          {teachers.map(teacher => (
            <TeacherCard teacher={teacher} key={teacher._id} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeachersSection;