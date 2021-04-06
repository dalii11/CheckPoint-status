import React from "react";
import { Navbar } from "react-bootstrap";
import "./Dali.css";

const Dali = () => {
    return (
        <div>
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Dali;
