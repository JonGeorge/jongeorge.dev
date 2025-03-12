import { Header} from "@/components/Header";
import { Footer} from "@/components/Footer";

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header/>
            <main className={"flex-auto"}>{children}</main>
            <Footer/>
        </>
    )
}