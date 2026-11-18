import { useImperativeHandle, useRef } from "react";

export default function ResultModal({result, targetTime, ref, remainingTime}) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedScore = (remainingTime/1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return{
            open() {
                dialog.current.showModal();
            },
        };
    });

    return(
        <dialog className="result-modal" ref={dialog}>
            { userLost && <h2>You LOST</h2> }
            { !userLost && <h2>You WIN</h2> }
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{formattedScore} seconds left.</strong></p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}