import React, { useState } from 'react';

const services = [
  { id: 1, name: 'SHAMPOO', price: 99, group: 'HAIR CUT' },
  { id: 2, name: 'CONDITIONER', price: 99, group: 'HAIR CUT' },
  { id: 3, name: 'HAIR CUT', price: 399, group: 'HAIR CUT' },
  { id: 4, name: 'BLOW DRY', price: 99, group: 'HAIR CUT' },
  { id: 5, name: 'HAIR WASH + HAIRCUT + BLOWDRY', price: 499, group: 'HAIR CUT' },
  { id: 6, name: 'ADVANCE HAIRCUT', price: 499, group: 'HAIR CUT' },
  { id: 7, name: 'HAIR WASH WITH ADVANCE CUT', price: 599, group: 'HAIR CUT' },
  { id: 8, name: 'HAIRWASH + BLOWDRYER', price: 399, group: 'HAIR CUT' },
  { id: 9, name: 'BLOW DRYER', price: 199, group: 'HAIR CUT' },
  { id: 10, name: 'ROOT TOUCH UP', price: 1199, group: 'HAIR COLOR (LOREAL)' },
  { id: 11, name: 'GLOBAL HAIR COLOR', price: 2499, group: 'HAIR COLOR (LOREAL)' },
  { id: 12, name: 'GLOBAL FASHION COLOR', price: 2799, group: 'HAIR COLOR (LOREAL)' },
  { id: 13, name: 'ROOT TOUCH UP', price: 999, group: 'HAIR COLOR (MATRIX)' },
  { id: 14, name: 'GLOBAL HAIR COLOR', price: 2299, group: 'HAIR COLOR (MATRIX)' },
  { id: 15, name: 'GLOBAL FASHION COLOR', price: 2599, group: 'HAIR COLOR (MATRIX)' },
  { id: 16, name: 'HIGHLIGHT PER STRIP', price: 249, group: 'HIGH LIGHT (LOREAL)' },
  { id: 17, name: 'BALAYAG HIGH LIGHT', price: 4299, group: 'HIGH LIGHT (LOREAL)' },
  { id: 18, name: 'OMBRE  HIGH LIGHT', price: 4399, group: 'HIGH LIGHT (LOREAL)' },
  { id: 19, name: 'FOLIYGE  HIGH LIGHT', price: 4599, group: 'HIGH LIGHT (LOREAL)' },
  { id: 20, name: 'HICHLIGHT PER STRIP', price: 199, group: 'HIGH LIGHT (MATRIX)' },
  // Add more services here
];

const ServiceList = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceToggle = (serviceId) => {
    const isSelected = selectedServices.includes(serviceId);
    let updatedServices = [];

    if (isSelected) {
      updatedServices = selectedServices.filter(id => id !== serviceId);
    } else {
      updatedServices = [...selectedServices, serviceId];
    }

    setSelectedServices(updatedServices);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    selectedServices.forEach(serviceId => {
      const service = services.find(service => service.id === serviceId);
      totalPrice += service.price;
    });

    return totalPrice;
  };

  // Group services by group name
  const groupedServices = services.reduce((groups, service) => {
    if (!groups[service.group]) {
      groups[service.group] = [];
    }
    groups[service.group].push(service);
    return groups;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Service We Offer</h2>
      <div className="flex-grow">
        {Object.entries(groupedServices).map(([groupName, groupServices]) => (
          <div key={groupName} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{groupName}</h3>
            <ul>
              {groupServices.map(service => (
                <li
                  key={service.id}
                  className="flex items-center mb-2 cursor-pointer"
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <label className="flex items-center flex-grow">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">{service.name}</span>
                  </label>
                  <span className="ml-auto font-bold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 py-4 px-4 sticky bottom-0">
        <h3 className="text-2xl font-bold">Total Price: {getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default ServiceList;
