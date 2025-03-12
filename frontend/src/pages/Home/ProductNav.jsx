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

const ProductTabs = ({ props }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const tabs = [
    { label: "Description", content: <CareInstructions props={props} /> },
    { label: "Customer Reviews", content: "No reviews yet." },
    { label: "Delivery Information", content: <DeliveryInfo /> },
    { label: "Return Policies", content: <CancellationPolicy /> },
  ];

  return (
    <div
      className={`mx-3 mt-6  ${
        isSmallScreen ? "w-full max-w-screen-lg" : "max-w-screen-xl"
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

const CancellationPolicy = () => {
  return (
    <div className="max-w-5xl   p-2 bg-white  rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
        Cancellation and Refund Policy
      </h2>
      <ul className="list-decimal text-lg space-y-4 text-gray-700">
        <li>
          Since all orders are customized as per the customer’s requirement and
          are perishable in nature, refund on any cancellation is not possible
          on the same day.
        </li>
        <li>
          It is required that 1-day prior notice of cancellation be given for
          regular cakes and 2-days prior notice be given for large or special
          cakes. Refund charges of 5% per order shall be applicable.
        </li>
        <li>
          Cancellation of Order shall be mailed by the customer at{" "}
          <a href="mailto:care@bakingo.com" className="text-blue-600 underline">
            care@bakingo.com
          </a>{" "}
          with the Subject: <strong>“Cancellation Request”</strong> and
          specifying in the mail:
          <ul className="list-disc pl-6 mt-2">
            <li>Order ID</li>
            <li>Reasons for Cancellation</li>
          </ul>
        </li>
        <li>
          Bakingo will issue a refund to the same card/account/medium through
          which you have made the payment in case of cancellation.
        </li>
        <li>
          All refunds shall be made within the period of 2-3 working days from
          the date of cancellation.
        </li>
        <li>
          It is entirely up to Bakingo’s discretion to change, cancel, refund or
          otherwise offer any other option to the customer.
        </li>
        <li>
          In case of any refund, the amount will be credited as Bakingo Cash
          points into your Bakingo Wallet for any future purchase.
        </li>
      </ul>
    </div>
  );
};

const DeliveryInfo = () => {
  return (
    <div className="max-w-5xl   p-2 bg-white  rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
        Delivery Information
      </h2>
      <ul className="list-disc text-lg space-y-4 text-gray-700 pl-6">
        <li>
          Every cake we offer is handcrafted, and since each chef has their own
          way of baking and designing a cake, there might be slight variations
          in the product in terms of design and shape.
        </li>
        <li>
          Trust our process! We use the best ingredients for a healthy and happy
          experience with our cakes.
        </li>
        <li>
          The chosen delivery time is an estimate and depends on the
          availability of the product and the destination to which you want the
          product to be delivered. Delivery may be delayed due to weather or
          traffic conditions.
        </li>
        <li>
          Since cakes are perishable in nature, we attempt delivery of your
          order only once. The delivery cannot be redirected to any other
          address.
        </li>
        <li>
          This product is hand-delivered and will not be delivered along with
          courier products.
        </li>
        <li>
          Occasionally, substitutions of flavors/designs are necessary due to
          temporary and/or regional unavailability issues.
        </li>
      </ul>
    </div>
  );
};

const CareInstructions = ({ props }) => {
  return (
    <div className="max-w-5xl   p-2  bg-white  rounded-lg">
      <h2 className="text-2xl  font-bold text-gray-800 border-b pb-2 mb-4">
        Product Description
      </h2>
      <p className="text-lg  text-gray-700 ">{props}</p>

      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
        Care Instructions
      </h2>
      <ul className="list-disc text-lg space-y-4 text-gray-700 pl-6">
        <li>All cakes must be stored in the refrigerator.</li>
        <li>
          Cakes ordered with fondant must be stored in an air-conditioned
          environment.
        </li>
        <li>Do not serve the cake in exposed heat.</li>
        <li>Use a bread knife to slice fondant cakes.</li>
        <li>
          Sculptural elements and figurines may contain wire supports,
          toothpicks, or wooden skewers for structural support.
        </li>
        <li>
          Please check the placement of these items before serving them to small
          children.
        </li>
        <li>The cake should be consumed within 24 hours.</li>
        <li className="font-semibold">
          Enjoy your cake and celebrate life! 🎉
        </li>
      </ul>
    </div>
  );
};
