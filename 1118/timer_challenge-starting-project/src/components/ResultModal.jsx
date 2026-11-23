import { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

export default function ResultModal({ targetTime, ref, remainingTime, onReset }) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedScore = (remainingTime/1000).toFixed(2);
    const scorePoint = Math.round((1 - remainingTime/(targetTime*1000))*100);

    useImperativeHandle(ref, () => {
        return{
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog className="result-modal" ref={dialog}>
            { userLost && <h2>You LOST</h2> }
            { !userLost && <h2>Your score: {scorePoint}</h2> }
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{formattedScore} seconds left.</strong></p>
            <form action="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>, 
        document.getElementById('modal')
    );
}