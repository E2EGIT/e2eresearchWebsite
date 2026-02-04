const CustomPopup = (props: any) => {
  const {
    isModalOpen,
    setIsModalOpen,
    contentBody,
    headerText,
    modalClass,
    aboutClass,
  } = props;
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <div
        className={`quote-modal-outer ${
          isModalOpen ? "modal-show" : "modal-close"
        }`}>
        <div
          className={`modal-inner modal-dialog-centered ${
            isModalOpen ? "modal-show-content" : "modal_close_animation"
          }`}>
          <div className={`modal-dialog modal-dialog-centered ${aboutClass}`}>
            <div className={`modal-content  ${modalClass}`}>
              <div className="modal-header">
                <h5 className="modal-title" id="proposalLabel">
                  {/* How can we help you? */}
                  {headerText}
                </h5>
                <div
                  className="form-close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span className="close-pop" onClick={handleCloseModal}></span>
                </div>
              </div>

              {isModalOpen && contentBody}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPopup;
