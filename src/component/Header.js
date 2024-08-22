import React from 'react';
import "../component/Header.css";
import githubIcon from "../icons/icons8-github-32.png";
import netlifyIcon from "../icons/icons8-netlify.png";
import linkedinIcon from "../icons/icons8-linkedin-30.png";
import UserPhoto from "../icons/userPhoto.jpg";

function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <p className="Title">Hi,</p>
                    <p className="Text">I'am <span><p className="userName mx-3">JonY</p></span>Web Designer</p>

                    <div className="media">
                        <button type="button" className="ContactBtn">
                            <a href="https://t.me/NEoN_RS" className="btnText">Contact</a>
                        </button>

                        <div className="icons">
                            <a href="">
                                <img src={linkedinIcon} alt="#" className="Icon"/>
                            </a>
                            <a href="https://app.netlify.com/teams/dejony/overview">
                                <img src={netlifyIcon} alt="#" className="Icon"/>
                            </a>
                            <a href="https://github.com/deJonY">
                                <img src={githubIcon} alt="#" className="Icon"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 text-center">
                    <img src={UserPhoto} alt="User Photo" className="userPhoto"/>
                </div>
            </div>
        </div>
    );
}

export default Header;