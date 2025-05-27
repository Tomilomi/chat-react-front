function ImagePicker({ onClose }) {
    return (
        <>
            {/* Overlay oscuro semitransparente que cubre toda la pantalla */}
            <div
                className="modal-overlay"
                onClick={onClose} // para cerrar si clickeas el fondo (opcional)
            >

                {/* Modal centrado encima del overlay */}
                <div className="fixed inset-0 flex items-center justify-center z-50 nes-container is-rounded is-dark with-title">
                    <div className="max-w-md w-[90%] p-6">
                        <h2 className="text-xl font-bold text-center is-title">Pick your icon</h2>

                        <div className="grid grid-cols-3 gap-2 justify-items-center">
                            <img
                                src="/chatIcons/sussieWebFormat.png"
                                alt="Profile"
                                className="w-20 h-20 nes-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                src="/chatIcons/spantom.png"
                                alt="Profile"
                                className="w-20 h-20 nes-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                src="/chatIcons/ralsei.png"
                                alt="Profile"
                                className="w-20 h-20 nes-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                src="/chatIcons/noelle.png"
                                alt="Profile"
                                className="w-20 h-20 nes-pointer hover:scale-105 transition-transform"
                            />
                        </div>

                        <div className="mt-6 flex justify-center gap-4">
                            <button className="w-full nes-btn is-success">Apply</button>
                            <button className="w-full nes-btn is-error" onClick={onClose}>
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ImagePicker;
