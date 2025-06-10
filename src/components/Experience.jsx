export default function Experience() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl text-left">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">Cloud Engineer - Lentra (Aug 2023 - Present)</h3>
          <p className="text-gray-600">
            I'm currently working as a Cloud Engineer at Lentra, where I primarily manage our AWS infrastructure using Terraform. My day-to-day work involves provisioning resources, managing networking and security, and ensuring the overall stability of our cloud environment. I've also been quite involved in optimizing our deployment processes — for example, I replaced in-place deployments with a blue-green strategy, leading both POC and production implementation, which helped us cut down downtime significantly.
            <br /><br />
            One of the key projects I led was automating sandbox provisioning using Jira, which significantly improved development speed. On the FinOps side, I contributed to initiatives that reduced our cloud costs by around 15%. I also built a utility to collect logs for deleted Auto Scaling Groups, simplifying the troubleshooting process, Implemented automation of manual processes using scripting and AWS native services to improve operational efficiency and reduce human error.
            <br /><br />
            My work has included migrating workloads from an on-premise data center to AWS, integrating a third-party firewall into the cloud architecture, and onboarding new customers into the AWS landing zone.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl text-left">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">Python Developer Intern - Syngenta (Aug 2022 - Feb 2023)</h3>
          <p className="text-gray-600">
            Worked on MLOps workflows as a Python developer. During my time there, I focused on building automation scripts and pipelines to streamline model training and deployment. This experience sparked my interest in cloud-native tools and DevOps practices, setting the foundation for my current career in cloud engineering.
          </p>
        </div>

      </div>
    </section>
  );
}
