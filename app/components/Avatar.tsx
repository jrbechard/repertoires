type Props = { className?: string };

export default function Avatar({ className = "" }: Props) {
    return (
        <span
            className={`flex shrink-0 items-center justify-center rounded-full font-semibold ${className}`}
        >
            JR
        </span>
    );
}