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
    JonsRoleImage
} from '@/components/Icons';
import jonGeorgeImage from '../../../public/images/jongeorge.avif';
import Image from "next/image";
import Link from "next/link";
import {Container} from "@/components/Container";
import AnimatedNumber from "@/components/AnimatedNumber";
import {useState} from "react";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <Container>
            <div
                className="grid grid-rows-[20px_0fr_20px] min-h-screen lg:mt-16 font-[family-name:var(--font-geist-sans)]">
                <main
                    className="flex flex-col gap-8 mb-24 row-start-2 items-center sm:items-start">
                    <div className="flex flex-wrap flex-col lg:flex-row " id="about">

                        <div className="mb-4 lg:hidden">
                            <h1 className="text-2xl font-bold ">
                                Hi, I’m Jon George
                            </h1>
                            <p>Software Engineer & Entrepreneur</p>
                        </div>

                        <Image height="360" width="360" src={jonGeorgeImage}
                               alt="Profile photo"
                               className="rounded-2xl" unoptimized
                               priority/>

                        <div className="flex lg:w-1/2 flex-col lg:pl-7">
                            <h1 className="text-2xl font-bold hidden lg:block">Hi,
                                I’m
                                Jon George</h1>
                            <p className="hidden lg:block">Software Engineer &
                                Entrepreneur</p>
                            <p className="mt-7 lg:max-w-full ">
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
                                  className="lg:w-1/3 md:w-1/2 w-full">
                                <Button className="w-full">
                                    Get in touch
                                </Button>
                            </Link>
                        </div>

                    </div>
                    <Separator label={""}/>

                    <motion.div >
                        <AnimatedNumber value={100}/>
                    </motion.div>

                    {/*<Button onClick={() => setValue(value+10583)}>+100</Button>*/}
                    <Separator label={"Experience"}/>
                    <Separator label={"Accomplishments"}/>

                    <div className="flex flex-wrap gap-7 m-auto max-w-7xl">
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
                    <div className="mb-5"></div>

                    <Separator label={"My role"}/>

                    <JonsRoleImage
                        className="w-full md:w-[36rem] xl:w-[42rem] ml-auto mr-auto mb-20"/>
                    <div className="flex flex-wrap gap-7 m-auto max-w-7xl">
                        <div className="flex flex-col flex-12/12 md:flex-2/12 gap-7">
                            <h2 className="text-2xl font-bold">Diplomatic
                                operations</h2>
                            <p>Most importantly, I believe in treating everyone with
                                respect and navigating situations with tact,
                                consideration, and empathy for all.</p>
                        </div>
                        <div className="flex flex-col flex-12/12 md:flex-2/12 gap-7">
                            <h2 className="text-2xl font-bold">High-stakes
                                delivery</h2>
                            <p>When the stakes are high, the pressure is on, and
                                stakeholders want a high likelihood of success, I
                                provide the expertise and focus needed to deliver
                                results.</p>
                        </div>
                        <div className="flex flex-col flex-12/12 md:flex-2/12 gap-7">
                            <h2 className="text-2xl font-bold">Flexible approach</h2>
                            <p>I read and write code just as well as I strategize,
                                create a deck, and present to the C-Suite. This
                                ability to fill gaps where they are needed is a force
                                for good on any team.</p>
                        </div>

                    </div>

                </main>
            </div>
        </Container>
    );
}
