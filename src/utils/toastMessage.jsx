import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (a) => {
    toast.success(
        <div className="JustifyingMSG">
            <div>
                <i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <div>{a}</div>
        </div>,
        {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            closeButton: false,
            className: "toastMessage_ar successToastMessage",
        }
    );
};
export const errorToast = (a) => {
    toast.error(
        <div className="JustifyingMSG">
            <div>
                <i className="fa fa-exclamation" aria-hidden="true"></i>
            </div>
            <div>{a}</div>
        </div>,
        {
            position: "top-left",
            autoClose: 1000,
            pauseOnHover: false,
            pauseOnFocusLoss: true,
            closeOnClick: true,
            draggable: true,
            closeButton: false,
            className: "toastMessage_ar errorToastMessage",
        }
    );
};