import { useState, useEffect } from 'react';
import RevealOnScroll from '../RevealOnScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLang } from '../../i18n';
import fallbackPosts from '../../data/linkedin-posts.json';

const MAX_POSTS = 5;
const MAX_TEXT = 200;

const truncate = (str) =>
    str.length > MAX_TEXT ? str.slice(0, MAX_TEXT).trimEnd() + '…' : str;

const formatDate = (dateStr, lang) => {
    const d = new Date(dateStr + 'T00:00:00');
    const locale = lang === 'es' ? 'es-AR' : 'en-US';
    return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
};

const PostCard = ({ post, viewPostLabel, lang }) => (
    <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex flex-col gap-3
                   hover:border-zinc-700 transition-all duration-300 cursor-pointer"
    >
        {post.image && (
            <img
                src={post.image}
                alt=""
                className="w-full h-36 object-cover rounded-lg"
            />
        )}
        <p className="text-zinc-300 text-sm leading-relaxed flex-1">
            {truncate(lang === 'es' && post.textEs ? post.textEs : post.text)}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-800">
            <span className="text-zinc-500 text-xs">{formatDate(post.date, lang)}</span>
            <span className="text-blue-400 text-sm flex items-center gap-1.5 font-medium">
                <FontAwesomeIcon icon={faLinkedin} />
                {viewPostLabel}
            </span>
        </div>
    </a>
);

export const Posts = () => {
    const { lang, t } = useLang();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Use the local JSON data directly; swap this with a fetch() to an RSS
        // bridge URL if you set one up later.
        try {
            const data = fallbackPosts.slice(0, MAX_POSTS);
            setPosts(data);
        } catch {
            setError(true);
        }
    }, []);

    return (
        <section id="posts" className="w-full py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-3 text-white text-center">
                        {t.posts.heading}
                    </h2>
                    <p className="text-zinc-400 text-center mb-10 max-w-xl mx-auto text-sm">
                        {t.posts.subtitle}
                    </p>

                    {error || posts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-zinc-400 mb-4">{t.posts.errorMsg}</p>
                            <a
                                href="https://www.linkedin.com/in/marco-figueroa-533848314/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-zinc-700 text-zinc-300 py-2.5 px-6 rounded-lg text-sm font-semibold hover:-translate-y-0.5
                                    hover:border-zinc-500 hover:text-white transition-all duration-200 inline-block"
                            >
                                {t.posts.visitProfile}
                            </a>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {posts.map((post, i) => (
                                    <PostCard key={i} post={post} viewPostLabel={t.posts.viewPost} lang={lang} />
                                ))}
                            </div>

                            <div className="text-center mt-8">
                                <a
                                    href="https://www.linkedin.com/in/marco-figueroa-533848314/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-zinc-700 text-zinc-300 py-2.5 px-6 rounded-lg text-sm font-semibold hover:-translate-y-0.5
                                        hover:border-zinc-500 hover:text-white transition-all duration-200 inline-block"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                                    {t.posts.followMe}
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </RevealOnScroll>
        </section>
    );
};
