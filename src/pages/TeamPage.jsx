import { teamData } from "../../public/MockDatas/TeamData";
import TeamPeopleCard from "../components/TeamPeopleCard";

// Main Section Component
const TeamPage = () => {
  return (
    <section className="bg-white py-20 px-20 lg:px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="!text-6xl !font-bold lg:max-w-none text-[#252B42] tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-[#737373] max-w-250 mx-auto !text-2xl !mt-10 leading-relaxed !font-medium">
            Problems trying to resolve the conflict between the two major realms 
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamData.map((member) => (
            <TeamPeopleCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamPage;