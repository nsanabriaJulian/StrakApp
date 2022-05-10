import React from 'react';
import './css/style.css';
import sound from './sounds/noteasomes.mp3';
import sound2 from './sounds/amarillohdp.mp3';
import sound3 from '../docs/static/media/cagon.68f02833d0fd84cfa41e.mp3';
import sound4 from './sounds/mariconputo.mp3';
import sound5 from './sounds/retrasado.mp3';
import sound6 from './sounds/quehacen.mp3';

export const StrakaApp = () => {

    const audio = new Audio(sound);

    const play = () => {
        audio.play();
    }

    const audio2 = new Audio(sound2);

    const play2 = () => {
        audio2.play();
    }

    const audio3 = new Audio(sound3);

    const play3 = () => {
        audio3.play();
    }

    const audio4 = new Audio(sound4);

    const play4 = () => {
        audio4.play();
    }

    const audio5 = new Audio(sound5);

    const play5 = () => {
        audio5.play();
    }

    const audio6 = new Audio(sound6);

    const play6 = () => {
        audio6.play();
    }

    return (
        <>
        
            <div className="mx-auto">
                <h1 className="display-1">Straka Botonera</h1>
            </div>

            <button
                className='btn btn-outline-primary btn-lg '
                onClick={play}
            >
                No te Asomes
            </button>

            <button
                className='btn btn-outline-primary btn-lg'
                onClick={play2}
            >
                Amarillo HDP!
            </button>

            <button
                className='btn btn-outline-primary btn-lg'
                onClick={play3}
            >
                Cagon de mierda
            </button>

            <button
                className='btn btn-outline-primary btn-lg'
                onClick={play4}
            >
                Maricón puto
            </button>

            <button
                className='btn btn-outline-primary btn-lg'
                onClick={play5}
            >
                Retrasado
            </button>

            <button
                className='btn btn-outline-primary btn-lg'
                onClick={play6}
            >
                Que hacen man!
            </button>
        </>
    )
}
