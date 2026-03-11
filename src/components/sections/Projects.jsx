import { useState } from 'react';
import RevealOnScroll from '../RevealOnScroll';
import { useLang } from '../../i18n';

import ThalusLogin from '../../images/ThalusLogin.png';
import HomeRecepcionThalus from '../../images/HomeRecepcionThalus.png';
import HomeProfesionalThalus from '../../images/HomeProfesionalThalus.png';
import HomePaciente from '../../images/HomePaciente.png';
import DashboardPagosThalus from '../../images/DashboardPagosThalus.png';
import PagosPacienteThalus from '../../images/PagosPacienteThalus.png';
import ThalusCalendario from '../../images/ThalusCalendario.png';

const THALUS_IMAGES = [
    { src: ThalusLogin, label: 'Login' },
    { src: HomeRecepcionThalus, label: 'Reception Interface' },
    { src: HomeProfesionalThalus, label: 'Professional Interface' },
    { src: HomePaciente, label: 'Patient Interface' },
    { src: DashboardPagosThalus, label: 'Payments Dashboard' },
    { src: PagosPacienteThalus, label: 'Patient Payments' },
    { src: ThalusCalendario, label: 'Calendar' },
];

const PROJECT_KEYS = [
    {
        id: 'thalus',
        stack: ['Python', 'Django', 'HTMX', 'Tailwind', 'PostgreSQL', 'Cloudflare', 'Mercado Pago API', 'Google Calendar API', 'WhatsApp API'],
        github: null,
        liveUrl: null,
        images: THALUS_IMAGES,
        roleIcons: ['📋', '🩺', '👤'],
        roleNames: ['Receptionist', 'Professional', 'Patient'],
    },
    {
        id: 'sim-g11',
        stack: ['Python', 'Pytest', 'MATLAB', 'Scientific Computing', 'Simulation'],
        github: 'https://github.com/marcoffigueroa/SIM-G11',
        liveUrl: null,
        images: [],
    },
    {
        id: 'cima',
        stack: ['React', 'Node.js', 'Express.js', 'JavaScript', 'Tailwind CSS', 'PostgreSQL'],
        github: null,
        liveUrl: 'https://frontend-cima.onrender.com/',
        images: [],
    },
    {
        id: 'abm-cars',
        stack: ['Java', 'Spring Boot', 'Keycloak', 'API Gateway', 'Microservices'],
        github: 'https://github.com/marcoffigueroa/JAVA-BACKEND-ABM',
        liveUrl: null,
        images: [],
    },
];

// ---------- Sub-components ----------

const StackTag = ({ tech }) => (
    <span className="bg-blue-500/8 text-blue-400 py-1 px-2.5 rounded-md text-xs font-medium border border-blue-500/10">
        {tech}
    </span>
);

