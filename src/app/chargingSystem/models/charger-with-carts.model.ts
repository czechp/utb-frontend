
export interface AssignedCartModel {
  id: number;
  umupNumber: string;
}

export interface ChargerWithCartsModel {
  id: number;
  position: number;
  systemId: number;
  carts: AssignedCartModel[]
}

