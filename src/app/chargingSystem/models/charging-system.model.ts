interface ChargerCartModel {
  id: number;
  umupNumber: string;
}

export interface ChargerModel {
  error: boolean;
  id: number;
  position: number;
  current: number;
  charging: boolean;
  currentCart: string;
  nameWithSystem: string;
}

export interface ChargingSystemModel {
  chargers: ChargerModel [];
  id: number;
  name: string;
  address: string;
  networkMask: string;
  error: boolean;
}
