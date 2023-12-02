import Image from "next/image";

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const URLlink = data.properties.URL.url
    const text = data.properties.Text.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select

    return(
        <div className="project-card">

            <Image
                className="rounded-t-xl"
                src ={imgSrc}
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="none"
                quality={100}
            />
            <div className="p-4 flex flex-col w-full">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{text}</h3>
                <a href={URLlink}>주소 바로가기</a>

                <div className="flex items-start mt-2">
                    {tags.map((aTag) =>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>

            </div>
    
        </div>
    )
}