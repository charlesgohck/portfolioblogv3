import { Metadata } from "next";

function getNumYearsWorkingExperience() {
    const currentDate: Date = new Date();
    const startOfWorkDate: Date = new Date("2020-10-05");
    const timeDifference: number = currentDate.getTime() - startOfWorkDate.getTime()  ;
    const millisecondsPerYear: number = 1000 * 60 * 60 * 24 * 365.25;
    const yearsSince: number = timeDifference / millisecondsPerYear;
    const roundedYears: number = Math.floor(yearsSince);
    return roundedYears;
}

export const metadata: Metadata = {
    title: 'Charles Goh: Blog',
    description: 'Charles Goh: Blog'
}

export default function Home() {
    function rgba(arg0: number, arg1: number, arg2: number, arg3: number): import("csstype").Property.BackgroundColor | undefined {
        throw new Error('Function not implemented.')
    }

    return (
        <main>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="hero bg-base-200 my-hero" style={{ height: "80vh" }}></div>
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
                    <i className="fa-solid fa-lightbulb fa-5x"></i>
                    <p className="text-primary"><strong>Innovation</strong></p>
                    <p>Working with various teams to contribute to innovation both in Singapore and worldwide for the organization through co-authoring and implementing technology intellectual property.</p>
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
                        <div className="timeline-end timeline-box">Master of Business Administration</div>
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
                <div className="three-element-individual">
                    <i className="fa-solid fa-briefcase fa-5x"></i>
                    <p className="text-primary"><strong>Master of Business Administration</strong></p>
                    <p className="text-tertiary"><strong>Univerisity of Illinois-Urbana Champaign</strong></p>
                    <p>Tentative Focus Areas: Global Challenges in Business, Entrepreneurship and Strategic Innovation</p>
                </div>
            </div>
        </main>
    )
}
