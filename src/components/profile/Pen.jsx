

function Pen({ isEditing, onClick }) {

    let classNameForPen = "w-17 h-17 isDisabled";
    if (isEditing) {
        classNameForPen = "w-17 h-17 hover:animate-pulse";
    }

    return (
        <button onClick={onClick} className="relative top-9 right-10" disabled={!isEditing}>
            <img
                src="/chatIcons/penChat.png"
                alt="Profile"
                className={classNameForPen}
            />
        </button>
    );
}

export default Pen;

