import React from "react";
import "./Footer.css";

const Footer = () => {
  const footer1 = [
    {
      title: "ONLINE-SHOPPING",
      sub: [
        "Men",
        "Women",
        "Kids",
        "Home & Living",
        "Beauty",
        "Gift Cards",
        "Myntra Insider",
      ],
    },
    {
      title: "CUSTOMER POLICIES",
      sub: [
        "Contact Us",
        "FAQ",
        "T&C",
        "Terms of Use",
        "Track Order",
        "Shipping",
        "Cancellation",
        "Returns",
        "Privacy policy",
      ],
    },
    {
      title: "USEFUL LINKS",
      sub: ["Blog", "Careers", "Site Map", "Corporate Infomation", "Whitehat"],
    },
  ];

  return (
    <div className="Footerbody">
      <hr></hr>
      <div className="Footerclass">
        {footer1.map((item, j) => (
          <div key={j} className="Footerclassdiv1">
            <h5 className="colorblack">{item.title}</h5>
            {item.sub.map((el, z) => (
              <p key={z}>{el}</p>
            ))}
          </div>
        ))}
        <div className="Footerclassdiv2">
          <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
          <div>
            <img className="footericon1" src="/googlePlay.png" alt="" />
            <img className="footericon2" src="/AppStore.png" alt="" />
          </div>
          <h5>KEEP IN TOUCH</h5>
          <div style={{ display: "flex", gap: "10px" }}>
            <img className="socialIcon" src="/facebook.png" alt="" />
            <img className="socialIcon" src="/twitter.png" alt="" />
            <img className="socialIcon" src="/youtube.png" alt="" />
            <img className="socialIcon" src="/instagram-symbol.png" alt="" />
          </div>
        </div>
        <div>
          <img className="footer4" src="/Guarantee.png" alt="" />
        </div>
      </div>
   
      
     
    </div>
  );
};

export default Footer;
