import { VoteToMember } from "../../lib/action/vote";
import { usePushMsgToast } from "../../lib/hook/pushMsgToast";
import { useRefreshData_HomePage } from "../../lib/hook/refreshData";

import { useAppSelector } from "../../redux/store";

function ActItem({ member }: { member: MEMBER_INFO }) {
  // to store the username from redux
  const username = useAppSelector((state) => state.Session_Slice.username);
  // get refresh func from defined hook to pass to vote func as a param
  const { refreshData } = useRefreshData_HomePage();
  // get toast func to pass to component
  const { msgToast } = usePushMsgToast();

  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure className="relative">
        <img
          src={member.img_url}
          alt="profile"
          className="object-cover h-full w-full aspect-[1/1]"
        />
        <div className="absolute bottom-0 bg-black/75 z-10 w-full h-[2rem] sm:h-[4rem] flex flex-row justify-between items-center">
          <div className="text-gray-200 ml-2 sm:text-xl">{member.name}</div>
          <div className="text-gray-200 mr-2 sm:text-xl">
            votes: {member.votes}
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary w-[9rem] sm:w-[9rem] btn-sm  sm:btn-md"
            onClick={
              username
                ? () => VoteToMember(username, member.id, refreshData, msgToast)
                : () => {
                    msgToast({
                      msg: "Please sign to vote",
                      type: "alert-info",
                    } as TOAST_REDUX);
                  }
            }
            type="button"
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActItem;
