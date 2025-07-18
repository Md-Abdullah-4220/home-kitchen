import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";

function MyModal({ onClose, showDetail }) {
  const [isOpen, setIsOpen] = useState(true);
  const [detailData, setDetailData] = useState(showDetail);

  function close() {
    setIsOpen(false);
    if (onClose) onClose();
  }

  useEffect(() => {
    setDetailData(showDetail);
  }, [showDetail]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={close}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        {/* Modal Panel */}
        <DialogPanel className="relative w-full flex gap-10 max-w-6xl rounded-xl bg-white p-6 backdrop-blur-2xl shadow-lg">
          <img src={detailData.img} alt={detailData.name} />
          <div className="flex justify-center items-center">
            <div>
              <DialogTitle
                as="h3"
                className="text-2xl font-medium text-gray-900"
              >
                Name: {detailData?.name || "No name available"}
              </DialogTitle>
              <div className="mt-2 text-gray-600">
                <h1 className="test-2xl ">Ingredients: </h1>
                <h1>Main: {detailData.ingredients.main}</h1>
                <h1>Spices: {detailData.ingredients.spices.map((res,ids) => <h1 key={ids}>{res}</h1>)}</h1>
                <h1>Garnish: {detailData.ingredients.garnish}</h1>
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white hover:text-black hover:border hover:border-orange-600 transition-colors duration-200 cursor-pointer"
                  onClick={close}
                >
                  Thanks!
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}

export default MyModal;
