import { useState } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview: any }> = (props) => {
   const [starInput, setStarInput] = useState(0);
   const [displayInput, setDisplayInput] = useState(false);
   const [reviewDescription, setReviewDescription] = useState("");

   const starValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

   function starValueChangeHandler(value: number) {
      setStarInput(value);
      setDisplayInput(true);
   }

   return (
      <>
         <div className="dropdown" style={{ cursor: "pointer" }}>
            <h5 className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown">
               Leave a review?
            </h5>
            <ul id="submitReviewRating" className="dropdown-menu" aria-labelledby="dropdonMenuButton1">
               {starValues.map((value) => (
                  <li key={value}>
                     <button onClick={() => starValueChangeHandler(value)} className="dropdown-item">
                        {value}
                     </button>
                  </li>
               ))}
            </ul>
            <StarsReview rating={starInput} size={32} />

            {displayInput && (
               <form method="POST" action="#">
                  <hr />
                  <div className="mb-3">
                     <label className="form-label">Description</label>
                     <textarea
                        className="form-control"
                        id="submitReviewDescription"
                        placeholder="Optional"
                        rows={3}
                        onChange={(e) => setReviewDescription(e.target.value)}></textarea>
                  </div>

                  <div>
                     <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={() => props.submitReview(starInput, reviewDescription)}>
                        Submit Review
                     </button>
                  </div>
               </form>
            )}
         </div>
      </>
   );
};
