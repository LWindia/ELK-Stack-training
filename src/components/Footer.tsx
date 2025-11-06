import { Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-[#0E1111] to-black border-t border-primary-500/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {/* Brand Section */}
            <div className="text-center space-y-3">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  ELK Stack Training
                </h3>
                <p className="text-highlight-400 font-semibold text-sm">with Vimal Daga Sir</p>
              </div>
              <p className="text-gray-400 leading-relaxed text-xs max-w-xs mx-auto">
                Master Elasticsearch, Logstash, Kibana, and Observability with hands-on training from India's most trusted technology mentor.
              </p>
              {/* Social Icons */}
              <div className="flex justify-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/50 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 hover:shadow-glow transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/@linuxworldindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent-500/20 border border-accent-500/50 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 hover:shadow-glow-accent transition-all duration-300 group"
                >
                  <Youtube className="w-4 h-4 text-accent-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/linuxworld.india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-highlight-500/20 border border-highlight-500/50 flex items-center justify-center hover:bg-highlight-500 hover:border-highlight-500 hover:shadow-glow-highlight transition-all duration-300 group"
                >
                  <Instagram className="w-4 h-4 text-highlight-400 group-hover:text-gray-950 transition-colors" />
                </a>
              </div>
            </div>

            {/* Links Section - Two Columns */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-white font-bold text-sm mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-highlight-400 transition-colors text-xs">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#curriculum" className="text-gray-400 hover:text-highlight-400 transition-colors text-xs">
                      Curriculum
                    </a>
                  </li>
                  <li>
                    <a href="#mentor" className="text-gray-400 hover:text-highlight-400 transition-colors text-xs">
                      About Mentor
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-gray-400 hover:text-highlight-400 transition-colors text-xs">
                      Register
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-sm mb-3">Course Topics</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400 text-xs">Elasticsearch</li>
                  <li className="text-gray-400 text-xs">Logstash</li>
                  <li className="text-gray-400 text-xs">Kibana</li>
                  <li className="text-gray-400 text-xs">Elastic SIEM</li>
                  <li className="text-gray-400 text-xs">Observability</li>
                  <li className="text-gray-400 text-xs">Machine Learning</li>
                </ul>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="pt-4 border-t border-primary-500/30">
              <p className="text-gray-400 text-center text-xs mb-3">
                © {currentYear} Hash13 All Rights Reserved.
              </p>
              <div className="flex justify-center gap-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-highlight-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-highlight-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-10 lg:gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  ELK Stack Training
                </h3>
                <p className="text-highlight-400 font-semibold text-lg">with Vimal Daga Sir</p>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md text-base lg:text-lg">
                Master Elasticsearch, Logstash, Kibana, and Observability with hands-on training from India's most trusted technology mentor.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary-500/20 border border-primary-500/50 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 hover:shadow-glow transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-primary-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/@linuxworldindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent-500/20 border border-accent-500/50 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 hover:shadow-glow-accent transition-all duration-300 group"
                >
                  <Youtube className="w-5 h-5 lg:w-6 lg:h-6 text-accent-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/linuxworld.india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-highlight-500/20 border border-highlight-500/50 flex items-center justify-center hover:bg-highlight-500 hover:border-highlight-500 hover:shadow-glow-highlight transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-highlight-400 group-hover:text-gray-950 transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg lg:text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-highlight-400 transition-colors text-base lg:text-lg">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="text-gray-400 hover:text-highlight-400 transition-colors text-base lg:text-lg">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#mentor" className="text-gray-400 hover:text-highlight-400 transition-colors text-base lg:text-lg">
                    About Mentor
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-highlight-400 transition-colors text-base lg:text-lg">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg lg:text-xl mb-6">Course Topics</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-base lg:text-lg">Elasticsearch</li>
                <li className="text-gray-400 text-base lg:text-lg">Logstash</li>
                <li className="text-gray-400 text-base lg:text-lg">Kibana</li>
                <li className="text-gray-400 text-base lg:text-lg">Elastic SIEM</li>
                <li className="text-gray-400 text-base lg:text-lg">Observability</li>
                <li className="text-gray-400 text-base lg:text-lg">Machine Learning</li>
              </ul>
            </div>
          </div>

          {/* Desktop Copyright */}
          <div className="hidden md:block pt-8 border-t border-primary-500/30">
            <div className="flex flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-left text-sm lg:text-base">
                © {currentYear} Hash13 All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm lg:text-base">
                <a href="#" className="text-gray-400 hover:text-highlight-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-highlight-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
