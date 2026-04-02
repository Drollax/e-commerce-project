const TeamPeopleCard = ({ member }) => {

  return (
    <div className="flex flex-col items-start group">
      {/* Image Container */}
      <div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-stone-100">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <h3 className="text-[#252B42] font-bold text-base mb-1">
        {member.name}
      </h3>
      <p className="text-[#737373] text-sm font-medium">
        {member.role}
      </p>
    </div>
  );
};

export default TeamPeopleCard;