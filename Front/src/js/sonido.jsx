import { useState } from 'react';

function Sonido() {
    const [muted, setMuted] = useState(false);

    const silenciar = () => {
        setMuted(!muted);
        // You can perform additional actions here when sound is muted or unmuted
    };

    return (
        <div className="botonSonido">
            {muted ? (
                <i className="bi bi-volume-mute-fill" onClick={silenciar}></i>
            ) : (
                <i className="bi bi-volume-up-fill" onClick={silenciar}></i>
            )}
        </div>
    );
}

export default Sonido;