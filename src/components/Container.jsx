export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-screen-2xl px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
