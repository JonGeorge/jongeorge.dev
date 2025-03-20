export function Separator({...props}: { label: string }) {
    return (
        <>
            <div id={props.label.replaceAll(" ", "_").toLowerCase()} className="w-full my-16 md:my-24 text-center">
                <h1 className="text-4xl">{props.label}</h1>
            </div>
        </>
    )
}