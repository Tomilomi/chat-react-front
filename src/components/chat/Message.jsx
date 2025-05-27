function Message({ content, idUser }) {
    const isMe = idUser === 1;

    const user = {
        1: { name: "john_doe", color: "is-primary" },
        2: { name: "bot_ai", color: "is-success" },
    };

    return (
        <div className={`flex items-end gap-2 ${isMe ? 'justify-start' : 'justify-end'}`}>
            {isMe ? (
                <>
                    {/* Avatar + Nombre */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.imgur.com/4Y8v1gM.png"
                            alt="avatar"
                            className="w-6 h-6"
                        />
                        <span className="text-xs mt-1">{user[1].name}</span>
                    </div>

                    {/* Mensaje */}
                    <div className="nes-balloon from-left nes-pointer is-dark">
                        <p className={`nes-text ${user[1].color}`}>{content}</p>
                    </div>
                </>
            ) : (
                <>
                    {/* Mensaje */}
                    <div className="nes-balloon from-right nes-pointer is-dark">
                        <p className={`nes-text ${user[2].color}`}>{content}</p>
                    </div>

                    {/* Avatar + Nombre */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.imgur.com/4Y8v1gM.png"
                            alt="avatar"
                            className="w-6 h-6"
                        />
                        <span className="text-xs mt-1">{user[2].name}</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Message;
