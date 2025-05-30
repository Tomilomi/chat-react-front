import "nes.css/css/nes.min.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';

const pixelVariants = {
    idle: {
        scale: 1,
        transition: {
            duration: 0.6,
            yoyo: Infinity,
            ease: "steps(1)",
        },
    },
    jump: {
        scale: 1.1,
        y: -5,
        transition: {
            duration: 0.3,
            yoyo: Infinity,
            ease: "steps(1)",
        },
    },
};

function RegisterForm() {
    useEffect(() => {
        document.body.classList.add("login-body-bg");
        return () => {
            document.body.classList.remove("login-body-bg");
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md mx-auto nes-container is-rounded is-dark with-title is-centered loggin">
                    <h2 className="title">Sign Up</h2>

                    <div className="pt-4 nes-field">
                        <label className="text-left block" htmlFor="username">Username</label>
                        <input className="nes-input is-dark" type="text" placeholder="your_username" required />
                    </div>

                    <div className="pt-4 nes-field">
                        <label className="text-left block" htmlFor="email">Email</label>
                        <input className="nes-input is-dark" type="email" placeholder="you@example.com" required />
                    </div>

                    <div className="pt-4 nes-field">
                        <label className="text-left block" htmlFor="password">Password</label>
                        <input className="nes-input is-dark" type="password" placeholder="••••••••••••" required />
                    </div>

                    <div className="pt-8 nes-field">
                        <button type="submit" className="w-full sm:w-40 nes-btn dark-btn">Sign up</button>
                    </div>

                    <div className="pt-4 nes-field">
                        <Link to="/">
                            <button type="button" className="w-full sm:w-40 nes-btn dark-btn">Back to Log in</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default RegisterForm;
