import React from 'react';

const FormRequired = ({ isRequired = true, title }) => {
  return (
    <span className="text-sm font-semibold uppercase">
      {title} <span className="text-red-500">*</span>
    </span>
  );
};

export default FormRequired;
