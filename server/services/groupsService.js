import { DATA_GROUP_CONTACT } from "../__data__/index.js";

export const groupsService = {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: DATA_GROUP_CONTACT
        });
      }, 500);
    });
  }
};
