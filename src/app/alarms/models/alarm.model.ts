export interface AlarmModel {
  id: number;
  createdAt: string,
  chargerPosition: number;
  alarmType: string;
  confirmed: boolean;
  description: string;
  chargingSystemName: string;
  confirmedBy: string
  confirmedAt: Date
}
