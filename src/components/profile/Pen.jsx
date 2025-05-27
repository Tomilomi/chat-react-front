import { motion } from 'framer-motion';

function Pen({ isEditing }) {
    let classNameForPen = "w-17 h-17 isEditing";
    if (!isEditing) {
        classNameForPen = "w-17 h-17 isDisabled";
    }

    return (
            <button className="relative top-9 right-10 hover:animate-pulse">
                <img
                    src="/chatIcons/penChat.png"
                    alt="Profile"
                    className={classNameForPen}
                />
            </button>
    );
}

export default Pen;

