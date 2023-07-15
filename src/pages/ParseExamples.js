import { observer } from "mobx-react-lite";
import React, { useContext, useRef } from "react";
import { Context } from "..";
import dns from "../assets/preview-logo-dns.png"
import { getExample } from "../utils/httpMethods";


function ParseExamplesComp() {
    const examplesArray = [{description : 'dns parse', href: "ссылка"}]
    const container = useRef()
    const { navbarHeight } = useContext(Context)
    return(
        <div ref={ref => container.current = ref} style={{ opacity: 1, marginTop: navbarHeight.height }}>
        <table style={{ width: 280 }}><tbody><tr><th style={{ textAlign: 'center' }}></th><th style={{ textAlign: 'center' }}></th></tr>{examplesArray.map((d, i) => <tr key={i}>
                    <td id={d.description}
                        style={{ color: 'blueviolet', padding: 5, paddingLeft: 0, opacity: 0.8 }}>
                            
                        <div
                            style={{textAlign: "left",  width: window.innerWidth / 2.1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: "nowrap", color: 'black', borderColor: '#3b4cff', marginLeft: 5 }}
                            //className="btn "
                            //style={{cursor: 'pointer', color: 'blueviolet', backgroundColor: 'lightgrey', padding: 5, borderRadius: 5}}
                            onClick={() => { }}
                        >
                            <img src={dns} alt="Логотип DNS" />
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
                                getExample('logo.svg')
                            }}
                        >
                            {d.href}
                        </div>
                    </td>
                </tr>)}
                </tbody>
                </table>
        </div>
    )
}

const ParseExamples = observer(ParseExamplesComp)
export default ParseExamples