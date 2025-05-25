import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';

function Menu() {
    useEffect(() => {
        // Agregar clase al body cuando se monta el componente
        document.body.classList.add("login-body-bg");

        // Limpiar cuando se desmonta
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
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:max-w-xl">
                    <Link to="/chat" className="w-full sm:w-1/2">
                        <div className="nes-field">
                            <button
                                type="button"
                                id="continue"
                                className="w-full nes-btn menu-btn"
                            >
                                Continue to Chat
                            </button>
                        </div>
                    </Link>
                    <div className="w-full sm:w-1/2">
                        <div className="nes-field">
                            <button
                                type="button"
                                id="settings"
                                className="w-full nes-btn menu-btn"
                            >
                                Profile Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
export default Menu;