import conf from '../conf/conf';
import { Client, Databases, ID, Query, Storage } from 'appwrite';

export class Services {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredimage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log('appwrite servcice::createPost::error', error);
    }
  }
  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
        }
      );
    } catch (error) {
      console.log('appwrite servcice::UpdatePost::error', error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log('appwrite servcice::deletePost::error', error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log('appwrite servcice::getPost::error', error);
      return false;
    }
  }
  async getPosts(queries=[Query.equal("status","active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log('appwrite servcice::getPosts::error', error);
      return false;
    }
  }
  /// file upload services;
 async uploadFile(File){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            File,
        )
    } catch (error) {
        console.log("apprite error::fileUpload error",error);
        return false;
    }
 }
 async deleteFile(FileId){
    try {
       await  this.bucket.deleteFile(
            conf.appwriteBucketId,
            FileId,
        )
        return true;
    } catch (error) {
        console.log("apprite error::fileUpload error",error);
        return false;
    }
}
 getFilePreview(FileId){
   return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        FileId,
    )
 }

}
const services = new Services();
export default services;
