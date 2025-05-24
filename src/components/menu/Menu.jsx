function Menu() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <a href="/#chat">
            <div className="p-4 nes-field">
                <button type="button" id="continue" className="sm:w-40 w-full nes-btn">Continue to Chat</button>
            </div>
            </a>
            <div className="p-4 nes-field">
                <button type="button" id="settings" className="sm:w-40 w-full nes-btn">Profile Settings</button>
            </div>

        </div>
    )
}

export default Menu