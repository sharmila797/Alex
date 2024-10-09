import SectionContainer from "./SectionContainer";
const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About Me"}
      subTitle={"WHO I AM"}
      leftImage="static/img/user2.png"
      // leftImageTitle={"About Me"}
    >
      <div className="row">
        {/* <div className="col-md-4">
          <img src="static/img/user2.png" title alt />
        </div> */}
        <div className="col-md-11 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">I'm Anand Babu</h3>
            <p className="m-0px">
            Welcome to my professional corner on the web! I'm an organizational sociologist and a results-oriented
             facilitator and performance coach. My journey in the world of learning and development has been deeply 
             influenced by my passion for understanding human behavior and social dynamics. With a unique blend of 
             expertise in both practical learning methodologies and organizational dynamics, I am committed to empowering 
             individuals and teams to achieve their full potential.
             </p>
             <p className="m-0px">
             On this site, you will discover a range of services tailored to meet diverse training needs, from corporate
              workshops to personal development programs. My approach is rooted in evidence-based strategies and a profound 
              understanding of organizational contexts that shape our interactions and growth.
            </p>
            <p className="m-0px">
            Whether you're looking to enhance your professional skills, foster a more inclusive workplace, or 
            navigate the complexities of organizational change, I'm here to partner with you on your journey to success
            </p>
            <p className="m-0px">
            Explore my offerings, and let's embark on a transformative journey together!
            </p>
    
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-ruler-pencil" />
                <div className="feature-content">
                  <h5 className="dark-color">Learning and Development</h5>
                  <p>
                  As a seasoned expert in learning and development, I specialize in designing and delivering
                   a wide variety of competency-based programs tailored to enhance individual and team performance. 
                   With a focus on measurable outcomes, I create customized learning solutions that foster leadership,
                   innovation, and support professional growth. Ranging from behavioral to technical competencies, my 
                   programs are designed to meet the unique needs of diverse audiences across industries.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-image" />
                <div className="feature-content">
                  <h5 className="dark-color">Content Development</h5>
                  <p>
                  I offer comprehensive content development services that align with specific learning outcomes and 
                  leverage blended learning formats. From interactive e-learning modules to instructor-led programs, 
                  I craft content that enhances learner engagement and retention. Additionally, I conduct Train-the-Trainer 
                  workshops in targeted areas to equip other trainers with the skills needed to effectively deliver high-impact training.
                   My e-learning products are designed to meet the learning needs of today’s busy professionals, providing flexibility 
                   and scalability for organizations.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-brush-alt" />
                <div className="feature-content">
                  <h5 className="dark-color">Certified Professional in Behavioral Analysis</h5>
                  <p>
                  As a Certified Professional in Behavioral Analysis, I’m qualified to administer and debrief renowned personality 
                  assessments such as MBTI and DISC. My expertise also extends to a wide range of other behavioral tools, helping 
                  individuals and teams understand their personality types, improve communication, and foster collaboration. Through 
                  tailored debriefs and workshops, I offer insights that drive personal and organizational development.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-mobile" />
                <div className="feature-content">
                  <h5 className="dark-color">Competency Assessments and Dictionary Design</h5>
                  <p>
                  I specialize in designing and administering competency assessments that measure skills, behaviors, and knowledge critical
                   to performance. For organizations without a predefined competency framework, I can develop a custom competency dictionary
                    that aligns with their goals and culture. The assessments I design are grounded in industry best practices, ensuring accurate,
                     actionable results that can drive talent development and strategic decision-making.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>{" "}
          {/* row */}
          {/* <div className="btn-bar">
            <a href="/Contact" className="btn btn-theme">
             Contact me
            </a>
          </div> */}
        </div>
      </div>{" "}
      {/* row */}
      {/* 
     ==========================
       Counter
     ==========================
     */}
      {/* <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
        <div className="row">
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box"> */}
              {/* <div className="counter-data" data-count={375}>
                <i className="theme-color ti-face-smile" />
                <div className="count dark-color">375</div>
                <h6>Happy Clients</h6>
              </div> */}
            {/* </div>
          </div>{" "} */}
          {/* col */}
          {/* <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box"> */}
              {/* <div className="counter-data" data-count={375}>
                <i className="theme-color ti-headphone" />
                <div className="count dark-color">375</div>
                <h6>Telephonic Talk</h6>
              </div> */}
            {/* </div>
          </div>{" "} */}
          {/* col */}
          {/* <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box"> */}
              {/* <div className="counter-data" data-count={375}>
                <i className="theme-color ti-camera" />
                <div className="count dark-color">375</div>
                <h6>Photo Capture</h6>
              </div> */}
            {/* </div>
          </div>{" "} */}
          {/* col */}
          {/* <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box"> */}
              {/* <div className="counter-data" data-count={375}>
                <i className="theme-color ti-thumb-up" />
                <div className="count dark-color">375</div>
                <h6>Projects</h6>
              </div> */}
            {/* </div>
          </div>{" "} */}
          {/* col */}
        {/* </div>{" "} */}
        {/* row */}
      {/* </div> */}
    </SectionContainer>
  );
};
export default AboutUs;
