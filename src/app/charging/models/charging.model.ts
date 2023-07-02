export interface ChargingModel {
  id: number;
  chargingSystemName: string;
  chargerPosition: number;
  umupNumber: string,
  createdAt: string,
  finishedAt: string,
  failed: boolean,
  duration: number;
  charging: boolean;
}
