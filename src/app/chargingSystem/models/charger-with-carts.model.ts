// @Id
// private long id;
// private int position;
// @Column(name = "charging_system_id")
// private long systemId;
//
// @OneToMany(fetch = FetchType.EAGER)
// @JoinTable(name = "assigned_carts",
//   joinColumns = @JoinColumn(name = "charger_id"),
//   inverseJoinColumns = @JoinColumn(name = "cart_id"))
// @OrderBy("umup_number ASC")
// private Set<AssignedCart> carts = new HashSet<>();

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

