import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { obtenerImagenes } from '../../services/image.service';

function ImagePicker({ onClose }) {
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const cargarImagenes = async () => {
            const data = await obtenerImagenes(); // [{ id: 0, imageBase64: '...' }, ...]
            setImagenes(data);
        };
        cargarImagenes();
    }, []);

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <motion.div className="fixed inset-0 flex items-center justify-center z-50 nes-container is-rounded is-dark with-title"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}>
                    <div className="max-w-md w-[90%] p-6">
                        <h2 className="text-xl font-bold text-center is-title">Pick your icon</h2>

                        <div className="grid grid-cols-3 gap-2 justify-items-center">
                            {imagenes.map((img, index) => (
                                <img
                                    key={img.id || index}
                                    src={`data:image/png;base64,${img.imageBase64}`}
                                    alt={`Profile ${index}`}
                                    className="w-20 h-20 nes-pointer hover:scale-105 transition-transform"
                                />
                            ))}
                        </div>

                        <div className="mt-6 flex justify-center gap-4">
                            <button className="w-full nes-btn is-success">Apply</button>
                            <button className="w-full nes-btn is-error" onClick={onClose}>
                                Exit
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default ImagePicker;
