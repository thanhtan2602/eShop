export default interface userModel {
    id?: string;
    userName?: string;
    password?: string;
    fullName?: string;
    phoneNumber?: string;
    email?: string;
    image?: string;
    presenter?: string;
    address?: string;
    isActive?: boolean;
    balance?: number;
    verifiedEmail?: boolean;
    rechargeCode?: string;
    [key: string]: any;
  }