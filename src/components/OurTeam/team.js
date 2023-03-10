import React, { useContext } from "react";
import First from './p1.jpg';
import second from './p2.jpg';
import Third from './p3.jpg';
import Forth from "./p4.jpg";
import Fifth from "./p5.jpg";

import { AppContext } from '../../Mycontext/text'


export default function Team() {
    const { color } = useContext(AppContext);
    return (
        <div id="Teams">
            <h1 className='Team' style={{ color: color ? "white" : "" }}>Our Team</h1>
            
            <div className="Container_grid" style={{ color: color ? "white" : "" }}>
                <div  className="grid">
                    <img  className="person" src={second} alt=""/>
                    <div className="content">
                      <h1 className="Name">Sam</h1>
                      <p className="text-xl">Co-Founder / Research</p>
                    </div>
                </div>
                <div className="grid">
                    <img className="person" src={First} alt=""/>
                    <div className="content">
                      <h1 className="Name">Yego</h1>
                      <p className="text-xl">Co-Founder / CTO</p>
                    </div>
                </div>
                <div className="grid">
                    <img  className="person " src={Forth} alt=""/>
                    <div className="content">
                      <h1 className="Name">Yahya</h1>
                      <p className="text-xl">Full-Stack Dev</p>

                    </div>
                </div>
                <div className="grid">
                    <img  className="person" src={Third} alt=""/>
                    <div className="content">
                      <h1 className="Name">Alex</h1>
                      <p className="text-xl">Backend Dev</p>

                    </div>
                </div>

                <div className="grid">
                    <img  className="person" src={Fifth} alt=""/>
                    <div className="content">
                      <h1 className="Name">Samer</h1>
                      <p className="text-xl">Front end Dev</p>
                    </div>
                </div>
            </div>
        </div>
    )
}