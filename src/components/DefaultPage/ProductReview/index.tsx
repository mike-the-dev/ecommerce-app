import Spacer from "@/components/Spacer";
import Star from "@/components/Icons/Star";
import StarFull from "@/components/Icons/StarFull";
import React from "react"

const ProductReview: React.FC = (): React.ReactElement => {
  return (
    <div id="ProuductReview">
      <div className="customer-feedback mb-[50px]">
        <h3 className="text-[#344054] text-[24px] font-bold mb-[21px]">Customer Feedback</h3>
        <div className="flex flex-row">
          <div className="flex flex-col w-[298px] h-[230px] bg-[#F9FAFB] justify-center items-center rounded-[8px]">
            <div className="text-[60px] text-[#164C96] font-bold">4.8</div>
            <div className="stars flex flex-row mb-[15px]">
              <div className="star mx-[5px]"><StarFull /></div>
              <div className="star mx-[5px]"><StarFull /></div>
              <div className="star mx-[5px]"><StarFull /></div>
              <div className="star mx-[5px]"><StarFull /></div>
              <div className="star mx-[5px]"><StarFull /></div>
            </div>
            <div className="text-[16px] text-[#4F547B]">Product Rating</div>
          </div>
          <div className="mx-[4.5px]"></div>
          <div className="flex flex-col justify-between w-[542px] h-[230px] bg-[#F9FAFB] rounded-[8px] p-[26px]">
            <div className="flex flex-row w-full items-center">
              <div className="gauge flex-1 h-[4px] bg-[#E6EAEE] rounded-[4px] mr-[14px]">
                <div className="gauge-filled w-[80%] h-[4px] bg-[#20590C]"></div>
              </div>
              <div className="stars flex flex-row mr-[17px]">
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
              </div>
              <div className="percentage text-[#164C96] text-[16px]">70%</div>
            </div> 
            <div className="flex flex-row w-full items-center">
              <div className="gauge flex-1 h-[4px] bg-[#E6EAEE] rounded-[4px] mr-[14px]">
                <div className="gauge-filled w-[45%] h-[4px] bg-[#20590C]"></div>
              </div>
              <div className="stars flex flex-row mr-[17px]">
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><Star /></div>
              </div>
              <div className="percentage text-[#164C96] text-[16px]">15%</div>
            </div>
            <div className="flex flex-row w-full items-center">
              <div className="gauge flex-1 h-[4px] bg-[#E6EAEE] rounded-[4px] mr-[14px]">
                <div className="gauge-filled w-[30%] h-[4px] bg-[#20590C]"></div>
              </div>
              <div className="stars flex flex-row mr-[17px]">
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><Star /></div>
                <div className="star mx-[5px]"><Star /></div>
              </div>
              <div className="percentage text-[#164C96] text-[16px]">10%</div>
            </div>
            <div className="flex flex-row w-full items-center">
              <div className="gauge flex-1 h-[4px] bg-[#E6EAEE] rounded-[4px] mr-[14px]">
                <div className="gauge-filled w-[15%] h-[4px] bg-[#20590C]"></div>
              </div>
              <div className="stars flex flex-row mr-[17px]">
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><Star /></div>
                <div className="star mx-[5px]"><Star /></div>
                <div className="star mx-[5px]"><Star /></div>
              </div>
              <div className="percentage text-[#164C96] text-[16px]">3%</div>
            </div>
            <div className="flex flex-row w-full items-center">
              <div className="gauge flex-1 h-[4px] bg-[#E6EAEE] rounded-[4px] mr-[14px]">
                <div className="gauge-filled w-[10%] h-[4px] bg-[#20590C]"></div>
              </div>
              <div className="stars flex flex-row mr-[17px]">
                <div className="star mx-[5px]"><StarFull /></div>
                <div className="star mx-[5px]"><Star /></div>
                <div className="star mx-[5px]"><Star /></div>
                <div className="star mx-[5px]"><Star /></div>
                <div className="star mx-[5px]"><Star /></div>
              </div>
              <div className="percentage text-[#164C96] text-[16px]">3%</div>
            </div>
          </div>
        </div>
      </div> 
      <div className="customer-reviews mb-[86px]">
        <h3 className="text-[#344054] text-[24px] font-bold mb-[21px]">Reviews</h3>
        <div className="review flex flex-row w-[740px]">
          <div className="avatar w-[78px]">
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[52px] bg-[#164C96]">
              <span className="text-[16px] text-[#FFF] font-medium leading-[26px]">N.G.</span>
            </div>
          </div>
          <div className="content flex flex-1 flex-col">
            <div className="name text-[26px] text-[#1D2939] mb-[5px]">Nicholas Cage <span className="text-[13px] text-[#4F547B]">3 Days ago</span></div>
            <div className="stars flex flex-row w-[90px] justify-between mb-[20px]">
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
            </div>
            <div className="title text-[15px] text-[#1D2939] mb-[10px]">Great Product</div>
            <div className="paragraph text-[15px] text-[#667085] leading-[26px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>
          </div>
        </div>
        <div className="divider w-full h-[1px] bg-[#EDEDED] my-[70px]"></div>
        <div className="review flex flex-row w-[740px]">
          <div className="avatar w-[78px]">
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[52px] bg-[#164C96]">
              <span className="text-[16px] text-[#FFF] font-medium leading-[26px]">R.D.</span>
            </div>
          </div>
          <div className="content flex flex-1 flex-col">
            <div className="name text-[26px] text-[#1D2939] mb-[5px]">Robert Downy Jr. <span className="text-[13px] text-[#4F547B]">3 Days ago</span></div>
            <div className="stars flex flex-row w-[90px] justify-between mb-[20px]">
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
            </div>
            <div className="title text-[15px] text-[#1D2939] mb-[10px]">Great Product</div>
            <div className="paragraph text-[15px] text-[#667085] leading-[26px] mb-[26px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>
          </div>
        </div>
      </div>
      <div className="more-reviews w-[740px] text-center">
        <div className="text-[16px] text-[#D94A27]">View All Reviews</div>
      </div>
      <div className="write-review w-[850px]">
        <h3 className="text-[#344054] text-[24px] font-bold mb-[29px]">Write Review</h3>
        <div className="text-[#1D2939] mb-[10px]">How many stars?</div>
        <div className="stars flex flex-row w-[110px] justify-between mb-[30px]">
          <StarFull />
          <StarFull />
          <StarFull />
          <StarFull />
          <StarFull />
        </div>
        <label className="inline-block text-[#1D2939] mb-[9px]">Review Title</label>
        <input type="text" placeholder="Great Products" className="w-full h-[55px] border-[1px] border-[#DDDDDD] rounded-[14px] px-[22px] mb-[22px]" />
        <label className="inline-block text-[#1D2939] mb-[9px]">Review Content</label>
        <textarea placeholder="Great Products" className="w-full h-[250px] border-[1px] border-[#DDDDDD] rounded-[14px] px-[22px] py-[15px] mb-[50px] resize-none" ></textarea>
        <button className="h-[60px] text-[18px] text-[#FFF] bg-[#3A4980] px-[28px] rounded-[60px] font-semibold">Submit Review</button>
        <Spacer y={108} />
      </div>
    </div>
  );
};

export default ProductReview;