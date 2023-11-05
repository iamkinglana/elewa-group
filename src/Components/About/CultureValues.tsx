import React from 'react'
import "../styles/cultureValues.css"
import { PiSpiralThin } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";
import { DiOpenshift } from "react-icons/di";


interface DataItem {
    heading1: string;
    description1: string;
    heading2: string;
    description2: string;
    heading3: string;
    description3: string;
    heading4: string;
    description4: string;
    heading5: string;
    description5: string;
    heading6: string;
    description6: string;
  }

  const data: DataItem[] = [
    {
      heading1: "Our Cultures & Values",
      description1: "Our culture, CODE-(T), defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission.",
      heading2: "Cooperative",
      description2: "One for all ,all for one! We have a cooperative and open mindset. If one of us grows, all will follow.",
      heading3: "Ownership",
      description3: "We are dependable and honour our commitments. When things don't go as planned, as they sometimes do, we communicate early to avoid catastrophe.",
      heading4: "Detail",
      description4: "We are a 'Centre of Excellence' as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival.",
      heading5: "Empathy",
      description5: "We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need.",
      heading6: "Transparency",
      description6: "Transparency, an open mind, and an open heart hold our organization together. We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within."
    }
  ];


// This component displays the company's culture and values
const CultureValues: React.FC<{}> = () => {
 // This is the main container for the culture and values section
  return (
    <div className="culture-values">
    {data.map((item, index) => (
        <div key={index} className="culture-values-container">
            <div className="culture-content">
            {/*Heading 1*/}
                <h1>{item.heading1}</h1>
                {/*Desc1*/}
                <p>{item.description1}</p>
            </div>
            <div className="culture-icons">
            <div className="culture1">
                <span><FiUsers /></span>
                {/*Heading 2*/}
                <h2>{item.heading2}</h2>
                {/*Desc 2*/}
                <p>{item.description2}</p>
            </div>
            <div className="culture2">
                <span><PiSpiralThin /></span>
                {/*Heading 3*/}
                <h2>{item.heading3}</h2>
                {/*Desc 3*/}
                <p>{item.description3}</p>
            </div>
            <div className="culture3">
                <span><TbTriangleInverted /></span>
                {/*Heading 4*/}
                <h2>{item.heading4}</h2>
                {/*Desc 4*/}
                <p>{item.description4}</p>
            </div>
            <div className="culture4">
                <span><FiUsers /></span>
                {/*Heading 5*/}
                <h2>{item.heading5}</h2>
                {/*Desc 5*/}
                <p>{item.heading5}.</p>
            </div>
            </div>
            <div className="culture5-icon">
                <div className="culture5-content">
                <span><DiOpenshift /></span>
                {/*Heading 6*/}
                <h2>{item.heading6}</h2>
                {/*Desc 6*/}
                <p>{item.description6}</p>
                </div>

            </div>
        </div>
        ))}
    </div>
  )
}

export default CultureValues
