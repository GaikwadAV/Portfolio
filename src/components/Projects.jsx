export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Work Process</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        My streamlined workflow ensures quality and innovation from idea to launch.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {[
    {
      title: "Assess",
      description:
        "Understanding infrastructure needs, security requirements, and performance goals."
    },
    {
      title: "Architect",
      description:
        "Designing scalable, cloud-native solutions using AWS, Terraform, and Kubernetes."
    },
    {
      title: "Implement",
      description:
        "Automating deployments with scripts, setting up CI/CD pipelines, and configuring environments."
    },
    {
      title: "Optimize",
      description:
        "Monitoring, fine-tuning performance, and ensuring cost-efficiency in production."
    }
  ].map((step, i) => (
    <div key={step.title} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold mb-2 text-purple-600">{i + 1}. {step.title}</h3>
      <p className="text-sm text-gray-600">{step.description}</p>
    </div>
  ))}
</div>
    </section>
  );
}