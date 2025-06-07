import img1 from "../assets/FullSizeRender (1).jpeg";
import img2 from "../assets/FullSizeRender (2).jpeg";
import img3 from "../assets/FullSizeRender (3).jpeg";
// import img4 from "../assets/FullSizeRender (4).jpeg";

export default function AboutMe() {
        return (
            <div>
                    <img
                        src={img1}
                        alt="my_picture"
                        height={200}
                        width={200}
                        style={{
                                imageRendering: "auto",
                                float: "left",
                                marginRight: "10px",
                        }}
                        className="windows-border p-1 mb-2"
                    />

                    <p>
                            Hey, I’m <strong>Avneet Singh Virdi</strong>—or just <strong>Avi</strong>, if
                            we’re keeping things casual (which we are). I’m currently living in Canada,
                            studying <strong>Information Technology at Humber College</strong>, and doing
                            my best to juggle academics, side projects, fitness, a love for tech, and the
                            occasional existential crisis.
                    </p>

                    <p>
                            Before this chapter, I was back in <strong>Delhi, India</strong>, where I
                            completed my <strong>Bachelor’s in IT</strong> and started my journey into
                            tech. I didn’t follow a traditional path—I’m a{" "}
                            <strong>self-taught full stack developer</strong>, which basically means a
                            lot of late nights, YouTube rabbit holes, and learning things the hard way.
                            But it worked. I landed my first role as a{" "}
                            <strong>trainee full stack dev</strong>, got my hands dirty with real-world
                            projects, and quickly found myself switching to a company in the{" "}
                            <strong>CRO industry</strong> as a <strong>Frontend Developer</strong>.
                    </p>

                    <p>
                            That’s where things really started clicking. I realized I loved working on
                            interfaces, understanding users, and making the web feel just a little more
                            human. I stayed there for two years, got to{" "}
                            <strong>lead a team of 8–10 developers</strong>, and learned that good
                            leadership isn’t about titles—it’s about listening, trusting, and growing
                            together.
                    </p>

                    <p>
                            My comfort zone is the <strong>MERN stack</strong>, and I speak{" "}
                            <strong>JavaScript</strong> fluently (almost like a second language at this
                            point). I enjoy building <strong>secure APIs</strong>, and I’ve spent enough
                            time with <strong>Java</strong> and <strong>C#</strong> to feel at home, even
                            though I haven’t used them professionally—yet. I’ve also done{" "}
                            <strong>freelance UI/UX work</strong>, because honestly, designing good user
                            experiences is something I genuinely enjoy. There's just something
                            satisfying about clean, intuitive interfaces that <em>feel</em> right.
                    </p>

                    <img
                        src={img2}
                        alt="my_picture2"
                        height={200}
                        width={200}
                        style={{
                                imageRendering: "auto",
                                float: "right",
                                marginLeft: "10px",
                        }}
                        className="windows-border p-1 mb-2"
                    />

                    <p><em>*The Not Important Section*</em></p>

                    <p>
                            Outside of code, I’m just a regular person trying to keep life interesting. I
                            hit the <strong>gym</strong> about five times a week (because my love for
                            food needs balance), I <strong>play guitar</strong> (decently), and I{" "}
                            <strong>sing</strong> like no one’s listening—because usually, no one is. I
                            love <strong>video games</strong>, not just as a hobby, but because the idea
                            of stepping into a different world, even for a little while, is something I
                            find oddly therapeutic. I also dream of <strong>traveling more</strong>, but
                            for now, I mostly travel between my kitchen and my laptop when rent’s due.
                    </p>

                    <p>
                            And yeah—I make <strong>bad jokes</strong>. Not ironically. Not for
                            attention. Just because I like seeing people smile, even if it means I have
                            to pretend it didn’t flop when it does. I’m not the best at making friends
                            quickly, but I care deeply about the people I do connect with. I’m someone
                            who tries. A lot. Even when it’s messy.
                    </p>

                    <p>
                            Sometimes I share little pieces of wisdom I probably should apply to my own
                            life, like this one:
                    </p>

                    <p>
                            <em>
                                    “That life is like a bad joke —sometimes things work out, and sometimes
                                    they don’t. But we have to live, I guess.” - Obviously Avneet
                            </em>
                    </p>

                    <p>
                            That line’s kind of stuck with me. Because it’s true. Whether it’s a broken
                            build or a bad day, we keep going, we learn, and hopefully, we laugh a little
                            too.
                    </p>

                    <img
                        src={img3}
                        alt="my_picture3"
                        height={200}
                        width={200}
                        style={{
                                imageRendering: "auto",
                                float: "left",
                                marginRight: "10px",
                        }}
                        className="windows-border p-1 mb-2"
                    />

                    <p>
                            So yeah, that’s me. I build things, break things, learn things, and keep it
                            all as real as I can. If you’re here just to find a list of tech buzzwords,
                            that’s cool—I can do those too. But if you’re here to understand the kind of
                            person I am: I care about my work, my people, and the small moments in
                            between.
                    </p>

                    <p>
                            <em>
                                    If you happen to like Video Games, The Weeknd, Post Malone, Kanye West,
                                    Coffee, or just sitting alone in peace... hit me up. <br />
                                    We’re probably already friends.
                            </em>
                    </p>

                    <p style={{ float: "left" }}>
                            Thanks for reading all this. Seriously. <br />
                            Please Hire Me
                    </p>
                    <br />
                    <br />
            </div>
        );
}
