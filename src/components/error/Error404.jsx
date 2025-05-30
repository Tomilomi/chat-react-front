import "nes.css/css/nes.min.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";

const phrases = [
    "This isn't the castle you're looking for.",
    "A cursed path you’ve taken. This page is as empty as Dracula’s heart.",
    "404? A petty number... just like your chances against me!",
    "Even death is more permanent than this page.",
    "Another lost soul wandering the void. How quaint.",
    "You were expecting a page... but it was me, 404!",
    "No passage here, mortal. Begone!",
    "You dare tread this path and expect answers? Foolish.",
];

function Error404() {
    const randomPhrase = useMemo(() => {
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index];
    }, []);

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="nes-container with-title is-dark is-rounded max-w-md">
                <h2 className="title">404</h2>
                <p className="text-lg mb-4">Page Not Found</p>
                <div className="flex justify-center mb-4">
                    <i className="nes-icon close is-large"></i>
                </div>
                <p className="nes-balloon from-left is-dark">
                    {randomPhrase}
                </p>
                <div className="mt-6">
                    <Link to="/">
                        <button type="button" className="nes-btn is-primary">Return to Home</button>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
}

export default Error404;
