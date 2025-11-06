import { Award, TrendingUp, ArrowRight } from 'lucide-react';

export default function Certification() {
  return (
    <section className="min-h-screen sm:h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden flex items-start sm:items-center py-6 sm:py-12 lg:py-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-highlight-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout: Heading first, then image, then content */}
          <div className="lg:hidden space-y-5">
            {/* Badge */}
            <div className="inline-block px-2.5 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full">
              <span className="text-primary-600 font-semibold text-[10px]">INDUSTRY RECOGNIZED</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900 leading-tight text-balance">
              Earn Your{' '}
              <span className="gradient-text">
                ELK Stack
              </span>{' '}
              Certification
            </h2>

            {/* Certificate Image - Mobile only, below heading */}
            <div className="relative animate-fade-in-up">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20 animate-pulse-slow"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-primary-500/30 shadow-2xl">
                  <img 
                    src="/images/ELK.jpg" 
                    alt="ELK Stack Certification" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Rest of Content */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed text-balance">
                Upon completion, receive an industry-recognized certificate from the Indian Innovation and Research Center, validating your skills in Elastic Stack technologies.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Official Certification</h3>
                    <p className="text-gray-600 text-xs">Recognized by industry leaders and top companies</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-highlight-500 flex items-center justify-center shadow-glow-highlight">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Career Advancement</h3>
                    <p className="text-gray-600 text-xs">Open doors to senior DevOps and observability roles</p>
                  </div>
                </div>
              </div>

              <a
                href="#pricing"
                className="btn-primary group inline-flex"
              >
                Register & Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Desktop Layout: Original grid layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 animate-fade-in-left">
              <div className="inline-block px-3 py-1.5 bg-primary-500/10 border border-primary-500/30 rounded-full">
                <span className="text-primary-600 font-semibold text-xs">INDUSTRY RECOGNIZED</span>
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-balance">
                Earn Your{' '}
                <span className="gradient-text">
                  ELK Stack
                </span>{' '}
                Certification
              </h2>

              <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-balance">
                Upon completion, receive an industry-recognized certificate from the Indian Innovation and Research Center, validating your skills in Elastic Stack technologies.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">Official Certification</h3>
                    <p className="text-gray-600 text-sm lg:text-base">Recognized by industry leaders and top companies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-highlight-500 flex items-center justify-center shadow-glow-highlight">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">Career Advancement</h3>
                    <p className="text-gray-600 text-sm lg:text-base">Open doors to senior DevOps and observability roles</p>
                  </div>
                </div>
              </div>

              <a
                href="#pricing"
                className="btn-primary group inline-flex"
              >
                Register & Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20 animate-pulse-slow"></div>

                <div className="relative rounded-3xl overflow-hidden border-4 border-primary-500/30 shadow-2xl">
                  <img 
                    src="/images/ELK.jpg" 
                    alt="ELK Stack Certification" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
