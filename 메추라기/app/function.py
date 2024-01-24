from openai import OpenAI
OPENAI_API_KEY = "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"
client = OpenAI(
    api_key=OPENAI_API_KEY,
)

def imageToPrompt(dir:str)->str:
  response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[
      {"role": "system", "content": '''You are a child psychotherapy ai. You can score joy, sadness, anguish, and excitement from 1 to 10 points
                                      joy : 5
                                      sadness : 8
                                      anguish : 6
                                      excitement : 4'''},
      {
        "role": "user",
        "content": [
          {"type": "text", "text": '''Give me a score'''},
          {
            "type": "image_url",
            "image_url": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
            },
          },
        ],
      }
    ],
    max_tokens=300,
  )

  return response.choices[0].message.content

def promptToResult(prompt : str) -> list:
  pass