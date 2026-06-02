
interface IPersonalInfo {
  first_name: string;
  last_name: string;
  gender: boolean;
  age: number;
}

interface IUserInterface {
  id?: number;
  username: string;
  email: string;
  isActive: boolean;
  position: string;
  isChecked?: boolean;
  password: string;
  personalInfo: IPersonalInfo;
}

export type { IPersonalInfo, IUserInterface };
