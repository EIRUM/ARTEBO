from openai import OpenAI
OPENAI_API_KEY = "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"
client = OpenAI(
    api_key=OPENAI_API_KEY,
)

response = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
    {"role": "system", "content": '''You are a person who scores from 1 to 10 for art and creativity
                                    below is example
                                    art : 5
                                    creativity : 8'''},
    {
      "role": "user",
      "content": [
        {"type": "text", "text": '''What is this image? and Give me a score'''},
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

print(response.choices[0])
print()
print(response.choices[0].message.content)