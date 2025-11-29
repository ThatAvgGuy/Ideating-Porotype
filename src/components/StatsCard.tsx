interface StatsCardProps {
  text: string;
}

export default function StatsCard({ text }: StatsCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 text-center">
      <p className="text-base md:text-lg text-foreground leading-relaxed">{text}</p>
    </div>
  );
}
