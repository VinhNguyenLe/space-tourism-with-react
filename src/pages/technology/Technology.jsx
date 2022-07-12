import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import "./technology.scss"

import { allData } from "../../data"

const Technology = () => {
    const [techActive, setTechActive] = useState(0)
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })

    return (
        <section className="container technology">
            <div className="technology__title">
                <h5>
                    <span>03</span> Space Launch 101
                </h5>
            </div>
            {allData.technology.map((item, index) => (
                <div
                    className={
                        techActive === index
                            ? "technology__wrapper active"
                            : "technology__wrapper"
                    }
                >
                    <div className="technology__left">
                        <div className="technology__bullets">
                            {allData.technology.map((item, bulletIndex) => (
                                <h4
                                    className={
                                        techActive === bulletIndex
                                            ? "technology__bullet active"
                                            : "technology__bullet"
                                    }
                                    onClick={() => setTechActive(bulletIndex)}
                                >
                                    {bulletIndex + 1}
                                </h4>
                            ))}
                        </div>
                        <div className="technology__content">
                            <h5>THE TERMINOLOGY…</h5>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="technology__right">
                        <img
                            src={
                                !isPortrait
                                    ? item.images.portrait
                                    : item.images.landscape
                            }
                            alt="tech"
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Technology
