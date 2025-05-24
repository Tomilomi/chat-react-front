import "nes.css/css/nes.min.css";

function Loggin() {
    console.log("Loggin component loaded");
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md mx-auto nes-container is-rounded is-dark with-title is-centered loggin">

                <h2 className="title">Loggin</h2>
                <div className="pt-4 nes-field">
                    <label className="text-left block" htmlFor="username">Username</label>
                    <input className="nes-input is-dark" type="text" placeholder="username" required />
                </div>

                <div className="pt-4 nes-field">
                    <label className="text-left block" htmlFor="username">Password</label>
                    <input className="nes-input is-dark" type="text" placeholder="••••••••••••" required />
                </div>

                <div className="pt-8 nes-field">
                    <a href="/#menu">
                        <button type="button" className="w-full sm:w-40 nes-btn">Log in</button>
                    </a>
                </div>

                <div className="pt-4 nes-field">
                    <button type="submit" className="w-full sm:w-40 nes-btn">Sign up</button>
                </div>

                <div className="pt-4">
                    <p className="nes-balloon from-left nes-pointer">What is a man? A miserable little pile of secrets.</p>
                </div>
            </div>
        </div>
    );
}

export default Loggin;