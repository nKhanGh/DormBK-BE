export interface UnderoccupiedRoom {
  buildingId: string;
  roomId: string;
  maxNumberOfStudents: number;
  currentNumberOfStudents: number;
  occupancyRate: number;
}
