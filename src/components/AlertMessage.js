import React from 'react';

/**
 * Alert message displayed at the bottom of the page
 */
const AlertMessage = ({ children }) => (
  <div
    data-testid="alert-message"
    className="z-10 border-t-4 bg-primary border-red-600 text-center py-2 lg:px-4 fixed bottom-0 left-0 w-full"
  >
    <div className="font-semibold text-red-600 px-4 text-center flex-auto">{children}</div>
  </div>
);

export default AlertMessage;
