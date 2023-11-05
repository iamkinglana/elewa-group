import React from 'react'
import '../styles/investStatement.css';
import Button from '../Top-Bottom/Button';

// This component displays the section after the key figures section of the Invest page
interface DataItem {
    classstatement_h1: string;
    statementimage:string
    description: string;
  }

  const data: DataItem[] = [
    {
        classstatement_h1: "Elewa NV, a multi-stakeholder cooperation",
        statementimage:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png",
        description: "Southern innovations addressing global problems."
    }
  ];


const InvestStatement: React.FC<{}> = () => {
  return (
    <div className="statements-section">

    {data.map((item, index) => (
        <div key={index} className="statements-container">
            <div className="statements-content">
                <div className="statement-image">
                    <img src={item.statementimage} alt="" />
                </div>
                <div className="statement-text">
                    <h1>{item.classstatement_h1}</h1>
                    <p>At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.</p>
                    <p>Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group. </p>
                </div>
            </div>
            <div className="statements-content2">
                <div className="statement-text2">
                    <h1>The Elewa Creative Hub</h1>
                    <p>Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.</p>
                    <p>Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation. </p>
                </div>
                <div className="statement-image2">
                    <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg" alt="" />
                </div>
            </div>
            <div className="statements-content3">
            <div className="statement-image3">
                    <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg" alt="" />
                </div>
                <div className="statement-text3">
                    <h1>Investing in Elewa NV</h1>
                    <p>From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives? </p>
                    <Button />
                </div>
            </div>
            <div className="learn-mission">
          <h1>Become part of our mission.</h1>
          <a href="https://www.elewa.com/" target="_blank" rel="noopener noreferrer">
          And start <span>investing</span>
          </a>
        </div>
        </div>
    ))}
    </div>
  )
}

export default InvestStatement