const Carousel = ({ images }) => {
    const [idx, setIdx] = useState(0);
    if (!images || images.length === 0) return null;
    return (
        <div>
            <div className="relative rounded-xl overflow-hidden bg-black/30">
                <img
                    src={images[idx].src}
                    alt={images[idx].label}
                    className="w-full object-cover max-h-72 md:max-h-96"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <span className="text-sm text-white font-medium">{images[idx].label}</span>
                    <span className="text-zinc-400 text-xs ml-2">{idx + 1} / {images.length}</span>
                </div>
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => setIdx((idx - 1 + images.length) % images.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => setIdx((idx + 1) % images.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>
            <div className="flex gap-2 justify-center mt-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIdx(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${i === idx ? 'bg-blue-500 scale-125' : 'bg-zinc-600 hover:bg-zinc-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const Modal = ({ project, itemT, projT, initialTab, onClose }) => {
    const [tab, setTab] = useState(initialTab);
    const hasTabs = project.images && project.images.length > 0;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[88vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between z-10">
                    <h3 className="text-xl font-bold text-white">{itemT.title}</h3>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-white transition text-3xl leading-none"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </div>

                {/* Tabs */}
                {hasTabs && (
                    <div className="flex gap-2 px-6 pt-5">
                        {['details', 'screenshots'].map(k => (
                            <button
                                key={k}
                                onClick={() => setTab(k)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                    tab === k
                                        ? 'bg-blue-600 text-white'
                                        : 'text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500'
                                }`}
                            >
                                {k === 'details' ? projT.details : projT.screenshots}
                            </button>
                        ))}
                    </div>
                )}

                {/* Body */}
                <div className="px-6 py-6">
                    {tab === 'details' && (
                        <div className="space-y-6">
                            {/* Description */}
                            <div>
                                {itemT.fullDesc.map((para, i) => (
                                    <p key={i} className="text-zinc-300 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
                                ))}
                            </div>

                            {/* From Problem to Product */}
                            {project.id === 'thalus' && (
                                <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-4">
                                    <h4 className="text-blue-400 font-semibold mb-2 text-xs uppercase tracking-widest">{projT.fromProblem}</h4>
                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        {projT.fromProblemText}
                                    </p>
                                </div>
                            )}

                            {/* System Roles */}
                            {project.roleIcons && (
                                <div>
                                    <h4 className="text-white font-semibold mb-3">{projT.systemRoles}</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {project.roleIcons.map((icon, i) => (
                                            <div key={i} className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800">
                                                <div className="text-2xl mb-2">{icon}</div>
                                                <div className="font-semibold text-white text-sm mb-1">{itemT.roleNames ? itemT.roleNames[i] : project.roleNames[i]}</div>
                                                <div className="text-zinc-400 text-xs leading-relaxed">{itemT.roles[i].desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            {itemT.features && (
                                <div>
                                    <h4 className="text-white font-semibold mb-3">{projT.keyFeatures}</h4>
                                    <ul className="space-y-2">
                                        {itemT.features.map((f, i) => (
                                            <li key={i} className="text-zinc-300 text-sm flex items-start gap-2">
                                                <span className="text-blue-500 mt-0.5 shrink-0">›</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Development Approach */}
                            {itemT.approach && (
                                <div>
                                    <h4 className="text-white font-semibold mb-2">{projT.devApproach}</h4>
                                    <p className="text-zinc-300 text-sm leading-relaxed">{itemT.approach}</p>
                                </div>
                            )}

                            {/* Architecture */}
                            {itemT.architecture && (
                                <div>
                                    <h4 className="text-white font-semibold mb-2">{projT.architecture}</h4>
                                    <p className="text-zinc-300 text-sm leading-relaxed">{itemT.architecture}</p>
                                </div>
                            )}

                            {/* Stack */}
                            <div>
                                <h4 className="text-white font-semibold mb-3">{projT.stack}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(s => <StackTag key={s} tech={s} />)}
                                </div>
                            </div>

                            {/* Links */}
                            {(project.github || project.liveUrl) && (
                                <div className="flex gap-3 pt-1">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="border border-zinc-700 text-zinc-300 py-2 px-5 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-all duration-200">
                                            GitHub ↗
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                            className="border border-zinc-700 text-zinc-300 py-2 px-5 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-all duration-200">
                                            Live Demo ↗
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {tab === 'screenshots' && (
                        <Carousel images={project.images} />
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project, itemT, projT, onOpen }) => (
    <div className="flex flex-col p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300">
        <h3 className="text-lg font-bold mb-2 text-white">{itemT.title}</h3>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed flex-1">{itemT.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.slice(0, 5).map(s => <StackTag key={s} tech={s} />)}
            {project.stack.length > 5 && (
                <span className="text-zinc-500 text-xs self-center">+{project.stack.length - 5} more</span>
            )}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
            <button
                onClick={() => onOpen({ project, tab: 'details' })}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-500 transition-all duration-200"
            >
                {projT.viewDetails}
            </button>
            {project.images && project.images.length > 0 && (
                <button
                    onClick={() => onOpen({ project, tab: 'screenshots' })}
                    className="border border-zinc-700 text-zinc-300 py-2 px-4 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-all duration-200"
                >
                    {projT.screenshots}
                </button>
            )}
            {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="border border-zinc-700 text-zinc-300 py-2 px-4 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-all duration-200">
                    GitHub ↗
                </a>
            )}
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="border border-zinc-700 text-zinc-300 py-2 px-4 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-all duration-200">
                    Live Demo ↗
                </a>
            )}
        </div>
    </div>
);

export const Projects = () => {
    const { t } = useLang();
    const projT = t.projects;
    const [modal, setModal] = useState(null);

    return (
        <section id="projects" className="w-full py-24">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-3 text-white text-center">
                        {projT.heading}
                    </h2>
                    <p className="text-zinc-400 text-center mb-12 max-w-md mx-auto text-sm">
                        {projT.subtitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECT_KEYS.map(p => (
                            <ProjectCard key={p.id} project={p} itemT={projT.items[p.id]} projT={projT} onOpen={setModal} />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>

            {modal && (
                <Modal
                    project={modal.project}
                    itemT={projT.items[modal.project.id]}
                    projT={projT}
                    initialTab={modal.tab}
                    onClose={() => setModal(null)}
                />
            )}
        </section>
    );
}
