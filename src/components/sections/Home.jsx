import { useState, useEffect } from 'react';
import RevealOnScroll from '../RevealOnScroll';
import { useLang } from '../../i18n';

export const Home = () => {
    const { t } = useLang();
    const [text, setText] = useState('');
    const roles = t.home.roles;
    const [roleIdx, setRoleIdx] = useState(0);

    useEffect(() => {
        let index = 0;
        let currentRoleIdx = 0;
        let timeout;
        const typeText = () => {
            const currentRole = roles[currentRoleIdx];
            setText(currentRole.substring(0, index));
            index++;
            if (index > currentRole.length) {
                timeout = setTimeout(() => {
                    index = 0;
                    currentRoleIdx = (currentRoleIdx + 1) % roles.length;
                    setRoleIdx(currentRoleIdx);
                    typeText();
                }, 1500);
            } else {
                timeout = setTimeout(typeText, 90);
            }
        };
        typeText();
        return () => clearTimeout(timeout);
    }, [roles]);

    return (
        <section id='home' className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[120px]" />
            </div>

            <RevealOnScroll>
                <div className="text-center z-10 px-6 max-w-2xl mx-auto">
                    <p className="text-sm font-medium tracking-widest text-blue-400 uppercase mb-4">
                        {t.home.eyebrow}
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-5 text-white leading-tight">
                        Marco Figueroa
                    </h1>
                    <div className="h-8 mb-6">
                        <span className="font-mono text-lg text-blue-400 tracking-wider">
                            {text}<span className="animate-blink ml-0.5">|</span>
                        </span>
                    </div>

                    <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-md mx-auto">
                        {t.home.description}
                    </p>

                    <div className='flex flex-wrap justify-center gap-3'>
                        <a href='#projects' className='bg-blue-600 text-white py-2.5 px-7 rounded-lg text-sm font-semibold hover:-translate-y-0.5
                        hover:bg-blue-500 hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all duration-200'>
                            {t.home.viewProjects}
                        </a>
                        <a href='#about' className='border border-zinc-700 text-zinc-300 py-2.5 px-7 rounded-lg text-sm font-semibold hover:-translate-y-0.5
                        hover:border-zinc-500 hover:text-white transition-all duration-200'>
                            {t.home.aboutMe}
                        </a>
                        <a href='#contact' className='border border-zinc-700 text-zinc-300 py-2.5 px-7 rounded-lg text-sm font-semibold hover:-translate-y-0.5
                        hover:border-zinc-500 hover:text-white transition-all duration-200'>
                            {t.home.contact}
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};