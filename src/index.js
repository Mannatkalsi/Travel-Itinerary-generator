function displayItinerary(response) {
  let result = document.querySelector("#result");
  result.style.display = "block";

  new Typewriter(result, {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateItinerary(event) {
  event.preventDefault();

  let destination = document.querySelector("#destination").value;
  let days = document.querySelector("#days").value;
  let budget = document.querySelector("#budget").value;
  let preferences = document.querySelector("#preferences").value;
  let result = document.querySelector("#result");

  result.style.display = "block";

  result.innerHTML = "✈️ Creating your personalised itinerary...";

  let apiKey = "5ff063d22bba104fe88e5b0o0a3edt8a";

  let prompt = `Create a ${days}-day travel itinerary for ${destination}.`;

  let context = `You are an expert travel planner.

Create a detailed day-by-day itinerary.

Include:
- Daily activities
- Food recommendations
- Estimated budget in country currency
- Travel tips

Budget: ${budget}

Preferences: ${preferences}

Use HTML only.
Do not use Markdown.
Keep the response friendly and easy to read.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayItinerary);
}

let form = document.querySelector("#travel-form");

form.addEventListener("submit", generateItinerary);
