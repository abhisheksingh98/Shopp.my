import React from "react";
import "./Footer.scss";

const Footer = () => {
  const footerData = [
    {
      footerTitle: "Links",
      footerSubCategories: ["My Account", "Wishlist", "About Us", "Cart"],
    },
    {
      footerTitle: "Categories",
      footerSubCategories: [
        "MENS",
        "WOMENS",
        "KIDS",
        
      ],
    },
    {
      footerTitle: "Help",
      footerSubCategories: [
        "Customer Service",
        "Contact Us",
        "Return Policy",
        "Terms and Condition",
        "Payment Policy",
      ],
    },
  ];

  return (
    <div className="Footer">
      <div className="FooterLeft">
        {footerData.map((data) => (
          <div key={data.footerTitle} className="FooterColumn">
            <div className="FooterTitle">
              <h5>{data.footerTitle}</h5>
            </div>
            <div className="subCategories">
              {data.footerSubCategories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
