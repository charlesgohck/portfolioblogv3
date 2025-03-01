import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Charles Goh: Home',
    description: 'Charles Goh: Home'
}

export default function Home() {
    return (
        <main>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <section className="relative min-h-screen flex flex-col justify-center items-center px-4">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-800">
                    Charles Goh C.K
                </h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                    Solving problems in systems and software.
                </p>
                <div className="mt-8">
                    <Link className="px-8 py-4 btn btn-primary font-medium rounded-full shadow hover:shadow-lg transition" href={"/blog"}>
                        Blog
                    </Link>
                </div>
            </section>
            <div style={{ padding: "5vh", display: "flex", "justifyContent": "center", flexWrap: "wrap" }} className="bg-base-300">
                <h2 style={{ textAlign: "center", paddingBottom: "5vh", width: "100%" }} className="text-primary"><strong>Software Engineering @ Visa</strong></h2>
            </div>
            <div className="three-element-container bg-base-300" style={{ paddingBottom: "5vh" }} >
                <div className="three-element-individual">
                    <i className="fa-solid fa-code fa-5x"></i>
                    <p className="text-primary"><strong>Full-Stack Development</strong></p>
                    <p>Working with cross-functional infrastructure reliability engineering personnel to bring infrastructure automations to the frontend via web applications and application programming interfaces (APIs).</p>
                </div>
                <div className="three-element-individual">
                    <i className="fa-solid fa-server fa-5x"></i>
                    <p className="text-primary"><strong>Cloud Administration</strong></p>
                    <p>Leveraging on open source, industry standard, and proprietary cloud tools and automations to streamline deployment and continuous integration/continuous delivery (CI/CD) pipelines for application projects.</p>
                </div>
                <div className="three-element-individual">
                    <i className="fa-solid fa-robot fa-5x"></i>
                    <p className="text-primary"><strong>AI Operations</strong></p>
                    <p>Collaborating with a cross-functional team of Software, DevOps, and AI Engineers to leverage on the power of Artificial Intelligence to empower operations and infrastructure in the organization.</p>
                </div>
            </div>
            <div style={{ padding: "5vh", display: "flex", "justifyContent": "center", flexWrap: "wrap" }}>
                <h2 style={{ textAlign: "center", paddingBottom: "5vh", width: "100%" }} className="text-primary"><strong>Education</strong></h2>
                <ul className="timeline timeline-vertical lg:timeline-horizontal">
                    <li>
                        <div className="timeline-start">2020</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box">Bachelor of Computing</div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-start">2024</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box">Master of Science</div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-start">Present</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="three-element-container" style={{ paddingBottom: "5vh" }}>
                <div className="three-element-individual">
                    <i className="fa-solid fa-computer fa-5x"></i>
                    <p className="text-primary"><strong>Bachelor of Computing</strong></p>
                    <p className="text-tertiary"><strong>National University of Singapore</strong></p>
                    <p>Computer Science Major with Database Systems Specialization and Business Management Minor (Distinction Honours)</p>
                </div>
                <div className="three-element-individual">
                    <i className="fa-solid fa-server fa-5x"></i>
                    <p className="text-primary"><strong>Master of Science</strong></p>
                    <p className="text-tertiary"><strong>Georgia Institute of Technology</strong></p>
                    <p>Computer Science Major with Interactive Intelligence Specialization</p>
                </div>
            </div>
        </main>
    )
}
