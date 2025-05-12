const PatternBackground = ({ index }: { index: number }) => {
    const patterns = [
        "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 8%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 8%)",
        "linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.02) 75%, transparent 75%, transparent)",
        "radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 20%)",
        "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%), linear-gradient(225deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%), linear-gradient(315deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%), linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%)",
        "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.01) 0, rgba(255, 255, 255, 0.01) 1px, transparent 1px, transparent 4px)",
        "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)",
    ]

    return (
        <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
                backgroundImage: patterns[index % patterns.length],
                backgroundSize: index % 2 === 0 ? "30px 30px" : "20px 20px",
            }}
        />
    )
}

export default PatternBackground;