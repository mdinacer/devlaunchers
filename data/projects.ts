export interface Project {
    id: number
    title: string
    description: string
    type: 'Product' | 'Independent'
    positions: string[]
    commitment: number
}

export const ProjectTypes = ['Ideas', 'Projects', 'Products']

const Projects: Project[] = [
    {
        id: 1,
        title: 'Thought Process',
        description: 'An online, community based idea or problem solving tool',
        type: 'Product',
        positions: ['Developer', 'Digital Artist', 'UX/UI'],
        commitment: 5,
    },
    {
        id: 2,
        title: 'Ergonomic digits',
        description:
            'Create an ergonomic layout for mobile screens with the goal of minimizing thumb movements',
        type: 'Independent',
        positions: ['React Developer', 'Digital Artist', 'UX/UI'],
        commitment: 3,
    },
    {
        id: 3,
        title: 'Dev Mentors',
        description:
            'Connecting individuals seeking Mentorship, with potential mentors, based on their area of interest',
        type: 'Product',
        positions: ['Developer', 'UX Researcher', 'UX/UI'],
        commitment: 5,
    },
]

export default Projects