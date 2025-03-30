type MatchConfirmProps = {
    onConfirm: () => void;
    onCancel: () => void;
  };
  
  const MatchConfirm = ({ onConfirm, onCancel }: MatchConfirmProps) => {
    return (
      <div className="px-6 py-3 w-[1130px] flex items-center justify-between border-4 border-black bg-white ">
        {/* Text */}
        <span className="text-black font-semibold text-black">Enter Match?</span>
  
          <button
            onClick={onConfirm}
            className="font-pixel bg-game-green text-white px-16 py-2 border-4 border-black hover:brightness-105 shadow-pixel"
          >
            Yes
          </button>

          <button
            onClick={onCancel}
            className="font-pixel bg-game-red text-white px-16 py-2 border-4 border-black hover:brightness-105 shadow-pixel"
          >
            No
          </button>

      </div>
    );
  };
  
  export default MatchConfirm;