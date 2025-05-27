import { motion } from 'framer-motion';
import { useEffect } from 'react';

function Changes({ isEditing }) {
    let classNameForSave = "w-full nes-btn is-disabled ch-btn transition-all duration-300";
    let classNameForExit = "w-full nes-btn is-disabled transition-all duration-300";

    if (isEditing) {
        classNameForSave = "w-full nes-btn is-success ch-btn transition-all duration-300 hover:animate-pulse";
        classNameForExit = "w-full nes-btn is-error ch-btn transition-all duration-300 hover:animate-pulse";
    }

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
            <>
                <div className="nes-field">
                    <motion.button
                        type="button"
                        className={classNameForSave}
                        disabled={!isEditing}
                    >
                        Save Changes
                    </motion.button>
                </div>
                <div className="nes-field">
                    <motion.button
                        type="button"
                        className={classNameForExit}
                        disabled={!isEditing}
                    >
                        Exit
                    </motion.button>
                </div>
            </>
        </motion.div>
    );
}

export default Changes;
