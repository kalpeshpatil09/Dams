import React, { Component } from "react";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";

export class ConfigurationDataam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      name: "React",
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeValue(event) {
    console.log(event.target.value);
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
        <Card>
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
          <Card style={{ display: "flex", backgroundColor: "#F3F3F3",borderLeft:"10px solid blue" }}>
            <div style={{ display: "flex" }}>
              <div>
                <label htmlFor="integer">No of Days for Expired</label>
                <br />
                <InputText id="integer" keyfilter="int" />
              </div>
              <div style={{ marginLeft: "200px" }}>
                <label htmlFor="integer">No of Attempt before Lockout</label>
                <br />
                <InputText id="integer" keyfilter="int" />
              </div>
              <br />
            </div>
            <div style={{ marginRight: "1150px" }}>
              <h4>Password Should Have</h4>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ border: "1px" }}>
                No of days for Expiry
                <div onChange={this.onChangeValue}>
                  <input type="radio" value="Male" name="gender" /> AM
                  <input type="radio" value="Female" name="gender" /> PM
                </div>
              </div>
              <div style={{ border: "1px", marginLeft: "260px" }}>
                Special characters
                <div onChange={this.onChangeValue}>
                  <input type="radio" value="Male" name="gender" /> AM
                  <input type="radio" value="Female" name="gender" />
                  PM
                </div>
              </div>
              <div style={{ border: "1px", marginLeft: "250px" }}>
                Upper Case Letter
                <div onChange={this.onChangeValue}>
                  <input type="radio" value="Male" name="gender" /> AM
                  <input type="radio" value="Female" name="gender" />
                  PM
                </div>
              </div>
              <div style={{ border: "1px", marginLeft: "250px" }}>
                Lower Case Letter
                <div onChange={this.onChangeValue}>
                  <input type="radio" value="Male" name="gender" /> AM
                  <input type="radio" value="Female" name="gender" />
                  PM
                </div>
              </div>
            </div>
          </Card>
          <br />
          <div>
            <Button label="CANCLE" style={{ marginLeft: "1150px" }} />
            <Button label="SUBMIT" style={{ marginLeft: "30px" }} />
          </div>
          <div />
        </Card>
      </Card>
    );
  }
}
