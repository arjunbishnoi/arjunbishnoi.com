export const useActiveSection = () => {
    const stuckSections = useState<string[]>('stuckSections', () => [])

    const activeSection = computed(() => {
        return stuckSections.value.length > 0 ? stuckSections.value[stuckSections.value.length - 1] : ''
    })

    const setSectionStuck = (section: string, isStuck: boolean) => {
        if (isStuck) {
            if (!stuckSections.value.includes(section)) {
                stuckSections.value.push(section)
            }
        } else {
            stuckSections.value = stuckSections.value.filter(s => s !== section)
        }
    }

    return {
        activeSection,
        setSectionStuck
    }
}
