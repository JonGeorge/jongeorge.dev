import Image from "next/image";

export function Card({...props}:{title: string, text: string, icon: string}) {
    return (
        <>
            <div className="flex flex-col lg:flex-1/4 md:flex-4/12 flex-12/12 border-1 rounded-lg p-6 w-1/3 gap-6">
                <Image height="25" width="27" src={props.icon} alt="Icon"/>
                <h2 className="font-bold">{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </>
    )
}