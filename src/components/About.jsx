export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
      <div className="text-center lg:text-left max-w-2xl">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
          Hello, I’m <br /><span className="text-purple-700">Aniket Gaikwad</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          A passionate AWS Cloud Engineer & DevOps enthusiast based in India. I design and implement robust, scalable, and automated cloud solutions using tools like AWS, Terraform, and Kubernetes.
        </p>
        <div className="flex justify-center lg:justify-start gap-10 mb-10">
          <div>
            <h3 className="text-4xl font-bold text-purple-700">3+Y</h3>
            <p className="text-sm text-gray-500">Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">20+</h3>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">20+</h3>
            <p className="text-sm text-gray-500">Infrastructure Automations</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={import.meta.env.BASE_URL + 'profile.jpge'}
          alt="Aniket Gaikwad"
          className="rounded-3xl w-80 shadow-xl border border-gray-200"
        />
      </div>
    </section>
  );
}
