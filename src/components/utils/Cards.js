import React from "react";

export default function Cards() {
  return (
    <div>
      <h1 className="details-heading">Uncovering the essence of who I am!</h1>
      <div className="cards row row--25 mt--10 mt_md--10 mt_sm--10 snipcss-AsoCb">
        <div className="front-line-elements">
          <div className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
            <div className="rn-portfolio">
              <div className="inner">
                <div className="thumbnail">
                  <a href="/experiences">
                    <img
                      src="https://raw.githubusercontent.com/Navya-amarneni/MyPortfolio/main/exp.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/experiences">Experience</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div
              className="rn-portfolio"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="/projects">
                    <img
                      src="https://raw.githubusercontent.com/Navya-amarneni/MyPortfolio/main/project.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/projects">Projects</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div
              className="rn-portfolio"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="/education">
                    <img
                      src="https://raw.githubusercontent.com/Navya-amarneni/MyPortfolio/main/edc.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/education">Education</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="next-line-elements">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div
              className="rn-portfolio"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="/skills">
                    <img
                      src="https://raw.githubusercontent.com/Navya-amarneni/MyPortfolio/main/skill.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/skills">Courses and Skills</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div
              className="rn-portfolio"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="/achievements">
                    <img
                      src="https://raw.githubusercontent.com/Navya-amarneni/MyPortfolio/main/accc.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/achievements">Accomplishments</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
