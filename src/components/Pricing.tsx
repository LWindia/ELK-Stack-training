import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 relative overflow-hidden flex items-center py-12 lg:py-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500 opacity-10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500 opacity-10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 text-balance mb-3 sm:mb-4">
              Ready to Start?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Join the next batch and transform your career
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-primary-200 shadow-xl p-5 sm:p-6 lg:p-8 xl:p-10">
            {/* Course Details - Compact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="text-center p-3 sm:p-4 bg-primary-50 rounded-xl">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">15th Nov</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Weekend Batch</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-accent-50 rounded-xl">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">2:00 PM - 6:00 PM</div>
                <div className="text-[10px] sm:text-xs text-gray-600">IST</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-primary-50 rounded-xl">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">16 Hours</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Over 2 Weekends</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-accent-50 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">₹5,000</div>
                <div className="text-[10px] sm:text-xs text-gray-600">+ Taxes</div>
              </div>
            </div>

            {/* Pricing Display */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 flex-wrap">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 line-through">₹15,000</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">₹</span>
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text">
                    5,000
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">+ Taxes • One-time payment</p>
            </div>

            {/* CTA Button */}
            <a
              href="https://rzp.io/rzp/elk-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 sm:py-4 lg:py-5 bg-gradient-to-r from-primary-500 via-accent-500 to-highlight-500 text-white text-center rounded-xl font-bold text-base sm:text-lg lg:text-xl hover:shadow-glow-accent transition-all duration-300 hover:scale-[1.02] group"
            >
              <span className="flex items-center justify-center gap-2">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
