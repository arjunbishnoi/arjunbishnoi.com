import { create } from 'zustand'

interface ActiveSectionState {
    stuckSections: string[]
    activeSection: string
    setSectionStuck: (section: string, isStuck: boolean) => void
}

export const useActiveSection = create<ActiveSectionState>((set) => ({
    stuckSections: [],
    activeSection: '',
    setSectionStuck: (section, isStuck) => set((state) => {

        let newStuckSections = [...state.stuckSections]

        if (isStuck) {
            if (!newStuckSections.includes(section)) {
                newStuckSections.push(section)
            }
        } else {
            newStuckSections = newStuckSections.filter((s) => s !== section)
        }

        const newActive = newStuckSections.length > 0 ? newStuckSections[newStuckSections.length - 1] : ''


        return {
            stuckSections: newStuckSections,
            activeSection: newActive
        }
    }),
}))
