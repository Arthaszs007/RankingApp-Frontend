import ActItem from "./actItem";

const ActList = ({ members }: { members: MEMBER_INFO[] }) => {
  return (
    <div className="flex flex-wrap w-full">
      {members.map((item, index) => (
        <div key={index} className="w-1/2 sm:w-1/4 p-2">
          <ActItem member={item} />
        </div>
      ))}
    </div>
  );
};

export default ActList;
