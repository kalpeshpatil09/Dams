import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLeft: false,
      // visibleRight: false,
      visibleTop: false,
      visibleBottom: false,
      visibleFullScreen: false,
      visibleCustomToolbar: false,
      visibleMiddle: false,
    };
  }
  render() {
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
      <div
        style={{
          marginRight: "1500px",
          border: "1px solid",
          width: "70px",
          height: "670px",
        }}
      >
        <div className="card">
          <Sidebar
            visible={this.state.visibleLeft}
            onHide={() => this.setState({ visibleLeft: false })}
          >
            <h3>Left Sidebar</h3>
          </Sidebar>
          &nbsp;
          <Sidebar
            visible={this.state.visibleMiddle}
            position="middle"
            onHide={() => this.setState({ visibleMiddle: false })}
            style={{
              width: "1200px",
              height: "600px",
              borderRadius: "15px",
              marginTop: "75px",
            }}
          >
            <h3>kk</h3>
          </Sidebar>
          <Sidebar
            visible={this.state.visibleTop}
            position="top"
            onHide={() => this.setState({ visibleTop: false })}
          >
            <h3>Top Sidebar</h3>
          </Sidebar>
          <Sidebar
            visible={this.state.visibleBottom}
            position="bottom"
            onHide={() => this.setState({ visibleBottom: false })}
            modal={false}
            dismissable
          >
            <h3>Bottom Sidebar</h3>
          </Sidebar>
          <Sidebar
            visible={this.state.visibleFullScreen}
            fullScreen
            onHide={() => this.setState({ visibleFullScreen: false })}
          >
            <h3>Full Screen Sidebar</h3>
          </Sidebar>
          <Sidebar
            visible={this.state.visibleCustomToolbar}
            onHide={() => this.setState({ visibleCustomToolbar: false })}
            icons={customIcons}
          >
            <h3>Sidebar with custom icons</h3>
          </Sidebar>
          <Button
            icon="pi pi-arrow-right"
            onClick={() => this.setState({ visibleLeft: true })}
            className="mr-2"
          />
          <Button
            icon="pi pi-stop"
            onClick={() => this.setState({ visibleMiddle: true })}
            className="mr-2"
          />
          <br />
          <Button
            icon="pi pi-arrow-down"
            onClick={() => this.setState({ visibleTop: true })}
            className="mr-2"
          />
          <br />
          <Button
            icon="pi pi-arrow-up"
            onClick={() => this.setState({ visibleBottom: true })}
            className="mr-2"
          />
          <br />
          <Button
            icon="pi pi-th-large"
            onClick={() => this.setState({ visibleFullScreen: true })}
            className="mr-2"
          />
          <br />
          <Button
            icon="pi pi-plus"
            onClick={() => this.setState({ visibleCustomToolbar: true })}
          />
          <br />
        </div>
      </div>
    );
  }
}
