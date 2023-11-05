import React from 'react';
import "../styles/social-css/socialBusiness.css";

interface DataItem {
    heading1: any;
    description1: string;
    heading2: string;
    description2: string;
    heading3: string;
    description3: string;
    heading4: string;
    description4: string;
    heading5: string;
    description5: string;

  }

  const data: DataItem[] = [
    {
      heading1: "733+",
      description1: "People trained",
      heading2: "733k",
      description2: "careers launched",
      heading3: "200+",
      description3: "Projects finished",
      heading4: "56",
      description4: "Investors",
      heading5: "(Social) business for the win",
      description5: "With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.",
    }
  ];

// Displays the from the section under the introduction
const SocialBusiness: React.FC<{}> = () => {
  return (
    <div className="bussiness-section">
    {data.map((item, index) => (
        <div key={index} className="bussiness-container">
            <div className="bussiness-stats">
                <div className="stat1">
                {/*Heading1*/}
                    <h1>{item.heading1}</h1>
                    {/*Description1*/}
                    <h3>{item.description1}</h3>
                </div>
                <div className="stat2">
                {/*Heading2*/}
                    <h1>{item.heading2}</h1>
                    {/*Description1*/}
                    <h3>{item.description2}</h3>
                </div>
                <div className="stat3">
                {/*Heading3*/}
                    <h1>{item.heading3}</h1>
                    {/*Description3*/}
                    <h3>{item.description3}</h3>
                </div>
                <div className="stat4">
                {/*Heading4*/}
                    <h1>={item.heading4}</h1>
                    {/*Description4*/}
                    <h3>{item.description4}</h3>
                </div>
            </div>
            <div className="bussiness-content">
                <div className="bussiness-img">
                <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg" alt="" />
                </div>
                <div className="bussiness-text">
                {/*Heading5*/}
                    <h1>{item.heading5}</h1>
                    {/*Description5*/}
                    <p>{item.description5}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default SocialBusiness
