import { set } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import { Context } from "..";
import devPic from '../assets/develop.png'
import handpic from '../assets/develop.jpeg'
import techpic from '../assets/techpic.png'

function DevelopComp() {
  const {navbarHeight} = useContext(Context)
  const container = useRef('')
  const currentWidth = window.innerWidth < 900 ? '100%' : 900

  const [state, setState] = useState({winWidth: 0})

  function onResize() {
    // console.log(winWidth)
       setState({winWidth: window.innerWidth})
  }

  useEffect(() => {
  window.addEventListener('resize', onResize)
  
  }, [])
  //console.log(navbarHeight.height)
  return (
    <div ref={ref => container.current = ref} style={{opacity: 1, marginTop: navbarHeight.height}}>
      <header style={{
              backgroundColor: "white",
              minHeight: container.current.offsetHeight == null ? 0 : container.current.offsetHeight - navbarHeight.height,
             // marginTop: container.current.offsetHeight == null ? 0 : navbarHeight.height,
            //  marginLeft: container.current.offsetWidth == null || container.current.offsetWidth < 900 ? 0 : container.current.offsetWidth / 4,
             // width: container.current.offsetWidth == null || container.current.offsetWidth < 900 ? '100%' : container.current.offsetWidth / 2,
              //fontSize: 25,
          //  border: '1px solid',
          //   borderColor: "#25b831",
          // height: container.current.offsetHeight == null ? 0 : container.current.offsetHeight - navbarHeight.height ,
              width: '100%',
              //extAlign: "center",
          //  paddingLeft: container.current.offsetWidth == null ? 0 : container.current.offsetWidth/ 10,
          // paddingRight: container.current.offsetWidth == null ? 0 : container.current.offsetWidth / 10,
           //   paddingTop: container.current.offsetHeight == null || window.innerWidth < 900 ? container.current.offsetHeight/ 30 : container.current.offsetHeight/ 10,
              paddingRight: container.current.offsetWidth < 900 ? 0 : 30
          //  paddingBottom: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 12
      }}>
<header style={{
                backgroundColor: "white",
        // marginLeft: (container.current.offsetWidth - (window.innerWidth/2 < 300 ? 300 : window.innerWidth/1.15)) / 2,
                fontSize: 35,
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
<div>Разработаем web-приложение для любых нужд</div>
            От самых простых до полноценных web-сервисов
            <img alt="разработка приложения" src={handpic} style={{marginTop: 30, height: window.innerHeight/3 < 400 ? 400 : window.innerHeight/3,width: '100%',  objectFit: 'contain'}}/>
        </header>
        <meta name="description" content="купить web-приложение"/>
    <meta name="keywords" content="заказать сайт web-application web-приложение"/>
        <header style={{ 
            fontSize: 25,
            width: '100%',
            paddingBottom: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 40,
            textAlign: "center",
            backgroundColor: "#22112e",
            color: 'white',
            paddingTop: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 30,
        }}>
            Используем новейшие технологии
            <div>
                Все буквально летает
            </div>
            <img alt="разработка с использованием новейших технологий" src={techpic} style={{height: window.innerHeight/3 < 400 ? 400 : window.innerHeight/3,width: '100%',  objectFit: 'contain'}}/>
            <div>Максимально доступные решения</div>
            <div>Для вашего бизнеса</div>
        </header>


        <a style={{
                     // width: currentWidth,
                      marginTop: typeof(currentWidth) === "string" ? 10 : 30,
                      display: 'inline-block',
                      marginLeft: typeof(currentWidth) === "string" ? 10 : currentWidth / 10,
                      fontSize: typeof(currentWidth) === "string" ? 17 : 19
                    }}>Если вам нужен сайт или web приложение для автоматизации бизнеса и ведения учета различного рода данных, то вы обратились по адресу. Создадим web приложение с учетом всех ваших требований. Если вам необходимо построить сложную логику или математическую модель для обработки данных, у нас работают лучшие математики, способные решить любую задачу.  Работаем как с юридическими, так и с физическими лицами. Цена каждого проекта индивидуальна и зависит от сложности и объема задач, но можем с уверенностью сказать, что предложим вам самые выгодные условия.</a>
        <a style={{
                     // width: currentWidth,
                      marginTop: typeof(currentWidth) === "string" ? 10 : 30,
                      display: 'inline-block',
                      marginLeft: typeof(currentWidth) === "string" ? 10 : currentWidth / 10,
                      fontSize: typeof(currentWidth) === "string" ? 17 : 19
                    }}>При разработке мы используем React. В серверной части, в зависимости от задач, используем либо Python, либо Node.js</a>
        <img src={devPic} style={{marginTop: 30, height: window.innerHeight < 400 ? 200 : window.innerHeight/3,width: '100%',  objectFit: 'contain'}}/>
                    <b style={{
                     // width: currentWidth,
                      display: 'inline-block',
                      marginLeft: typeof(currentWidth) === "string" ? 10 : currentWidth / 10,
                      fontSize: typeof(currentWidth) === "string" ? 17 : 19
                    }}>Что именно мы предлагаем:</b>
                    <ul style={{
                      marginLeft:  typeof(currentWidth) === "string" ? 10 : currentWidth / 10,
                   //   fontFamily: ['Fira Sans', 'Tahoma', 'Geneva', 'sans-serif']
                   fontSize: typeof(currentWidth) === "string" ? 15 : 20
                      
                    }}>
                      <li>
                      разработка программного обеспечения для автоматизации специфических бизнес-процессов для малых и средних компаний;
                      </li>
                      <li>
                      интеграция приложений и данных;
                      </li>
                      <li>
                      создание корпоративных хранилищ данных и систем поддержки принятия решений;
                      </li>
                    </ul>
                    <b style={{
                     // width: currentWidth,
                      display: 'inline-block',
                      marginLeft: typeof(currentWidth) === "string" ? 10 : currentWidth / 10,
                      fontSize: typeof(currentWidth) === "string" ? 17 : 19
                    }}>Для создания уникальных программных решений и эффективной организации долговременного плодотворного сотрудничества с нашими заказчиками мы:</b>
                    <ul style={{
                      marginLeft:  typeof(currentWidth) === "string" ? 10 : currentWidth / 10,
                   //   fontFamily: ['Fira Sans', 'Tahoma', 'Geneva', 'sans-serif']
                   fontSize: typeof(currentWidth) === "string" ? 15 : 20
                      
                    }}>
                      <li>
                      глубоко погружаемся в бизнес/технологии заказчика;
                      </li>
                      <li>
                      четко формулируем вместе с заказчиком цель создания программного обеспечения;
                      </li>
                      <li>
                      формируем совместные с нашими заказчиками проектные команды;
                      </li>
                      <li>
                      планируем шаги по развитию совместно с заказчиком создаваемых информационных систем и программных решений.
                      </li>
                    </ul>
      </header>
     
    </div>
  );
}
const Develop = observer(DevelopComp)
export default Develop;
