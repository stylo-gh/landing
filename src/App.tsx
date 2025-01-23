import React from 'react';
import Header from './components/Header';
import { Droplets, Flame, Sparkles, Notebook as Robot } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Find Your Drip.</h1>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Swipe. Match. Slay. <span role="img" aria-label="droplet">💧</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Drippit is where fashion meets swiping. Discover your style, one match at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <input
                type="email"
                placeholder="Enter your email to join the drip squad 💌"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black"
              />
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
                Get Early Access 🔥
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">299+ Drippers</span>
                <br />On Waitlist
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611042553484-d61f84d22784?auto=format&fit=crop&w=800&q=80"
              alt="Drippit App Preview"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-4">FEATURES</h2>
          <h3 className="text-3xl md:text-4xl text-center font-serif mb-16">Why You'll Love Drippit</h3>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">SWIPE TO SHOP</h4>
              <h5 className="text-2xl font-serif mb-4">
                Shopping, but make it fun! <Flame className="inline w-6 h-6" />
              </h5>
              <p className="text-gray-600">
                Say goodbye to boring scrolling. With Drippit, shopping feels like a game. 
                Swipe left to pass, swipe right to save, and build your dream wardrobe in seconds. 
                Effortless, exciting, and tailored to you.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">YOUR DREAM CLOSET</h4>
              <h5 className="text-2xl font-serif mb-4">
                Build the closet you've always wanted. <Sparkles className="inline w-6 h-6" />
              </h5>
              <p className="text-gray-600">
                Every swipe you love gets added to your wishlist, turning your style dreams into reality. 
                Save your favorites, organize by vibe, and access your curated closet anytime. 
                No stress, just drip.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">SMART AI SEARCH</h4>
              <h5 className="text-2xl font-serif mb-4">
                Fashion finds, powered by AI. <Robot className="inline w-6 h-6" />
              </h5>
              <p className="text-gray-600">
                Looking for something specific? Let our AI search do the heavy lifting. 
                Whether it's "a black dress for a night out" or "trendy sneakers under $100," 
                Drippit finds the perfect match—just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Don't Miss Out on the Drip <span role="img" aria-label="droplet">💧</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Be the first to experience the future of shopping. Early access spots are filling fast!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email to claim your spot 💌"
              className="flex-1 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              Sign Me Up 💝
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <h2 className="text-xl font-serif mb-6">Drippit—Find Your Drip, Swipe Your Style.</h2>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-gray-600 hover:text-black">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:text-gray-600">Privacy Policy</a>
          {' | '}
          <a href="#" className="hover:text-gray-600">Terms of Service</a>
          {' | '}
          <a href="#" className="hover:text-gray-600">Contact Us</a>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Copyright 2024. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;