import React, { createContext, useState } from 'react';

// create the context
export const MessageDataContext = createContext<{messageData: any;setMessageData: React.Dispatch<React.SetStateAction<any>>}>({
  messageData: {},
  setMessageData: () => {},
});

interface MatchTutorProps {
    children: React.ReactNode
}
export const MessageDataProvider: React.FC<MatchTutorProps> = ({ children }) => {
  const [messageData, setMessageData] = useState({});

  return (
    <MessageDataContext.Provider value={{ messageData, setMessageData }}>
      {children}
    </MessageDataContext.Provider>
  );
};
