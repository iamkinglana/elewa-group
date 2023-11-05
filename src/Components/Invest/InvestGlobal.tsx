import React from "react";
import "../styles/investGlobal.css";

interface DataItem {
  heading1: string;
  heading2: string;
  fig1:any
  fig1desc:string
  fig2:any
  fig2desc:string
  fig3:any
  fig3desc:string
  fig4:any
  fig4desc:string
  fig5:any
  fig5desc:string
  fig6:any
  fig6desc:string
  fig7:any
  fig7desc:string
  fig8:any
  fig8desc:string

}

const data: DataItem[] = [
  {
    heading1: "How we see it differently",
    heading2: "Key figures",
    fig1:"1.3M",
    fig1desc:"Approx. number of Kenyan talents reaching the age of 18 in 2022",
    fig2: "5M",
    fig2desc:"number of East-Africans(EAC) reaching the age of 18 in 2022",
    fig3:"2022",
    fig3desc: "Democratic Republic of Congo joins the East African Community",
    fig4:"7.5 M",
    fig4desc: "The number of unfilled IT vacancies in the US and EU markets",
    fig5:"10 M",
    fig5desc: "Number of technical vacancies by 2030",
    fig6:"2050",
    fig6desc: "Africa holds the worlds largest workforce",
    fig7:"$4.6",
    fig7desc: "Startup funding raised by African startups in 2022<",
    fig8:"310%",
    fig8desc: "Increase in startup funding for companies with HQ in Kenya",

  }
];


// This component displays the section after the introduction section of the Invest page upto the key figures
const InvestGlobal: React.FC<{}> = () => {
  return (
    <div className="global-section">
    {data.map((item, index) => (

      <div key={index} className="global-container">

        <div className="global-content">
        {/*Heading 1*/}
          <h2>{item.heading1}</h2>
          <p>
            The global South is rapidly catching up with the "developed" world.
            It's time for you to get to know the rapid development, innovation
            and drive going on in this part of the world (East-Africa, South
            Asia and beyond).
          </p>
        </div>
        <div className="global-cont">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
            className="global-image"
            alt="global-image"
          />
          {/*//heading 2*/}
          <h2>{item.heading2}</h2>
          <div className="global-figures">
            <div className="global-figure">
              <div className="global-figure-content">

              {/*// fig1*/}
                <h1>{item.fig1}</h1>

                {/*desc5*/}
                <h3>{item.fig1desc}</h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">


              {/*// fig2*/}
                <h1>{item.fig2}</h1>
                <h3>

                {/*// desc 2*/}
                 {item.fig2desc}
                </h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">

                <h1>{item.fig3}</h1>
                <h3>

                {/*// dec3*/}
                 {item.fig3desc}
                </h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>

                {/*// fig4*/}
                {item.fig4}
                </h1>
                <h3>

                {/*// desc4*/}
                {item.fig4desc}                </h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">

              {/*fig5*/}
                <h1>
                  {item.fig5}
                </h1>
                {/*desc5*/}
                <h3>{item.fig5desc}</h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">

              {/*fig6*/}
                <h1>{item.fig6}</h1>
            {/*desc6*/}
                <h3>{item.fig6desc}</h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>
                // fig7?
                  {item.fig7}
                </h1>
                // desc7
                <h3>{item.fig7desc}</h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
              // fig8
                <h1>
                  {item.fig8}
                </h1>
                <h3>
                // dec8
                  {item.fig8desc}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default InvestGlobal;
