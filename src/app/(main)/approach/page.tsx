import {Container} from "@/components/Container";
import {JonsRoleImage} from "@/components/Icons";

export default function Approach() {
    return (
        <>
            <Container className="my-28">

                <div className="content-center w-full">
                    <Container>
                        <h1 className="text-4xl mb-2 text-center mt-24">
                            My approach
                        </h1>

                        <p className="text-xl mb-2 mt-24">
                            I am passionate about building things that matter. Innovative solutions require more than just
                            technical skill. I&#39;ve always found that the most rewarding projects are those where those where I can
                            not only design and implement a technical solution, but also also guide a team toward a shared vision and
                            ensure it aligns with the bigger picture. <br /><br />

                            This diagram represents my core strengths: technical expertise, strong leadership,
                            and a strategic mindset. It’s about more than just coding; it&#39;s about leadership,
                            understanding the &#39;why,&#39; and delivering value. I&#39;m deeply committed to bridging
                            the gap between innovation and execution in pursuit of one day changing the world.

                        </p>

                        <JonsRoleImage
                            className="w-full md:w-[36rem] xl:w-[42rem] mx-auto mb-8"/>
                    </Container>
                </div>

            </Container>
        </>
    );
}