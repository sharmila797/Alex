import { useContext } from "react";
import { AlexioContext } from "../Context";
import SectionTitle from "./SectionTitle";

const SectionContainer = ({
  extraClass,
  name,
  children,
  title,
  subTitle,
  leftImage,
  // leftImageTitle,
}) => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = () => (name === nav ? "" : "page--inactive");
  return (
    <div
      className={`page ${extraClass} white-bg ${activePageClass(name)}`}
      id={name}
      onClick={() => changeNav(name, false)}
    >
      {" "}
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div
            className=" col-xl-5 v-center-box d-flex align-items-end black-bg" //page-title
            // style={{ backgroundImage: `url(${leftImage})`}}
           > 
           <img src="static/img/user2.png" alt title  />
            {/* <div className="v-center-box d-flex align-items-end">
              // <h2>{leftImageTitle ? leftImageTitle : title}</h2>
            </div> */}
          </div>
          <div className="col-lg-9 col-xl-7">
            <div className="page-scroll">
              <div className="page-content">
                {/* 
      ==========================
        Page Titel
      ==========================
      */}
                <SectionTitle title={title} subTitle={subTitle} />
                {/* 
      ==========================
        Contact Us
      ==========================
      */}
                {children}
              </div>{" "}
              {/* page-content */}
            </div>{" "}
            {/* page-scroll  */}
          </div>
        </div>{" "}
        {/* row */}
      </div>
    </div>
  );
};
export default SectionContainer;
