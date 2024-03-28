import React, { useContext, useEffect, useState } from "react";
import Logo from "./logo.jpg";
import SanityClient from '../client';
import { AppContext } from "../../Mycontext/text";

export default function Head() {
    const { color } = useContext(AppContext);
    const [ast, setast] = useState(null);

    useEffect(() => {
        SanityClient.fetch(`*[_type == "asset"] {asset,time}`)
            .then((data) => setast(data[0]))
            .catch(console.error);
    }, [])

    if (!ast) return <div style={{ color: "transparent" }}>Loading...</div>

    return (
        <div>
            <div className="container_head">
                <h1 className="title" style={{ color: color ? "white" : "" }}>Staking  provider for the blockchain industry</h1>
                <img
                    style={{ filter: color ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)brightness(102%) contrast(102%)" : "" }}
                    className="pic"
                    src={Logo}
                    alt="The logo of the site"
                />
                <p className="title2" style={{ color: color ? "white" : "" }}>
                    Earn staking rewards with independent Proof of Stake Validator<br />
                    We are validating the PoS blockchain networks which we believe have promising future in web3<br />
                    Support us by delegating to us on the networks below
                </p>

                <a href="#Networks">
                    <button className="Bttn">STAKE</button>
                </a>

            </div>
            <div className="container_stake" style={{ color: color ? "white" : "" }} >
                <div className="stake">

                    <h2 className="info">Assets staked</h2>
                    <p className="num" >{ast.asset}</p>
                </div>

                <div className="stake">
                    <h2 className="info3">Uptime</h2>
                    <p className="num">{ast.time}</p>
                </div>
            </div>
        </div>
    )
}