import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const projectId = process.env.REACT_APP_DIALOGFLOW_PROJECT_ID;
    const agentId = process.env.REACT_APP_DIALOGFLOW_AGENT_ID;

    console.log('Dialogflow Project ID:', projectId);
    console.log('Dialogflow Agent ID:', agentId);

    const dfMessenger = document.createElement('df-messenger');
    dfMessenger.setAttribute('project-id', projectId);
    dfMessenger.setAttribute('agent-id', agentId);
    dfMessenger.setAttribute('language-code', 'en');
    dfMessenger.setAttribute('max-query-length', '-1');
    dfMessenger.innerHTML = `
      <df-messenger-chat-bubble chat-title="DocuBot"></df-messenger-chat-bubble>
    `;
    document.body.appendChild(dfMessenger);

    return () => {
      document.body.removeChild(dfMessenger);
    };
  }, []);

  return null;
};

export default Chatbot;
