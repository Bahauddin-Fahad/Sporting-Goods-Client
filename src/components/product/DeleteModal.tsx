/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { useDeleteProductMutation } from "../../redux/features/product/productApi";
import Loading from "../../pages/Loading/Loading";

const DeleteModal = ({
  deleteProductDetails,
  setDeleteProductDetails,
}: any) => {
  const { _id } = deleteProductDetails;

  const [deleteProduct, { data, isLoading }] = useDeleteProductMutation();
  console.log(data);

  if (data?.status === 200) {
    toast.success("Product Deleted Successfully", {
      theme: "colored",
      toastId: _id,
    });
    setDeleteProductDetails(null);
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box dark:bg-secondary">
          <h3 className="font-bold text-lg text-black dark:text-white">{`Are you sure You Want to Delete ${deleteProductDetails?.name}`}</h3>
          <div className="modal-action">
            <button
              onClick={() => deleteProduct(_id)}
              className="btn btn-sm btn-outline btn-error"
            >
              Confirm
            </button>
            <label
              onClick={() => setDeleteProductDetails(null)}
              htmlFor="delete-modal"
              className="btn btn-sm"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
