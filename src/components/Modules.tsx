import { Database, Network, Radio, BarChart3, Search, Server, Eye, Layers } from 'lucide-react';

const modules = [
  {
    number: 1,
    title: 'Introduction to the Elastic Stack',
    icon: Layers,
    topics: [
      'Overview and evolution of the Elastic Stack',
      'Components and their roles: Elasticsearch, Logstash, Kibana, and Beats',
      'Elastic Stack ecosystem: Elastic Agent, Fleet, APM, Observability, and Security',
      'Core use cases: centralized logging, infrastructure monitoring, SIEM, and enterprise search',
      'Deployment architecture and data flow through the stack',
      'Comparison between open-source and commercial Elastic Stack distributions'
    ]
  },
  {
    number: 2,
    title: 'Elasticsearch Fundamentals and Architecture',
    icon: Database,
    topics: [
      'Architecture and design principles of Elasticsearch',
      'Cluster organization: nodes, shards, and replicas',
      'Indices, documents, and mappings',
      'Storage and retrieval mechanisms',
      'Text analysis: analyzers, tokenizers, and filters',
      'Inverted index and relevance scoring concepts',
      'Querying and filtering using Query DSL',
      'CRUD operations and document lifecycle management',
      'Index templates and data modeling strategies',
      'Scaling, replication, and performance optimization'
    ]
  },
  {
    number: 3,
    title: 'Logstash – Data Ingestion and Processing',
    icon: Network,
    topics: [
      'Logstash architecture and data flow model',
      'Pipeline configuration structure: inputs, filters, and outputs',
      'Input plugins: File, Beats, Kafka, HTTP, Syslog, JDBC',
      'Filter plugins: Grok, Mutate, JSON, Date, GeoIP, Translate',
      'Output plugins: Elasticsearch, File, Stdout, Kafka',
      'Data enrichment and transformation techniques',
      'Error handling, retries, and dead-letter queues',
      'Pipeline tuning and performance optimization'
    ]
  },
  {
    number: 4,
    title: 'Beats and Elastic Agent',
    icon: Radio,
    topics: [
      'Overview of Beats and their functions',
      'Filebeat, Metricbeat, Packetbeat, Heartbeat, and Auditbeat',
      'Architecture and communication workflow',
      'Module-based data collection and automatic dashboards',
      'Customizing inputs, outputs, and processors',
      'Role of Elastic Agent and Fleet for centralized management',
      'Policy management, monitoring, and updates via Fleet',
      'Differences between Beats and Elastic Agent in modern deployments',
      'Integration with Logstash and direct Elasticsearch ingestion'
    ]
  },
  {
    number: 5,
    title: 'Kibana – Visualization and Management',
    icon: BarChart3,
    topics: [
      'Role of Kibana in the Elastic Stack ecosystem',
      'Kibana spaces, saved objects, and access control',
      'Dashboard creation and visualization components',
      'Data exploration through Discover',
      'Visualization tools: Lens, TSVB, and Vega',
      'Canvas, reporting, and dashboard customization',
      'Designing dashboards for business and technical users',
      'Role of Kibana in alerting, management, and ML features',
      'Integration with Elastic Observability and Security'
    ]
  },
  {
    number: 6,
    title: 'Searching, Filtering, and Aggregations',
    icon: Search,
    topics: [
      'Fundamentals of search and filtering in Elasticsearch',
      'Query relevance and scoring mechanism',
      'Query DSL structure: match, term, range, and compound queries',
      'Boolean operators and filter contexts',
      'Aggregation framework for analytics',
      'Metric and bucket aggregations',
      'Pipeline and nested aggregations',
      'Sorting, pagination, and highlighting search results',
      'Query performance tuning and optimization'
    ]
  },
  {
    number: 7,
    title: 'Managing and Scaling the Elastic Stack',
    icon: Server,
    topics: [
      'Cluster management and health monitoring',
      'Index lifecycle management (ILM)',
      'Index rollover, shrink, and retention strategies',
      'Snapshot and restore operations for data recovery',
      'Resource optimization and shard management',
      'Scaling strategies: horizontal and vertical scaling',
      'Monitoring tools and performance dashboards',
      'Upgrade planning and version compatibility management',
      'Best practices for stability and performance tuning'
    ]
  },
  {
    number: 8,
    title: 'Observability with Elastic Stack',
    icon: Eye,
    topics: [
      'Concept of observability and its implementation in Elastic',
      'Components of Elastic Observability: Logs, Metrics, Traces, and Uptime',
      'Centralized data collection and correlation',
      'Infrastructure monitoring and application performance analysis',
      'Integration with APM (Application Performance Monitoring)',
      'Building effective observability dashboards',
      'Root cause analysis using correlated data sources',
      'Benefits of unified observability for DevOps and SRE teams'
    ]
  },
];

export default function Modules() {
  return (
    <section id="curriculum" className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-16 lg:py-20">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
              Course Curriculum
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Master Elastic Stack from fundamentals to production deployment
            </p>
          </div>

          {/* Modules Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isPrimary = index % 2 === 0;
              const primaryColor = isPrimary ? '#0ea5e9' : '#14b8a6';
              const darkColor = isPrimary ? '#0284c7' : '#0d9488';
              const lightBg = isPrimary ? '#e0f2fe' : '#ccfbf1';
              
              return (
                <div
                  key={module.number}
                  className="group bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                  style={{
                    animation: `fade-in-up 0.5s ease-out ${index * 0.05}s backwards`,
                  }}
                >
                  {/* Header */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-5 mb-6">
                      {/* Module Number */}
                      <div 
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}, ${darkColor})`,
                        }}
                      >
                        {module.number}
                      </div>

                      {/* Icon */}
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: lightBg,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: primaryColor }} />
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-xl lg:text-2xl font-bold text-gray-900 flex-1"
                        style={{
                          color: primaryColor,
                        }}
                      >
                        {module.title}
                      </h3>
                    </div>

                    {/* Topics List */}
                    <div className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div 
                          key={topicIndex}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 mt-2">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: primaryColor,
                              }}
                            ></div>
                          </div>
                          <span className="text-base lg:text-lg text-gray-700 leading-relaxed flex-1">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

