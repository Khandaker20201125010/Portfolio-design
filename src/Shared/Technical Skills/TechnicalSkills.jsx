const TechnicalSkills = () => {
  return (
    <div className="container mx-auto mt-40  rounded-3xl">
      <h3 className="text-3xl text-center text-green-700 mb-10 rounded-3xl font-bold">
       --- Technical Skills ---
      </h3>
      <div className="overflow-x-auto container mx-auto text-xl">
        <table className="table  mx-auto text-xl rounded-3xl ">
          <tbody className="">
            {/* row 1 */}
            <tr className="hover:bg-green-800">
              <td>
                Programming Languages: Proficient in Python, JavaScript, C++,
                and Java with expertise in object-oriented programming and
                scripting.
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-green-800">
              <td>
                Frameworks and Libraries: Hands-on experience with React.js,
                Node.js, Django, Flask, and TensorFlow for web and AI
                development.
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-green-800">
              <td>
                Tools and Platforms: Skilled in Docker, Kubernetes, Jenkins,
                Swagger API, and Azure DevOps for software deployment, CI/CD
                pipelines, and container orchestration.
              </td>
            </tr>
            {/* row 4 */}
            <tr className="hover:bg-green-800">
              <td>
                Databases: Comprehensive knowledge of MongoDB, MySQL, and
                PostgreSQL for managing structured and unstructured data.
              </td>
            </tr>
            {/* row 5 */}
            <tr className="hover:bg-green-800">
              <td>
                Artificial Intelligence & Machine Learning: Proficient in
                Natural Language Processing (NLP), Data Visualization, and
                building AI models using Python-based libraries such as Pandas,
                NumPy, and Matplotlib.
              </td>
            </tr>
            {/* row 6 */}
            <tr className="hover:bg-green-800">
              <td>
                Version Control: Extensive experience using Git and GitHub for
                source code management and team collaboration.
              </td>
            </tr>
            {/* row 7 */}
            <tr className="hover:bg-green-800">
              <td>
                APIs and Integrations: Skilled in building RESTful APIs,
                integrating third-party services, and designing scalable backend
                systems.
              </td>
            </tr>
            {/* row 8 */}
            <tr className="hover:bg-green-800">
              <td>
                Cloud Computing: Familiar with Microsoft Azure, AWS, and Google
                Cloud for scalable app deployment and infrastructure management.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicalSkills;
