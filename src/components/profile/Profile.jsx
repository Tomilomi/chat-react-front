import { motion } from 'framer-motion';
import { useEffect } from 'react';

function Profile() {
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
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-neutral-800 rounded-2xl shadow-lg p-6 space-y-6 text-white">
                    <h2 className="text-2xl font-bold">User Profile</h2>

                    {/* Avatar */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="/chatIcons/sussieWebFormat.png"
                            alt="Profile"
                            className="w-23 h-23"
                        />
                    </div>

                    {/* Static form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1">Username</label>
                            <input
                                type="text"
                                className="nes-input is-dark w-full"
                                value="john_doe"
                                disabled
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Password</label>
                            <input
                                type="text"
                                className="nes-input is-dark w-full"
                                value="••••••••••"
                                disabled
                            />
                        </div>

                        {/* Edit button (non-functional) */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="button"
                                className="nes-btn is-warning"
                                disabled
                            >
                                Edit Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}

export default Profile;
