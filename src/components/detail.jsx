import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./data";

const Detail = (props) => {
 let { id } = useParams();
 const [cost, setCost] = useState(20000);

 useEffect(() => {
   const timer = setTimeout(() => {
     setCost(14000); // 30% 할인된 가격으로 업데이트
   }, 3000);

   return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
 }, []);


  return (
    <div className="container">
      <div className="aaaaa">3초 안에 구매하면 30% 할인 !</div>
      <div className="row">
        <div className="col-md-5">
          <img
            className="detail_poster"
            src={process.env.PUBLIC_URL + `/${id}.jpg`}
            width="80%"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h1>짱구는 못말려 극장판: </h1>
          <h1>{props.data[`${id - 1}`].title}</h1>
          <h5>감독: {props.data[`${id - 1}`].madeby}</h5>
          <h5>상영시간: {props.data[`${id - 1}`].time}</h5>
          <h5>가격: {cost} 원</h5>
          <button className="btn btn-dark">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

