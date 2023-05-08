import random

def generate_prompt():
    # Define the categories and their associated keywords
    categories = {
        'animals': ['cat', 'dog', 'elephant', 'lion', 'tiger'],
        'vehicles': ['car', 'motorcycle', 'bicycle', 'airplane', 'boat'],
        'landscapes': ['beach', 'mountain', 'forest', 'desert', 'city'],
        'objects': ['computer', 'chair', 'table', 'pencil', 'cup']
    }

    # Select a random category
    category = random.choice(list(categories.keys()))

    # Select a random keyword from the chosen category
    keyword = random.choice(categories[category])

    # Define some adjectives to add variety to the generated prompts
    adjectives = ['red', 'blue', 'large', 'small', 'futuristic', 'ancient']

    # Select a random adjective
    adjective = random.choice(adjectives)

    # Combine the adjective and keyword to form the prompt
    prompt = f"{adjective} {keyword}"

    return prompt

# Generate a random prompt
generated_prompt = generate_prompt()
print(f"Generated prompt: {generated_prompt}")

# Use the generated prompt as input to Stable Diffusion
# stable_diffusion_result = call_stable_diffusion_api(generated_prompt)
