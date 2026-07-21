export default function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="text-[14px] font-bold text-white">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? "#" : item.href;
          return (
            <li key={label}>
              <a
                href={href}
                className="text-[14px] text-white/45 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
