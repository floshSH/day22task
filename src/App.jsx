import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const pricingPlans = [
    {
      name: "FREE",
      price: "$0/month",
      features: [
        { content: "Single User", available: true },
        { content: "50GB Storage", available: true },
        { content: "Unlimited Public Projects", available: true },
        { content: "Unlimited Private Projects", available: false },
        { content: "Dedicated Phone Support", available: false },
        { content: "Free Subdomain", available: false },
        { content: "Monthly Status Reports", available: false },
      ],
    },
    {
      name: "PLUS",
      price: "$9/month",
      features: [
        { content: "Single User", available: true },
        { content: "50GB Storage", available: true },
        { content: "Unlimited Public Projects", available: true },
        { content: "Unlimited Private Projects", available: true },
        { content: "Dedicated Phone Support", available: true },
        { content: "Free Subdomain", available: true },
        { content: "Monthly Status Reports", available: false },
      ],
    },
    {
      name: "PRO",
      price: "$49/month",
      features: [
        { content: "Single User", available: true },
        { content: "50GB Storage", available: true },
        { content: "Unlimited Public Projects", available: true },
        { content: "Unlimited Private Projects", available: true },
        { content: "Dedicated Phone Support", available: true },
        { content: "Free Subdomain", available: true },
        { content: "Monthly Status Reports", available: true },
      ],
    },
  ];

  return (
    <div className="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center" style={{ height: "90vh" }}>
      <div className="priceTable bg-primary d-flex flex-wrap justify-content-center align-items-center p-3" style={{ maxWidth: "100vw" }}>
        {pricingPlans.map((plan, index) => (
          <div className='m-1' key={index}>
            <div className="card mx-auto p-3">
              <div className="card-header" style={{ background: "none" }}>
                <div className='mx-auto p-2 content-center' style={{ opacity: "0.5" }}>
                  {plan.name}
                </div>
                <h2>{plan.price}</h2>
              </div>
              <div className="card-body">
                {plan.features.map((feature, index) => (
                  <p key={index} style={{ opacity: feature.available ? "1" : "0.5" }}>
                    <FontAwesomeIcon icon={feature.available ? faCheck : faXmark} /> {feature.content}
                  </p>
                ))}
              </div>
              <button className='btn btn-primary' style={{ borderRadius: "15px" }}>BUTTON</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
