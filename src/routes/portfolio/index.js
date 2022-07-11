
import { basename } from 'path'

export async function get(req) {
    const items = import.meta.globEager('./*.svx')
    const projets = Object.entries(items).map(([filepath, module]) => {
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
        body: { projets },
    }
}