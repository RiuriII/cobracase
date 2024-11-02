import { ReactNode } from "react";

import MaxWidthWrapper from "@/components/maxWidthWrapper/MaxWidthWrapper";
import Steps from "@/components/steps/Steps";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
