import React, { useState } from 'react';
import { StatusBar } from '@/components/onboarding/StatusBar';
import { KnittingIllustration } from '@/components/onboarding/KnittingIllustration';
import { RoleSelector } from '@/components/onboarding/RoleSelector';
import { CharacterIllustration } from '@/components/onboarding/CharacterIllustration';
import { NavigationBar } from '@/components/onboarding/NavigationBar';

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleContinue = () => {
    if (selectedRole) {
      console.log('Continuing with role:', selectedRole);
      // Here you would typically navigate to the next step or submit the form
    }
  };

  return (
    <div className="flex items-center gap-2.5 w-[390px] h-[932px] relative bg-white mx-auto my-0">
      <div className="flex w-[390px] flex-col items-start gap-[53px] relative max-md:w-full">
        <StatusBar />
        
        <main className="flex flex-col items-center gap-[43px] self-stretch relative max-sm:gap-[30px]">
          <div className="flex w-[342px] flex-col items-start gap-[263px] relative">
            <KnittingIllustration />
            
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <RoleSelector 
                onRoleSelect={handleRoleSelect}
                selectedRole={selectedRole}
              />
              <CharacterIllustration />
            </div>
          </div>
          
          <NavigationBar 
            onContinue={handleContinue}
            isEnabled={selectedRole !== null}
          />
        </main>
      </div>
    </div>
  );
};

export default Index;
