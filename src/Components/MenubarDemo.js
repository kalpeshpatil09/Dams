import React, { Component } from "react";
// import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { logDOM } from "@testing-library/react";
// import Logo from './src/img/Logo.png'; // gives image path

import { Image } from "primereact/image";

export class MenubarDemo extends Component {
  render() {
    return (
      <div>
        <div style={{ border: "1px solid", display: "flex" }}>
          <div style={{ marginLeft: "25px" }}>
            <h2>
              <i>
                <b>pwc</b>
              </i>
            </h2>
          </div>
          {/* <img src= {Logo} /> */}

          <div style={{ marginTop: "28px", marginLeft: "10px" }}>
            |Digital Acounting Manuals
          </div>
          <i
            className="pi pi-question-circle"
            style={{ marginTop: "25px", marginLeft: "950px" }}
          >
            &nbsp;Help
          </i>
          <i
            className="pi pi-bell"
            style={{ marginTop: "25px", marginLeft: "15px" }}
          >
            &nbsp;Notification
          </i>
          <Button
            style={{
              height: "20%",
              marginTop: "12px",
              borderRadius: "50%",
              marginLeft: "10px",
              backgroundColor: "#D04A02",
            }}
          >
            K
          </Button>
        </div>
      </div>
    );
  }
}
