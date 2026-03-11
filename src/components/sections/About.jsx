import RevealOnScroll from "../RevealOnScroll";
import { useLang } from "../../i18n";

export const About = () => {
    const { t } = useLang();

    const STACK = [
        { title: 'Frontend', skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'HTMX', 'JavaScript', 'React'] },
        { title: 'Backend', skills: ['Python', 'Django', 'Java', 'Spring Boot', 'REST APIs', 'ORM / JPA / Hibernate', 'SQLite', 'PostgreSQL'] },
        { title: 'Testing & Automation', skills: ['Selenium', 'Pytest', 'Cucumber', 'JUnit', 'Hamcrest', 'BDD / TDD'] },
        { title: 'DevOps & Infrastructure', skills: ['Git', 'GitHub', 'GitHub Actions', 'Linux / VPS', 'SSH', 'Cloudflare', 'CI/CD'] },
        { title: 'Tools & Platforms', skills: ['Docker', 'VS Code', 'IntelliJ IDEA', 'Maven', 'Postman', 'MATLAB'] },
        { title: 'Theoretical Knowledge', skills: ['Software Engineering', 'Design Patterns', 'Clean Architecture', 'Agile / Scrum', 'Data Structures & Algorithms', 'Distributed Systems', 'Networking'] },
        { title: 'Soft Skills', skills: ['Problem Solving', 'Analytical Thinking', 'Fast Learner', 'Team Collaboration', 'Distributed Teams Communication', 'End-to-End Ownership', 'Adaptability'] },
    ];

    return (
        <section id="about" className="w-full py-24 relative">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-3 text-white text-center">
                        {t.about.heading}
                    </h2>
                    <p className="text-zinc-400 text-center mb-12 max-w-md mx-auto text-sm">
                        {t.about.subtitle}
                    </p>

                    {/* Professional summary */}
                    <div className="bg-zinc-900/60 rounded-2xl p-8 border border-zinc-800 mb-8">
                        <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                            {t.about.summaryP1}
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {t.about.summaryP2}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <h3 className="text-lg font-bold text-white mb-5">{t.about.techStack}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {STACK.map(({ title, skills }) => (
                            <div key={title} className="rounded-xl p-5 bg-zinc-900/60 border border-zinc-800">
                                <h4 className="text-xs font-semibold mb-3 text-zinc-400 uppercase tracking-wider">{title}</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {skills.map((tech) => (
                                        <span key={tech} className="bg-blue-500/8 text-blue-400 py-1 px-2.5 rounded-md text-xs font-medium border border-blue-500/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Thalus Kine highlight */}
                    <div className="bg-zinc-900/60 rounded-2xl p-8 border border-zinc-800 mb-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">🩺</span>
                            <h3 className="text-base font-bold text-white">{t.about.thalusTitle}</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {t.about.thalusDesc}
                        </p>
                    </div>

                    {/* Work experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
                            <div className="flex items-center gap-2 mb-1">
                                <span>🏦</span>
                                <h3 className="text-base font-bold text-white">Banco de Córdoba</h3>
                            </div>
                            <p className="text-blue-400 text-xs mb-3 font-medium">{t.about.bancoRole}</p>
                            <div className="space-y-1.5 text-zinc-400 text-sm">
                                {t.about.bancoItems.map((item, i) => <p key={i}>{item}</p>)}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
                            <div className="flex items-center gap-2 mb-1">
                                <span>💼</span>
                                <h3 className="text-base font-bold text-white">EPAM Systems</h3>
                            </div>
                            <p className="text-blue-400 text-xs mb-3 font-medium">{t.about.epamRole}</p>
                            <div className="space-y-1.5 text-zinc-400 text-sm">
                                {t.about.epamItems.map((item, i) => <p key={i}>{item}</p>)}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
                        <div className="flex items-center gap-2 mb-3">
                            <span>🏫</span>
                            <h3 className="text-base font-bold text-white">{t.about.education}</h3>
                        </div>
                        <ul className="list-disc list-inside text-zinc-400 space-y-1.5 text-sm">
                            <li>
                                <strong className="text-zinc-200">{t.about.degree}</strong> – {t.about.degreeDetail}
                            </li>
                            <li>{t.about.coursework}</li>
                        </ul>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}