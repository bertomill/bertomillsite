const { OpenAIApi, Configuration } = require("openai");
const { loadDocuments, retrieveDocuments } = require("./document_utils");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let documents;
try {
  documents = loadDocuments("../backend/personal_info.json");
  console.log("Loaded Documents: ", JSON.stringify(documents, null, 2));
} catch (error) {
  console.error("Error loading documents: ", error.message);
  documents = [];
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    console.error("Invalid request method");
    return res.status(405).end(); // Method Not Allowed
  }

  const { question } = req.body;
  console.log("Received Question: ", question);

  let relevantDocs;
  try {
    relevantDocs = retrieveDocuments(question, documents);
    console.log("Relevant Documents: ", JSON.stringify(relevantDocs, null, 2));
  } catch (error) {
    console.error("Error retrieving documents: ", error.message);
    return res.status(500).json({ error: "Error retrieving documents" });
  }

  const context = relevantDocs.map((doc) => doc.text).join("\n");
  const messages = [
    {
      role: "system",
      content: "You are Berto's assistant. Answer the following question based on the information provided about Berto.",
    },
    {
      role: "user",
      content: question,
    },
    {
      role: "system",
      content: context,
    },
  ];

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 150,
      temperature: 0.7,
    });

    const answer = response.data.choices[0].message.content.trim();
    console.log("AI Response: ", answer);
    res.json({ answer });
  } catch (error) {
    console.error("Error calling OpenAI API: ", error.message);
    console.error(
      "Error details: ",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Error calling OpenAI API" });
  }
};
