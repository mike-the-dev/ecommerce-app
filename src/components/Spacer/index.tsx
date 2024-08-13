interface SpacerProps {
  y: number;
};

const Spacer: React.FC<SpacerProps> = (props): React.ReactElement => {
  return (
    <div className="w-full" style={{ height: props.y }}></div>
  );
};

export default Spacer;