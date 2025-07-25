import React from "react";
import Testimonial from "@/Components/modules/Testimonial/Testimonial";

function Comments({comments}) {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Testimonial</h4>
          <h1 class="display-4">Our Clients Say</h1>
        </div>
        <div class="owl-carousel testimonial-carousel">
        {comments.map(comment => (
          <Testimonial key={comment.id} {...comment}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Comments;
