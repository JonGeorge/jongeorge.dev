export function Separator({...props}: { label: string, className?: string }) {
    return (
        <>
            <div id={props.label.replaceAll(" ", "_").toLowerCase()} className="w-full my-16 md:my-24 text-center">
                <h1 className={"text-4xl text-gray-900 dark:text-gray-100 " + props.className}>{props.label}</h1>
            </div>
        </>
    )
}