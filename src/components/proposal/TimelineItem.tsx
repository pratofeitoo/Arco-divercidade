interface TimelineItemProps {
  step: string;
  title: string;
  timing: string;
  isLast?: boolean;
}

const TimelineItem = ({ step, title, timing, isLast = false }: TimelineItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-primary/20 min-h-[40px]" />
        )}
      </div>
      <div className="pb-8">
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{timing}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
