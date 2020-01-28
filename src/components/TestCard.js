import React from "react";

function TestCard(props) {
  function toggleColor() {
    const card = document.querySelector('#' + props.title);
    if (card.classList.contains("rgba-yellow-strong")) {
      card.classList.remove("rgba-yellow-strong");
      card.classList.add("rgba-red-strong");
    }
    else if (card.classList.contains("rgba-red-strong")) {
      card.classList.remove("rgba-red-strong");
      card.classList.add("rgba-green-strong");
    }
    else if (card.classList.contains("rgba-green-strong")) {
      card.classList.remove("rgba-green-strong");
      card.classList.add("rgba-red-strong");
    }

  }
  return (
    <div>
      <div onClick={toggleColor} class="card test-card rgba-yellow-strong" id={props.title}>
        <div class="card-body">
          <div class="d-flex justify-content-end">
            <i class="fas fa-flag text-white"></i>
          </div>
          <h1 class="card-title card-title-test text-center text-white">{props.title}</h1>
          <div class="form-group">
            <label for="notes{props.title}" class="text-white">Notes</label>
            <textarea class="form-control rounded-0" id="notes{props.title}" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCard;
