
import { basename } from 'path'

export async function get(req) {
    const articles = import.meta.globEager('./*.svx')
    const posts = Object.entries(articles).map(([filepath, module]) => {
        const slug = basename(filepath, '.svx')
        const title = module.metadata.title || null
        const resume = module.metadata.resume || null
        const cover = module.metadata.cover || null
        const creation = module.metadata.creation || null
        return {
            slug,
            title,
            cover,
            resume,
            creation
        }
    }).sort((a,b) => {
        return a.creation - b.creation
    })

    return {
        body: { posts },
    }
}