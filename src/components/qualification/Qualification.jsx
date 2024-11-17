import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
         <h2 className="section__title">Qualification</h2>
         <span className="section__subtitle">My personal journey</span>

         <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                className={
                toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick={() =>toggleTab(1)}
               >
                    <i className="uil uil-graduation-cap
                     qualification__icon"></i>
                     Education
                </div>

                <div className={
                toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }

                 onClick={() =>toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt 
                    qualification__icon"></i> 
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? 
                "qualification__content qualification__content-active" :
                    "qualification__content"}>

                    <div className="qualification__data">
                       <div>
                         <h3 className="qualification__title">Web Design</h3>
                            <li 
                            className="qualification__subtitle">
                            Full stack development
                            </li>
                            <div className="qualification__calender">
                                <span className="uil uil-calendar">
                                A graduate systems and information
                                </span>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                         <h3 className="qualification__title">TRAINING </h3>
                            <li
                            className="qualification__subtitle">
                                ITSHARE: training
                                center,Mansoura.</li> 
                            <li 
                            className="qualification__subtitle">
                                Full stack development.</li>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i> 2019 - 2022
                            </div>
                        </div>
                    </div>
                
                  <div className="qualification__data">
                       <div>
                         <h3 className="qualification__title"> MICROSOFT OFFICE
                            </h3>
                            <li
                            className="qualification__subtitle">
                                ICDL: Mansoura University. 
                                </li> 
                            <div className="qualification__calender">
                            <li 
                            className="qualification__subtitle">
                                word , Excel , Powerpoint. 
                                </li>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                         <h3 className="qualification__title">SKILLS AND TECHNOLOGY</h3>
                            <li 
                            className="qualification__subtitle">
                                Proficient in programming languages and frameworks.</li>
                            <div className="qualification__calender">
                            <li 
                            className="qualification__subtitle">
                                Smartphone application developer software.</li>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? 
                "qualification__content qualification__content-active" :
                    "qualification__content"}>

                    <div className="qualification__data">
                       <div>
                         <h3 className="qualification__title">Product
                            Designer
                         </h3>
                            <li 
                            className="qualification__subtitle">Microsoft - Cairo
                            </li>
                            <div className="qualification__calender">
                                <li className="uil uil-calendar"> 2023 -
                                Present
                                </li>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                         <h3 className="qualification__title">COMPUTER SKILLS: </h3>
                            <li
                            className="qualification__subtitle">
                                Microsoft office.</li> 
                            <li 
                            className="qualification__subtitle">
                                Internet browser.</li>
                            
                        </div>
                    </div>
                
                  <div className="qualification__data">
                       <div>
                         <h3 className="qualification__title"> Web Designer
                            </h3>
                            <li
                            className="qualification__subtitle">
                                Figma - Mansoura
                                </li> 
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2021 -
                             2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
  );
};

export default Qualification;