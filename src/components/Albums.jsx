import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import movie1 from "../img/1.jpg";
import movie2 from "../img/2.jpg";
import movie3 from "../img/3.jpg";

export default function Albums() {
  return (
    <Container className="p-5">
      <Row className="p-5">
        <Col>
          <Link to="/Albums/1">
            <img src={movie1} className="album" alt="react" width="100%" />
          </Link>
          <div className="movie_title">극장판</div>
          <div className="movie_text">
            짱구는 못말려:동물소환 닌자 배꼽수비대
          </div>
        </Col>
        <Col>
          <Link to="/Albums/2">
            <img src={movie2} className="album" alt="react" width="100%" />
          </Link>
          <div className="movie_title">극장판</div>
          <div className="movie_text">
            짱구는 못말려: 신혼여행 허리케인 사라진 아빠
          </div>
        </Col>
        <Col>
          <Link to="/Albums/3">
            <img src={movie3} className="album" alt="react" width="100%" />
          </Link>
          <div className="movie_title">극장판</div>
          <div className="movie_text">
            짱구는 못말려: 아뵤! 쿵후 보이즈 라면대란
          </div>
        </Col>
      </Row>
    </Container>
  );
}
