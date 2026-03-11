import RevealOnScroll from '../RevealOnScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLang } from '../../i18n';

export const Contact = () => {
    const { t } = useLang();

    return (
        <section id="contact" className="w-full py-20">
            <RevealOnScroll>
                <div className="px-6 w-full max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-3 text-white text-center">
                        {t.contact.heading}
                    </h2>
                    <p className="text-zinc-400 text-center mb-10 max-w-md mx-auto text-sm">
                        {t.contact.subtitle}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <a
                            href="mailto:mmfiigueroa@gmail.com"
                            className="flex flex-col items-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_4px_20px_rgba(59,130,246,0.08)] transition-all duration-300 group"
                        >
                            <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">✉️</span>
                            <h3 className="text-sm font-semibold mb-0.5 text-white">{t.contact.email}</h3>
                            <p className="text-zinc-500 text-xs">{t.contact.emailSub}</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/marco-figueroa-533848314/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_4px_20px_rgba(59,130,246,0.08)] transition-all duration-300 group"
                        >
                            <span className="text-3xl mb-3 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-200">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                            <h3 className="text-sm font-semibold mb-0.5 text-white">{t.contact.linkedin}</h3>
                            <p className="text-zinc-500 text-xs">{t.contact.linkedinSub}</p>
                        </a>

                        <a
                            href="https://github.com/marcoffigueroa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_4px_20px_rgba(59,130,246,0.08)] transition-all duration-300 group"
                        >
                            <span className="text-3xl mb-3 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all duration-200">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <h3 className="text-sm font-semibold mb-0.5 text-white">{t.contact.github}</h3>
                            <p className="text-zinc-500 text-xs">{t.contact.githubSub}</p>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};