import React, { useState } from "react"

import "./crew.scss"

import { allData } from "../../data"

const Crew = () => {
    const [crewActive, setCrewActive] = useState(0)

    return (
        <section className="container crew">
            <div className="crew__title">
                <h5>
                    <span>02</span> Meet your crew
                </h5>
            </div>

            {allData.crew.map((item, index) => (
                <div
                    className={
                        crewActive === index
                            ? "crew__item active"
                            : "crew__item"
                    }
                    key={index}
                >
                    <div className="crew__left">
                        <div className="crew__content">
                            <h4>{item.role}</h4>
                            <h3>{item.name}</h3>
                            <p>{item.bio}</p>
                        </div>
                        <div className="crew__bullets">
                            {allData.crew.map((item, bulletIndex) => (
                                <div
                                    className={
                                        crewActive === bulletIndex
                                            ? "crew__bullet active"
                                            : "crew__bullet"
                                    }
                                    key={bulletIndex}
                                    onClick={() => setCrewActive(bulletIndex)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="crew__right">
                        <div className="crew__img">
                            <img src={item.images.webp} alt="crew" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Crew
