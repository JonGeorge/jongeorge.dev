'use client'

import {useActiveSection} from '@/hooks/useActiveSection'
import {LeftColumn} from '@/components/LeftColumn'
import {Section} from '@/components/Section'
import {ProjectCard} from '@/components/ProjectCard'
import {WritingItem} from '@/components/WritingItem'
import Image from 'next/image'
import type {SectionId} from '@/types'

import softwareDBScreenshot from '../../public/images/SoftwareDB Screenshot.png'
import savePlaylistScreenshot from '../../public/images/Save a playlist Screeshot.png'
import explodexScreenshot from '../../public/images/ExplodexAi Screenshot.png'
import devplerScreenshot from '../../public/images/Devpler Screenshot.png'
import nihCovidScreenshot from '../../public/images/NIH COVID Biorepository app.png'
import jonGeorgePhoto from '../../public/images/jongeorge.avif'

const SECTION_IDS: SectionId[] = ['now', 'about', 'projects', 'writing']

export default function Home() {
    const activeSection = useActiveSection(SECTION_IDS)

    const leftColumnPhoto = (
        <Image
            src={jonGeorgePhoto}
            alt="Jon George"
            width={310}
            height={310}
            className="rounded-full border-2 border-[var(--color-accent)]/20 shadow-sm"
            unoptimized
            priority
        />
    )


    return (
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-24">
            <div className="md:flex md:gap-12 lg:gap-24">
                <LeftColumn activeSection={activeSection} photo={leftColumnPhoto}/>

                <main className="md:w-[55%] lg:w-[60%] md:py-24">
                    {/* Now */}
                    <Section id="now" title="Now" first>
                        <div className="text-[var(--color-text-muted)] text-lg leading-relaxed space-y-4">
                            <p>
                                Building out the software tool database for{" "}
                                <a href={"https://softwaredb.com/"}
                                   target="_blank" rel="noopener noreferrer"
                                   className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors underline underline-offset-4 decoration-[var(--color-accent)]/30"
                                >SoftwareDB
                                </a>.
                                This is the foundation everything else sits on — before anyone can log their stack or
                                rate their tools, the catalog needs to be comprehensive and accurate. Right now that
                                means researching categories, normalizing naming across vendors, and figuring out the
                                right level of granularity (do Slack and Discord belong in the same category, or not?).
                            </p>
                            <p>
                                Also growing the training dataset for{" "}
                                <a href={"https://explodex.ai/"}
                                   target="_blank" rel="noopener noreferrer"
                                   className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors underline underline-offset-4 decoration-[var(--color-accent)]/30"
                                >Explodex
                                </a>. Turns out high-quality ordnance imagery
                                isn&apos;t easy to come by — nobody&apos;s just sitting on a nicely labeled photo
                                library of bombs. We&apos;re at about 10k images and hitting 97% accuracy on test data,
                                which feels good but I know we have a long way to go.
                            </p>
                            <p>
                                I&apos;m currently reading the Dune series for the first time. Can&apos;t believe this book was
                                written in 1965. And no, I haven&apos;t seen the movies.
                            </p>
                        </div>
                    </Section>

                    {/* About */}
                    <Section id="about" title="About">
                        <div className="text-[var(--color-text-muted)] text-lg leading-relaxed space-y-4">
                            <p>
                                I&apos;m a technical manager and system architect in government tech. My day job is
                                designing large-scale systems on ServiceNow and AWS — the kind that regularly process
                                15+ million records and quietly keep federal agencies running. I lead a team of
                                twenty, but I still design and write code every day.
                            </p>
                            <p>
                                I built internal tools at NIH during the early days of COVID, led engineering on a
                                security tool that cut ATO timelines from three months to two weeks, and was the lead
                                architect on a reusable component library used across dozens of project teams. The
                                balance has shifted toward system design, technical governance, and making sure my
                                people have what they need — but I never stopped building.
                            </p>
                            <p>
                                Outside of work, I&apos;m building SoftwareDB — a platform for tracking your software
                                stack,
                                rating your tools, and seeing what other people are using. I&apos;m building it because
                                I&apos;m
                                genuinely obsessed with software tools. Text editors, terminal emulators, browsers, IDEs
                                — I care about this stuff and there&apos;s no good place to see what people are running
                                and
                                what they&apos;re switching to. The waitlist is open and I&apos;m deep in the MVP.
                            </p>
                            <p>
                                I&apos;m also working on Explodex — AI software that detects and identifies explosives
                                in
                                photos and video. We&apos;ve built a full data pipeline with provenance tracking that
                                feeds
                                into our training data, and the mission is simple: significantly reduce cognitive load
                                for the people who need to defuse bombs when it matters most.
                            </p>
                            <p>
                                I&apos;m based in Maryland. When I&apos;m not at a screen I&apos;m racing cyclocross,
                                running 5Ks and
                                10Ks, or lifting. I recently went keto. I have a Saint Bernard who is not on keto.
                                I&apos;m
                                unreasonably obsessed with cables — ethernet, VGA, every type of USB — because you never
                                know when you&apos;ll need one. And I will die on the hill that ThinkPads are the best
                                laptops ever made, even though I use a MacBook that I&apos;m terrified of scratching.
                            </p>

                            {/*<p>*/}
                            {/*  By day, I&apos;m a technical leader building systems that process*/}
                            {/*  millions of records for government and enterprise clients. By night, I*/}
                            {/*  build products for people like me &mdash; developers who care about*/}
                            {/*  their tools.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*  I&apos;ve spent years thinking about how software gets built at scale.*/}
                            {/*  Now I&apos;m applying that to something smaller and more personal:*/}
                            {/*  helping developers understand their own software stacks.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*  When I&apos;m not building, I&apos;m [placeholder for hobbies/personal*/}
                            {/*  detail].*/}
                            {/*</p>*/}
                        </div>
                    </Section>

                    {/* Projects */}
                    <Section id="projects" title="Projects">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ProjectCard
                                title="SoftwareDB"
                                description="Track your software stack. Rate your tools. See what others are switching to."
                                href="https://softwaredb.com"
                                image={softwareDBScreenshot}
                                tags={['Next.js', 'TypeScript', 'PostgreSQL']}
                                featured
                            />
                            <ProjectCard
                                title="Save A Spotify Playlist"
                                description="Export and backup your Spotify playlists before they disappear. Because Spotify won't do it for you."
                                href="https://saveaplaylist.com"
                                image={savePlaylistScreenshot}
                            />
                            <ProjectCard
                                title="Explodex"
                                description="AI-powered ordnance detection and identification. Computer vision that helps keep people safe."
                                href="https://explodex.ai"
                                image={explodexScreenshot}
                                tags={['AI', 'Computer Vision']}
                            />
                            <ProjectCard
                                title="NIH COVID Biorepository"
                                description="Specimen collection and tracking system built for NIH during the COVID-19 response. Live on cancer.gov."
                                href="https://service.cancer.gov/nih-covid-19-dashboard?xpage=landing_pub"
                                image={nihCovidScreenshot}
                                tags={['ServiceNow', 'AWS']}
                            />
                            <ProjectCard
                                title="Devpler"
                                description="Writing about building software, picking tools, and working through hard problems."
                                href="https://devpler.com"
                                image={devplerScreenshot}
                            />
                        </div>
                    </Section>

                    {/* Writing */}
                    <Section id="writing" title="Writing">
                        <div>
                            <WritingItem
                                title="Coming soon"
                                year="2026"
                                href="https://devpler.com"
                            />
                        </div>
                        <a
                            href="https://devpler.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors font-sans text-sm uppercase tracking-widest"
                        >
                            Read more on the blog &rarr;
                        </a>
                    </Section>

                    <footer
                        className="py-16 text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border)]">
                        <p>&copy; {new Date().getFullYear()} Jon George. All rights reserved.</p>
                    </footer>
                </main>
            </div>
        </div>
    )
}
