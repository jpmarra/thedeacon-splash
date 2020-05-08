import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Close } from "../assets/icons/close.svg";

const Modal = ({ handleModalToggle }) =>
    ReactDOM.createPortal(
        <aside className="modal">
            <section className="modal__inner">
                <button
                    className="modal__inner--button"
                    onClick={handleModalToggle}
                >
                    <Close />
                </button>
                <h2 className="modal__inner--header">WELCOME</h2>
                <p>
                    The health and safety of our guests, employees and community
                    is our number one priority. We are closely monitoring the
                    evolving COVID-19 situation, and will make the decision on
                    when to reopen based on advice from local and federal
                    authorities. We understand things are changing daily, and
                    these are unprecedented, challenging times for everyone.
                </p>
                <p>
                    We are so grateful for the love and support we have received
                    from our community during this difficult time. We hope you
                    all stay safe and healthy and we know we can all get through
                    this together.
                </p>
                <p>
                    Best,
                    <br />
                    The Deacon
                </p>
            </section>
        </aside>,
        document.getElementById("modal")
    );

export default Modal;
