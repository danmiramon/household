import { DashboardLayout, PageContainer } from "@toolpad/core";

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      defaultSidebarCollapsed
      sidebarExpandedWidth={320}
    >
      <PageContainer className="!px-12 !m-0">
        {children}
      </PageContainer>
    </DashboardLayout>
  );
}

export default Dashboard;
