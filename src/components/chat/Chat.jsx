
import Message from "./Message";



function Chat() {

    return (
        <div className="chat-container">
            <div className="nes-container with-title is-centered">
                <p className="title">Chat</p>
                <div className="chat-messages">
                    <Message content={"Hello, how are you?"} idUser={1} />
                    <Message  content={"I'm fine, thank you!"} idUser={2} />
                    <Message content={"What about you?"} idUser={1} />
                    <Message  content={"I'm doing great!"} idUser={2} />
                </div>
                <div className="nes-field">
                    <input type="text" className="nes-input" placeholder="Type your message..." />
                    <button type="button" className="nes-btn is-primary">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;