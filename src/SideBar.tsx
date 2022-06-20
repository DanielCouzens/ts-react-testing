export const Sidebar = ({
  items,
}: {
  items: {
    name: string;
    href: string;
  }[];
}) => (
  <div role="contentinfo">
    {items.map((item) => (
      <div key={item.href}>
        <a role="navigation" href={item.href}>
          {item.name}
        </a>
      </div>
    ))}
  </div>
);
