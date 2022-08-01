from elasticsearch import Elasticsearch
es = Elasticsearch(
    cloud_id="test:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDhhNDk1M2YyZGE3ODQ0YWRiYzVjOTY5MmYyMDYyMTkwJDJiMWUwYjZlODY4OTQ2NzBhYWVlNmJkYWM4ZTUxN2I2",
    http_auth=("elastic", "jW54Ed8bra2yyvWlWOzj2SNd")
)

print(es.info())
