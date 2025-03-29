import {Container} from "@/components/Container";

export default function Principles() {
    return (
        <>
            <Container className="my-28">

                <div className="flex flex-col mt-40 mb-8 items-center">
                    <h1 className="text-4xl mb-2">Guiding Principals</h1>
                </div>

                    <h1 className="text-2xl font-bold ">
                        Don&#39;t mop the ocean
                    </h1>
                    <p className="text-lg mb-8 mt-4">It&#39;s easy to get lost in the details, chasing perfection where it isn&#39;t needed.  &#34;Don&#39;t mop the ocean&#34; means focusing your energy on the problems that truly matter and have the biggest impact.  Instead of endless tweaking, prioritize delivering
                        value and solving real user needs first. Sometimes, a good enough solution, delivered quickly, is far more valuable than a flawless one that never sees the light of day.</p>

                <h1 className="text-2xl font-bold ">
                    Make it work, then make it neat
                </h1>
                <p className="text-lg mb-8 mt-4">Functionality is the foundation. &#34;Make it work then make it neat&#34; is a reminder to prioritize core functionality and get a working solution in users’ hands quickly. Polish and refinement are important, but they come after proving the concept
                    and gathering feedback. Don&#39;t let the pursuit of beauty delay delivering a valuable tool.</p>

                <h1 className="text-2xl font-bold ">
                    Create momentum, sprint sparingly
                </h1>
                <p className="text-lg mb-8 mt-4">Progress is a marathon, not a series of frantic bursts. &#34;Build momentum, sprint sparingly&#34; encourages a sustainable pace with consistent progress. While focused bursts of effort have their place, long-term success demands a rhythm of steady
                    advancement, avoiding burnout and maintaining a consistent flow of value.</p>

                <h1 className="text-2xl font-bold ">
                    Build today with tomorrow in mind
                </h1>
                <p className="text-lg mb-8 mt-4">Technology evolves constantly, and short-sighted solutions can quickly become roadblocks. &#34;Build today with tomorrow in mind&#34; means designing for scalability, maintainability, and future adaptability. I strive to create a solid base that can
                    grow and change with evolving needs – ensuring the work remains valuable for the long haul.</p>

                <h1 className="text-2xl font-bold ">
                    Keep it simple
                </h1>
                <p className="text-lg mb-8 mt-4">Complexity breeds confusion and slows everything down. &#34;Keep it simple&#34; is my commitment to clear code, intuitive design, and streamlined processes. I aim for solutions that are easy to understand, maintain, and adapt, because the
                    most powerful tools are often the simplest to use.</p>
            </Container>
        </>
    );
}