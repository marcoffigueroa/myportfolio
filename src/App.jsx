import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import "./index.css";
import { useState } from 'react';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Posts } from './components/sections/Posts';
import { Contact } from './components/sections/Contact';
import { LanguageProvider } from './i18n';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <LanguageProvider>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-zinc-950 text-zinc-200`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <Projects />
          <Posts />
          <About />
          <Contact />
      </div>
  </LanguageProvider>
  )
}

export default App
