export function Separator({...props}: { label: string }) {
    return (
        <>
            <div id={props.label.replaceAll(" ", "_").toLowerCase()} className="flex flex-col w-full mt-16 mb-10 items-center">
                <div className="w-1/3 mb-16"></div>
                <h1 className="text-3xl">{props.label}</h1>
            </div>
        </>
    )
}