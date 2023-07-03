import { set } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import { Context } from "..";
import { addTask, getTasks } from "../utils/httpMethods";
import ModalForm from "../Components/ModalForm";

function ProfileComp() {
    const { navbarHeight } = useContext(Context)
    const container = useRef('')
    const currentWidth = window.innerWidth < 900 ? '100%' : 900
    const [tasks, setTasks] = useState([])
    const [add, setAdd] = useState(false)
    const [popupVisible, setPopupVisible] = useState(false)
    const [popupValue, setPopupValue] = useState("")
    const [isReadOnly, setIsReadOnly] = useState(false)
    useEffect(() => {
        console.log(add)
        getTasks().then(res => {
            setTasks(res)
        })
    }, [add])
    function modalSubmit(value) {
        console.log(value)
        if(value != null && value != "")
            addTask({Description: value}).then(() => setAdd(!add))
    }
//
    //console.log(navbarHeight.height)
    return (
        <div ref={ref => container.current = ref} style={{ opacity: 1, marginTop: navbarHeight.height }}>
            <header style={{
                backgroundColor: "white",
                minHeight: window.innerHeight - navbarHeight.height,
                // marginLeft: (container.current.offsetWidth - (window.innerWidth/2 < 300 ? 300 : window.innerWidth/1.15)) / 2,
                fontSize: 25,
                //  border: '1px solid',
                //   borderColor: "#25b831",
                // height: container.current.offsetHeight == null ? 0 : container.current.offsetHeight - navbarHeight.height ,
                width: '100%',
                textAlign: "right",
                //  paddingLeft: container.current.offsetWidth == null ? 0 : container.current.offsetWidth/ 10,
                // paddingRight: container.current.offsetWidth == null ? 0 : container.current.offsetWidth / 10,
                paddingTop: container.current.offsetHeight == null ? 0 : container.current.offsetHeight / 30,
                //  paddingBottom: container.current.offsetHeight == null ? 0 : container.current.offsetHeight/ 12
            }}>
                <Button className="btn btn-success" style={{marginRight: 25}} onClick={() => {
                    setPopupVisible(true)
                    setIsReadOnly(false)
                    setPopupValue("")
                }}>Добавить задачу для парсинга</Button>
                <table style={{ width: 280 }}><tbody><tr><th style={{ textAlign: 'center' }}>Задача</th><th style={{ textAlign: 'center' }}>Статус</th></tr>{tasks.data == '' ? '' : tasks.map((d) => <tr key={d.id}>
                    <td id={d.id}
                        style={{ color: 'blueviolet', padding: 5, paddingLeft: 0, opacity: 0.8 }}>
                        <div
                            style={{textAlign: "left",  width: window.innerWidth / 2.1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: "nowrap", color: 'black', borderColor: '#3b4cff', marginLeft: 5 }}
                            className="btn "
                            //style={{cursor: 'pointer', color: 'blueviolet', backgroundColor: 'lightgrey', padding: 5, borderRadius: 5}}
                            onClick={() => { setPopupVisible(true); setIsReadOnly(true); setPopupValue(d.description) }}
                        >
                            {d.description}
                        </div>
                    </td>
                    <td id={d.id + '_id'}
                        style={{ textAlign: 'right', alignItems: 'center', padding: 5, paddingLeft: 0 }}
                    >
                        <div
                            className={"btn " + (d.status == "В обработке" ? " btn-warning" : "btn-success") + (d.status == "Отменена" ? " btn-danger" : "")}
                            style={{ textOverflow: 'ellipsis', whiteSpace: "nowrap", overflow: 'hidden', width: (window.innerWidth / 2.1 > 300 ? 300 : window.innerWidth / 2.1) }}
                            //style={{ cursor: 'pointer', color: 'red', backgroundColor: "pink", textAlign: 'center', borderRadius: 5, padding: 5}} 
                            onClick={() => {
                                
                            }}
                        >
                            {d.status}
                        </div>
                    </td>
                </tr>)}
                </tbody>
                </table>

            </header>
                            <ModalForm Visible={popupVisible} setVisible={setPopupVisible} OnSubmit={modalSubmit} readonly={isReadOnly} Value={popupValue}></ModalForm>
        </div>
    );
}
const Profile = observer(ProfileComp)
export default Profile;
