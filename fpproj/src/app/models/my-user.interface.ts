export interface MyUser extends WithId {
  name: string;
  age: number;
}

export interface WithId {
  id: string;
}

export interface ISuperComponent {
  fly(): MyUser;
}
