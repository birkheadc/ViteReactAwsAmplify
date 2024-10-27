type PrimaryNavButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

function PrimaryNavButton({
  onClick,
  children,
}: PrimaryNavButtonProps): JSX.Element | null {
  return (
    <button
      className={
        "hocus:text-secondary-100 border-b-2 border-transparent-full hocus:border-secondary-300 text-neutral-50 flex gap-2 items-center"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryNavButton;
