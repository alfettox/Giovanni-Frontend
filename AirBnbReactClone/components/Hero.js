import React from "react"

export default function Hero() {
    return (
        <section className="hero">
            <img src="../images/logo.png" className="hero--logo" />
            <div className="hero">
                <h1 className="hero--header">Reserve your cabin today</h1>
                <p className="hero--text">Wonderful <span class="strong">REACT</span>ives cabins in Canada</p>
            </div>
        </section>
    )
}