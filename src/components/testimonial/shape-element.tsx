import { Testimonial } from "@/types/testimonial"

// Custom shape component
const ShapeElement = ({
    shape,
    color,
    className,
}: { shape: Testimonial["shape"]; color: string; className?: string }) => {
    switch (shape) {
        case "circle":
            return <div className={`rounded-full ${className}`} style={{ background: color }} />
        case "square":
            return <div className={`rounded-lg ${className}`} style={{ background: color }} />
        case "triangle":
            return (
                <div className={`${className} relative`}>
                    <div
                        style={{
                            width: "0",
                            height: "0",
                            borderLeft: "25px solid transparent",
                            borderRight: "25px solid transparent",
                            borderBottom: `50px solid ${color}`,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            )
        case "hexagon":
            return (
                <div className={`${className} relative`}>
                    <div
                        style={{
                            width: "50px",
                            height: "30px",
                            background: color,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        }}
                    />
                </div>
            )
        case "wave":
            return (
                <div className={`${className} relative overflow-hidden`}>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "0",
                            right: "0",
                            height: "20px",
                            background: color,
                            transform: "translateY(-50%)",
                            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "50%",
                            left: "0",
                            right: "0",
                            height: "20px",
                            background: color,
                            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
                        }}
                    />
                </div>
            )
        default:
            return <div className={className} style={{ background: color }} />
    }
}

export default ShapeElement;