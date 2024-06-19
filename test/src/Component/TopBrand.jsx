import React from "react";
import "./TopBrand.css";
export const TopBrand = () => {
  return (
    <>
      <div className="view">
           
      <div className="b ">
        <div className="wrapper">
          <div className="static-txt">TOP BRANDS</div>
            <ul className="dynamic-txt">
               <li><span>Milwaukee</span></li>
               <li><span>DeWalt</span></li>
               <li><span>Bosch</span></li>
               <li><span>CAT</span></li>
            </ul>
        </div>
      </div>
          <div class="card_box">
          <span></span>
          <img src="data:image/png;base64,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" className="images"/>
          </div>
          <div class="card_box">
            <span></span>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8Hhm3O3BRrt6Gh7jTjAJguVA4YAcf-H1Ug&usqp=CAU" className="images"></img>
          </div>

          <div class="card_box">
          <span></span>
          <img src="https://www.muraldecal.com/en/img/asfs1695-jpg/folder/products-listado-merchanthover/stickers-bosch-logo.jpg" className="images"></img>
          </div>

          <div class="card_box">
          <span></span>
          <img src="data:image/png;base64,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" className="images rounde"></img>
          </div>
        </div>
    </>
  );
};
