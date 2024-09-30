const RankItem = ({
  member,
  index,
}: {
  member: MEMBER_INFO;
  index: number;
}) => {
  return (
    <tr className="sm:text-lg">
      <td>{index}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={member.img_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>

          <div className="font-bold">{member.name}</div>
        </div>
      </td>
      <td>{member.votes}</td>
    </tr>
  );
};

export default RankItem;
