import { ArrowRight, CheckCircle2, Calendar, Clock, Users } from 'lucide-react';

const features = [
  'Industry-Recognized Certification',
  'Access to Resources on LMS',
  'Live Interactive Sessions',
  'Hands-On Project',
];

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-teal-50 overflow-hidden flex items-center pt-16 lg:pt-20">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs - lighter */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-300/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-300/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        
        {/* Professional grid pattern - lighter */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Subtle radial gradient overlay - lighter */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-200/30 via-transparent to-transparent"></div>

        {/* Minimal Log Elements - Professional */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Log entries positioned around edges to avoid content overlap */}
          
          {/* Top Left Corner */}
          <div className="absolute top-[8%] left-[3%] text-[10px] text-black font-mono opacity-12 sm:opacity-20 transform -rotate-12">
            <div className="whitespace-nowrap">[2024-11-15 14:00:00] INFO: Elasticsearch cluster initialized</div>
          </div>
          
          {/* Top Right Corner */}
          <div className="absolute top-[10%] right-[3%] text-[10px] text-black font-mono opacity-10 sm:opacity-18 transform rotate-8">
            <div className="whitespace-nowrap">[2024-11-15 14:05:23] DEBUG: Logstash pipeline started</div>
          </div>
          
          {/* Top Left Edge */}
          <div className="absolute top-[5%] left-[2%] text-[10px] text-black font-mono opacity-10 sm:opacity-15 transform rotate-3">
            <div className="whitespace-nowrap">[2024-11-15 14:10:45] INFO: Kibana dashboard loaded</div>
          </div>
          
          {/* Top Right Edge */}
          <div className="absolute top-[12%] right-[2%] text-[10px] text-black font-mono opacity-8 sm:opacity-12 transform -rotate-6">
            <div className="whitespace-nowrap">[2024-11-15 14:15:12] INFO: Beats agent connected</div>
          </div>
          
          {/* Left Edge - Upper */}
          <div className="hidden sm:block absolute top-[20%] left-[1%] text-[10px] text-black font-mono opacity-18 transform rotate-12">
            <div className="whitespace-nowrap">[2024-11-15 14:20:30] INFO: Index created successfully</div>
          </div>
          
          {/* Right Edge - Upper */}
          <div className="hidden sm:block absolute top-[18%] right-[1%] text-[10px] text-black font-mono opacity-15 transform -rotate-3">
            <div className="whitespace-nowrap">[2024-11-15 14:25:18] DEBUG: Query executed in 45ms</div>
          </div>
          
          {/* Left Edge - Lower */}
          <div className="hidden sm:block absolute bottom-[25%] left-[1%] text-[10px] text-black font-mono opacity-12 transform rotate-9">
            <div className="whitespace-nowrap">[2024-11-15 14:30:00] INFO: Observability metrics collected</div>
          </div>
          
          {/* Right Edge - Lower */}
          <div className="hidden sm:block absolute bottom-[22%] right-[1%] text-[10px] text-black font-mono opacity-15 transform -rotate-9">
            <div className="whitespace-nowrap">[2024-11-15 14:35:42] INFO: SIEM rules activated</div>
          </div>
          
          {/* Bottom Left Corner */}
          <div className="absolute bottom-[12%] left-[3%] text-[10px] text-black font-mono opacity-10 sm:opacity-18 transform rotate-6">
            <div className="whitespace-nowrap">[2024-11-15 14:40:15] DEBUG: Data ingestion completed</div>
          </div>
          
          {/* Bottom Right Corner */}
          <div className="absolute bottom-[10%] right-[3%] text-[10px] text-black font-mono opacity-10 sm:opacity-20 transform -rotate-8">
            <div className="whitespace-nowrap">[2024-11-15 14:45:30] INFO: Search index optimized</div>
          </div>
          
          {/* Bottom Left Edge */}
          <div className="absolute bottom-[8%] left-[2%] text-[10px] text-black font-mono opacity-8 sm:opacity-15 transform -rotate-5">
            <div className="whitespace-nowrap">[2024-11-15 14:50:12] DEBUG: Cluster health check passed</div>
          </div>
          
          {/* Bottom Right Edge */}
          <div className="absolute bottom-[5%] right-[2%] text-[10px] text-black font-mono opacity-8 sm:opacity-12 transform rotate-7">
            <div className="whitespace-nowrap">[2024-11-15 14:55:45] INFO: Monitoring dashboard refreshed</div>
          </div>
          
          {/* Additional logs - positioned to avoid center content */}
          
          {/* Very Top Left */}
          <div className="absolute top-[2%] left-[4%] text-[10px] text-black font-mono opacity-10 sm:opacity-16 transform rotate-5">
            <div className="whitespace-nowrap">[2024-11-15 15:00:00] INFO: Log aggregation pipeline active</div>
          </div>
          
          {/* Very Top Right */}
          <div className="absolute top-[3%] right-[4%] text-[10px] text-black font-mono opacity-8 sm:opacity-14 transform -rotate-10">
            <div className="whitespace-nowrap">[2024-11-15 15:05:15] DEBUG: Elasticsearch shards balanced</div>
          </div>
          
          {/* Far Left Edge - Middle Top */}
          <div className="hidden sm:block absolute top-[15%] left-[0.5%] text-[10px] text-black font-mono opacity-13 transform rotate-15">
            <div className="whitespace-nowrap">[2024-11-15 15:10:30] INFO: Data stream created successfully</div>
          </div>
          
          {/* Far Right Edge - Middle Top */}
          <div className="hidden sm:block absolute top-[13%] right-[0.5%] text-[10px] text-black font-mono opacity-11 transform -rotate-12">
            <div className="whitespace-nowrap">[2024-11-15 15:15:45] DEBUG: Kibana visualization rendered</div>
          </div>
          
          {/* Far Left Edge - Middle Bottom */}
          <div className="hidden sm:block absolute bottom-[18%] left-[0.5%] text-[10px] text-black font-mono opacity-14 transform -rotate-10">
            <div className="whitespace-nowrap">[2024-11-15 15:20:00] INFO: Security policies applied</div>
      </div>

          {/* Far Right Edge - Middle Bottom */}
          <div className="hidden sm:block absolute bottom-[20%] right-[0.5%] text-[10px] text-black font-mono opacity-12 transform rotate-11">
            <div className="whitespace-nowrap">[2024-11-15 15:25:18] DEBUG: Performance metrics exported</div>
      </div>

          {/* Very Bottom Left */}
          <div className="absolute bottom-[3%] left-[4%] text-[10px] text-black font-mono opacity-10 sm:opacity-17 transform -rotate-7">
            <div className="whitespace-nowrap">[2024-11-15 15:30:30] INFO: Backup snapshot completed</div>
            </div>

          {/* Very Bottom Right */}
          <div className="absolute bottom-[2%] right-[4%] text-[10px] text-black font-mono opacity-8 sm:opacity-15 transform rotate-9">
            <div className="whitespace-nowrap">[2024-11-15 15:35:45] DEBUG: Alert rules synchronized</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 animate-fade-in">
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight sm:leading-[1.1] text-balance px-2">
                Master{' '}
                <span className="gradient-text-subtle">
                ELK Stack
                </span>
                <br />
                with Expert Guidance
            </h1>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-balance px-2">
                Transform your career with comprehensive training in Elasticsearch, Logstash, Kibana, and Observability. Learn from India's most trusted technology mentor.
              </p>
            </div>

            {/* Course Details Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
              {/* Starting Date */}
              <div className="text-center p-3 sm:p-4 bg-primary-50 rounded-xl">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">15th Nov</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Weekend Batch</div>
          </div>

              {/* Timings */}
              <div className="text-center p-3 sm:p-4 bg-accent-50 rounded-xl">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">2:00 PM - 6:00 PM</div>
                <div className="text-[10px] sm:text-xs text-gray-600">IST</div>
                  </div>

              {/* Total Hours */}
              <div className="text-center p-3 sm:p-4 bg-primary-50 rounded-xl col-span-2 md:col-span-1">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">16 Hours</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Over 2 Weekends</div>
                  </div>
                  </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto px-2 mb-3 sm:mb-4 lg:mb-0">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 text-gray-700 justify-center sm:justify-start"
                  style={{
                    animation: `fade-in-up 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent-500/20 border border-accent-500/50 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-400" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">{feature}</span>
                </div>
              ))}
              </div>

            {/* CTA Buttons */}
            <div className="flex justify-center pt-2 sm:pt-3 lg:pt-4 px-2 pb-2 sm:pb-0">
              <a
                href="#pricing"
                className="btn-primary group text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
