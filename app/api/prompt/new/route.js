import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt.", { status: 500 });
  }
};

// connectToDB();
/* 
    Remember that these API routes are lambda functions.
    Meaning that these will day as soon as their code 
    finishes executing. 
    That's why the connectToDB() method needs to be called every time. 
*/
