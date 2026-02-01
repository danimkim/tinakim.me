import Image from "next/image"
import Link from "next/link"
import { Project } from "../_lib/data"


interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="group block">
            <article className="h-full border border-border overflow-hidden transition-colors hover:bg-muted">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-6">
                    <time className="text-sm text-muted-foreground">{project.date}</time>
                    <h2 className="mt-2 text-xl font-medium text-foreground group-hover:underline">
                        {project.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    )
}
