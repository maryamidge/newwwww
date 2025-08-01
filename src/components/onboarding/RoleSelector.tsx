import React, { useState } from 'react';

interface Role {
  id: string;
  title: string;
  width: string;
}

const roles: Role[] = [
  { id: 'co-founder', title: 'Co-Founder', width: 'w-[97px]' },
  { id: 'mentor', title: 'Mentor', width: 'w-[68px]' },
  { id: 'investor', title: 'Investor', width: 'w-[71px]' },
];

interface RoleSelectorProps {
  onRoleSelect: (roleId: string) => void;
  selectedRole: string | null;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onRoleSelect, selectedRole }) => {
  return (
    <section className="flex flex-col items-start gap-2 self-stretch relative" aria-label="Role selection">
      <div className="flex items-center gap-[42px] self-stretch relative pr-[22px]">
        {roles.map((role, index) => (
          <div key={role.id} className={`${role.width} h-[57px] relative max-sm:mb-2.5`}>
            <div className={`${role.width} h-[52px] shrink-0 absolute left-0 top-0`}>
              <button
                onClick={() => onRoleSelect(role.id)}
                className={`${role.width} h-[52px] shrink-0 absolute rounded-lg left-0 top-0 transition-colors duration-200 ${
                  selectedRole === role.id 
                    ? 'bg-blue-200 border-2 border-blue-500' 
                    : 'bg-[#EFEFEF] hover:bg-gray-200'
                }`}
                aria-pressed={selectedRole === role.id}
                aria-label={`Select ${role.title} role`}
              />
              <div className="absolute left-1.5 top-[18px] text-[#0A3149] text-center text-sm font-[590] leading-[14px] tracking-[0.28px] pointer-events-none">
                {role.title}
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: index === 0 
                    ? "<svg width=\"20\" height=\"15\" viewBox=\"0 0 20 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 24px; height: 20px; flex-shrink: 0; fill: #EFEFEF; position: absolute; left: 36px; top: 37px\"> <path d=\"M10.8243 13.8127C10.4269 14.3905 9.57375 14.3904 9.17639 13.8127L0.761881 1.5774C0.305582 0.913907 0.780588 0.0107422 1.58584 0.0107422H18.4148C19.2201 0.0107422 19.6951 0.913908 19.2388 1.5774L10.8243 13.8127Z\" fill=\"#EFEFEF\"></path> </svg>"
                    : "<svg width=\"16\" height=\"15\" viewBox=\"0 0 16 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 20px; height: 20px; flex-shrink: 0; fill: #EFEFEF; position: absolute; left: " + (index === 1 ? "24px" : "26px") + "; top: 37px\"> <path d=\"M8.86603 13.5107C8.48113 14.1774 7.51888 14.1774 7.13398 13.5107L0.20577 1.51074C-0.179131 0.844076 0.301994 0.0107422 1.07179 0.0107422H14.9282C15.698 0.0107422 16.1791 0.844075 15.7942 1.51074L8.86603 13.5107Z\" fill=\"#EFEFEF\"></path> </svg>"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
