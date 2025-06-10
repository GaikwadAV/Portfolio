export default function Education() {
  return (
    <section className="py-20 px-4 bg-white flex justify-center">
      <div className="bg-gray-50 rounded-3xl shadow-xl p-10 flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
      <img
  src={import.meta.env.BASE_URL + 'Amazon_Web_Services_Logo.svg.png'}
  alt="Ganesh Bhange"
  className="w-64 rounded-xl bg-transparent border-none shadow-none"
/>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">AWS Certified Cloud & DevOps Specialist</h2>
          <p className="text-gray-600 mb-6">
            I’m an AWS Cloud Engineer with a B.Tech in Information Technology from VIIT, Pune. I have hands-on experience with AWS, Terraform, Jenkins, Kubernetes, scripting, Python, and Linux. A tech enthusiast with a passion for cloud and automation, I'm also a trained classical music vocalist, blending technical expertise with creativity.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
          <a href="https://github.com/Ganesh-14389/" target="_blank" rel="noopener noreferrer">
  <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-90 transition">
    My Projects
  </button>
</a>

<a href="/Ganesh_L_Bhange.pdf" download>
  <button className="bg-white border border-purple-600 text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-purple-600 hover:text-white transition">
    Download CV
  </button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
}