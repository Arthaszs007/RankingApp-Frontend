import RankItem from "./rankItem";

const RankList = ({ members }: { members: MEMBER_INFO[] }) => {
  return (
    <div className="overflow-hidden ">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-sm sm:text-lg ">
            <th>Rank</th>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {members.map((item, index) => (
            <RankItem key={index} member={item} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankList;
