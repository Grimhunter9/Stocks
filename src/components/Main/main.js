import React, { useContext } from "react";

import Navigation from "../Navbar/Nav";
import Head from "../Head/head";
import Stakewithus from "../Stake_with_us/with_us";
import OurTeam from "../OurTeam/team";
import Contacts from "../Contacts/reach";
import Footer from "../Footer/foot";

import { AppContext } from '../../Mycontext/text'


export default function MainPage() {
     const { color } = useContext(AppContext);
    return (
        <div id="Team" style={{ background: color ? "transparent" : "" }} className="App">
           <header>
                <Navigation />
                <Head />
            </header>
        <main>
            <Stakewithus />
            <OurTeam />
            <Contacts />
        </main>
            <Footer />
        </div>
    )
}