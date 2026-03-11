import { notFound } from "next/navigation"
import Link from "next/link"
import { getProjectBySlug, getAllProjects } from "@/app/projects/utils"
import { ImageCarousel } from "@/app/projects/_components/image-carousel"
import { ScrollToTopButton } from "@/app/projects/_components/scroll-to-top-button"

interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const projects = getAllProjects()
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} | My Portfolio`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background">
            <article className="mx-auto max-w-2xl px-6">
                <header className="mb-12">
                    <Link
                        href="/projects"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to projects
                    </Link>

                    <time className="mt-8 block text-sm text-muted-foreground">
                        {project.date}
                    </time>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                        {project.title}
                    </h1>

                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mt-8">
                        <ImageCarousel
                            images={project.images}
                            alt={project.title}
                        />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="border-t border-border pt-8">
                    <div className="prose prose-neutral max-w-none">
                        {project.content.split("\n\n").map((paragraph, index) => (
                            <p
                                key={index}
                                className="mb-4 text-foreground leading-relaxed whitespace-pre-line"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <footer className="mt-16 pt-8 border-t border-border">
                    <ScrollToTopButton />
                </footer>
            </article>
        </main>
    )
}
