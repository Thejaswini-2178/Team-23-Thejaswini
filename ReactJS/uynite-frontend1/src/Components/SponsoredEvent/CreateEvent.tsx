
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SponsoredEventForm: React.FC<{ allEvents: any[], setShowForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ allEvents, setShowForm }) => {
  const navigate = useNavigate();

  // ---- Form states ----
  const [eventName, setEventName] = useState("");
  const [country, setCountry] = useState("");
  const [scheduleType, setScheduleType] = useState("");
  const [mediaType, setMediaType] = useState("Video"); // default selection
  const [rootPoster1, setRootPoster1] = useState<string | null>(null);
  const [rootPoster2, setRootPoster2] = useState<string | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [termsImage, setTermsImage] = useState<string | null>(null);

  // ---- Submission states ----
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(true); 

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSubmit = {
      title: eventName,
      location: country,
      category: "On Going Event", // Automatically set category to "On Going Event"
      eventName,
      country,
      scheduleType,
      mediaType,
      rootPoster1,
      rootPoster2,
      startDate,
      endDate,
      termsImage,
    };

    setSubmittedData(dataToSubmit);
    allEvents.push(dataToSubmit);
    console.log(allEvents);
    setIsEditing(false); // Hide the form, show submitted data
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg lg:grid-cols-0 shadow-lg border border-gray-200">
      {/* Back Button */}
      <button
        className="text-xl mb-4 hover:text-blue-500 transition"
        onClick={() => setShowForm(false)}
      >
        &#8592;
      </button>

      {/* Title */}
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
        Event Type: <span className="text-blue-500">Sponsored Event</span>
      </h2>

      {/* If data is submitted and not editing, show the summary/details */}
      {submittedData && !isEditing && (
        <div className="mb-6 border border-gray-300 rounded-md p-4 bg-gray-50">
          <h3 className="font-bold text-lg text-gray-700 mb-2">
            Submitted Event Data
          </h3>
          <p>
            <strong>Event Name:</strong> {submittedData.eventName}
          </p>
          <p>
            <strong>Selected Country:</strong> {submittedData.country}
          </p>
          <p>
            <strong>Schedule Type:</strong> {submittedData.scheduleType}
          </p>
          <p>
            <strong>Media Type:</strong> {submittedData.mediaType}
          </p>
          <p>
            <strong>Start Date/Time:</strong> {submittedData.startDate}
          </p>
          <p>
            <strong>End Date/Time:</strong> {submittedData.endDate}
          </p>

          {/* Root Poster 1 */}
          <div className="mt-2">
            <strong>Root Poster 1:</strong>
            {submittedData.rootPoster1 && (
              <img
                src={submittedData.rootPoster1}
                alt="Root Poster 1"
                className="mt-2 h-24 w-24 object-cover border border-gray-300"
              />
            )}
          </div>

          {/* Root Poster 2 */}
          <div className="mt-2">
            <strong>Root Poster 2:</strong>
            {submittedData.rootPoster2 && (
              <img
                src={submittedData.rootPoster2}
                alt="Root Poster 2"
                className="mt-2 h-24 w-24 object-cover border border-gray-300"
              />
            )}
          </div>

          {/* Terms & Conditions Image */}
          <div className="mt-2">
            <strong>Terms & Conditions Poster:</strong>
            {submittedData.termsImage && (
              <img
                src={submittedData.termsImage}
                alt="Terms & Conditions Poster"
                className="mt-2 h-24 w-24 object-cover border border-gray-300"
              />
            )}
          </div>

          {/* Edit Button */}
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      )}

      {/* Show the form if we are in editing mode */}
      {isEditing && (
        <form onSubmit={handleSubmit}>
          {/* Event Name */}
          <input
            type="text"
            placeholder="Event Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          {/* Country */}
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Select Country</option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
            <option>India</option>
            <option>Germany</option>
            <option>France</option>
            <option>Japan</option>
            <option>Brazil</option>
            <option>South Africa</option>
          </select>

          {/* Schedule Type */}
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            value={scheduleType}
            onChange={(e) => setScheduleType(e.target.value)}
          >
            <option>Select Schedule Type</option>
            <option>Create Into List</option>
            <option>Up Coming Event</option>
            <option>On-Going Event</option>
          </select>

          {/* Media Type */}
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
          >
            <option>Video</option>
            {/* Add more media types if needed */}
          </select>

          {/* Root Poster 1 */}
          <div className="mb-4">
            <p className="font-semibold text-gray-700">
              Posters Display in Root (1)
            </p>
            <div className="w-full h-32 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition">
              <label
                htmlFor="rootPoster1-upload"
                className="w-full h-full flex items-center justify-center"
              >
                Add Image
                <input
                  id="rootPoster1-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setRootPoster1)}
                />
              </label>
            </div>
          </div>

          {/* Root Poster 2 */}
          <div className="mb-4">
            <p className="font-semibold text-gray-700">
              Posters Display in Root (2)
            </p>
            <div className="w-full h-32 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition">
              <label
                htmlFor="rootPoster2-upload"
                className="w-full h-full flex items-center justify-center"
              >
                Add Image
                <input
                  id="rootPoster2-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setRootPoster2)}
                />
              </label>
            </div>
          </div>

          {/* Date Range */}
          <div className="mb-4 flex items-center space-x-2">
            <input
              type="datetime-local"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="text-gray-600">To</span>
            <input
              type="datetime-local"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          {/* Terms & Conditions Image */}
          <div className="mb-4">
            <p className="font-semibold text-gray-700">Terms & Conditions</p>
            <div className="w-full h-32 flex items-center justify-center border border-gray-300 width-1000px rounded-lg bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition">
              <label
                htmlFor="termsImage-upload"
                className="w-full h-full flex items-center justify-center"
              >
                Add Image
                <input
                  id="termsImage-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setTermsImage)}
                />
              </label>
            </div>
          </div>

          {/* Submit & Cancel */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-600 transition mb-2"
          >
            {submittedData ? "Update Event" : "Create Event"}
          </button>

          <button
            type="button"
            className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg shadow-md hover:bg-gray-400 transition"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};
export default SponsoredEventForm