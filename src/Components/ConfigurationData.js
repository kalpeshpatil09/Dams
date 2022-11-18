import React, { Component } from "react";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
export class ConfigurationData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
    };
  }
  render() {
    return (
      <Card>
        <Card style={{ width: "200px", marginTop: "10px", marginLeft: "10px" }}>
          <div class="grid">
            <i className="pi pi-save" style={{ height: "5px" }}>
              &nbsp;
              <b>
                
                <b>Configuration</b>
              </b>
            </i>
          </div>
        </Card>
        <br />
        <Card >
          <div class="grid">
            <Button
              class="col-2"
              style={{ border: "1px solid", width: "210px", height: "50px" }}
            >
              Password Configuration
            </Button>
            <Button
              class="col-2"
              style={{
                border: "1px solid",
                width: "210px",
                height: "50px",
                textAlign: "center",
              }}
            >
              Client Configuration
            </Button>
            <Button
              class="col-2"
              style={{
                border: "1px solid",
                width: "250px",
                height: "50px",
                textAlign: "center",
              }}
            >
              Email & SMTP Configuration{" "}
            </Button>
          </div>
          <br />
          <Card style={{ display: "flex", backgroundColor: "#F3F3F3" }}>
            <div style={{ display: "flex" }}>
              <div>
                <label htmlFor="integer">Time for Email to be sent</label>
                <br />
                <InputText id="integer" keyfilter="int" />
              </div>
              <div style={{ display: "flex", marginLeft: "100px" }}>
                <div className="radio">
                  <label>
                    <input type="radio" value="AM" checked={true} />
                    AM
                  </label>
                </div>
                <div className="radio" style={{ marginLeft: "60px" }}>
                  <label>
                    <input type="radio" value="PM" checked={true} />
                    PM
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="grid p-fluid">
                <div className="field col-12 md:col-6">
                  <label htmlFor="integer">Host Name</label>
                  <InputText id="integer" keyfilter="int" />
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="numbers">Port Name</label>
                  <InputText id="numbers" keyfilter="num" />
                </div>
              </div>
              <div className="grid p-fluid">
                <div className="field col-12 md:col-6">
                  <label htmlFor="integer">User Name</label>
                  <InputText id="integer" keyfilter="int" />
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="numbers">Password</label>
                  <InputText id="numbers" keyfilter="num" />
                </div>
              </div>
            </div>
          </Card>
          <br />
          <div>
            <Button label="RESET" style={{ marginLeft: "1150px" }} />
            <Button label="SAVE" style={{ marginLeft: "30px" }} />
          </div>
        </Card>
      </Card>
    );
  }
}
