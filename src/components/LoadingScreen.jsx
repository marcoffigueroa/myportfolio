import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        }, 80);

        return () => clearInterval(interval); 
    }, [onComplete]);

    return (
        <div className="w-full fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center">
            <div className="mb-6 text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                {text}<span className="animate-blink ml-0.5 text-blue-400">|</span>
            </div>
            <div className="w-48 h-[2px] bg-zinc-800 rounded-full relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-loading-bar rounded-full" />
            </div>
        </div>
    );
}