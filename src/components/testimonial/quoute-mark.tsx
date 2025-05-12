const QuoteMark = ({ color, isClosing = false }: { color: string; isClosing?: boolean }) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isClosing ? "rotate(180deg)" : "none" }}
            className={isClosing ? "ml-auto" : ""}
        >
            <path
                d="M12.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V17.5C5 16.837 5.26339 16.2011 5.73223 15.7322C6.20107 15.2634 6.83696 15 7.5 15H12.5C13.163 15 13.7989 15.2634 14.2678 15.7322C14.7366 16.2011 15 16.837 15 17.5V22.5C15 25.5 12.5 30 10 32.5M32.5 25H27.5C26.837 25 26.2011 24.7366 25.7322 24.2678C25.2634 23.7989 25 23.163 25 22.5V17.5C25 16.837 25.2634 16.2011 25.7322 15.7322C26.2011 15.2634 26.837 15 27.5 15H32.5C33.163 15 33.7989 15.2634 34.2678 15.7322C34.7366 16.2011 35 16.837 35 17.5V22.5C35 25.5 32.5 30 30 32.5"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default QuoteMark;