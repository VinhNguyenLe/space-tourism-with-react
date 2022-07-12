import React, { useState } from "react"

import "./destination.scss"

import { allData } from "../../data"

const Destination = () => {
    const [desActive, setDesActive] = useState(0)

    return (
        <section className="destination container">
            <h5 className="destination__title title">
                <span>01</span> Pick your destination
            </h5>

            <div className="destination__wrap">
                {allData.destinations.map((item, index) => (
                    <div
                        className={
                            desActive === index
                                ? " destination__item active"
                                : " destination__item"
                        }
                        key={index}
                    >
                        <div className="destination__left">
                            <img
                                src={item.images.webp}
                                alt="des"
                                className="destination__img"
                            />
                        </div>
                        <div className="destination__right">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <div className="destination__right-bottom">
                                <div className="destination__distance">
                                    <h5>Avg. Distance</h5>
                                    <h4>{item.distance}</h4>
                                </div>
                                <div className="destination__travel">
                                    <h5>Est. Travel time</h5>
                                    <h4>{item.travel}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="destination__pag">
                    {allData.destinations.map((item, index) => (
                        <div
                            className={
                                desActive === index
                                    ? "destination__pag-item active"
                                    : "destination__pag-item"
                            }
                            key={index}
                            onClick={() => setDesActive(index)}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Destination
