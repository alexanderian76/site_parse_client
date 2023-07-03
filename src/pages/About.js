import { set } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useRef, useState } from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import { Context } from "..";
import rocketPic from '../assets/rocket.png'

function AboutComp() {
  const {navbarHeight} = useContext(Context)
  const container = useRef('')
  const currentWidth = window.innerWidth < 900 ? '100%' : 900

  //console.log(navbarHeight.height)
  return (
    <div ref={ref => container.current = ref} style={{opacity: 1, marginTop: navbarHeight.height}}>
      <header style={{
              backgroundColor: "white",
              minHeight: window.innerHeight - navbarHeight.height,
      // marginLeft: (container.current.offsetWidth - (window.innerWidth/2 < 300 ? 300 : window.innerWidth/1.15)) / 2,
              fontSize: 25,
          //  border: '1px solid',
          //   borderColor: "#25b831",
          // height: container.current.offsetHeight == null ? 0 : container.current.offsetHeight - navbarHeight.height ,
              width: '100%',
              textAlign: "center",
          //  paddingLeft: container.current.offsetWidth == null ? 0 : container.current.offsetWidth/ 10,
          // paddingRight: container.current.offsetWidth == null ? 0 : container.current.offsetWidth / 10,
              paddingTop: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 30,
          //  paddingBottom: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 12
      }}>
                    <div style={{
                      width: currentWidth,
                      marginLeft: (window.innerWidth - currentWidth)/2
                    }}>Мы команда разработчиков и администраторов, любящих свое дело.
                       Мы не только хотим удовлетворить потребностям вас и вашего бизнеса,
                        но и сделать это, используя новейшие технологии. </div>
                        <img src={rocketPic} style={{marginTop: 30, height: window.innerHeight/3 < 400 ? 400 : window.innerHeight/3,width: '100%',  objectFit: 'contain'}}/>
                        <div style={{paddingTop: 15}}>Так, вы больше не будете переживать за техническую составляющую ваших процессов, мы возьмем на себя заботу, чтобы все системы вашей компании работали как часы.</div>
                        <div> Мы не идем на компромиссы, а предлагаем лучшие решения</div>
      </header>
     
    </div>
  );
}
const About = observer(AboutComp)
export default About;
