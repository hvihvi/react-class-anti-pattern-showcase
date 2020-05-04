import * as React from "react";
import "./styles.css";

class MessageService {
  message = "Hello World";

  setMessage(i: string) {
    this.message = i;
  }
}

const MSG_SERVICE = new MessageService();

export default function App() {
  return (
    <div className="App">
      <h1>{MSG_SERVICE.message}</h1>
      <button onClick={() => MSG_SERVICE.setMessage("Hello World has changed")}>
        try to change class state
      </button>
    </div>
  );
}
