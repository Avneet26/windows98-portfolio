export default function MyExperience() {
    return (
        <div>
            {/* Experience Section */}
            <section
                id="experience"
                className="experience-section"
            >
                <div className="exp-container">
                    <h2 className="exp-title">Experience</h2>

                    <hr className="windows-border" />
                    {/* Item: Bizdata */}
                    <article className="exp-card">
                        <header className="exp-header">
                            <div>
                                <h5 className="exp-company"><strong>Bizdata · Remote, India</strong></h5>
                                <p className="exp-role">Software Developer (Full Stack) — Intern</p>
                            </div>
                            <time className="exp-dates">Month YYYY – Month YYYY</time>
                        </header>

                        <p className="exp-summary">Built data-integration intake forms to collect client requirements for multi–data warehouse pipelines.</p>

                        <ul className="exp-bullets">
                            <li>Designed multi-step client intake forms capturing connection, auth, schema, and scheduling details.</li>
                            <li>Implemented client/server validation, secure credential handling, and audit logging.</li>
                            <li>Developed PHP handlers and MySQL persistence on Apache/Linux; dynamic JS logic for conditional fields.</li>
                            <li>Collaborated with integration engineers to standardize metadata and reduce kickoff time.</li>
                        </ul>

                        <p><strong>Tech Stack</strong></p>
                        <div className="exp-tech">
                            <span>PHP, MySQL, JavaScript, Apache, Linux</span>
                        </div>

                        {/* Optional: link to NDA-safe demo or case study */}
                        {/* <a className="exp-link" href="#" target="_blank" rel="noopener">Case Study</a> */}
                    </article>

                    <hr className="windows-border" />

                    {/* Item: Optiphoenix */}
                    <article className="exp-card">
                        <header className="exp-header">
                            <div>
                                <h5 className="exp-company"><strong>Optiphoenix · Delhi, India</strong></h5>
                                <p className="exp-role">Frontend Developer (CRO)</p>
                            </div>
                            <time className="exp-dates">Month YYYY – Month YYYY</time>
                        </header>

                        <p className="exp-summary">Built UI components and shipped A/B tests across enterprise experimentation platforms for high-traffic brands.</p>

                        <ul className="exp-bullets">
                            <li>Developed reusable components and variants for A/B and multivariate tests (HTML/CSS/JS, React).</li>
                            <li>Deployed experiments on Adobe Target, Optimizely, and Google Optimize with anti-flicker patterns and QA.</li>
                            <li>Partnered with analytics on events, guardrails, and success metrics.</li>
                            <li>Shipped 250+ tests across Microsoft, Xbox, Minecraft, Toyota, Fairmont/Accor, Samsung, and more.</li>
                        </ul>

                        <p><strong>Tech Stack</strong></p>
                        <div className="exp-tech">
                            <span>HTML, CSS, JavaScript, React, </span>
                            <span>Adobe Target, Optimizely, Google Optimize</span>
                        </div>

                        {/* <a className="exp-link" href="#" target="_blank" rel="noopener">Selected Experiments</a> */}
                    </article>

                    <hr className="windows-border" />

                    {/* Item: RPS Composites */}
                    <article className="exp-card">
                        <header className="exp-header">
                            <div>
                                <h5 className="exp-company"><strong>RPS Composites · Maple, ON, Canada</strong></h5>
                                <p className="exp-role">Full Stack Developer</p>
                            </div>
                            <time className="exp-dates">Month YYYY – Month YYYY</time>
                        </header>

                        <p className="exp-summary">Built business apps on Microsoft Power Platform and integrated multiple data sources to streamline workflows.</p>

                        <ul className="exp-bullets">
                            <li>Created canvas/model-driven Power Apps for requests, approvals, and tracking.</li>
                            <li>Integrated Dataverse/SharePoint/SQL; automated flows with Power Automate.</li>
                            <li>Implemented role-based access, validation, audit logs, and KPI dashboards.</li>
                            <li>Optimized the corporate website for performance and content updates.</li>
                        </ul>

                        <p><strong>Tech Stack</strong></p>
                        <div className="exp-tech">
                            <span>Power Apps, Power Automate, Dataverse, SharePoint, SQL, </span>
                            <span>HTML, CSS, JavaScript</span>
                        </div>

                        {/* <a className="exp-link" href="#" target="_blank" rel="noopener">Process Overview</a> */}
                    </article>

                    <hr className="windows-border" />

                    {/* Item: Freelance */}
                    <article className="exp-card">
                        <header className="exp-header">
                            <div>
                                <h5 className="exp-company"><strong>Remote · Canada / India</strong></h5>
                                <p className="exp-role">Frontend / CRO & Full‑Stack Freelance</p>
                            </div>
                            <time className="exp-dates">Month YYYY – Present</time>
                        </header>

                        <p className="exp-summary">Delivered CRO experiments, full-site builds, and marketing assets for agencies and Canadian businesses.</p>

                        <ul className="exp-bullets">
                            <li>Blue Bagels (CRO): built A/B tests and UI components; integrated analytics; ensured zero‑FOUC deployments.</li>
                            <li>DeeGee Graphics: full websites and ads for NightRider Tires, Tossit Pizza, Active Coachlines, and more.</li>
                            <li>NightRider Tires: job management site for workshop operations (intake, scheduling, tracking).</li>
                            <li>Tossit Pizza: site plus brochures, menus, banners; managed Google Ads and conversion tracking.</li>
                        </ul>

                        <p><strong>Tech Stack</strong></p>
                        <div className="exp-tech">
                            <span>HTML, CSS, JavaScript, React, </span>
                            <span>WordPress, Next.js, </span>
                            <span>Google Ads, Analytics, </span>
                            <span>Figma, Canva, Adobe</span>
                        </div>

                        {/* <a className="exp-link" href="#" target="_blank" rel="noopener">Project Gallery</a> */}
                    </article>

                    <hr className="windows-border" />
                </div>
            </section>
        </div>
    );
}
