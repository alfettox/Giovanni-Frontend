import React from 'react'; 
import ReactDOM from 'react-dom';
import './style.css'; 

function Page() {
    return (
        <div className="container">
            <img src="./me.jpg" className="image" />
            <div className="contact-informations">
                <h1>Giovanni De Franceschi</h1>
                <h5> Frontend Developer </h5>
                <div>
                    <div className="button">Email</div>
                    <div className="button">LinkedIn</div>
                </div>
            </div>
            <div className="about">
                <h4> About </h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I follow the best practices, and am always looking for new things to learn.
                </p>
            </div>
            <div className="interests">
                <h4> Interests </h4>
                <p>Interested in new technology, AI, Arduino. Architecture and design are my second passion. I love travel. Coffee fanatic.
                </p>
            </div>
            <div className="logo-section">
                <img src="" />
            </div>
        </div>

    )
}

const root = document.getElementById("root");
ReactDOM.render(<Page />, root);

