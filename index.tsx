import { useState } from 'react'
import { Search, Menu, X, Star, ChevronRight } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-[#FDF4E3] text-[#4A3933]">
      {/* Header */}
      <header className="bg-[#D2691E] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gwork</h1>
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Find Work</a></li>
            <li><a href="#" className="hover:underline">Post Job</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#E6B800] text-white text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Connect with Skilled Workers in Your Community</h2>
        <p className="mb-6">Find reliable help for your household tasks and projects</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-[#4A3933] text-white px-6 py-2 rounded-full hover:bg-[#5D4A42]">
            Find a Worker
          </a>
          <a href="#" className="bg-white text-[#4A3933] px-6 py-2 rounded-full hover:bg-gray-100">
            Offer Your Skills
          </a>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search for a service..."
            className="w-full p-3 rounded-full border-2 border-[#D2691E] focus:outline-none focus:border-[#E6B800]"
          />
          <Search className="absolute right-3 top-3 text-[#D2691E]" />
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-8 px-4">
        <h3 className="text-2xl font-bold mb-4 text-center">Popular Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Cleaning', 'Gardening', 'Carpentry', 'Plumbing', 'Painting', 'Electrical', 'Cooking', 'Childcare'].map((service) => (
            <a
              key={service}
              href="#"
              className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-[#FFF8E7] transition-colors"
            >
              {service}
            </a>
          ))}
        </div>
      </section>

      {/* Featured Workers */}
      <section className="py-8 px-4 bg-[#4682B4] text-white">
        <h3 className="text-2xl font-bold mb-4 text-center">Featured Workers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Amina', skill: 'Cleaner', rating: 4.8 },
            { name: 'Kwesi', skill: 'Carpenter', rating: 4.9 },
            { name: 'Zainab', skill: 'Gardener', rating: 4.7 }
          ].map((worker) => (
            <div key={worker.name} className="bg-white text-[#4A3933] p-4 rounded-lg shadow-md">
              <h4 className="font-bold">{worker.name}</h4>
              <p>{worker.skill}</p>
              <div className="flex items-center mt-2">
                <Star className="text-[#E6B800] fill-current" />
                <span className="ml-1">{worker.rating}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="#" className="inline-flex items-center text-white hover:underline">
            View all workers <ChevronRight className="ml-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A3933] text-white py-6 px-4 text-center">
        <p>&copy; 2023 Gwork. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline">Terms of Service</a>
          {' | '}
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}
