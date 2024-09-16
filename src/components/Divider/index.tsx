interface DividerProps {
  y?: number;
  x?: number;
};

const Divider: React.FC<DividerProps> = (props): React.ReactElement => {
  return (
    <div className="w-full h-[1px] bg-[#E4E4E4]" style={{ marginTop: props.y, marginBottom: props.y, marginLeft: props.x, marginRight: props.x }}></div>
  );
};

export default Divider;