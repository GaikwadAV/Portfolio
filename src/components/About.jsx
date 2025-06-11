export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
      <div className="text-center lg:text-left max-w-2xl">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
          Hello, I’m <br /><span className="text-purple-700">Ganesh Bhange</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          AWS Cloud Engineer & DevOps Enthusiast based in India. I build scalable, automated cloud solutions using AWS, Terraform, Kubernetes, and more.
        </p>
        <div className="flex justify-center lg:justify-start gap-10 mb-10">
          <div>
            <h3 className="text-4xl font-bold text-purple-700">2+Y</h3>
            <p className="text-sm text-gray-500">Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">10+</h3>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">10+</h3>
            <p className="text-sm text-gray-500">Infrastructure Automations</p>
          </div>
        </div>
        <a href="mailto:gbhange18@gmail.com" // <--- REPLACE WITH YOUR ACTUAL EMAIL
  className="bg-purple-700 text-white px-10 py-3 rounded-full font-semibold shadow hover:bg-purple-800 transition inline-block text-center"
>
  Hire Me
</a>
      </div>
      <div>
      <img src={import.meta.env.BASE_URL + 'profile.jpge'} alt="Ganesh Bhange" className="rounded-3xl w-80 shadow-xl border border-gray-200" />
      </div>
    </section>
  );
}