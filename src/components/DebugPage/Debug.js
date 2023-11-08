import Modal from 'react-bootstrap/Modal';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.css';
import {useContext} from "react";

import {unstable_HistoryRouter} from "react-router-dom";
import {HistoryContext, useMyContext} from "../../providers/HistoryProvider/HistoryProvider";
export const Debug = ({show, setShow}) => {
    const {history, setHistory} = useMyContext();
    const handleClose = () => {
        setShow(false);
    }

    return (
        <div>
            <CSSTransition in={show} timeout={300} classNames="modal-fade" unmountOnExit>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>History</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {history.map((item, idx) => {
                                return (
                                    <>
                                        <p key={idx}>{idx + 1}: {item}</p>
                                        <br/>
                                    </>
                                )

                            })}
                        </div>
                    </Modal.Body>
                </Modal>
            </CSSTransition>
        </div>

    )
}
