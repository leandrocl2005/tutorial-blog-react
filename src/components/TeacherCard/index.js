function TeacherCard({teacher}) {
  return (
    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div className="member">
      <img src={teacher.image} className="img-fluid" alt=""/>
      <div className="member-info">
        <div className="member-info-content">
          <h4>{teacher.name}</h4>
          <span>{teacher.tech}</span>
          <div className="social">
            <a href="https://google.com.br"><i className="bi bi-twitter"></i></a>
            <a href="https://google.com.br"><i className="bi bi-facebook"></i></a>
            <a href="https://google.com.br"><i className="bi bi-instagram"></i></a>
            <a href="https://google.com.br"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeacherCard;