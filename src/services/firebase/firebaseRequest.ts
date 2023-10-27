import { child } from "firebase/database";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "~/lib/utils/firebaseInstance";

export const firebaseRequest = {
  uploadImage: async function (file: any)  {
    try {
      const storage = getStorage(app);

      // Tạo tham chiếu đến nơi bạn muốn lưu trữ ảnh
      const imageRef = ref(storage, "images/" + file.name);

      // Tải ảnh lên Firebase Storage
      // 'file' comes from the Blob or File API
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("downloadURL: ", downloadURL);
      return downloadURL;
    } catch (err) {
      console.log(err);
    }
  },
};
