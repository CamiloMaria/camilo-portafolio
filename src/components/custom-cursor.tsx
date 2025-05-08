"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        const mouseDown = () => setCursorVariant("click")
        const mouseUp = () => setCursorVariant("default")

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === "BUTTON" || target.tagName === "A") {
                setCursorVariant("hover")
            }
        }

        const handleMouseOut = () => {
            setCursorVariant("default")
        }

        window.addEventListener("mousemove", mouseMove)
        window.addEventListener("mousedown", mouseDown)
        window.addEventListener("mouseup", mouseUp)
        document.querySelectorAll("button, a").forEach((el) => {
            if (el instanceof HTMLElement) {
                el.addEventListener("mouseover", handleMouseOver)
                el.addEventListener("mouseout", handleMouseOut)
            }
        })

        return () => {
            window.removeEventListener("mousemove", mouseMove)
            window.removeEventListener("mousedown", mouseDown)
            window.removeEventListener("mouseup", mouseUp)
            document.querySelectorAll("button, a").forEach((el) => {
                if (el instanceof HTMLElement) {
                    el.removeEventListener("mouseover", handleMouseOver)
                    el.removeEventListener("mouseout", handleMouseOut)
                }
            })
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(147, 51, 234, 0.2)",
            border: "2px solid rgba(147, 51, 234, 0.5)",
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            backgroundColor: "rgba(147, 51, 234, 0.1)",
            border: "2px solid rgba(147, 51, 234, 0.8)",
        },
        click: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(147, 51, 234, 0.4)",
            border: "2px solid rgba(147, 51, 234, 1)",
        },
    }

    // Only show custom cursor on desktop
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    if (isMobile) return null

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        />
    )
}
