import React from "react";

function Product() {
  return (
    <div className="card">
      <img
        src="https://lh3.googleusercontent.com/spp/AOgFAqP9mwf6qT8chw2iMpF6jfk33ZGTbpqjGk2Em8eRijcezhq1TIdxCluPv3ePFCJNlBu5bxuAs7v26dQo4hpoHzYEPW6SqsjgNWRhCVSpzX-ttbEXPpLrUBDO5zODle1BiSH0orX7PKqoNi7EccynlGKm0OS6QW5uoNFBgWU2x6-N-nj-2MNMJaBaNhwUfwrTCCsJeFpsWGU=s512-rw-pd-pc0x00ffffff"
        alt="image"
        style={{ width: "100px", height: "100px"  }}
      />
      <h2>HP laptop</h2>
      <div>
        <p className="price">$999</p>
        <p>Hp laptop</p>
        <p>Discount:10%</p>
      </div>
    </div>
  );
}

export default Product;
