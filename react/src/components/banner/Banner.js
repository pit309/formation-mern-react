import { useState } from "react";
import './banner.css'

function Banner(props) {
    console.log(props, props.name)

    const [name, setName] = useState("Default")

    return (
        <div className="banner">
            <div className="container">
                <h1 className="page-title">Bienvenue, 
                    <span style={{ color: "red" }}>
                        {props.name ?? name}
                    </span>
                </h1>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Banner