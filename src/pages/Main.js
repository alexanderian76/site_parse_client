import { set } from "mobx";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Button, Dropdown, Image, Navbar, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import background from '../assets/background.jpg'
import foot from '../assets/foot.jpg'
import city from '../assets/city.jpg'
import AutoHeight from 'react-auto-height'
import { Context } from "../index";
import {navHeight} from '../NavBar'
import { observer } from "mobx-react-lite";
import handpic from '../assets/handpic.png'
import techpic from '../assets/techpic.png'
import { useForm } from "react-hook-form";
import InputModal from "../modals/InputModal";
import {postMethod} from '../utils/httpMethods'
import { Link } from "react-router-dom";

function MainComp(props) {
    const [selectedValue, setSelectedValue] = useState('')
    const {register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset} = useForm()
    const {navbarHeight} = useContext(Context)
   // console.log(props)
    const container = useRef('')
    const formRef = useRef('')
    const [state, setState] = useState({winWidth: window.innerWidth, showAlert: false})
    
    function onResize() {
        // console.log(winWidth)
           setState({winWidth: window.innerWidth, showAlert: state.showAlert})
       }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        reset({
          Number: '',
          Email: '',
          Comment: '',
          Name: ''
        })
      }, [isSubmitSuccessful])
    const [show, setShow] = useState(false);
    const inRef = useRef(null)
    const nameRef = useRef('')
    const btnRef = useRef('')

    const onSubmit = function(data) {
        setState({winWidth: window.innerWidth, showAlert: true})
        postMethod(data.Email, data.Comment, data.Number, data.Name)
    }
    function Validate() {
       // console.log(errors.Email)
        
       // if(errors.Email != null)
    }
   // console.log(nameRef.current.offsetHeight)
   // console.log(errors);
//<div style={{color: 'red'}}>{errors.Email?.type === 'pattern' && "Введите корректный e-mail"}</div>
    
const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};
  //  console.log(container.current.offsetHeight)
//style={{backgroundImage: `url(${background})`, height: 1000}}
//#86b7fe
  return (
    <div ref={ref => container.current = ref} style={{ backgroundColor: 'white', marginTop: navbarHeight.height}}>
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
            <div>Аутсорс разработка и парсинг данных</div>
            Создадим или доработаем уже существующие приложения
            <div>Парсим данные в любом удобном для вас формате</div>
            <img alt="Парсинг, аутсорс разработка" src={handpic} style={{marginTop: 30, height: window.innerHeight/3 < 400 ? 400 : window.innerHeight/3,width: '100%',  objectFit: 'contain'}}/>
        </header>
        <meta name="description" content="создать web-приложение, спарсить данныые"/>
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
            Работаем с различиными стеками технологий
            <div>
                
            </div>
            <img alt="разработка с использованием новейших технологий" src={techpic} style={{height: window.innerHeight/3 < 400 ? 400 : window.innerHeight/3,width: '100%',  objectFit: 'contain'}}/>
            <div>Найдем наилучшее решение именно для вас</div>
            <div></div>
        </header>
        <a style={{
                     // width: currentWidth,
                      marginTop: state.winWidth < 1800 ? 10 : 30,
                      display: 'inline-block',
                      marginLeft: state.winWidth < 1800 ? 10 : state.winWidth / 4,
                      marginRight: state.winWidth < 1800 ? 10 : state.winWidth / 4,
                      fontSize: state.winWidth < 1800 ? 17 : 19
                    }}>
                        Мы предлагаем услуги по разработке программного обеспечения для бизнеса, парсингу данных (при наличии к ним общего доступа).
                        <div> 
                            Автоматизируем бизнес процессы, обучаем сотрудников использовать системы, а также проводим тренинги по компьютерной безопасности, что позволит вам избежать кражи конфеденциальной информации с рабочих устройств.
                        </div>
                    </a>
        
        <header style={{
                backgroundColor: "white",
                fontSize: 30,
                width: '100%',
                textAlign: "center",
                paddingTop: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 50,
        }}>
             { !state.showAlert ? <div>Для уточнения условий напишите нам: <ButtonMailto label="info@leaf-studio.ru" mailto="mailto:info@leaf-studio.ru"/></div> :
       <header style={{
        backgroundColor: "white",
        fontSize: 35,
        width: '100%',
        textAlign: "center",
      //  paddingTop: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 30,
}}>
    Спасибо! Мы свяжемся с вами в ближайшее время
    
</header>
       }
            
        </header>
        
        {
        
        /*
        <form
        ref={formRef}
        style={{
            padding: 15, 
            backgroundColor: "white",
            marginLeft: ((container.current.offsetWidth ?? window.innerWidth) - (window.innerWidth/2.5 < 300 ? 300 : window.innerWidth/2.5)) / 2,
            width: window.innerWidth/2.5 < 300 ? 300 : window.innerWidth/2.5,
            height: window.innerHeight/2.5 < 600 ? 600 : window.innerHeight/2.5,
            marginTop: 10
        }} 
        onSubmit={handleSubmit(onSubmit)}
       // {(e) => {console.log(e.target); e.preventDefault();}}
        >
            <label>
                E-mail:
            </label>
            <div ref={inRef}>
     <input {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     <div style={{color: 'red'}}>{ errors.Email != null  && 'Введите корректный e-mail для обратной связи'}</div>
</div>
<label>
                Телефон:
            </label>
            <div>
     <input {...register("Number", {required: false })} className="form-control" id="exampleInputTelefone"/>
     <div style={{color: 'red'}}>{ errors.Number != null  && 'Введите номер телефона'}</div>
     </div>
            <label style={{marginTop: 15}}>Имя:</label>
            <div ref={ref => nameRef.current = ref}>
            <input {...register('Name', {required: true})} className="form-control" id="exampleInputPassword1"></input>
            <div style={{color: 'red'}}>{ errors.Name != null  && 'Пожалуйста, укажите, как можно к вам обращаться'}</div>
            </div>
            <label style={{marginTop: 15}}>
                Если хотите сразу о чем-то спросить
            </label>
            <textarea {...register('Comment', {required: false})} className="form-control" style={{height: nameRef.current.offsetHeight == null ? 0 : nameRef.current.offsetHeight * 5}}></textarea>
            <Button ref={btnRef} style={{marginTop: 10, marginLeft: nameRef.current.offsetWidth == null || btnRef.current.offsetWidth == null ? 0 : nameRef.current.offsetWidth - btnRef.current.offsetWidth}} variant="success" type="submit" className="btn btn-primary">Отправить</Button>
        </form>
        */
      }
    </div>

  );
}

const Main = observer(MainComp)

export default Main;
