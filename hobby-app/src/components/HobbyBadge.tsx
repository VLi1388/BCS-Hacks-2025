import { cn } from "./../lib/utils";

type HobbyBadgeProps = {
  hobby: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

const HobbyBadge = ({
  hobby,
  active = false,
  onClick,
  className,
}: HobbyBadgeProps) => {
  const colorMap: Record<string, string> = {
    Gaming: "bg-game-blue",
    Hiking: "bg-game-green",
    Cooking: "bg-game-orange",
    Art: "bg-game-purple",
    Music: "bg-game-pink",
    Reading: "bg-game-yellow",
    Sports: "bg-game-red",
  };

  const defaultColor = "bg-game-blue";
  const bgColor = colorMap[hobby] || defaultColor;

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 text-xs font-pixel text-white transition-all",
        active
          ? `${bgColor} pixel-borders`
          : "bg-gray-200 border-2 border-gray-400",
        "hover:translate-y-[1px]",
        className
      )}
    >
      {hobby}
    </button>
  );
};

export default HobbyBadge;
