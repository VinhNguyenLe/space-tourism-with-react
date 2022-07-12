import React from "react"
import "./home.scss"

const Home = () => {
    return (
        <section className="container home">
            <div className="home__wrap">
                <div className="home__left">
                    <h5>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <h4 className="home__right">
                    <a
                        href="https://earth.google.com/web/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Explore
                    </a>
                    <div className="circle__below"></div>
                </h4>
            </div>
        </section>
    )
}

export default Home
