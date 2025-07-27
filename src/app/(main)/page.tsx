'use client'

import {Button} from "@/components/Button";
import {Separator} from "@/components/Separator";
import {Card} from "@/components/Card";

import {
    RobotIcon,
    ServiceIcon,
    RocketIcon,
    DataIcon,
    ArrowTrendUpIcon,
    HeadsetIcon,
} from '@/components/Icons';
import jonGeorgeImage from '../../../public/images/jongeorge.avif';
import Image from "next/image";
import Link from "next/link";
import {Container} from "@/components/Container";
import AnimatedNumber from "@/components/AnimatedNumber";
import CACILogo from "@/app/public/CACI_International_logo.svg";
import HowardCountyLogo from "@/app/public/howard county md logo.svg";
import ICFLogo from "@/app/public/ICF logo.svg";
import NIHLogo from "@/app/public/nih-logo-white.png";
import USSFLogo from "@/app/public/Seal_of_the_United_States_Space_Force.svg";
import USAFLogo
    from "@/app/public/Seal_of_the_United_States_Department_of_the_Air_Force.svg";
import DODLogo
    from "@/app/public/Seal_of_the_United_States_Department_of_Defense.svg";
import INLLogo from "@/app/public/inl3.png";
import TeamLogicLogo from "@/app/public/team-logic-it-1.svg";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_0fr_20px] min-h-screen mt-24 md:mt-56 font-[family-name:var(--font-geist-sans)]">
            <main
                className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Container>
                    <div className="flex flex-wrap flex-col md:flex-row" id="about">

                        <div className="mb-4 md:hidden">
                            <h1 className="text-3xl font-bold ">
                                Hi, I’m Jon George
                            </h1>
                            <p>Software Engineer & Entrepreneur</p>
                        </div>

                        <div className="md:grid md:grid-cols-[360px_auto]">
                            <Image height="360" width="360" src={jonGeorgeImage}
                                   alt="Profile photo"
                                   className="rounded-2xl h-[360px]" unoptimized
                                   priority/>

                            <div className="flex md:w-full flex-col md:pl-7">
                                <h1 className="text-4xl mb-2 hidden md:block">Hi,
                                    I’m
                                    Jon George
                                </h1>
                                <p className="hidden text-lg md:block">Software Engineer
                                    &
                                    Entrepreneur</p>
                                <p className="mt-7 text-lg ">
                                    I design and build software products that automate
                                    processes, boost enterprise productivity, and harness
                                    the power of data for decision making.<br/><br/>

                                    From product strategy, to rapid prototyping, to
                                    polished final products, I deliver craftsmanship that
                                    brings ideas to life using a proactive and calculated
                                    approach.<br/><br/>

                                    If you believe we’d work well together, let’s
                                    connect!<br/><br/>
                                </p>

                                <Link href="https://www.linkedin.com/in/jon-georgex/"
                                      target="_blank" rel="noopener noreferrer"
                                      className="md:w-1/3 md:w-1/2 w-full">
                                    <Button className="w-full">
                                        <span className="text-lg">Get in touch</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="flex flex-col mt-40 mb-8 items-center">
                        <h1 className="text-4xl mb-2">Driven by results and outcomes</h1>
                    </div>

                    <div className="flex flex-col md:flex-row w-full mx-auto mb-24">
                        <AnimatedNumber targetValue={332}
                                        description="automation scripts written"/>
                        <AnimatedNumber targetValue={14}
                                        description="enterprise applications delivered"/>
                        <AnimatedNumber prefix="$" targetValue={9} suffix="M"
                                        description="saved across all customers"/>
                        <AnimatedNumber targetValue={6}
                                        description="government agencies served"/>
                    </div>


                    <div id="impact" className="flex flex-col w-full lg:mt-48 mb-16 sm:items-center">
                        <h1 className="text-4xl mb-2">Measurable, <span
                            className="whitespace-nowrap">real-world impact</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-7 m-auto max-w-7xl mb-24 lg:mb-48">
                        <Card title="Workflow Automation"
                              text="Saved a customer 15,000+ hours of manual work per year by introducing automated business rules."
                              icon={RobotIcon}/>
                        <Card title="Service Engineering"
                              text="Streamlined access to 1,000+ state and local government services for 330k users."
                              icon={ServiceIcon}/>
                        <Card title="Digital Transformation"
                              text="Migrated 150+ users from a failing Microsoft Access database and shared spreadsheets to a robust and modern reporting system."
                              icon={RocketIcon}/>
                        <Card title="Data Management"
                              text="Tracked metrics, automated approvals, and displayed dashboard insights for scientific research of 1M+ specimens."
                              icon={DataIcon}/>
                        <Card title="Process Optimization"
                              text="Reduced cybersecurity processing time by 82% for systems categorized as low risk."
                              icon={ArrowTrendUpIcon}/>
                        <Card title="Case Management"
                              text="Built and supported an integrated system that allows 100+ employees to work 5M+ cases."
                              icon={HeadsetIcon}/>
                    </div>
                </Container>

                <div className="bg-neutral-900 w-full">
                    <Container>
                        <Separator label={"The teams I have supported"}/>
                        <div className="grid grid-cols-3 gap-16 items-center mb-24">
                            <Image src={ICFLogo} alt="ICF logo" width="90"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={CACILogo} alt="CACI logo" width="120"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={TeamLogicLogo} alt="TeamlogicIT logo"
                                   width="130"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={NIHLogo} alt="NIH logo"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={HowardCountyLogo} alt="Howard County logo"
                                   width="300"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={INLLogo} alt="INL logo" width="300"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={DODLogo} alt="DOD seal" width="200"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={USAFLogo} alt="USAF seal" width="200"
                                   className="sm:mx-auto" unoptimized/>
                            <Image src={USSFLogo} alt="USSF seal" width="200"
                                   className="sm:mx-auto" unoptimized/>
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className="flex flex-wrap gap-7 m-auto my-24 lg:my-48">
                        <div className="flex flex-col flex-12/12 md:flex-2/12 gap-5">
                            <h2 className="text-2xl font-bold">Empathetic</h2>
                            <p className="text-lg">We are all human. I believe in
                                treating everyone with respect and navigating situations with tact,
                                consideration, and empathy for all.</p>
                        </div>
                        <div className="flex flex-col flex-12/12 md:flex-2/12 gap-5">
                            <h2 className="text-2xl font-bold">Focused</h2>
                            <p className="text-lg">When the stakes are high, the
                                pressure is on, and
                                stakeholders want a high likelihood of success, I
                                provide the expertise and focus needed to deliver
                                results.</p>
                        </div>
                        <div className="flex flex-col flex-12/12 md:flex-2/12 gap-5">
                            <h2 className="text-2xl font-bold">Adaptable</h2>
                            <p className="text-lg">I read and write code just as well
                                as I strategize,
                                create a deck, and present to the C-Suite. This
                                ability to fill gaps where they are needed is a force
                                for good on any team.</p>
                        </div>
                    </div>
                </Container>

            </main>
        </div>
    );
}
