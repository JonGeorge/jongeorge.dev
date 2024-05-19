import {attributes as atoAttributes} from "$lib/content/FISMA ATO Streamlining Tool.md";
import {attributes as ouoAttributes} from "$lib/content/Official Use Only Labels.md";
import {attributes as covidAttributes} from "$lib/content/NIH COVID-19 Biorepository.md";

export async function load() {
    // Loop through .md files and get titles
    // This may not work if we want to include descriptions

    // const projectFiles = import.meta.glob("$lib/content/*.md");
    // const titles: string[] = [];
    // for(const filePath in projectFiles) {
    //
    //     const pathArray = filePath.split("/");
    //     const fileName: string = pathArray[pathArray.length - 1];
    //     const title = fileName.split(".")[0];
    //     titles.push(title);
    //
    // }
    // return {titles};

    const projectSummaries = [
        covidAttributes,
        atoAttributes,
        ouoAttributes,
    ];
    return {projectSummaries};

}