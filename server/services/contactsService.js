import { DATA_CONTACT } from "../__data__/index.js";

export const contactsService = {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: DATA_CONTACT
        });
      }, 500);
    });
  },
  getFavouriteContacts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            DATA_CONTACT[0],
            DATA_CONTACT[1],
            DATA_CONTACT[2],
            DATA_CONTACT[3],
            DATA_CONTACT[4]
          ]
        });
      }, 200);
    });
  }
};
