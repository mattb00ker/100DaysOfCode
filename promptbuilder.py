import requests

def fetch_synonyms(word):
    url = f'https://api.datamuse.com/words?rel_syn={word}'
    response = requests.get(url)
    synonyms = [result['word'] for result in response.json()]
    return synonyms

def create_scene(description, background, time_of_day, mood):
    elements = []

    for category, word in [('description', description), ('background', background), ('time_of_day', time_of_day), ('mood', mood)]:
        synonyms = fetch_synonyms(word)
        if synonyms:
            print(f"Synonyms found for {category}: '{word}':")
            for i, synonym in enumerate(synonyms[:10]):
                print(f"{i}: {synonym}")
            indexes_to_remove = input("Enter the index numbers of the synonyms you want to remove, separated by commas: ").split(',')
            for i, synonym in enumerate(synonyms[:10]):
                if str(i) not in indexes_to_remove:
                    elements.append(synonym)
        else:
            print(f"No synonyms found for {category}: '{word}'")

    scene = f"A {description} ({', '.join(elements[:5])}) scene with a {background} ({', '.join(elements[5:10])}) background that takes place during {', '.join(elements[10:15])}, with a {', '.join(elements[15:])} mood."
    return scene

description = input("Please enter a short description: ")
background = input("Please specify the background: ")
time_of_day = input("Please specify the time of day: ")
mood = input("Please specify the mood: ")

# Create a scene with refined elements
print(create_scene(description, background, time_of_day, mood))
