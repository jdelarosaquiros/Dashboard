type TPluginStoreLinkButtonProps = {
  onClick: () => void;
  label: string;
};

function PluginStoreLinkButton({ onClick, label }: TPluginStoreLinkButtonProps) {
  return (
    <div
      role="button"
      onClick={onClick}
      className="text-sm text-white/70 hover:text-white/50 dark:text-white/70 dark:hover:text-white/50"
    >
      {label}
    </div>
  );
}

export default PluginStoreLinkButton;
