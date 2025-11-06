import { Linkedin, Youtube, Quote } from 'lucide-react';

export default function Mentor() {
  return (
    <section id="mentor" className="h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 relative overflow-hidden flex items-center py-12 lg:py-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-primary-500/30 shadow-2xl">
                  <img 
                    src="/images/Vimal Sir's .jpg" 
                    alt="Vimal Daga Sir" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 animate-fade-in-left">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-balance">
                  Learn from India's Most Inspiring Tech Mentor –{' '}
                  <span className="gradient-text">Vimal Daga Sir</span>
                </h2>

                <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-balance">
                  Vimal Daga Sir is an eminent technology mentor, entrepreneur, and founder of the Indian Innovation and Research Center. With years of experience mentoring engineers in Cloud, DevOps, and AI, he brings practical industry insights to every learner. His mission is to empower individuals to innovate and lead in the world of technology.
                </p>
              </div>

              <div className="relative p-6 lg:p-8 bg-white/80 backdrop-blur-md border border-primary-200 rounded-2xl shadow-soft">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-accent-500 opacity-50" />
                <blockquote className="text-lg lg:text-xl text-gray-900 font-medium italic leading-relaxed ml-10 text-balance">
                  "Don't just learn technology — master the art of solving problems through innovation."
                </blockquote>
                <p className="text-accent-600 font-semibold mt-4 ml-10 text-base">— Vimal Daga</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 hover:shadow-glow transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-full font-semibold hover:bg-accent-600 hover:shadow-glow-accent transition-all duration-300 group"
                >
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
