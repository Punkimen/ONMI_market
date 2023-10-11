import { useState, useEffect } from 'react';

export const useDocHeight =()=> {
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const updateDocumentHeight = () => {
      setDocumentHeight(document.body.scrollHeight);
    };

    // Initial setup
    updateDocumentHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateDocumentHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateDocumentHeight);
    };
  }, []);

  return documentHeight;
};

