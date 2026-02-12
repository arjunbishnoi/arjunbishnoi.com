import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from './use-active-section'

export function useStickyObserver(sectionName: string, threshold: number = 45) {
    const ref = useRef<HTMLDivElement>(null)
    const [isStuck, setIsStuck] = useState(false)
    const setSectionStuck = useActiveSection((state) => state.setSectionStuck)

    useEffect(() => {
        const checkStickiness = () => {
            if (!ref.current) return

            const rect = ref.current.getBoundingClientRect()
            const isStuckNow = rect.top <= threshold

            if (isStuckNow !== isStuck) {
                setIsStuck(isStuckNow)
                setSectionStuck(sectionName, isStuckNow)
            }
        }

        window.addEventListener('scroll', checkStickiness, { passive: true })
        checkStickiness()

        return () => {
            window.removeEventListener('scroll', checkStickiness)
            setSectionStuck(sectionName, false)
        }
    }, [sectionName, threshold, isStuck, setSectionStuck])

    return ref
}
