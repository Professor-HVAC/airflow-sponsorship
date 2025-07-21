import React from "react";

export const Card = ({ children, className }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);
