import { Laptop, Cloud, LineChart, FolderOpen } from 'lucide-react';

const features = [
  {
    icon: Laptop,
    title: 'Live Practical Labs',
    description: 'Engage in interactive sessions with hands-on exercises for deeper learning.',
  },
  {
    icon: Cloud,
    title: 'Cloud Environment Setup',
    description: 'Learn to deploy and configure the ELK Stack in real-world cloud environments.',
  },
  {
    icon: LineChart,
    title: 'Dashboard Creation',
    description: 'Create insightful dashboards and visualizations for effective data analysis.',
  },
  {
    icon: FolderOpen,
    title: 'Comprehensive Implementation',
    description: 'Apply your knowledge through practical scenarios and end-to-end configurations.',
  },
];

export default function Experience() {
  return (
    <section className="h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden flex items-center py-12 lg:py-16">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content - 60% */}
            <div className="w-full lg:w-[60%] space-y-5 animate-fade-in-left">
              <div className="inline-block px-3 py-1.5 bg-primary-500/20 border border-primary-500/50 rounded-full">
                <span className="text-accent-600 font-semibold text-xs">LEARN BY DOING</span>
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-balance">
                Hands-On,{' '}
                <span className="gradient-text">
                  Real-World
                </span>{' '}
                Learning Experience
              </h2>

              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-balance">
                Move beyond theory with practical, industry-relevant projects that prepare you for real DevOps and observability challenges.
              </p>

              <div className="space-y-4 pt-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-5 group"
                      style={{
                        animation: `fade-in-left 0.6s ease-out ${index * 0.1}s backwards`,
                      }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:shadow-glow-accent transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - ELK Terminal/Dashboard - 40% */}
            <div className="w-full lg:w-[40%] relative animate-fade-in-up">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 text-xs font-mono">elasticsearch@elk-stack</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm text-green-400 h-[400px] lg:h-[450px] overflow-y-auto bg-gray-950">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">$</span>
                      <span className="text-gray-300">curl -X GET "localhost:9200/_cluster/health"</span>
                    </div>
                    <div className="text-gray-500 ml-4">{'{'}</div>
                    <div className="text-gray-300 ml-6">"cluster_name": "elk-cluster",</div>
                    <div className="text-gray-300 ml-6">"status": <span className="text-green-400">"green"</span>,</div>
                    <div className="text-gray-300 ml-6">"number_of_nodes": 3,</div>
                    <div className="text-gray-300 ml-6">"active_primary_shards": 12</div>
                    <div className="text-gray-500 ml-4">{'}'}</div>
                    
                    <div className="pt-4 flex items-center gap-2">
                      <span className="text-blue-400">$</span>
                      <span className="text-gray-300">kibana --host=0.0.0.0</span>
                    </div>
                    <div className="text-gray-500 ml-4">Server running at http://localhost:5601</div>
                    <div className="text-green-400 ml-4">✓ Kibana is ready</div>
                    
                    <div className="pt-4 flex items-center gap-2">
                      <span className="text-blue-400">$</span>
                      <span className="text-gray-300">logstash -f /etc/logstash/conf.d/pipeline.conf</span>
                    </div>
                    <div className="text-gray-500 ml-4">Pipeline started {'{'}"main"{'}'}</div>
                    <div className="text-green-400 ml-4">✓ Pipeline running</div>
                    
                    <div className="pt-4 flex items-center gap-2">
                      <span className="text-blue-400">$</span>
                      <span className="text-gray-300">filebeat -e -c filebeat.yml</span>
                    </div>
                    <div className="text-gray-500 ml-4">2024/11/15 14:30:15.234</div>
                    <div className="text-gray-300 ml-4">{'{'}"message":"Log entry processed","source":"/var/log/app.log"{'}'}</div>
                    <div className="text-gray-300 ml-4">{'{'}"message":"Metric collected","cpu":45.2,"memory":67.8{'}'}</div>
                    
                    <div className="pt-4">
                      <div className="text-yellow-400">[INFO]</div>
                      <div className="text-gray-300 ml-4">Elasticsearch: 12 indices, 3 nodes</div>
                      <div className="text-gray-300 ml-4">Logstash: Processing 1,234 events/sec</div>
                      <div className="text-gray-300 ml-4">Kibana: Dashboard loaded successfully</div>
                    </div>

                    {/* Blinking Cursor */}
                    <div className="pt-2 flex items-center gap-2">
                      <span className="text-blue-400">$</span>
                      <span className="text-gray-300 animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
