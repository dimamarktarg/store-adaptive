// import {deleteAsync} from "del"
// export const reset = () => {
//     return deleteAsync(['dist'])
// }

// import { deleteAsync as del } from "del";
import del from "del";
export const reset = () => {
  return del(app.path.clean);
};
