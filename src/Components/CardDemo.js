import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

// import {Grid} from '';
import "/node_modules/primeflex/primeflex.css";

export class CardDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLeftScreen: false,
      visibleFullScreen: false,
    };
  }
  render() {
    const header = (
      <img
        alt="Card"
        src="images/usercard.png"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
    );
    const footer = (
      <span>
        <Button label="Save" icon="pi pi-check" />
        <Button
          label="Cancel"
          icon="pi pi-times"
          className="p-button-secondary ml-2"
        />
        <Button
          icon="pi pi-th-large"
          onClick={() => this.setState({ visibleFullScreen: true })}
          className="mr-2"
        />
        <br />
      </span>
    );
    const customIcons = (
      <React.Fragment>
        <button className="p-sidebar-icon p-link mr-1">
          <span className="pi pi-print" />
        </button>
        <button className="p-sidebar-icon p-link mr-1">
          <span className="pi pi-arrow-right" />
        </button>
      </React.Fragment>
    );

    return (
      <Card style={{ border: "1px solid", backgroundColor: "lightgrey" }}>
        <div>
          <div class="grid">
            <Button style={{ marginLeft: "10px", marginTop: "10px" }}>
              <i className="pi pi-chevron-circle-left"></i>
              <div>Document Name</div>
            </Button>
            <br />
            <Button
              icon="pi pi-download"
              onClick={() => this.setState({ visibleFullScreen: true })}
              className="mr-2"
            />
            <br />

            <Sidebar
              visible={this.state.visibleFullScreen}
              fullScreen
              onHide={() => this.setState({ visibleFullScreen: false })}
            >
              <h3>For Download Document List</h3>
            </Sidebar>
            <Button
              icon="pi pi-bookmark"
              onClick={() => this.setState({ visibleLeftScreen: true })}
              className="mr-2"
            />
            <br />

            <Sidebar
              visible={this.state.visibleLeftScreen}
              leftScreen
              onHide={() => this.setState({ visibleLeftScreen: false })}
            >
              <h3>For BookMark Document</h3>
            </Sidebar>
          </div>
          <br />
          <Card >
            <Card
              style={{
                width: "100%",
                height: "100%",
                marginBottom: "2em",
                backgroundColor: "#F3F3F3",
                color: "white",
                borderLeft: "10px solid blue",
                
              }}
            >
              <div class="grid" >
                <div
                  class="col-2"
                  style={{ marginRight: "50px", color: "black" }}
                >
                  <i className="pi pi-check-circle"></i>Identified Keyword
                </div>
                <div style={{marginTop:"10px"}}>
                  <Button style={{ marginLeft: "1200px" }}>
                    <i className="pi pi-plus-circle"></i>Add Keyword
                  </Button>
                </div>
              </div>
              <br />
              <div class="grid">
                <div
                  class="col-1"
                  style={{
                    border: "1px solid",
                    borderRadius: "50px",
                    backgroundColor: "skyblue",
                  }}
                >
                  Keyword 1<i className="pi pi-times"></i>
                </div>
                <br />
                <div
                  class="col-1"
                  style={{
                    border: "1px solid",
                    borderRadius: "50px",
                    backgroundColor: "skyblue",
                  }}
                >
                  Keyword 2<i className="pi pi-times"></i>
                </div>
                <div
                  class="col-1"
                  style={{
                    border: "1px solid",
                    borderRadius: "50px",
                    backgroundColor: "skyblue",
                  }}
                >
                  Keyword 3<i className="pi pi-times"></i>
                </div>
                <div
                  class="col-1"
                  style={{
                    border: "1px solid",
                    borderRadius: "50px",
                    backgroundColor: "skyblue",
                  }}
                >
                  Keyword 4<i className="pi pi-times"></i>
                </div>
                <div
                  class="col-1"
                  style={{
                    border: "1px solid",
                    borderRadius: "50px",
                    backgroundColor: "skyblue",
                  }}
                >
                  Keyword 5<i className="pi pi-times"></i>
                </div>
                <div
                  class="col-1"
                  style={{
                    border: "1px solid",
                    borderRadius: "50px",
                    backgroundColor: "skyblue",
                  }}
                >
                  Keyword 6<i className="pi pi-times"></i>
                </div>
              </div>
            </Card>
            <div class="grid" style={{ backgroundColor: "#F3F3F3" }}>
              <div
                class="col-5"
                style={{
                  border: "1px solid",
                  borderRadius: "10px",
                  borderLeft: "10px solid blue",
                }}
              >
                <div class="col-6" style={{ borderRadius: "10px" }}>
                  <i className="pi pi-server"></i>Identified Section{" "}
                </div>
                <br />
                <div
                  class="grid"
                  style={{
                    backgroundColor: "#F3F3F3",
                    border: "1px solid",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <div class="col-4">Section :1</div>
                  <div class="col-6">Comment</div>
                  <div class="col-2">
                    <Button icon="pi pi-chevron-circle-right"></Button>
                  </div>
                </div>
                <br />
                <div
                  class="grid"
                  style={{
                    backgroundColor: "#F3F3F3",
                    border: "1px solid",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <div class="col-4">Section :2</div>
                  <div class="col-6">Comment</div>
                  <div class="col-2">
                    <Button icon="pi pi-chevron-circle-right"></Button>
                  </div>
                </div>
                <br />
                <div
                  class="grid"
                  style={{
                    backgroundColor: "#F3F3F3",
                    border: "1px solid",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <div class="col-4">Section :3</div>
                  <div class="col-6">Comment</div>
                  <div class="col-2">
                    <Button icon="pi pi-chevron-circle-right"></Button>
                  </div>
                </div>
                <br />
                <div
                  class="grid"
                  style={{
                    backgroundColor: "#F3F3F3",
                    border: "1px solid",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <div class="col-4">Section :4</div>
                  <div class="col-6">Comment</div>
                  <div class="col-2">
                    <Button icon="pi pi-chevron-circle-right"></Button>
                  </div>
                </div>
              </div>
              {/* <br /> */}
              <div class="col-5" style={{ borderLeft: "10px solid blue",marginLeft: "10px" }}>
                {/* <div
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "2em",
                    backgroundColor: "#F3F3F3",
                    color: "white",
                  }}
                >
                    <div></div> */}
                  <div class="grid" >
                    <div
                      class="col-4"
                      style={{ marginRight: "70px", color: "black"}}
                    >
                      <i
                        className="pi pi-check-circle"
                      ></i>
                      Identified Keyword
                    </div>
                    <div>
                      <Button style={{ marginLeft: "160px" }}>
                        <i className="pi pi-plus-circle"></i>Add Keyword
                      </Button>
                    </div>
                  </div>
                  <br />
                  <div class="grid">
                    <div
                      class="col-3"
                      style={{
                        border: "1px solid",
                        borderRadius: "50px",
                        backgroundColor: "skyblue",
                      }}
                    >
                      Keyword 1<i className="pi pi-times"></i>
                    </div>
                    <br />
                    <div
                      class="col-3"
                      style={{
                        border: "1px solid",
                        borderRadius: "50px",
                        backgroundColor: "skyblue",
                      }}
                    >
                      Keyword 2<i className="pi pi-times"></i>
                    </div>
                    <div
                      class="col-3"
                      style={{
                        border: "1px solid",
                        borderRadius: "50px",
                        backgroundColor: "skyblue",
                      }}
                    >
                      Keyword 3<i className="pi pi-times"></i>
                    </div>
                    {/* <div class="col-1" style={{border:"1px solid",borderRa  dius:"50px", backgroundColor:"skyblue"}}>Keyword 4<i className="pi pi-times"></i></div> */}
                    {/* <div class="col-1" style={{border:"1px solid",borderRadius:"50px", backgroundColor:"skyblue"}}>Keyword 5<i className="pi pi-times"></i></div> */}
                    {/* <div class="col-1" style={{border:"1px solid",borderRadius:"50px", backgroundColor:"skyblue"}}>Keyword 6<i className="pi pi-times"></i></div> */}
                  </div>
                {/* </div> */}
                <hr style={{ border: "dotted black" }} />
                <div>
                  <div style={{ marginRight: "500px", color: "black" }}>
                    <i
                      className="pi pi-book"
                      style={{ fontSize: "15px", color: "black" }}
                    ></i>
                    Section Name
                  </div>
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </Card>
        </div><br/>
        <div  style={{marginLeft:"1000px",justifyContent:"space-between", display:"flex"}}>
            <Button label="Recall document"></Button>
            <Button label="Save as Draft" />

            <Button label="Approved"  />
            <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />   
          

        </div>
      </Card>
    );
  }
}
