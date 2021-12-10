import requests
import json

response = requests.get("https://jsonplaceholder.typicode.com/users")

users = json.loads(response.text)
for user in users:
    print("ID: {}\nName: {}\n".format(user['id'], user['name']))
