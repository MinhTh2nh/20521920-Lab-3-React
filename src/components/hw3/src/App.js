import './App.css';
import React, { useState } from 'react';


function App() {
  const [menuWidth, setMenuWidth] = useState("15%");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const closeBtn = () => {
    setMenuWidth("20px");
  };

  const openBtn = () => {
    setMenuWidth("15%");
  };
  return (
  <div>
   <div className="menu" style={{ width: menuWidth }} id="menu">
        <button onClick={closeBtn}>Close</button>
        <button onClick={openBtn}>Open</button>
        <ul>
          <div className="full-width"><li><a href="#" onClick={() => scrollToSection('profile')}>Profile</a></li></div>
          <div className="full-width"><li><a href="#" onClick={() => scrollToSection('experiences')}>Experiences</a></li></div>
          <div className="full-width"><li><a href="#" onClick={() => scrollToSection('abilities')}>Abilities</a></li></div>
        </ul>
    </div>

    <div class="container-cv">
        <div class="half-left">
            <div class="introduce" id ="profile">
                <div class="heading">
                    Profile
                </div>
                <p class="job"> I'm a student</p>
            </div>
            <div class="about-me m5">
                <div class="item col-3">
                    <div class="heading font20">
                        About me
                    </div>
                    <p class="pdr10">I like to sleep , harmburger and MQ ,I
                        also love coding and prove it to everyone
                    </p>
                </div>
                <div class="item col-3">
                    <div class="avatarImg">

                    </div>
                </div>
                <div class="item col-3 m5">
                    <div class="heading font20">
                        Details
                    </div>
                    <div class="list">
                        <div class="item-list">
                            <div class="title">
                                Name :
                            </div>
                            <div class="content">
                                Nguyễn Minh Thành
                            </div>
                        </div>
                        <div class="item-list">
                            <div class="title">
                                Age :
                            </div>
                            <div class="content">
                                21 years
                            </div>
                        </div>
                        <div class="item-list">
                            <div class="title">
                                Location :
                            </div>
                            <div class="content">
                                UIT,VNU-HCM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="half-right">
            <div class="heading font30 " id ="experiences">
                <p>Experiences</p>
            </div>
            <div class="education hightlight-end">
                <div class="heading font20">Educations</div>
                <div class="content ">
                    <div class="time-content">
                        <div class="place">UIT, VNU-HCM</div>
                        <div class="place-time pd10">Apr 2020 - June 2025</div>
                    </div>
                    <div class="job-description">
                        <div class="place">Information System</div>
                        <div class="place-time pd10">It appears that the
                            question you provided, "descriptuiomn," is not
                            a valid word or term. It seems to be a
                            typographical error
                            . However, if you meant to inquire about the
                            term "description,"
                            here's the information you might be looking for:</div>
                    </div>
                </div>
            </div>
            <div class="working">
                <div class="heading font20">Working Experiences</div>
                <div class="content ">
                    <div class="time-content">
                        <div class="place">NAB</div>
                        <div class="place-time pd10">In the future</div>
                    </div>
                    <div class="job-description">
                        <div class="place">Intend to apply to FrontEnd dev</div>
                        <div class="place-time pd10">It appears that the
                            question you provided, "descriptuiomn," is not
                            a valid word or term. It seems to be a
                            typographical error
                            . However, if you meant to inquire about the
                            term "description,"
                            here's the information you might be looking for:</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="abilities-part" id ="abilities">
        <div class="heading-mt10">
            Abilities
        </div>
        <div class="show-skill">
            <div class="sub-heading font20">Skills</div>
            <div class="list-skills">
                <div class="left-col">
                    <div class="items">
                        <div class="name-item">HTML/CSS</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">HTML/CSS</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">HTML/CSS</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">HTML/CSS</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                </div>

                <div class="right-col">
                    <div class="items">
                        <div class="name-item">HTML/CSS HTML/CSS HTML/CSS HTML/CSS</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">HTML/CSS</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">HTML/CSS</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="extend-part">
                <div class="introduce-extend-part">
                    See my profile on github.
                </div>
                <button class="btnn-github">
                    See project on Github
                </button>
            </div>

        </div>
        <div class="show-skill">
            <div class="sub-heading font20">Languages</div>
            <div class="list-skills">
                <div class="left-col">
                    <div class="items">
                        <div class="name-item">Vietnamese</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">Vietnamese</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">Vietnamese</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                </div>

                <div class="right-col">
                    <div class="items">
                        <div class="name-item">Vietnamese</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="name-item">Vietnamese</div>
                        <div class="star-grade">
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star-fill"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
  );
}

export default App;
