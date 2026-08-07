export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-16 2xl:px-[300px] ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
}
