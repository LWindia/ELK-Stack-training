import { Cloud, Server, ShieldCheck, Database, GraduationCap, Briefcase } from 'lucide-react';

const audiences = [
  {
    icon: Cloud,
    title: 'DevOps Engineers',
    color: '#005571',
  },
  {
    icon: Server,
    title: 'Cloud Engineers',
    color: '#F04E98',
  },
  {
    icon: Briefcase,
    title: 'System Administrators',
    color: '#FED10A',
  },
  {
    icon: ShieldCheck,
    title: 'Security Analysts',
    color: '#005571',
  },
  {
    icon: Database,
    title: 'Data Engineers',
    color: '#F04E98',
  },
  {
    icon: GraduationCap,
    title: 'IT Students & Professionals',
    color: '#FED10A',
  },
];

export default function Audience() {
  return (
    <section className="h-screen bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-balance mb-3">
              Who Can Join This Program?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Designed for professionals and learners aiming to excel in DevOps, Observability, and Data Analytics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3">
              {audiences.map((audience, index) => {
                const Icon = audience.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-3 lg:p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                    style={{
                      animation: `fade-in-up 0.6s ease-out ${index * 0.08}s backwards`,
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${audience.color}15`,
                      }}
                    >
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: audience.color }} />
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-gray-900">
                      {audience.title}
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
