import config from '../config/config';
import { Client, Account, ID } from 'appwrite';
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async CreateAccount({ email, password, name }) {
    try {
      const UserAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (UserAccount) {
        // call further or another method;
        return this.Login(email, password);
      } else {
        return UserAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async Login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('error present in getCurrent User:::', error);
    }
    return null;
  }
  async Logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log('error present in logout in appwrite ', error);
    }
  }
}
const authService = new AuthService();
export default authService;
