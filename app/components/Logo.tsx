export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 216 261" role="img" aria-label="Repertoires" className={className}>
      <rect y="153" width="90" height="108" rx="20" ry="20" fill="#006AB4" />
      <path
        fill="#D9342B"
        d="M149.54,0H20C8.95,0,0,8.95,0,20v95c0,11.05,8.95,20,20,20h129.54c36.71,0,66.46-29.76,66.46-66.46v-2.08C216,29.76,186.24,0,149.54,0Z"
      />
      <path
        fill="#CB8A00"
        d="M127.09,153h0c-10.54,0-19.09,8.55-19.09,19.09v68.91c0,11.05,8.95,20,20,20h66.72c17.82,0,26.74-21.54,14.14-34.14l-68.27-68.27c-3.58-3.58-8.44-5.59-13.5-5.59Z"
      />
    </svg>
  );
}