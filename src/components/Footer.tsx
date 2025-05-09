import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import Logo from './Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-6 px-6">
      
     
      <div className="lg:gap-30 gap-10 grid grid-cols-1 lg:grid-cols-4  justify-between">
        
        <div className="space-y-2">
          <Logo />
          <p className="text-sm text-gray-400 italic">Empowering dreams</p>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Courses</a></li>
            <li><a href="#" className="hover:text-blue-400">Faculty</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Email: info@visionacademy.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: A-162, Near Bherubaksh Sweets, Vaishali Nagar, Alwar(Raj)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-slate-500">
            <a href="#"><Facebook size={18} className="hover:text-white" /></a>
            <a href="#"><Instagram size={18} className="hover:text-white" /></a>
            <a href="#"><Linkedin size={18} className="hover:text-white" /></a>
            <a href="mailto:info@visionacademy.com"><Mail size={18} className="hover:text-white" /></a>
          </div>
        </div>

      </div>
      <div className="text-center mt-10 text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Vision Science Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
