import { Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-[#0E1111] to-black border-t border-primary-500/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                  ELK Stack Training
                </h3>
                <p className="text-highlight-400 font-semibold text-base sm:text-lg">with Vimal Daga Sir</p>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base lg:text-lg">
                Master Elasticsearch, Logstash, Kibana, and Observability with hands-on training from India's most trusted technology mentor.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary-500/20 border border-primary-500/50 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 hover:shadow-glow transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-accent-500/20 border border-accent-500/50 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 hover:shadow-glow-accent transition-all duration-300 group"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-highlight-500/20 border border-highlight-500/50 flex items-center justify-center hover:bg-highlight-500 hover:border-highlight-500 hover:shadow-glow-highlight transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-highlight-400 group-hover:text-gray-950 transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-highlight-400 transition-colors text-sm sm:text-base lg:text-lg">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="text-gray-400 hover:text-highlight-400 transition-colors text-sm sm:text-base lg:text-lg">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#mentor" className="text-gray-400 hover:text-highlight-400 transition-colors text-sm sm:text-base lg:text-lg">
                    About Mentor
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-highlight-400 transition-colors text-sm sm:text-base lg:text-lg">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">Course Topics</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="text-gray-400 text-sm sm:text-base lg:text-lg">Elasticsearch</li>
                <li className="text-gray-400 text-sm sm:text-base lg:text-lg">Logstash</li>
                <li className="text-gray-400 text-sm sm:text-base lg:text-lg">Kibana</li>
                <li className="text-gray-400 text-sm sm:text-base lg:text-lg">Elastic SIEM</li>
                <li className="text-gray-400 text-sm sm:text-base lg:text-lg">Observability</li>
                <li className="text-gray-400 text-sm sm:text-base lg:text-lg">Machine Learning</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-primary-500/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-gray-400 text-center md:text-left text-xs sm:text-sm lg:text-base">
                © {currentYear} Indian Innovation and Research Center. All Rights Reserved.
              </p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base">
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
