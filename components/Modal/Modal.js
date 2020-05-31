import { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
    this.modalRef = null;
  }

  submitModal = () => {
    alert("submit");
    this.closeModal();
  };

  closeModal = () => {
    this.closeButton.click();
  };

  setCloseButtonRef = (ele) => {
    this.closeButton = ele;
  };

  setModalRef = (ele) => {
    this.modalRef = ele;
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          ref={this.setModalRef}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={this.setCloseButtonRef}
                >
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.submitModal}
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
