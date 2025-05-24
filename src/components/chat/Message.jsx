
function Message({ content, idUser }) {
    return (
        <div className="message">
            <image src="https://i.imgur.com/4Y8v1gM.png" alt="nes.css logo" className="nes-logo" />
            <div className="nes-balloon from-left nes-pointer">
                <p className="nes-text is-primary">{content}</p>
            </div>
        </div>
    );
}

export default Message;