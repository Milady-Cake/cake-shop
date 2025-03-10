import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const tabs = [
    { label: "Description", content: "Product description goes here." },
    { label: "Customer Reviews", content: "No reviews yet." },
    { label: "Shipping & Returns", content: "Shipping and return policies." },
    { label: "Return Policies", content: "Detailed return policies." },
  ];

  return (
    <div
      className={`mx-auto mt-6 px-4 ${
        isSmallScreen ? "w-full max-w-screen-lg" : "max-w-screen-xl lg:px-36"
      }`}
    >
      {isSmallScreen ? (
        <div>
          {tabs.map((tab, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className="text-black"> {tab.label}</p>
              </AccordionSummary>
              <AccordionDetails>{tab.content}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <div>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            centered
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
          <div className="mt-6 text-gray-900">{tabs[activeTab].content}</div>
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
