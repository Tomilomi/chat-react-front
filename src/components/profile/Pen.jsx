

function Pen({ isEditing }) {
    let classNameForPen = "w-17 h-17 isEditing hover:animate-pulse";
    if (!isEditing) {
        classNameForPen = "w-17 h-17 isDisabled";
    }

    return (
            <button className="relative top-9 right-10">
                <img
                    src="/chatIcons/penChat.png"
                    alt="Profile"
                    className={classNameForPen}
                />
            </button>
    );
}

export default Pen;

