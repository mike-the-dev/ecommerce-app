"use client";

interface SubNavigationProps {
  index: number;
  updateIndex: (index: number) => void;
};

const SubNavigation: React.FC<SubNavigationProps> = (props): React.ReactElement => {

  const onSelectDescription = () => {
    props.updateIndex(0);
  };

  const onSelectReview = () => {
    props.updateIndex(1);
  };
  


  return (
    <div id="SubNavigation">
      <div className="relative flex flex-row">
        <button onClick={onSelectDescription}><div className="w-[128px] py-[13.5px] text-center text-[#164C96] text-[16px] font-semibold" style={{ color: props.index === 0 ? "#164C96" : "#98A2B3", fontWeight: props.index === 0 ? 600 : 400 }}>Description</div></button>
        <button onClick={onSelectReview}><div className="w-[128px] py-[13.5px] text-center text-[#98A2B3] text-[16px]" style={{ color: props.index === 1 ? "#164C96" : "#98A2B3", fontWeight: props.index === 1 ? 600 : 400 }}>Reviews</div></button>
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#EAECF0]">
          <div className="absolute bottom-0 left-0 w-[128px] h-[4px] bg-[#164C96]" style={{ left: 128 * props.index }}></div>
        </div>
      </div>
    </div>
  );
};

export default SubNavigation;