import StarRating from "./StarRating";

function Book() {
  return (
    <form className="w-1/2 mx-auto my-8 py-12 px-8 bg-slate-100 rounded-lg bg-gray-300">
      <div className="space-y-12">
        {/* Dates */}
        <div>
            <div>
                <label htmlFor="start-date">Start Date: </label>
                <input type="date" id="start-date" name="start-date" />
            </div>
            
            <div>
                <label htmlFor="end-date">End Date: </label>
                <input type="date" id="end-date" name="end-date" />
            </div>
        </div>
        
        {/* Room Capacity */}
        <div>
            <label htmlFor="room-capacity">Room Capacity: </label>
            <input type="number" id="room-capacity" name="room-capacity" min="1" max="6" className="w-12" />
        </div>

        {/* Area (City) */}
        <div>
            <label htmlFor="city">City: </label>
            <input type="text" id="city" name="city" />
        </div>

        {/* Hotel Chain */}
        <div>
            <label htmlFor="hotel-chain">Hotel Chain: </label>
            <select name="hotel-chain" id="hotel-chain">
                {/* Query hotel chains here */}
            </select>
        </div>

        {/* Category */}
        <div>
            <label htmlFor="star-rating">Rating: </label>
            <StarRating />
        </div>

        {/* # of rooms */}
        <div>
            <label htmlFor="room-count">Number of Rooms: </label>
            <input type="number" id="room-count" name="room-count" className="w-12" min="1" />
        </div>

        {/* price */}
        <div>
            <label htmlFor="price">Price: </label>
            <input type="number" id="price" name="price" className="w-12" min="0" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default Book;
