import React, { useState } from "react";
import Navigation from "./components/Navbar/Nav";
import Head from "./components/Head/head";
import Stakewithus from "./components/Stake_with_us/with_us";
import OurTeam from "./components/OurTeam/team";
import Contacts from "./components/Contacts/reach";
import Footer from "./components/Footer/foot";
import { AppContext } from "./Mycontext/text";
/***********************************/
import "./App.css";
import "./components/Navbar/Nav.css";
import "./components/Head/head.css";
import "./components/Stake_with_us/with_us.css";
import "./components/OurTeam/team.css";
import "./components/Contacts/reach.css";
import "./components/Footer/foot.css";


export default function App() {

  // This function is used to stop the scrolling when opening the side bar on the moblie 

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  //This function is used to switch between dark mode and light mode
  const [color, setcolor] = useState(false);
  const change = () => setcolor(!color);

  //This function is used to Blackout the screen when opening the sidebar on mobile
  const [menu, setmenu] = useState(false);
  const blackout = () => setmenu(!menu);


  return (
    <AppContext.Provider value={{ color, change, menu, blackout }}>
      <body style={{ background: color ? "transparent" : "" }} className="App">
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
      </body>
    </AppContext.Provider>
  );
}