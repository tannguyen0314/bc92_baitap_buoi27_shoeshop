export default function Modal(props) {
  const { content } = props;

  if (!content) return null;

  return (
    <div 
      className="modal fade" 
      id="shoeModal" 
      tabIndex="-1" 
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-bold text-xl">{content.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                <img src={content.image} alt={content.name} className="img-fluid" />
              </div>
              <div className="col-md-7">
                <h4 className="font-bold">Thông tin chi tiết</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Price</td>
                      <td className="text-danger font-bold">${content.price}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{content.description}</td>
                    </tr>
                    <tr>
                      <td>Short Description</td>
                      <td>{content.shortDescription}</td>
                    </tr>
                    <tr>
                      <td>Quantity</td>
                      <td>{content.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}