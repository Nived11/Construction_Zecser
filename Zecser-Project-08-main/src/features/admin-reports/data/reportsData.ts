// reportsData.ts
export interface Report {
  id: string;
  title: string;
  clientId: string;
  clientName: string;
  status: "Completed" | "Ongoing" | "On Hold" | "Not Started";
  deadline: string;
  completion: number;
  details: string;
}

export const reportsData: Report[] = [
  {
    id: "1",
    title: "Office Building Construction",
    clientId: "CLT001",
    clientName: "ABC Corporation",
    status: "Ongoing",
    deadline: "2025-09-30",
    completion: 75,
    details: "Main structure completed, working on interior finishing",
  },
  {
    id: "2",
    title: "Residential Homes Ltd",
    clientId: "CLT002",
    clientName: "Residential Complex Phase 1",
    status: "Completed",
    deadline: "2025-07-18",
    completion: 100,
    details: "All 24 units completed and handed over to client",
  },
  {
    id: "3",
    title: "Bridge Construction",
    clientId: "CLT003",
    clientName: "City Infrastructure",
    status: "Ongoing",
    deadline: "2025-10-28",
    completion: 45,
    details: "Foundation work completed, starting on main structure",
  },
  {
    id: "4",
    title: "Commercial Mall Development",
    clientId: "CLT004",
    clientName: "Shopping Mall Group",
    status: "On Hold",
    deadline: "2025-12-30",
    completion: 25,
    details: "Project paused due to permit issues, awaiting approval",
  },
  {
    id: "5",
    title: "Warehouse Construction",
    clientId: "CLT005",
    clientName: "Industrial Solutions",
    status: "Not Started",
    deadline: "2025-06-30",
    completion: 0,
    details: "Awaiting final blueprints and material delivery",
  },
];
