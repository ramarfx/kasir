import { useDispatch } from "react-redux";
import { Badge } from "./ui/badge";
import {
  addtoCart,
  editFromCart,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { FileWarningIcon } from "lucide-react";

const CartItem = ({ title, quantity, price, image, productId }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 ">
        {image ? (
          <img
            src={`http://localhost:8000/storage/${image}`}
            className="size-16 object-cover border"
          />
        ) : (
          <div className="size-16 bg-primary text-xs text-white text-center flex items-center justify-center">
            <FileWarningIcon />
          </div>
        )}
        <div>
          <h1 className="text-primary font-bold text-base flex gap-2 items-center">
            {title}
          </h1>
          <div className="bg-white border border-gray-200 rounded-lg min-w-12">
            <div className="w-full flex justify-between items-center gap-x-1">
              <div className="flex items-center -gap-y-px divide-x divide-gray-200 border-gray-200">
                <button
                  type="button"
                  className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white"
                  onClick={() => {
                    dispatch(removeFromCart({ id: productId, qty: 1 }));
                  }}
                >
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <div className="grow py-0 px-2">
                  <input
                    className="w-5 p-0 text-sm bg-transparent text-center border-0 text-gray-800 focus:ring-0 dark:text-white"
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                      const inputValue = parseInt(e.target.value); // Mengonversi nilai input menjadi bilangan bulat
                      if (!isNaN(inputValue) && inputValue >= 0) {
                        // Memeriksa apakah input adalah angka dan tidak kurang dari 0
                        dispatch(
                          editFromCart({ id: productId, qty: inputValue })
                        );
                      } else {
                        // Jika input bukan angka atau kurang dari 0, Anda dapat memberikan umpan balik kepada pengguna atau mengabaikan perubahan
                        console.log(
                          "Input harus berupa angka tidak kurang dari 0"
                        );
                      }
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                  onClick={() => {
                    dispatch(addtoCart({ id: productId, qty: 1 }));
                  }}
                >
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-primary/80 text-sm">Rp.{price}</p>
    </div>
  );
};

export default CartItem;
