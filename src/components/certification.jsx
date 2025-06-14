export default function Certifications() {
    const certs = [
      {
        title: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services (AWS)",
        date: "June 2024",
        link: "https://www.credly.com/badges/7d1109e1-f244-4295-9018-fedb2f386e34/linked_in", // Optional
        logo: "aws.png"
      },
      {
        title: "HashiCorp Certified: Terraform Associate(003)",
        issuer: "HashiCorp",
        date: "April 2024",
        link: "https://www.credly.com/badges/a501c6c3-2bc1-487d-a5de-6acb3cfd4e39/linked_in?t=sod6sk",
        logo: "terraform.png"
      },
      // Add more certs here
    ];
  
    return (
      <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Certifications</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img src={import.meta.env.BASE_URL + cert.logo} alt={cert.title} className="h-12 mb-4" />
              <h3 className="text-xl font-semibold text-purple-700">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-600 mt-2 inline-block hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  