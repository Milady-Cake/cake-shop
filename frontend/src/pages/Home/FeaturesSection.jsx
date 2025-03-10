import React from "react";

const features = [
  {
    icon: "https://demo-alukas.myshopify.com/cdn/shop/files/free-shipping.jpg?v=1712656231",
    title: "Free Shipping",
    description: "For all Orders Over ₹500",
  },
  {
    icon: "https://demo-alukas.myshopify.com/cdn/shop/files/returns.jpg?v=1712656231",
    title: "Same Day Returns",
    description: "For an Exchange Product",
  },
  {
    icon: "https://demo-alukas.myshopify.com/cdn/shop/files/secured-payment.jpg?v=1712656231",
    title: "Secured Payment",
    description: "Payment Cards Accepted",
  },
  {
    icon: "https://demo-alukas.myshopify.com/cdn/shop/files/support.jpg?v=1712656037",
    title: "Support 24/7",
    description: "Contact us Anytime",
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full bg-white py-2 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 transition transform hover:scale-105"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-14 h-14 object-contain"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
