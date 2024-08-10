
const ButtonGroup: React.FC = (): React.ReactElement => {
  return (
    <div id="ButtonGroup">
      <div className="flex flex-row">
        <div className="flex flex-row w-[169px] h-[59px] bg-[#F3F3F3] rounded-[30px]">
          <button className="w-[60px]">-</button>
          <div className="flex flex-1 items-center justify-center">5</div>
          <button className="w-[60px]">+</button>
        </div>
        <button className="w-[309px] h-[59px] bg-[#3A4980] text-[16px] text-[#FFF] font-semibold rounded-[30px] ml-[20px]">Add To Cart</button>
      </div>
    </div>
  );
};

export default ButtonGroup;