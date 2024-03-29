import React, { useEffect, useState } from "react";
import Routes from "./routes";
import ActionCable from "actioncable";

import "./App.css";

function App() {
  const cableApp = ActionCable.createConsumer("ws://localhost:3001/cable");
  // setup the connection with the backend, use your backend's host here

  const [channel, setChannel] = useState(null);
  // create a state to store the actioncable channel

  useEffect(() => {
    if (channel !== null) channel.unsubscribe();
    // destroy possible duplicate connections

    setChannel(
      cableApp.subscriptions.create(
        {
          channel: "AlertsChannel",
          user_id: 1,
          // channel that will be used for the connection
        },
        {
          received: (message) => {
            // function that will be executed when a message is received
            alert(message.post_title);
          },
        }
      )
    );
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
