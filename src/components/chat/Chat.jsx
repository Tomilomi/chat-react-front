import Message from "./Message";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';

function Chat() {
    useEffect(() => {
        document.body.classList.add("login-body-bg");
        return () => {
            document.body.classList.remove("login-body-bg");
        };
    }, []);

    return (
        <div className="w-screen h-screen text-white flex flex-col items-center justify-center p-2 sm:p-4">
            <div className="nes-container with-title is-centered w-full h-full max-w-4xl flex flex-col relative space-y-2 bg-[#0b1d36] shadow-lg">

                {/* Header */}
                <div className="bg-[#1b2d4a] p-2 flex justify-between items-center rounded-lg">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://i.imgur.com/4Y8v1gM.png"
                            alt="avatar"
                            className="w-8 h-8"
                        />
                        <span className="nes-text is-success text-sm sm:text-base">john_doe</span>
                    </div>
                    <div className="flex gap-2">
                        <Link to="/profile">
                            <button className="nes-btn is-warning text-xs sm:text-sm">Profile</button>
                        </Link>

                        <Link to="/">
                            <button className="nes-btn is-error text-xs sm:text-sm">Logout</button>
                        </Link>

                    </div>
                </div>

                {/* Mensajes */}
                <div className="flex-1 overflow-y-auto bg-[#13233b] rounded-lg p-3 space-y-10">
                    <Message content={"Hello, how are you?"} idUser={1} />
                    <Message content={"I'm fine, thank you!"} idUser={2} />
                    <Message content={"What about you?"} idUser={1} />
                    <Message content={"I'm doing great!"} idUser={2} />
                    <Message content={`hola`} idUser={2} />
                </div>

                {/* Input */}
                <div className="nes-field flex gap-2 mt-2 sm:mt-4 p-2 bg-[#1b2d4a] rounded-lg">
                    <input
                        type="text"
                        className="nes-input flex-1"
                        placeholder="Type your message..."
                    />
                    <button type="button" className="nes-btn is-primary">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Chat;