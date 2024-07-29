import React, { useEffect } from 'react';

const UPIRedirect = () => {
  useEffect(() => {
    // UPI payment link
    const upiLink = "upi://pay?pa=OGCS971.07@cmsidfc&pn=Applicant&am=199";
    
    // Redirect to the UPI link
    window.location.href = upiLink;
  }, []);

  return (
    <div>
      <h1>Redirecting to payment...</h1>
    </div>
  );
};

export default UPIRedirect;
