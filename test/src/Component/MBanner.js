import React from "react";
import product1 from "../images/product1.jpg";
import "./MBanner.css";
import { useEffect,useState } from "react";
import axios from "axios";
const MBanner = () => {
    
  const [products,setProducts] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/menu')
      .then(result => {
        if (Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          console.error('Invalid data format:', result.data);
        }
      })
      .catch(err => console.log(err))
    },[])
   
  return (
    <>
      <div class="container-input">
        <input type="text" placeholder="Search" name="text" class="input" />
        <svg
          fill="#000000"
          width="20px"
          height="20px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>

      <div className="mt-5 pt-2">
        <p className="h1 text-center">ALL TOOLS</p>
      </div>
      <div className="view pt-2 mt-5 ">
      {
          products.map((product)=>{
           return <> 
              <div>
            <div className="card2">
              <div className="card-img2">
                <img src={product1} className="pic1"></img>
              </div>
              <div className="card-info">
                <p className="text1-title"> {product.productname} </p>
                <p className="text1-body">{product.description}</p>
              </div>
              <div className="card-footer">
                <span className="text1-title">{product.price}</span>
                <div className="card-button">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
            </>
        })
      }
        </div>
      </>
  );
};

export default MBanner;
