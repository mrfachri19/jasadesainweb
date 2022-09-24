import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white", marginTop: "100px" }}>
        <Container>
          
          <div className="row baris1 text-center">
            <div className="col-sm-12">
              <p
                className="text-center"
                style={{
                  color: "#6E7191",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
              >
                © 2019 Kingjasadesain. All Rights Reserved.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
