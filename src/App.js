import React from "react";
import Footer from "./components/Footer";
import "./App.css";
// import banner from "../../../assets/image/Group 14.png";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const desain = [
    {
      id: 1,
      img: "1cv1.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 2,
      img: "baru 2.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 3,
      img: "baru 3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 4,
      img: "cv baru 3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 5,
      img: "cvbaru 1.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 6,
      img: "cvbaru1.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 7,
      img: "cvbaru2.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 8,
      img: "cvbaru3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 9,
      img: "desain 1.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 10,
      img: "desain 2.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 11,
      img: "desain 3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 12,
      img: "desain 3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 13,
      img: "ig 1.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 14,
      img: "ig 2.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 15,
      img: "ig 3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 16,
      img: "ig 4.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 17,
      img: "ig 5.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 18,
      img: "ig 6.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 19,
      img: "ig 7.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 20,
      img: "ig 8.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 21,
      img: "ig 9.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 22,
      img: "ig 10.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 23,
      img: "ig 11.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 24,
      img: "ig 11.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 25,
      img: "ig 12.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 26,
      img: "ig 13.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 27,
      img: "ig 14.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 28,
      img: "ig 16.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 29,
      img: "ig 17.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 30,
      img: "ig 18.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 31,
      img: "ig 19.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 32,
      img: "posting 8.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 33,
      img: "posting 9.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 34,
      img: "posting 10.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 35,
      img: "posting 11.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 36,
      img: "posting 12.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 37,
      img: "posting 13.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 38,
      img: "posting 14.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 39,
      img: "psoting 1.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 40,
      img: "psoting 2.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 41,
      img: "psoting 3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 42,
      img: "psoting 4.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 43,
      img: "psoting 5.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 44,
      img: "psoting 6.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 45,
      img: "psoting 7.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 46,
      img: "upload1.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 47,
      img: "upload2.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 48,
      img: "upload3.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 49,
      img: "upload4.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 50,
      img: "upload5.PNG",
      harga: "Rp.15.000",
    },
    {
      id: 51,
      img: "upload6.PNG",
      harga: "Rp.15.000",
    },
  ];
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-sm-6">
            <div className="" style={{ color: "#5f2eea", marginTop: "15px", textAlign: "center" }}>
              <p style={{marginTop: "30px"}}>Pilihan desain elegen dan murah,</p>
              <h1>@kingjasadesain</h1>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="image__movie">
              {/* <img src={banner} alt="group 14" /> */}
            </div>
          </div>
        </div>
        <div className="now__showing" style={{ marginTop: "10px" }}>
          <Row xs="auto">
            <Col sm={11}>
              <h4 className="text-left font-size-24 ">Geser untuk melihat</h4>
            </Col>
          </Row>
        </div>

        <div classNameName="row" style={{marginTop: "40px"}}>
          <div className="kartu">
            {desain.map((movie) => (
              <div
                className="movies__list--card col-sm-6 col-md-2 mx-3"
                key={movie.id}
              >
                <img
                  src={`${
                    process.env.REACT_APP_NAME === "dev"
                      ? `${process.env.REACT_APP_DEV}/img/${movie.img}`
                      : `${process.env.REACT_APP_PROD}/img/${movie.img}`
                  }`}
                  className="movies__list-image img-fluid"
                  alt={""}
                />
                <div className=" text-center">
                  <h2>{movie.harga}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
