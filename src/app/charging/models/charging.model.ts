export interface ChargingModel {
  id: number;
  chargingSystemName: string;
  umupNumber: string,
  createdAt: string,
  finishedAt: string,
  failed: boolean,
  duration: number;
  charging: boolean;
}
