export default function Experience() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl text-left">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">Cloud Engineer - Lentra (Aug 2023 - Present)</h3>
          <p className="text-gray-600">
            I'm currently working as a Cloud Engineer at Lentra, where I manage AWS infrastructure using Terraform. I’ve led automation initiatives such as detecting duplicate ASGs, implemented cross-account S3 replication, and securely shared AMIs with customers. I also played a key role in EKS upgrades, resolving production issues, and ensuring DR readiness for clients — all while optimizing deployments through a blue-green strategy.
            <br /><br />
            My work has also involved migrating workloads from on-premises to AWS, integrating third-party firewalls into our cloud architecture, and onboarding new customers into the AWS landing zone.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl text-left">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">Software Engineer - GSLab (Feb 2022 - Nov 2022)</h3>
          <p className="text-gray-600">
            At GS Lab, I gained hands-on experience with Docker and Kubernetes, focusing on containerization and orchestration. I designed and maintained highly available Kubernetes clusters and automated infrastructure provisioning using Terraform. I also handled Linux system administration and wrote shell scripts to streamline routine operations.          </p>
        </div>

      </div>
    </section>
  );
}
