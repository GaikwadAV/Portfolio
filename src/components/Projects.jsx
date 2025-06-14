export default function Projects() {
  return (
    <section className="py-20 px-6 bg-white" id="work-process">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">My Work Process</h2>
        <p className="text-lg text-gray-600 mt-2">
          How I approach each project — from understanding goals to delivering secure, scalable cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-all">
          <div className="text-purple-700 text-4xl mb-4">
            <i className="fas fa-comments"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-purple-700">1. Discovery & Planning</h3>
          <p className="text-gray-600 text-sm">
            Understand project goals, gather requirements, and analyze architecture needs. I ensure every technical decision is aligned with business outcomes.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-all">
          <div className="text-purple-700 text-4xl mb-4">
            <i className="fas fa-drafting-compass"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-purple-700">2. Infrastructure Design</h3>
          <p className="text-gray-600 text-sm">
            Design scalable and secure AWS infrastructure using Terraform. I follow best practices for security, networking, and automation from the ground up.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-all">
          <div className="text-purple-700 text-4xl mb-4">
            <i className="fas fa-tools"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-purple-700">3. Implementation & Automation</h3>
          <p className="text-gray-600 text-sm">
            Provision and configure resources, implement blue-green deployments, automate workflows, and set up monitoring and alerting for reliability.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-all">
          <div className="text-purple-700 text-4xl mb-4">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-purple-700">4. Review & Handoff</h3>
          <p className="text-gray-600 text-sm">
            Conduct thorough reviews, testing, and documentation. Ensure a smooth handoff to stakeholders with backup strategies and secure access controls in place.
          </p>
        </div>
      </div>
    </section>
  );
}