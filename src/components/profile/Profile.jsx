import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Changes from './Changes';
import Pen from './Pen';
import ImagePicker from '../imagePicker/ImagePicker';




function Profile() {
    const [isAble, setisAble] = useState(false);
    const [showImagePicker, setShowImagePicker] = useState(false);



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
                <div className="w-full max-w-lg bg-neutral-800 shadow-lg p-6 space-y-6 text-white nes-container is-dark ">
                    <h2 className="text-2xl font-bold">User Profile</h2>

                    {/* Avatar */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="/chatIcons/sussieWebFormat.png"
                            alt="Profile"
                            className="w-23 h-23"
                        />
                        <Pen isEditing={isAble}
                            onClick={() => setShowImagePicker(true)}
                        />
                    </div>


                    {/* Static form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1">Username</label>
                            <input
                                type="text"
                                className="nes-input is-dark w-full"
                                placeholder="john_doe"
                                disabled={!isAble}
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Password</label>
                            <input
                                type="password"
                                className="nes-input is-dark w-full"
                                placeholder="••••••••••"
                                disabled={!isAble}
                            />
                        </div>
                    </form>

                    {/* Centered buttons */}
                    <div className='flex justify-center gap-4 pt-2'>
                        <Changes isEditing={isAble} />
                    </div>
                    {/* Navigation buttons */}
                    <div className="flex justify-center gap-4 pt-4">
                        <Link to="/chat">
                            <button
                                type="button"
                                className="nes-btn is-primary"
                            >
                                Go to Chat
                            </button>
                        </Link>

                        <button
                            type="button"
                            className="nes-btn is-warning"
                            onClick={(e) => {
                                setisAble(!isAble);
                                console.log("Edit Profile button clicked");
                            }}
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            {showImagePicker && (
                <ImagePicker onClose={() => setShowImagePicker(false)} />
            )}
        </motion.div>
    );
}

export default Profile;
