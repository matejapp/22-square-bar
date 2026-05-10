// Short orange accent rule for visual separation between sections
export default function SectionDivider({ className = "" }) {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <hr className="section-divider" />
    </div>
  );
}
