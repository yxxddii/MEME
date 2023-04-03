import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/configStore";
import { auctionType, auctionListActions } from "store/auctionList";

import NftAuctionCard from "components/common/card/NftAuctionCard";
import styles from "./AuctionListTabComp.module.css";

const AuctionListDeadline: React.FC = () => {
  const dispatch = useDispatch();
  const auctionList = useSelector<RootState, auctionType[]>(
    (state) => state.auctionList.auctionDeadlineList
  );

  return (
    <div className={styles.auctionListCardContainer}>
      {auctionList.map((auction) => {
        return <NftAuctionCard key={auction.memeId} items={auction} />;
      })}
    </div>
  );
};

export default AuctionListDeadline;